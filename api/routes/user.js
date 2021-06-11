'use strict'

let express = require('express');
let UserController = require('../controllers/user');
let User = require('./../models/user');
let Image = require('./../models/image');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');
let path = require('path');
let cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/users/')
    },
    filename: function (req, file, cb) {
        let filename = "user" + Date.now() + file.originalname;
        req.body.file = filename
        cb(null, filename);
    }
  });


const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
  }
});

api.get('/home', UserController.home);
api.get('/pruebas', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);
api.get('/users/:page?', md_auth.ensureAuth, UserController.getUsers);
api.get('/counters/:id?', md_auth.ensureAuth, UserController.getCounters);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    let image = new Image({
      publication_id: null,
      user_id: req.params.id,
      url: result.secure_url,
      cloudinary_id: result.public_id
    });

    await image.save();

    User.findOne({'_id': req.params.id}).exec((err, user)=>{             
      if(user){
          //actualizar documento de la publicacion
          User.findByIdAndUpdate(req.params.id, {image: result.secure_url}, {new:true}, (err, userUpdated)=>{
              if(err) return res.status(500).send({message:'Error en la petición'});
              
              if(!userUpdated) return res.status(404).send({message: "No se ha podido cargar el archivo"});
              
              return res.status(200).send({user: userUpdated});             
          });
      }   
    })
  } 
  catch (err) {
    console.log(err);
  }
}]);
api.delete('/user/:id', md_auth.ensureAuth, UserController.deleteUser);

module.exports = api;
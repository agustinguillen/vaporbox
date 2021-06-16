'use strict'

let express = require('express');
let PublicationController = require('../controllers/publication');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');
const fs = require('fs');
let path = require('path');
require('dotenv').config();
let Image = require('./../models/image');
let Publication = require('./../models/publication');
let cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/publications/')
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

api.get('/probando-pub', md_auth.ensureAuth, PublicationController.probando);
api.post('/publication', md_auth.ensureAuth, PublicationController.savePublication);
api.get('/publications/:page?', md_auth.ensureAuth, PublicationController.getPublications);
api.get('/publications-user/:user/:page?', md_auth.ensureAuth, PublicationController.getPublicationsUser);
api.get('/publication/:id', md_auth.ensureAuth, PublicationController.getPublication);
api.delete('/publication/:id', md_auth.ensureAuth, PublicationController.deletePublication);
api.post('/upload-image-pub/:id', [md_auth.ensureAuth, upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    let image = new Image({
      publication_id: req.params.id,
      user_id: null,
      url: result.secure_url,
      cloudinary_id: result.public_id
    });

    await image.save();

    Publication.findOne({'_id': req.params.id}).exec((err, publication)=>{             
      if(publication){
          //actualizar documento de la publicacion
          Publication.findByIdAndUpdate(req.params.id, {file: result.secure_url}, {new:true}, (err, publicationUpdated)=>{
              if(err) return res.status(500).send({message:'Error en la petición'});
              
              if(!publicationUpdated) return res.status(404).send({message: "No se ha podido cargar el archivo"});
              
              return res.status(200).send({publication: publicationUpdated});             
          });
      }else{
          return removeFilesOfUploads(res, file_path, "No tienes permiso para actualizar esta publicación");
      }
    }); 
    
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error(err)
        return
      }
    });

  } catch (err) {
    console.log(err);
  }
}]);
api.put('/saved-publication/:id', md_auth.ensureAuth, PublicationController.savedPublication);
api.get('/get-saved-publications/:id/:page?', md_auth.ensureAuth, PublicationController.getSavedPublications);
api.put('/like-publication/:id', md_auth.ensureAuth, PublicationController.likePublication);

module.exports = api;
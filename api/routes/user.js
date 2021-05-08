'use strict'

let express = require('express');
let UserController = require('../controllers/user');

let api = express.Router();
let md_auth = require('../middlewares/authenticated');

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


const upload = multer({storage: storage});

api.get('/home', UserController.home);
api.get('/pruebas', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);
api.get('/users/:page?', md_auth.ensureAuth, UserController.getUsers);
api.get('/counters/:id?', md_auth.ensureAuth, UserController.getCounters);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, upload.single('image')], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);
api.delete('/user/:id', md_auth.ensureAuth, UserController.deleteUser);

module.exports = api;
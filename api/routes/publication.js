'use strict'

let express = require('express');
let PublicationController = require('../controllers/publication');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');
require('dotenv').config();
let path = require('path');
let Image = require('./../models/image');
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
    // Create new user
    let image = new Image({
      publication_id: req.params.id,
      url: result.secure_url,
      cloudinary_id: result.public_id
    });
    // Save user
    await image.save();
    res.json(image);
  } catch (err) {
    console.log(err);
  }
}],
PublicationController.uploadImage);
api.get('/get-image-pub/:imageFile', PublicationController.getImageFile);
api.put('/saved-publication/:id', md_auth.ensureAuth, PublicationController.savedPublication);
api.get('/get-saved-publications/:id/:page?', md_auth.ensureAuth, PublicationController.getSavedPublications);
api.put('/like-publication/:id', md_auth.ensureAuth, PublicationController.likePublication);

module.exports = api;
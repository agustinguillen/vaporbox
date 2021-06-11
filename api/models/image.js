'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ImageSchema = Schema({
    publication_id: String,
    user_id: String,
    url: String,
    cloudinary_id: String
});

module.exports = mongoose.model('Image', ImageSchema);
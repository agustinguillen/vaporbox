'use strict'

let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate-v2');
let Schema = mongoose.Schema;

let ImageSchema = Schema({
    publication_id: String,
    user_id: String,
    url: String,
    cloudinary_id: String
});

ImageSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Image', ImageSchema);
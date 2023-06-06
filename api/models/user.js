'use strict'

let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate-v2');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    name: String,
    surname: String,
    nick: String,
    email: String,
    password: String,
    role: String,
    image: String,
    bio: String
});

UserSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('User', UserSchema);
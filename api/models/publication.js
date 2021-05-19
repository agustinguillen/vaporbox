'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PublicationSchema = Schema({
    text: String,
    file: String,
    created_at: String,
    user: { type: Schema.ObjectId, ref: 'User' },
    saves: [{ type: Schema.ObjectId, ref: 'User' }],
    likes: [{ type: Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Publication', PublicationSchema);
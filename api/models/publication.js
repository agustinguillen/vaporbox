'use strict'

let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate-v2');
let Schema = mongoose.Schema;

let PublicationSchema = Schema({
    text: String,
    file: String,
    created_at: String,
    user: { type: Schema.ObjectId, ref: 'User' },
    saves: [{ type: Schema.ObjectId, ref: 'User' }],
    likes: [{ type: Schema.ObjectId, ref: 'User' }]
});

PublicationSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Publication', PublicationSchema);
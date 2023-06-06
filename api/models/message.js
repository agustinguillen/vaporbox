'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongoosePaginate = require('mongoose-paginate-v2');

let MessageSchema = Schema({
    text: String,
    viewed: String,
    created_at: String,
    emitter: { type: Schema.ObjectId, ref: 'User' },
    receiver: { type: Schema.ObjectId, ref: 'User' }
});

MessageSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Message', MessageSchema);
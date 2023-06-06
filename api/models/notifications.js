'use strict'

let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate-v2');
let Schema = mongoose.Schema;

let NotificationSchema = Schema({
    type: String,
    author: String,
    user: Object,
    follower: Object,
    publication: {type: Schema.ObjectId, ref: 'Publication'},
    viewed: Boolean,
    created_at: String
});

NotificationSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Notification', NotificationSchema);
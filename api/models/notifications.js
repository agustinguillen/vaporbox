'use strict'

let mongoose = require('mongoose');
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

module.exports = mongoose.model('Notification', NotificationSchema);
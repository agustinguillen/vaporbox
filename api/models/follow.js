'use strict'

let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate-v2');
let Schema = mongoose.Schema;

let FollowSchema = Schema({
    user: { type: Schema.ObjectId, ref: 'User' },
    followed: { type: Schema.ObjectId, ref: 'User' }

});

FollowSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Follow', FollowSchema);
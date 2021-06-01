'use strict'

let express = require('express');
let MessageController = require('../controllers/message');

let api = express.Router();
let md_auth = require('../middlewares/authenticated');


api.post('/message', md_auth.ensureAuth, MessageController.saveMessage);
api.get('/messages/:id', md_auth.ensureAuth, MessageController.getMessages);
api.get('/unviewed-messages/', md_auth.ensureAuth, MessageController.getUnviewedMessages);
api.post('/set-viewed-messages', md_auth.ensureAuth, MessageController.setViewedMessages);


module.exports = api;
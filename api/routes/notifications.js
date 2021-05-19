'use strict'

let express = require('express');
let NotificationController = require('../controllers/notifications');
let api = express.Router();
let md_auth = require('../middlewares/authenticated');

api.post('/save-notification/:type', md_auth.ensureAuth, NotificationController.saveNotification);
api.get('/get-notifications/:page?', md_auth.ensureAuth, NotificationController.getNotifications);
api.post('/set-viewed-notifications/:id', NotificationController.setViewedNotifications);
api.delete('/delete-notification/:publication', NotificationController.deleteNotifications);


module.exports = api;
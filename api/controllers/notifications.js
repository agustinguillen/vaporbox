'use strict'

let mongoosePaginate = require('mongoose-pagination');
let moment = require('moment');

let User = require('../models/user');
let Publication = require('../models/publication');
let Notification = require('../models/notifications');

function saveNotification(req, res){
    let params = req.body;

    let notification = new Notification();
    notification.type = req.params.type;
    notification.follower = req.user;
    notification.viewed = false;
    notification.created_at = moment().unix();
    if(notification.type === "like-publication"){
        notification.author = params.user._id;
        notification.publication = params;
    }else{
        notification.user = params;
    }

    notification.save((err, notificationStored)=>{
        if(err) return res.status(500).send({message: "Error al guardar la notificación"});

        if(!notificationStored) return res.status(404).send({message: "La notificación no ha sido guardada"});

        return res.status(200).send({notification: notificationStored});
    })
}


function getNotifications(req, res){
    let userId = req.user.sub;
    let page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    let itemsPerPage = 10000;

    Notification.find({$or: [{'author': userId}, {'user._id': userId}]}).sort('-created_at').populate('publication').paginate(page, itemsPerPage, (err, notifications, total)=>{
        if(err) return res.status(500).send({message: "Error al devolver publicaciones"});

        if(!notifications) return res.status(404).send({message: "No hay publicaciones"});

        return res.status(200).send({
            total_items: total,
            pages: Math.ceil(total/itemsPerPage),
            page: page,
            items_per_page: itemsPerPage,
            notifications
        })
    });
}

function setViewedNotifications(req, res){
    let userId = req.params.id;

    Notification.updateMany({$or: [{'author': userId, viewed: false}, {'user._id': userId, viewed: false}]}, {viewed: true}, (err, notificationsUpdated)=>{
        if(err) return res.status(500).send({message: "Error en la petición"});
        
        return res.status(200).send({
            notifications: notificationsUpdated
            });
    });

}

function deleteNotifications(req, res){
    let publicationId = req.params.publication;

    Notification.find({ 'publication': publicationId })
        .remove((err, notificationRemoved) => {
            if (err) return res.status(500).send({ message: 'Error al borrar notificaciones' });
            if (!notificationRemoved) return res.status(404).send({ message: 'No se ha borrado la notificación' });
 
            if (notificationRemoved.n == 1) {
                return res.status(200).send({ message: 'Notificación eliminada correctamente' });
            } else {
                return res.status(404).send({ message: 'Error al borrar notificación' });
            }
 
        });
}


module.exports = {
    saveNotification,
    getNotifications,
    setViewedNotifications,
    deleteNotifications
}
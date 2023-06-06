'use strict'

let moment = require('moment');

let Message = require('../models/message');


function saveMessage(req, res){
    let params = req.body;

    if(!params.text || !params.receiver) return res.status(200).send({message: "Envia los campos necesarios"});

    let message = new Message();

    message.emitter = req.user.sub;
    message.receiver = params.receiver;
    message.text = params.text;
    message.created_at= moment().unix();
    message.viewed = "false";

    message.save((err, messageStored)=>{
        if(err) return res.status(500).send({message: "Error en la petición"});
        if(!messageStored) return res.status(404).send({message: "Error al enviar el mensaje"});

        return res.status(200).send({message: messageStored})
    });
}

function getMessages(req, res){
    let userId = req.user.sub;
    let otherId = req.params.id;

    Message.find({$or: 
        [
        {emitter: otherId, receiver: userId},
        {emitter: userId, receiver: otherId}
        ]
    }).sort('created_at').populate('emitter receiver', 'name surname nick _id image').exec((err, messages)=>{
        if(err) return res.status(500).send({message: "Error en la petición"});
        
        if(!messages) return res.status(404).send({message: "No hay mensajes"});
        
        return res.status(200).send({
            messages: messages
        });
    });
}


function getUnviewedMessages(req, res){
    let userId = req.user.sub;

    Message.find({receiver: userId, viewed: "false"}).exec((err, msg)=>{
        if(err) return res.status(500).send({message: "Error en la petición"});

        return res.status(200).send({
            'unviewed': msg
        })
    });
}

function setViewedMessages(req, res){
    let userId = req.user.sub;
    let params = req.body;
    let otherId = params.receiver;

    Message.updateMany({emitter: otherId ,receiver: userId, viewed: "false"}, {viewed: "true"}, (err, messagesUpdated)=>{
        if(err) return res.status(500).send({message: "Error en la petición"});
        
        return res.status(200).send({
            messages: messagesUpdated
            });
    });
}

module.exports = {
    saveMessage,
    getMessages,
    getUnviewedMessages,
    setViewedMessages
}
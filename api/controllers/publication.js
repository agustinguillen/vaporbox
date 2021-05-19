'use strict'

let path = require('path');
let fs = require('fs');
let moment = require('moment');
let mongoosePaginate = require('mongoose-pagination');

let Publication = require('../models/publication');
let User = require('../models/user');
let Follow = require('../models/follow');
const follow = require('../models/follow');
const publication = require('../models/publication');

function probando(req, res){
    res.status(200).send({
        message: "Hola desde el controlador de publicaciones"
    });
};

function savePublication(req, res){
    let params = req.body;

    if(!params.text) return res.status(200).send({message: "Debes enviar un texto"});

    let publication = new Publication();
    publication.text = params.text;
    publication.file = "null";
    publication.user = req.user.sub;
    publication.created_at = moment().unix();

    publication.save((err, publicationStored)=>{
        if(err) return res.status(500).send({message: "Error al guardar la publicación"});

        if(!publicationStored) return res.status(404).send({message: "La publicacion no ha sido guardada"});

        return res.status(200).send({publication: publicationStored});
    })
}

function getPublications(req, res){
    let page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    let itemsPerPage = 1000;

    Follow.find({user: req.user.sub}).populate('followed').exec((err, follows)=>{
        if(err) return res.status(500).send({message: "Error al devolver el seguimiento"});

        let follows_clean = [];

        follows.forEach((follow)=>{
            follows_clean.push(follow.followed);
        });
        follows_clean.push(req.user.sub);

        Publication.find({user: {"$in": follows_clean}}).sort('-created_at').populate('user').paginate(page, itemsPerPage, (err, publications, total)=>{
            if(err) return res.status(500).send({message: "Error al devolver publicaciones"});

            if(!publications) return res.status(404).send({message: "No hay publicaciones"});

            return res.status(200).send({
                total_items: total,
                pages: Math.ceil(total/itemsPerPage),
                page: page,
                items_per_page: itemsPerPage,
                publications
            })
        });
    });

}

function getPublicationsUser(req, res){
    let page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    let user = req.user.sub;
    if(req.params.user){
        user = req.params.user;
    }

    let itemsPerPage = 4;

    Publication.find({user: user}).sort('-created_at').populate('user').paginate(page, itemsPerPage, (err, publications, total)=>{
        if(err) return res.status(500).send({message: "Error al devolver publicaciones"});

        if(!publications) return res.status(404).send({message: "No hay publicaciones"});

        return res.status(200).send({
            total_items: total,
            pages: Math.ceil(total/itemsPerPage),
            page: page,
            items_per_page: itemsPerPage,
            publications
        })
    });
}

function getPublication(req, res){
    let publicationId = req.params.id;

    Publication.findById(publicationId, (err, publication)=>{
        if(err) return res.status(500).send({message: "Error al devolver publicación"});

        if(!publication) return res.status(404).send({message: "No existe la publicación"});

        return res.status(200).send({publication});
    })
}

function deletePublication(req, res) {
    let publicationId = req.params.id;
 
    Publication.find({ 'user': req.user.sub, '_id': publicationId })
        .remove((err, publicationRemoved) => {
            if (err) return res.status(500).send({ message: 'Error al borrar publicaciones' });
            if (!publicationRemoved) return res.status(404).send({ message: 'No se ha borrado la publicacion ' });
 
            if (publicationRemoved.n == 1) {
                return res.status(200).send({ message: 'Publicacion eliminada correctamente' });
            } else {
                return res.status(404).send({ message: 'Error al borrar publicacion' });
            }
 
        });
}

function uploadImage(req,res){
    let publicationId =req.params.id;

    if(req.file){
        let file_path = req.file.path;
        
        let file_split = file_path.split('\\');
        
        let file_name = file_split[2];
        
        let ext_split = file_name.split('\.');
        
        let file_ext = ext_split[1];


        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
           
           Publication.findOne({'user': req.user.sub, '_id': publicationId}).exec((err, publication)=>{
               
            if(publication){
                   //actualizar documento de la publicacion
                  Publication.findByIdAndUpdate(publicationId, {file: file_name}, {new:true}, (err, publicationUpdated)=>{
                       if(err) return res.status(500).send({message:'Error en la petición'});
       
                       if(!publicationUpdated) return res.status(404).send({message: "No se ha podido cargar el archivo"});
               
                      return res.status(200).send({publication: publicationUpdated});             
                   });
               }else{
                    return removeFilesOfUploads(res, file_path, "No tienes permiso para actualizar esta publicación");
               }
           });
        }else{
             return removeFilesOfUploads(res, file_path, "Extensión no válida");
        }
        
    }else{
        return res.status(200).send({message: "No se han subido imágenes"})
    }
}

function removeFilesOfUploads(res, file_path, message){
    fs.unlink(file_path, (err)=>{
        return res.status(200).send({message: message})
    });
}

function getImageFile(req, res){
    let image_file = req.params.imageFile;
    let path_file = './uploads/publications/'+image_file;

    fs.exists(path_file, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message: "No existe la imagen"});
        }
    })
}

function savedPublication(req, res){
    let userId = req.user.sub;
    let publicationId = req.params.id;

    Publication.findOne({ $and: [
        {_id: publicationId},
        {saves: userId}
    ]}).exec((err, isSaved)=>{
        if(isSaved){

            Publication.findByIdAndUpdate({'_id': publicationId}, {$pull: {saves: {$in: [userId.toString()]} }}, {new: true}, (err, publicationUnsaved) =>{
                if(err) return res.status(500).send({message:'Error en la petición'});
        
                if(!publicationUnsaved) return res.status(404).send({message: "No se pudieron guardar los cambios en la base de datos"});
                
                return res.status(200).send({message: "Unsaved"});
            });

        }else{
            
            Publication.findByIdAndUpdate({'_id': publicationId}, {$push: {saves: userId}}, {new: true}, (err, publicationSaved) =>{
                if(err) return res.status(500).send({message:'Error en la petición'});
        
                if(!publicationSaved) return res.status(404).send({message: "No se ha podido guardar la publicación"});
                
                return res.status(200).send({message: "Saved"});
            });
        }
    });
}

function getSavedPublications(req, res){
    let userId = req.user.sub;

    let page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    let user = req.user.sub;
    if(req.params.user){
        user = req.params.user;
    }

    let itemsPerPage = 4;

    Follow.find({user: req.user.sub}).populate('followed').exec((err, follows)=>{
        if(err) return res.status(500).send({message: "Error al devolver el seguimiento"});

        let follows_clean = [];

        follows.forEach((follow)=>{
            follows_clean.push(follow.followed);
        });
        follows_clean.push(req.user.sub);

        Publication.find({saves: userId}).sort('-created_at').populate('user').paginate(page, itemsPerPage, (err, saved_publications, total)=>{
            if(err) return res.status(500).send({message: "Error al devolver publicaciones guardadas"});

            if(!saved_publications) return res.status(404).send({message: "No hay publicaciones guardadas para mostrar"});

            return res.status(200).send({
                total_items: total,
                pages: Math.ceil(total/itemsPerPage),
                page: page,
                items_per_page: itemsPerPage,
                saved_publications
            })
        });
    });
}


function likePublication(req, res){
    let userId = req.user.sub;
    let publicationId = req.params.id;

    Publication.findOne({ $and: [
        {_id: publicationId},
        {likes: userId}
    ]}).exec((err, like)=>{
        if(like){

            Publication.findByIdAndUpdate({'_id': publicationId}, {$pull: {likes: {$in: [userId.toString()]} }}, {new: true}, (err, publicationDislike) =>{
                if(err) return res.status(500).send({message:'Error en la petición'});
        
                if(!publicationDislike) return res.status(404).send({message: "No se pudieron guardar los cambios en la base de datos"});
                
                return res.status(200).send({message: "Dislike"});
            });

        }else{
            
            Publication.findByIdAndUpdate({'_id': publicationId}, {$push: {likes: userId}}, {new: true}, (err, publicationLiked) =>{
                if(err) return res.status(500).send({message:'Error en la petición'});
        
                if(!publicationLiked) return res.status(404).send({message: "No se ha podido dar like a la publicación"});
                
                return res.status(200).send({message: "Like"});
            });
        }
    });
}

module.exports = {
    probando,
    savePublication,
    getPublications,
    getPublicationsUser,
    getPublication,
    deletePublication,
    uploadImage,
    getImageFile,
    savedPublication,
    getSavedPublications,
    likePublication
}
'use strict'

let moment = require('moment');
let Publication = require('../models/publication');
let Image = require('../models/image');
let Follow = require('../models/follow');
let cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


function probando(req, res) {
    res.status(200).send({
        message: "Hola desde el controlador de publicaciones"
    });
};

function savePublication(req, res) {
    let params = req.body;

    let publication = new Publication();
    publication.text = params.text;
    publication.file = "null";
    publication.user = req.user.sub;
    publication.created_at = moment().unix();

    publication.save((err, publicationStored) => {
        if (err) return res.status(500).send({ message: "Error al guardar la publicación" });

        if (!publicationStored) return res.status(404).send({ message: "La publicacion no ha sido guardada" });

        return res.status(200).send({ publication: publicationStored });
    })
}

function getPublications(req, res) {
    let page = 1;
    if (req.params.page) {
        page = req.params.page;
    }

    let itemsPerPage = 1000;

    Follow.find({ user: req.user.sub }).populate('followed').exec((err, follows) => {
        if (err) return res.status(500).send({ message: "Error al devolver el seguimiento" });

        let follows_clean = [];

        follows.forEach((follow) => {
            follows_clean.push(follow.followed);
        });
        follows_clean.push(req.user.sub);

        const options = {
            page: page,
            limit: itemsPerPage,
            sort: { created_at: -1 },
            populate: 'user',
        };

        Publication.paginate(
            { user: { $in: follows_clean } },
            options,
            (err, result) => {
                if (err) return res.status(500).send({ message: 'Error al devolver publicaciones' });

                if (result.docs.length === 0) return res.status(404).send({ message: 'No hay publicaciones' });

                return res.status(200).send({
                    total_items: result.totalDocs,
                    pages: result.totalPages,
                    page: result.page,
                    items_per_page: result.limit,
                    publications: result.docs,
                });
            }
        );
    });

}

function getPublicationsUser(req, res) {
    let page = 1;
    if (req.params.page) {
        page = req.params.page;
    }

    let user = req.user.sub;
    if (req.params.user) {
        user = req.params.user;
    }

    let itemsPerPage = 4;

    const options = {
        page: page,
        limit: itemsPerPage,
        sort: { created_at: -1 },
        populate: 'user',
    };

    Publication.paginate(
        { user: user },
        options,
        (err, result) => {
            if (err) return res.status(500).send({ message: 'Error al devolver publicaciones' });

            if (result.docs.length === 0) return res.status(404).send({ message: 'No hay publicaciones' });

            return res.status(200).send({
                total_items: result.totalDocs,
                pages: result.totalPages,
                page: result.page,
                items_per_page: result.limit,
                publications: result.docs,
            });
        }
    );
}

function getPublication(req, res) {
    let publicationId = req.params.id;

    Publication.findById(publicationId, (err, publication) => {
        if (err) return res.status(500).send({ message: "Error al devolver publicación" });

        if (!publication) return res.status(404).send({ message: "No existe la publicación" });

        return res.status(200).send({ publication });
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
    Image.findOne({ 'publication_id': publicationId }).exec((err, image) => {
        if (image) {
            removeFilesOfUploads(image.cloudinary_id);
        } else if (err) {
            console.log(err);
        }
    })
}

function removeFilesOfUploads(file_id) {
    cloudinary.uploader.destroy(file_id, function (result) { console.log(result) });
}


function savedPublication(req, res) {
    let userId = req.user.sub;
    let publicationId = req.params.id;

    Publication.findOne({
        $and: [
            { _id: publicationId },
            { saves: userId }
        ]
    }).exec((err, isSaved) => {
        if (isSaved) {

            Publication.findByIdAndUpdate({ '_id': publicationId }, { $pull: { saves: { $in: [userId.toString()] } } }, { new: true }, (err, publicationUnsaved) => {
                if (err) return res.status(500).send({ message: 'Error en la petición' });

                if (!publicationUnsaved) return res.status(404).send({ message: "No se pudieron guardar los cambios en la base de datos" });

                return res.status(200).send({ message: "Unsaved" });
            });

        } else {

            Publication.findByIdAndUpdate({ '_id': publicationId }, { $push: { saves: userId } }, { new: true }, (err, publicationSaved) => {
                if (err) return res.status(500).send({ message: 'Error en la petición' });

                if (!publicationSaved) return res.status(404).send({ message: "No se ha podido guardar la publicación" });

                return res.status(200).send({ message: "Saved" });
            });
        }
    });
}

function getSavedPublications(req, res) {
    let userId = req.user.sub;

    let page = 1;
    if (req.params.page) {
        page = req.params.page;
    }

    let user = req.user.sub;
    if (req.params.user) {
        user = req.params.user;
    }

    let itemsPerPage = 4;

    Follow.find({ user: req.user.sub }).populate('followed').exec((err, follows) => {
        if (err) return res.status(500).send({ message: "Error al devolver el seguimiento" });

        let follows_clean = [];

        follows.forEach((follow) => {
            follows_clean.push(follow.followed);
        });
        follows_clean.push(req.user.sub);

        const options = {
            page: page,
            limit: itemsPerPage,
            sort: { created_at: -1 },
            populate: 'user',
        };

        Publication.paginate(
            { saves: userId },
            options,
            (err, result) => {
                if (err) return res.status(500).send({ message: 'Error al devolver publicaciones guardadas' });

                if (result.docs.length === 0) return res.status(404).send({ message: 'No hay publicaciones guardadas para mostrar' });

                return res.status(200).send({
                    total_items: result.totalDocs,
                    pages: result.totalPages,
                    page: result.page,
                    items_per_page: result.limit,
                    saved_publications: result.docs,
                });
            }
        );
    });
}


function likePublication(req, res) {
    let userId = req.user.sub;
    let publicationId = req.params.id;

    Publication.findOne({
        $and: [
            { _id: publicationId },
            { likes: userId }
        ]
    }).exec((err, like) => {
        if (like) {

            Publication.findByIdAndUpdate({ '_id': publicationId }, { $pull: { likes: { $in: [userId.toString()] } } }, { new: true }, (err, publicationDislike) => {
                if (err) return res.status(500).send({ message: 'Error en la petición' });

                if (!publicationDislike) return res.status(404).send({ message: "No se pudieron guardar los cambios en la base de datos" });

                return res.status(200).send({ message: "Dislike" });
            });

        } else {

            Publication.findByIdAndUpdate({ '_id': publicationId }, { $push: { likes: userId } }, { new: true }, (err, publicationLiked) => {
                if (err) return res.status(500).send({ message: 'Error en la petición' });

                if (!publicationLiked) return res.status(404).send({ message: "No se ha podido dar like a la publicación" });

                return res.status(200).send({ message: "Like" });
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
    savedPublication,
    getSavedPublications,
    likePublication
}
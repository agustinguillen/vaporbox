'use strict'

let Follow = require('../models/follow');

function saveFollow(req, res) {
    let params = req.body;

    let follow = new Follow();
    follow.user = req.user.sub;
    follow.followed = params.followed;

    follow.save((err, followStored) => {
        if (err) return res.status(500).send({ message: 'Error al guardar el seguimiento' });

        if (!followStored) return res.status(404).send({ message: "El seguimiento no se ha guardado" });

        return res.status(200).send({ follow: followStored });
    });
}

function deleteFollow(req, res) {
    let userId = req.user.sub;
    let followId = req.params.id;

    Follow.find({ 'user': userId, 'followed': followId }).remove(err => {
        if (err) return res.status(500).send({ message: 'Error al dejar de seguir' });

        return res.status(200).send({ message: "El follow se ha eliminado" })
    })
}

function getFollowingUsers(req, res) {
    let userId = req.user.sub;

    if (req.params.id && req.params.page) {
        userId = req.params.id;
    }

    let page = 1;

    if (req.params.page) {
        page = req.params.page;
    } else {
        page = req.params.id;
    }

    let itemsPerPage = 100;

    Follow.paginate(
        { user: userId },
        { page: page, limit: itemsPerPage, populate: 'followed', sort: { _id: 'asc' } },
        (err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error en el servidor' });
            }

            const { docs: follows, totalDocs: total } = result;

            if (follows.length === 0) {
                return res.status(404).send({ message: 'No sigues a ningún usuario' });
            }

            followUsersIds(req.user.sub).then((value) => {
                return res.status(200).send({
                    total: total,
                    pages: Math.ceil(total / itemsPerPage),
                    follows,
                    users_following: value.following,
                    user_follow_me: value.followed,
                });
            });
        }
    );
}

async function followUsersIds(user_id) {
    let following = await Follow.find({ "user": user_id }).select({ "_id": 0, "__v": 0, "user": 0 })
        .exec()
        .then((follows) => {
            let follows_clean = [];

            follows.forEach((follow) => {
                follows_clean.push(follow.followed);
            });

            return follows_clean;
        })

        .catch((err) => {
            return handleError(err);
        });

    let followed = await Follow.find({ "followed": user_id }).select({ "_id": 0, "__v": 0, "followed": 0 })
        .exec()
        .then((follows) => {
            let follows_clean = [];

            follows.forEach((follow) => {
                follows_clean.push(follow.user);
            });

            return follows_clean;
        })
        .catch((err) => {
            return handleError(err);
        });

    return {
        following: following,
        followed: followed
    };
}

function getFollowedUsers(req, res) {
    let userId = req.user.sub;

    if (req.params.id && req.params.page) {
        userId = req.params.id;
    }

    let page = 1;

    if (req.params.page) {
        page = req.params.page;
    } else {
        page = req.params.id;
    }

    let itemsPerPage = 100;

    Follow.paginate({ followed: userId }, { page: page, limit: itemsPerPage, populate: 'user' }, (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Error en el servidor' });
        }

        const { docs: follows, totalDocs: total } = result;

        if (follows.length === 0) {
            return res.status(404).send({ message: 'No te sigue ningún usuario' });
        }

        followUsersIds(req.user.sub).then((value) => {
            return res.status(200).send({
                total: total,
                pages: Math.ceil(total / itemsPerPage),
                follows,
                users_following: value.following,
                user_follow_me: value.followed,
            });
        });
    });
}
//Devolver usuarios que sigo
function getMyFollows(req, res) {
    let userId = req.user.sub;

    let find = Follow.find({ user: userId });
    //Devolver usuarios que me siguen
    if (req.params.followed) {
        find = Follow.find({ followed: userId })
    }

    find.populate('user followed').exec((err, follows) => {
        if (err) return res.status(200).send({ message: "Error en el servidor" });

        if (!follows) return res.status(404).send({ message: "No sigues a ningún usuario" });

        return res.status(200).send({ follows });
    });
}

module.exports = {
    saveFollow,
    deleteFollow,
    getFollowingUsers,
    getFollowedUsers,
    getMyFollows
}
'use strict'
let bcrypt = require('bcrypt-nodejs');
let User = require('../models/user');
let Publication = require('../models/publication');
let Image = require('./../models/image');
let Follow = require('../models/follow');
let jwt = require('../services/jwt');
let cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


function home (req, res){
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    });
}

function pruebas (req, res){
    res.status(200).send({
        message: 'Acción de pruebas en el servidor de NodeJS'
    })
}
//Registro
function saveUser(req, res){
    let params = req.body;
    let user = new User();

    if(params.name && params.surname 
        && params.email && params.password){
            user.name = params.name;
            user.surname = params.surname;
            user.nick = params.nick;
            user.email = params.email;
            user.role = 'ROLE_USER';
            user.image = null;
            user.bio = '';

            //Controlar que no existan usuarios duplicados
            User.find({ $or: [
                {email: user.email.toLowerCase()},
                {user: user.nick.toLowerCase()}
            ]}).exec((err, users)=>{
                    if(err) return res.status(500).send({message: 'Error al guardar el usuario'});

                    if( users && users.length >= 1){
                        return res.status(200).send({message: 'El usuario que intenta registrar ya existe'})
                    } else {
                        
                        //Cifrado de contraseña
                        bcrypt.hash(params.password, null, null, (err, hash)=>{
                            user.password = hash;
            
                            user.save((err, userStored)=>{
                                if(err) return res.status(500).send({message: 'Error al guardar el usuario'});
            
                                if(userStored){
                                    res.status(200).send({user: userStored});
                                }else{
                                    res.status(404).send({message:'No se ha registrado el usuario'});
                                }
                            })
                        })
                    }
                })
            }else{
                res.status(200).send({
                    message: 'Completa todos los campos necesarios'
                });
            }
}

//Login
function loginUser(req, res){
    let params = req.body;

    let email = params.email;
    let password = params.password;

    User.findOne({email: email}, (err, user)=>{
        if(err) return res.status(500).send({message: "Error en la petición"})

        if(user){
            bcrypt.compare(password, user.password, (err, check)=>{
                if(check){
                    //Devolver datos de usuario
                    if(params.gettoken){
                        return res.status(200).send({
                            token: jwt.createToken(user)
                        })
                    }else{
                        user.password = undefined;
                        return res.status(200).send({user});
                    }
                }else{
                    return res.status(404).send({message: "El usuario no se ha podido identificar"});
                }
            });
        }else{
            return res.status(404).send({message: "El usuario no se ha podido identificar"});
        }
    } )
}

//Conseguir datos de un usuario
function getUser(req, res){
    let userId = req.params.id;

    User.findById(userId, (err, user)=>{
        if(err) return res.status(500).send({message:'Error en la petición'});

        if(!user) return res.status(404).send({message: "El usuario no existe"});

        followThisUser(req.user.sub, userId).then((value)=>{
            user.password = undefined;
            return res.status(200).send({
                user,
                following: value.following,
                followed: value.followed});
        });
            
    });

}

async function followThisUser(identity_user_id, user_id) {
    var following = await Follow.findOne({ "user": identity_user_id, "followed": user_id }).exec().then((follow) => {
        return follow;
    }).catch((err) => {
        return handleError(err);
    });
 
    var followed = await Follow.findOne({ "user": user_id, "followed": identity_user_id }).exec().then((follow) => {
        return follow;
    }).catch((err) => {
        return handleError(err);
    });
 
 
    return {
        following: following,
        followed: followed
    }
}

//Devolver listado de usuarios paginados
function getUsers(req, res){
    let identity_user_id = req.user.sub;

    let page = 1;
    if(req.params.page){
        page = req.params.page;
    }
    let itemsPerPage = 100;

    User.find().sort('_id').paginate(page, itemsPerPage, (err,users, total)=>{
        if(err) return res.status(500).send({message:'Error en la petición'});

        if(!users) return res.status(404).send({message: "No hay usuarios disponibles"});

        followUsersIds(identity_user_id).then((value)=>{
            
            return res.status(200).send({
                users,
                users_following: value.following,
                users_follow_me: value.followed,
                total,
                pages: Math.ceil(total/itemsPerPage)     
            });
        });
    });
}





async function followUsersIds(user_id){
    let following = await Follow.find({"user": user_id}).select({"_id":0, "__v":0, "user":0})
    .exec()
    .then((follows)=>{
        let follows_clean =[];

        follows.forEach((follow)=>{
            follows_clean.push(follow.followed);
        });

        return follows_clean;
    })

    .catch((err)=>{
        return handleError(err);
    });

    let followed = await Follow.find({"followed": user_id}).select({"_id":0, "__v":0, "followed":0})
    .exec()
    .then((follows)=>{
        let follows_clean =[];

        follows.forEach((follow)=>{
            follows_clean.push(follow.user);
        });

        return follows_clean;
    })
    .catch((err)=>{
        return handleError(err);
    });

    return {
        following: following,
        followed: followed
    };
}

function getCounters(req, res){
    let userId = req.user.sub;

    if(req.params.id){
        userId = req.params.id;
    }

    getCountFollow(userId).then((value)=>{
            return res.status(200).send(value);
    });
    

}

async function getCountFollow(user_id) {
    let following = await Follow.countDocuments({ user: user_id })
        .exec()
        .then((count) => {
            return count;
        })
        .catch((err) => { return handleError(err); });
 
    let followed = await Follow.countDocuments({ followed: user_id })
        .exec()
        .then((count) => {
            return count;
        })
        .catch((err) => { return handleError(err); });

    let publications = await Publication.countDocuments({ user: user_id})
        .exec()
        .then((count) => {
            return count;
        })
        .catch((err) => { return handleError(err); });
 
    return { following: following, followed: followed, publications: publications }
 
}

//Edicion de datos de usuario
function updateUser(req, res){
    let userId = req.params.id;
    let update = req.body;

    //borrar la propiedad password
    delete update.password;

    if(userId != req.user.sub){
        return res.status(500).send({message: "No tienes permiso para actualizar los datos del usuario"})
    }
    //Evitar datos de usuarios duplicados
    User.findOne({ $or: [
        {email: update.email.toLowerCase()},
        {nick: update.nick.toLowerCase()}
    ]}).exec((err, user)=>{
        if(user && user._id != userId){
         return res.status(500).send({ message: 'Email o password no disponibles'});
        }else{
            // { new:true} devuelve el objeto actualizado
            User.findByIdAndUpdate(userId, update, {new: true}, (err,userUpdated)=>{
                if(err) return res.status(500).send({message:'Error en la petición'});
        
                if(!userUpdated) return res.status(404).send({message: "No se ha podido actualizar el usuario"});
        
                return res.status(200).send({user: userUpdated});
            });
        }  
    });

}

function deleteUser(req, res) {
    let userId = req.params.id;

    deleteFollows(userId);
    
    User.find({ '_id': userId })
    .deleteOne((err, userRemoved) => {
        if (err) return res.status(500).send({ message: 'Error al borrar publicaciones' });
        if (!userRemoved) return res.status(404).send({ message: 'No se ha borrado la cuenta' });
        
        if (userRemoved.n == 1) {
            Image.findOne({'user_id': userId}).exec((err, image)=>{
                if(image){
                    removeFilesOfUploads(image.cloudinary_id);
                }else if(err){
                    console.log(err);
                }
            })
            return res.status(200).send({ message: 'Cuenta eliminada correctamente' });
        } else {
            return res.status(404).send({ message: 'Error al eliminar la cuenta' });
        }
        
    });   
}

function removeFilesOfUploads(file_id){
    cloudinary.uploader.destroy(file_id, function(result) { console.log(result) });
}
function deleteFollows(id){
    Follow.find({ $or: [
        {user: id},
        {followed: id}
    ]}).deleteMany((err, followsRemoved) =>{
        if(followsRemoved.n >= 1){
            return console.log('Se borraron follows');
        } else if(err){
            return console.log(err);
        }
   
    });
}

module.exports = {
    home,
    pruebas,
    saveUser,
    loginUser,
    getUser,
    getUsers,
    getCounters,
    updateUser,
    deleteUser
}
'use strict'
let bcrypt = require('bcrypt-nodejs');
let mongoosePaginate = require('mongoose-pagination');
let User = require('../models/user');
let Publication = require('../models/publication');
let Follow = require('../models/follow');
let jwt = require('../services/jwt');
let path = require('path');
let fs = require('fs');

function home (req, res){
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    });
}

function pruebas (req, res){
    console.log(req.body);
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
    let itemsPerPage = 5;

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

    let publications = await Publication.count({"user": user_id}).exec((err, count)=>{
        if(err) return handleError(err);
        return count;
    });
 
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

//Subir archivos de imagen/avatar de usuario

function uploadImage(req,res){
    let userId =req.params.id;

    if(req.file){
        let file_path = req.file.path;
        
        let file_split = file_path.split('\\');
        
        let file_name = file_split[2];
        
        let ext_split = file_name.split('\.');
        let file_ext = ext_split[1];

        if(userId != req.user.sub){
            return removeFilesOfUploads(res, file_path, "No tienes permiso para actualizar los datos del usuario");
        }

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
            //actualizar documento de usuario logueado
           User.findByIdAndUpdate(userId, {image: file_name}, {new:true}, (err, userUpdated)=>{
                if(err) return res.status(500).send({message:'Error en la petición'});

                if(!userUpdated) return res.status(404).send({message: "No se ha podido actualizar el usuario"});
        
               return res.status(200).send({user: userUpdated});             
            })
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
    let path_file = './uploads/users/'+image_file;

    fs.exists(path_file, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message: "No existe la imagen"});
        }
    })
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
    uploadImage,
    getImageFile
}
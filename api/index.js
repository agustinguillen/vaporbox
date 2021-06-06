'use strict'
let app = require('./app');
let port = process.env.PORT || 8080;
let mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Conexión DB
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("La conexión a la base de datos vaporboxdb se realizó con éxito")

            //Crear servidor
            app.listen(port, ()=>{
                console.log("Servidor corriendo en puerto 8080")
            });
        })
        .catch(err => console.log(err));
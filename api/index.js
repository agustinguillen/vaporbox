'use strict'
let app = require('./app');
let port = 3800;
let mongoose = require('mongoose');

//Conexión DB
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/vaporbox_db', {useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("La conexión a la base de datos vaporbox_db se realizó con éxito")

            //Crear servidor
            app.listen(port, ()=>{
                console.log("Servidor corriendo en http://localhost:3800")
            });
        })
        .catch(err => console.log(err));
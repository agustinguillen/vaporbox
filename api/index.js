'use strict'
let app = require('./app');
let port = process.env.PORT || 80;
let mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Sockets
const io = require("socket.io")(app, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["Authorization"],
      credentials: true
    }
  });

let users = [];

const addUser = (userId, socketId)=>{
  !users.some(user=>user.userId === userId) &&
  users.push({ userId, socketId });
}

const removeUser = (socketId)=>{
  users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId)=>{
  return users.find((user)=> user.userId === userId);
}

let sentMessage;

io.on('connection', (socket)=>{
  socket.on("addUser", userId=>{
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  socket.on("sendMessage", (message)=>{
    sentMessage = message;
    let user = getUser(sentMessage.receiver);
    if(user){
      io.to(user.socketId).emit("getMessage", message);
    }
  });

  socket.on("notificationPublication", (notification)=>{
    let user = getUser(notification.notification.author);
    if(user){
      io.to(user.socketId).emit("newNotification", notification);
    }
  });

  socket.on("disconnect", ()=>{
    removeUser(socket.id);
    io.emit("getUsers", users);
  })
});

//Conexión DB
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("La conexión a la base de datos vaporboxdb se realizó con éxito")

            //Crear servidor
            app.listen(port, ()=>{
                console.log("Servidor corriendo en puerto 80")
            });
        })
        .catch(err => console.log(err));


'use strict'

let express = require('express');
let app = express();
var server = require('http').createServer(app)
let path = require('path');

//cargar rutas
let user_routes = require('./routes/user');
let follow_routes = require('./routes/follow');
let publication_routes = require('./routes/publication');
let message_routes = require('./routes/message');
let notifications_routes = require('./routes/notifications');

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
});

//rutas
app.use('/api', user_routes);
app.use('/api', follow_routes);
app.use('/api', publication_routes);
app.use('/api', message_routes);
app.use('/api', notifications_routes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//sockets
const io = require("socket.io")(server, {
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

server.listen(80);

//exportar
module.exports = app;
const { Server } = require('http');

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  /*socket.on('identificacion'),(msg)=>{
    io.emit('identificacion',msg);

    socket.nick=msg.
  }
  */
  socket.on('disconnect', () => {//dentro del objeto global en el que ya existe la conexion, 
    //pongo el evento desconectar ese objeto
    console.log('user disconnected');
  });

  //socket.broadcast.emit('hi'); //esto emitiría un mensaje a todos los clientes menos a el mismo
  
  socket.on('chat message', (msg) => {//recibe el evento que creamos en el html
    console.log('message: ' + msg);
    io.emit('chat message', msg);//envia el mensaje a todos, broadcast, al usar el objeto global io
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

//meter linea path.join del generator al Server.js si se hace sin generatoren www se crearian los on y demas del Server.js en generator

//hacer el estas escribiendo

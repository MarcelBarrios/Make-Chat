// app.js

const express = require('express');
const app = express();
const server = require('http').Server(app);
const { engine } = require('express-handlebars');

// Socket.io
const io = require('socket.io')(server);

// We'll store the users online here
let onlineUsers = {};

io.on("connection", (socket) => {
    console.log("🔌 New user connected! 🔌");
    // This is the line that connects your chat.js file
    require('./sockets/chat.js')(io, socket);
});

// Express-Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' })); // Assuming you have a main.handlebars
app.set('view engine', 'handlebars');
app.set('views', './views');

// Establish your public folder
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

server.listen('3000', () => {
    console.log('Server listening on Port 3000');
});
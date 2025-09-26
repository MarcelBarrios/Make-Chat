// app.js

const express = require('express');
const app = express();
const server = require('http').Server(app);

// Socket.io
const io = require('socket.io')(server);
io.on("connection", (socket) => {
    console.log("🔌 New user connected! 🔌");
});

// CORRECTED: Require the 'engine' function directly from the library
const { engine } = require('express-handlebars');

// CORRECTED: Initialize the engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views'); // Explicitly tell Express where to find your views

// Establish your public folder
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    // CORRECTED: Do not include the file extension
    res.render('index');
});

server.listen('3000', () => {
    console.log('Server listening on Port 3000');
});
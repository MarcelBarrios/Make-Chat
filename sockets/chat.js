// sockets/chat.js

module.exports = (io, socket) => {
    // Listen for a new user joining the chat
    socket.on('new user', (username) => {
        console.log(`✋ ${username} has joined the chat! ✋`);
        // Broadcast the username to all other clients
        socket.broadcast.emit("new user", username);
    });

    // Listen for a new message
    socket.on('new message', (data) => {
        // Broadcast the message to all other clients
        socket.broadcast.emit('new message', data);
    });
}
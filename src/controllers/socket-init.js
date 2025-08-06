const { Server } = require('socket.io');
const saveUpdate = require('./save');

const initSocket = (app) => {
    const io = new Server(app);
    io.on('connection', (socket) => {
        socket.on("update", saveUpdate(socket))
    });
}
module.exports = { initSocket };
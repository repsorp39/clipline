const Clipboard = require("../models/Clipboard");

const saveUpdate  = (socket) =>{ 
   return async (data )=>{
    try {
        await Clipboard.updateOne({ name:data.origin } ,{ content:data.content });
        socket.broadcast.emit("saved" , {
            origin:data.origin,
            content:data.content
        })
    } catch (err) {
        console.log(err.message);
    }
   }
}

module.exports = saveUpdate;
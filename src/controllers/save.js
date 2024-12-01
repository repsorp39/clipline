const Clipboard = require("../models/Clipboard");

const saveUpdate  = (socket) =>{ 
   return async (data )=>{
    try {
        await Clipboard.updateOne({ name:data.origin } ,{ content:data.content.replace(/\n/g,'<br>') });
        socket.broadcast.emit("saved" , {
            origin:data.origin,
            content:data.content.replace(/\n/g,'<br>')
        })
    } catch (err) {
        console.log(err.message);
    }
   }
}

module.exports = saveUpdate;

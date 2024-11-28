const app = require("./src/app");
const PORT = process.env.PORT ?? 8080;
const mongoose = require("mongoose");
const { initSocket }  = require("./src/controllers/socket-init");

mongoose.connection.once('open' ,() =>{
    console.log("MongoDB now connected ...");
    initSocket(app);
    app.listen(PORT,()=> console.log(`Listening on port ${PORT}...`));
})
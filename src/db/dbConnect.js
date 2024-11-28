require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () =>{

    try{
        await mongoose.connect(process.env.DB_URI);
    }catch(e){
        console.log(e);
    }
}

module.exports = dbConnect;
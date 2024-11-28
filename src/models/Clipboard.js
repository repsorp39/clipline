const mongoose = require("mongoose");

const ClipSchema = mongoose.Schema({
    name:{type:String,require:true},
    content:{type:String, default:""},
})

module.exports = mongoose.model('Clipboard',ClipSchema);
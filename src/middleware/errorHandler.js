const debug = require('../utils/debug');

const errorHandler = (err,req,res,next) =>{
    debug(err);
}

module.exports = errorHandler;
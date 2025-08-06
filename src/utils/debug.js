require('dotenv').config();
const logEvent = require('./eventLogger');

const debug = (error) => {
    if (process.env.NODE_ENV === 'production') logEvent(error)
    else console.error(error)
}

module.exports = debug;
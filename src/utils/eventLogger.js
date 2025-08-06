const fsPromises = require('fs/promises');
const path = require('path');
const { format } = require('date-fns');


const logEvent = async (err) => {
    const date = format(new Date(), 'yyyy-MM-dd hh:mm:ss');
    const msg = `${date} \t ${err.name} \t\ ${err.message}\n\n`
    await fsPromises.appendFile(
        path.join(__dirname, '..', 'logs', 'err-logs.txt'),
        msg
    )
}

module.exports = logEvent
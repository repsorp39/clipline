const express = require("express");
const dbConnect = require("./db/dbConnect");
const errorHandler = require("./middleware/errorHandler");

const path = require("path");
const mongooseSanitize = require("express-mongo-sanitize");
const { createServer } = require("http");
const morgan = require("morgan");

const app = express();

dbConnect();
app.use(morgan("dev"));
app.use(mongooseSanitize());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//set view  engine
app.set('view engine' ,'ejs');
app.set('views' ,path.join(__dirname , 'views'));

//do not cache only if in prod
if(process.env.NODE_ENV === "development"){
    app.set('view cache', false);
}


app.use(require("./routers/"))
//serve statics file
app.use(express.static(path.join(__dirname ,'public')));


app.all("*" ,(req,res) => res.render("error"))
app.use(errorHandler);
module.exports = createServer(app);

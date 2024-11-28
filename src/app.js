const express = require("express");
const morgan = require("morgan");
const dbConnect = require("./db/dbConnect");
const errorHandler = require("./middleware/errorHandler");

const path = require("path");
const mongooseSanitize = require("express-mongo-sanitize");
const { createServer } = require("http");

const app = express();
dbConnect();
app.use(mongooseSanitize());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//set view  engine
app.set('view engine' ,'ejs');
app.set('views' ,path.join(__dirname , 'views'));

app.use(require("./routers/"))
//serve statics file
app.use(express.static(path.join(__dirname ,'public')));

app.all("*" ,(req,res) => res.render("error"))
app.use(errorHandler);
module.exports = createServer(app);

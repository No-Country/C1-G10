var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const routes = require("./Routes/index");

/* MONGODB CONNECTION */
const mongoose = require("mongoose");
require("dotenv").config();
const mongoDB = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
db.on("error", console.error.bind(console, "MongoDB connection error"));

const cors = require("cors");

/* NODEMAILER */
/* const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: process.env.USER,
  to: "luisdamian.sp@gmail.com",
  subject: "Probando la porqueria esta.",
  text: "Dejate de mandarme cosas para incorporar yo solo, ladillado.",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
}); */

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

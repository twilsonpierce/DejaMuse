require('dotenv').config(); 
const express = require('express');
const router = require('./routes.js');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const app = express();


app.use(morgan('dev'));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client')));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(flash());


app.use('/', router);

const port = process.env.PORT || 3001;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});


module.exports = app;


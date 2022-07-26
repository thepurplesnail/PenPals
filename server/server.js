// Get .env file
require('dotenv').config();

// Set up express server
const express = require('express');
const app = express();
app.listen(8000, function(){
    console.log("server is running!");
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up mongoose connection
var mongoose = require('mongoose');
var uri = 'mongodb+srv://FriedIceCream:' + process.env.PASSWORD + '@pen-pals.kwg7l0g.mongodb.net/pen_pals?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Set up routers
var indexRouter = require('./routes/indexRouter');
var projectRouter = require('./routes/projectRouter.js');
var documentRouter = require('./routes/documentRouter.js');

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/project/:projId/document', documentRouter);

module.exports = uri
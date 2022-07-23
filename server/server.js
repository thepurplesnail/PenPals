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
var mongoDB = 'mongodb+srv://FriedIceCream:Ittasesjustlikeicecream@pen-pals.kwg7l0g.mongodb.net/?retryWrites=true&w=majority';
// 'mongodb+srv://FriedIceCream:<password>@pen-pals.kwg7l0g.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Set up routers
var project = require('./routes/project.js');
var document = require('./routes/document.js');

app.use('/project', project);
app.use('/project/:projId/document', document);
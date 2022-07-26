#! /usr/bin/env node

/*
To run this script: 
node populatedb <your mongodb url>

node populatedb mongodb+srv://FriedIceCream:<password>@pen-pals.kwg7l0g.mongodb.net/<optional-database>
node populatedb mongodb+srv://FriedIceCream:<password>@pen-pals.kwg7l0g.mongodb.net/pen_pals
*/

console.log('This script populates test project and documents to your database. Specified database as argument: populatedb mongodb+srv://FriedIceCream:<password>@pen-pals.kwg7l0g.mongodb.net/?retryWrites=true&w=majority');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Project = require('./models/project')
var Document = require('./models/document')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// A] insertion function
// insert data into table
function projectCreate(title, started, modified, documents, cb) {
    var project = new Project({
        title: title,
        started: started,
        modified: modified,
        documents: documents
    });
         
    project.save(function (err) {
      if (err) {
        cb(err, null); return;
      }
      console.log('New Project: ' + project);
      projects.push(project)
      cb(null, project);
    });
}

function documentCreate(title, started, modified, text, cb) {
    var document = new Document({
        title: title,
        started: started,
        modified: modified,
        text: text
    });
         
    document.save(function (err) {
      if (err) {
        cb(err, null); return;
      }
      console.log('New Document: ' + document);
      documents.push(document)
      cb(null, document);
    });
}

// B] list of insertions
// callback functions to use insertion
function createProject(cb) {
    async.series([
        function(callback) {
            projectCreate("Winter Theme", new Date(1995, 11, 25), new Date(1995, 12, 25), [], callback);
        },
        function(callback) {
            projectCreate("Fall Theme", new Date(2005, 10, 25), new Date(2005, 11, 24), [], callback);
        },
    ],
    // optional callback
    cb);
}

function createDocument(cb) {
    async.series([
        function(callback) {
            documentCreate("Christmas", new Date(1995, 11, 25), new Date(1995, 12, 01), "Christmas is here to stay", callback);
        },
        function(callback) {
            documentCreate("Santa Claws", new Date(1995, 12, 02), new Date(1995, 12, 25), "Santa Claws is not real", callback);
        },
        function(callback) {
            documentCreate("Grounded Turkey", new Date(2005, 11, 02), new Date(2005, 11, 24), "Grounded Turkey for Thanksgiving", callback);
        },
        function(callback) {
            documentCreate("Falling Leaves", new Date(2005, 10, 25), new Date(2005, 11, 01), "Leaves fall in Fall", callback);
        },
    ],
    // optional callback
    cb);
}

// C] insert!
let projects = []
let documents = []

async.series([
    createProject,
    createDocument
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    // All done, disconnect from database
    mongoose.connection.close();
});

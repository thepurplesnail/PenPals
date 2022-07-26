#! /usr/bin/env node

/*
To run this script: 
node populatedb <your mongodb url>

node populatedb mongodb+srv://FriedIceCream:<password>@pen-pals.kwg7l0g.mongodb.net/<optional-database>
node populatedb mongodb+srv://FriedIceCream:<password>@pen-pals.kwg7l0g.mongodb.net/pen_pals
*/

console.log('This script populates test project and documents to your database.');

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
            projectCreate("Fall Theme", new Date(2000, 08, 25), new Date(2000, 09, 24), ["1", "2"], callback);
        },
        function(callback) {
            projectCreate("Winter Theme", new Date(2005, 11, 25), new Date(2005, 12, 24), ["3", "4"], callback);
        },
        function(callback) {
            projectCreate("Spring Theme", new Date(2010, 02, 25), new Date(2010, 03, 24), ["5", "6"], callback);
        },
        function(callback) {
            projectCreate("Summer Theme", new Date(2015, 05, 25), new Date(2015, 06, 24), ["7", "8"], callback);
        },
    ],
    // optional callback
    cb);
}

function createDocument(cb) {
    async.series([
        function(callback) {
            documentCreate("Grounded Turkey", new Date(2000, 08, 25), new Date(2000, 09, 24), "Grounded Turkey for Thanksgiving", callback);
        },
        function(callback) {
            documentCreate("Falling Leaves", new Date(2000, 08, 25), new Date(2000, 09, 24), "Leaves fall in Fall", callback);
        },
        function(callback) {
            documentCreate("Christmas", new Date(2005, 11, 25), new Date(2005, 12, 24), "Christmas is here to stay", callback);
        },
        function(callback) {
            documentCreate("Santa Claws", new Date(2005, 11, 25), new Date(2005, 12, 24), "Santa Claws is not real", callback);
        },
        function(callback) {
            documentCreate("Easter Buster", new Date(2010, 02, 25), new Date(2010, 03, 24), "Buster coming to stop Easter", callback);
        },
        function(callback) {
            documentCreate("April Tsunami", new Date(2010, 02, 25), new Date(2010, 03, 24), "Instead of rain, a wave arrives", callback);
        },
        function(callback) {
            documentCreate("May or may Not", new Date(2015, 05, 25), new Date(2015, 06, 24), "What may happen", callback);
        },
        function(callback) {
            documentCreate("Deadly Summer", new Date(2015, 05, 25), new Date(2015, 06, 24), "The Sun holds a deadly laser", callback);
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

// TODO: Add reference key to project

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Document schema
var DocumentSchema = new Schema({
    title: {type: String, required: true},
    started: {type: Date, required: true},
    modified: {type: Date},
    text: {type: String} // For now, eventually we should set this as a file
});

// Virtual URL for project
DocumentSchema
.virtual('url')
.get(function () {
  return '/document/' + this._id;
});

// Export Document model
module.exports = mongoose.model('Document', DocumentSchema);

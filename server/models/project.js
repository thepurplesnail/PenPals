var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Project schema
var ProjectSchema = new Schema({
    title: {type: String, required: true},
    started: {type: Date, required: true},
    modified: {type: Date},
    documents: {type: []}
});

// Virtual URL for project
ProjectSchema
.virtual('url')
.get(function () {
  return '/project/' + this._id;
});

// Export Project model
module.exports = mongoose.model('Project', ProjectSchema);

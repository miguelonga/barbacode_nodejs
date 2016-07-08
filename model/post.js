var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  media: { type: String}
});

module.exports = mongoose.model('Post', postSchema);
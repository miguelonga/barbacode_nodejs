var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
  nombre: { type: String },
  apellidos: { type: String },
  edad: { type: String }
});

module.exports = mongoose.model('Person', personSchema);
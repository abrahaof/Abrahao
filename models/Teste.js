var mongoose = require('mongoose');
var perfil = require('./perfil');

var TesteSchema = new mongoose.Schema({
  texto: String,
  numero: Number,
  data: Date,
  checkbox:Boolean,
  perfil:perfil
});

module.exports = mongoose.model('Teste', TesteSchema);


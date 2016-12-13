var mongoose = require('mongoose');

var TesteSchema = new mongoose.Schema({
  texto: String,
  numero: Number,
  data: Date,
  checkbox:Boolean
});

module.exports = mongoose.model('Teste', TesteSchema);


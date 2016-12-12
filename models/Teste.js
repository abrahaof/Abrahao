var mongoose = require('mongoose');

var TesteSchema = new mongoose.Schema({
  texto: String,
  numero: Number,
  data: Date
});

module.exports = mongoose.model('Teste', TesteSchema);


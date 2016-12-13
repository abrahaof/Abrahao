var mongoose = require('mongoose');

var AlunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  email: String,
  telefone: String,
  endereco: String,
  dataNascimento: Date
});

module.exports = mongoose.model('Aluno', AlunoSchema);



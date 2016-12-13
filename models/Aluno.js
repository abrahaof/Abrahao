var mongoose = require('mongoose');

var AlunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  email: string,
  telefone: string,
  endereco: string,
  dataNascimento: Date
});

module.exports = mongoose.model('Aluno', AlunoSchema);



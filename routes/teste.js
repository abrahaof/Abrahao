var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Teste = require('../models/Teste.js');

/* GET /teste Listagem de usuários. */
router.get('/', function(req, res, next) {
  Teste.find(function (err, teste) {
    if (err) return next(err);
    res.json(teste);
  });
});

/* POST /teste Cadastro de usuário */
router.post('/', function(req, res, next) {
  Teste.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /teste/id  Lista filtrada por um usuário*/
router.get('/:id', function(req, res, next) {
  Teste.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /teste/:id Salva a edição de usuário */
router.put('/:id', function(req, res, next) {
  Teste.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /teste/:id Deletando o usuário a partir do id */
router.delete('/:id', function(req, res, next) {
  Teste.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;


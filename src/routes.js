const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');

routes.post('/User', UserController.Store);
routes.get('/user', UserController.SeachUser);
routes.post('/recSenha', UserController.reSenha);



routes.get('/', function(req, res){
    res.sendFile( __dirname + '/views/index.html');
})
routes.get('/Login', function(req, res){
    res.sendFile( __dirname + '/views/login.html');
})

routes.get('/Cadastro', function(req, res){
    res.sendFile( __dirname + '/views/cadastro.html');
})
module.exports = routes;
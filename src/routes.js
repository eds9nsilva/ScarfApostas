const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');
const ApostaController = require('./controller/ApostaController');

routes.post('/User', UserController.Store);
routes.get('/user', UserController.SeachUser);


routes.post('/aposta', ApostaController.Store);
module.exports = routes;
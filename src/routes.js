const express = require('express');
const routes = express.Router();
const UserController = require('./controller/UserController');


routes.post('/User', UserController.Store);

module.exports = routes;
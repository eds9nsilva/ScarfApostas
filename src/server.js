const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
require('./database/index');

const app = express();
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);
app.listen(3333);
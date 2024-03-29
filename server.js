﻿require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./modules/users/users.controller'));
// global error handler
app.use(errorHandler);

// start server
const port = 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
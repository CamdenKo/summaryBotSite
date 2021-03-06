'use strict';

var app = require('express')();
var path = require('path');
// "Enhancing" middleware (does not send response, server-side effects only)

app.use(require('./logging.middleware'));

app.use(require('./body-parsing.middleware'));

app.use('/api', require('../api/'));

// var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
// var indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');
// validFrontendRoutes.forEach(function (stateRoute) {
//   app.get(stateRoute, function (req, res) {
//     res.sendFile(indexPath);
//   });
// });

app.use(require('./statics.middleware'));

// "Error" middleware

// app.use(require('../utils/HttpError')(404).middleware());

// app.use(require('./error.middleware'));

module.exports = app;

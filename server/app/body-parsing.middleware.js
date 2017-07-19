'use strict';
const bodyParser = require('body-parser')

var router = require('express').Router();

module.exports = router
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())


const api = require('express').Router()

api.use('/transcription/', require('./transcription.router'))

api.use(function(req,res){
  res.status(404).end()
})

module.exports = api

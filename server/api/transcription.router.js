const router = require('express').Router()
const HttpError = require('../utils/HttpError')

const db = require('../db')
const Transcription = db.models.Transcription

router.param('id', function(req,res,next,id){
  Transcription.findById(id)
  .then(transcript => {
    if(!transcript) throw HttpError(404)
    req.requestedTranscript = transcript
    next()
  })
  .catch(next)
})

router.post('/', function(req,res) {
  Transcription.create(req.body)
  .then(transcript => res.status(201).json(transcript))
})

module.exports = router

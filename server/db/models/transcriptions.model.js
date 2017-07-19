const Sequelize = require('sequelize')
const db = require('../index.js')

const Transcription = db.define('transcription', {
  // name: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // audioFile: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // body: {
  //   type: Sequelize.TEXT,
  //   allowNull: false,
  // },
})

module.exports = Transcription

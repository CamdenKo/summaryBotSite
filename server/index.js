const app = require('./app')
const db = require('./db')

const port = 8080
const server = app.listen(port, function (err) {
  if(err) throw err
  console.log('Server on port ', port)
  db.didSync
  .then(function(){
    console.log('DB online')
  })
})

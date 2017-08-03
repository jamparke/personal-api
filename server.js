const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// controllers
var middleware = require('./controllers/middleware.js')
var mainCtrl = require('./controllers/mainCtrl.js')

// middleware
app.use(bodyParser.json())
app.use(middleware.addHeaders)

// endpoints
app.get('/api/user/name', mainCtrl.getName)
app.get('/api/user/location', mainCtrl.getLocation)
app.get('/api/user/occupations', mainCtrl.getAllOccupations)
app.get('/api/user/occupations/latest', mainCtrl.getLatestOccupation)
app.get('/api/user/hobbies', mainCtrl.hobbies)
app.get('/api/user/hobbies/:type', mainCtrl.hobbies)

app.listen(3000, function () {
  console.log('Listening on port 3000')
})

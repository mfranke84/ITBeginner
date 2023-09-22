const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Middleware
app.use(bodyParser.json())

// Provide index.html on root
app.use('/', express.static(__dirname + '/dist'))

// Start app to listen on port 3000
app.listen(3000, function(){
    console.log("app listening on port 3000")
});
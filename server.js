const express = require('express')
const app = express()

// Start app to listen on port 3000
app.listen(3000, function(){
    console.log("app listening on port 3000")
});

// Middleware
app.use(bodyParser.json())

// Provide index.html on root
app.use('/', express.static(__dirname + '/'))
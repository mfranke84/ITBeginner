const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var profile = {
    name: "Anna Smith",
    email: "anna.smith@gmail.com",
    interests: "Coding"
}

// Middleware
app.use(bodyParser.json())

// Provide index.html on root
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', function (req, res){
    console.log("get-profile requested")
    res.send(profile)
})

app.post('/update-profile', function(req, res){
    const body = req.body
    if(Object.keys(body).length === 0){
        res.send({error: "Error: Payload is empty - Could not update user profile data"})
    }
    else{
        // Update profile
        profile.name = body.name
        profile.email = body.email
        profile.interests = body.interests
        // Send successfull message 
        res.status(200).send({info: "Profile updated successfully"})
    }



    
})

// Start app to listen on port 3000
app.listen(3000, function(){
    console.log("app listening on port 3000")
});
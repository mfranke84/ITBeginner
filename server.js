const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')

var profile = {
    name: "Anna Smith",
    email: "anna.smith@gmail.com",
    interests: "Coding"
}

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'company_db'
const collName ='employees'


// Middleware
app.use(bodyParser.json())

// Provide index.html on root
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', function (req, res){
    console.log("get-profile requested")
    
    // connect to database

    // get data from database
    
    
    
    res.send(profile)
})

app.post('/update-profile', async function(req, res){
    const body = req.body
    console.log(body)

    // connect to database
    await client.connect();
    console.log('Connected successfully to server');

    // initiate database
    const db = client.db(dbName);
    const collection = db.collection(collName);

    //save payload data to the database
    const insertResult = await collection.insertMany([body]);
    console.log('Inserted documents =>', insertResult);
  

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
    return 'done.'


    
})

// Start app to listen on port 3000
app.listen(3000, function(){
    console.log("app listening on port 3000")
});
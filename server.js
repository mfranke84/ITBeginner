const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')

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

app.get('/get-profile', async function (req, res){
    console.log("get-profile requested")
    
    // connect to database
    await client.connect();
    console.log('Connected successfully to server');

    // initiate database
    const db = client.db(dbName);
    const collection = db.collection(collName);

    // get data from database
    const result = await collection.findOne({ id: 1 });
    console.log(result)
    
    
    res.send(result)
})

app.post('/update-profile', async function(req, res){
    const payload = req.body
    console.log(payload)

    //save payload data to the database
    if(Object.keys(payload).length === 0){
        res.send({error: "Error: Payload is empty - Could not update user profile data"})
    }
    else{
        // connect to database
        await client.connect();
        console.log('Connected successfully to server');

        // initiate database
        const db = client.db(dbName);
        const collection = db.collection(collName);

        // Update profile
        payload['id'] = 1
        const updatedPayload = { $set: payload }
        const insertResult = await collection.updateOne({id: 1},updatedPayload,{upsert: true})
        client.close()
        console.log('Inserted documents =>', insertResult)
        // Send successfull message 
        res.status(200).send({info: "Profile updated successfully"})
    }


    return 'done.'


    
})

// Start app to listen on port 3000
app.listen(3000, function(){
    console.log("app listening on port 3000")
});
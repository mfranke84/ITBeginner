const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const { isInvalidEmail, isEmptyObject } = require('./validator')
const { DB_USER, DB_PASS } = process.env

// Connection URL
//const url = 'mongodb://127.0.0.1:27017'
const url = `mongodb://${DB_USER}:${DB_PASS}@127.0.0.1:27017?authSource=company_db`
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
    client.close()

    response = {}

    if (result !== null) {
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests
        }
    }

    console.log(response)
    res.send(response)
})

app.post('/update-profile', async function(req, res){
    const payload = req.body
    console.log(payload)


    //save payload data to the database
    if( isEmptyObject(payload) || isInvalidEmail(payload) ){
        res.send({error: "Invalid payload - Could not update user profile data"})
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
const server = app.listen(3000, function(){
    console.log("app listening on port 3000")
})

module.exports = {
    app,
    server
}
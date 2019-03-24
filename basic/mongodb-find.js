// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err ,client)=>{
    if(err){
        return console.log("Cant connect to the server...");
    }
    console.log("Connected to MongoDb...");
    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to get data", err);
    });

    // client.close();
});
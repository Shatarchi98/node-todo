// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err ,client)=>{
    if(err){
        return console.log("Cant connect to the server...");
    }
    console.log("Connected to MongoDb...");
    const db = client.db('TodoApp');

    // deleteMany
    db.collection('Todos').deleteMany({text: 'Eat something'}).then((result) => {
        console.log(result);
    });
    
    
    // deleteOne

    // findOneAndDelete


    // client.close();
});
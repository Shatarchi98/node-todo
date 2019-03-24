// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err ,client)=>{
    if(err){
        return console.log("Cant connect to the server...");
    }
    console.log("Connected to MongoDb...");
    const db = client.db('TodoApp');

    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     text: "Walk the dog"
    // },{
    //     $set: {
    //         completed: false
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // updating users age

    db.collection('Users').findOneAndUpdate({
        name: "Andrew"
    },{
        $inc: {
            age: +1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    // client.close();
});










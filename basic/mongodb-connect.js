const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err ,client)=>{
    if(err){
        return console.log("Cant connect to the server...");
    }
    console.log("Connected to MongoDb...");
    const db = client.db('TodoApp');

    // creating Todo

    // db.collection('Todos').insertOne({
    //     text: 'Something we do',
    //     completed: false
    // }, (err, result) => {
    //         if(err){return 'Error inserting Todo', err;}

    //         console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // creating user

    // db.collection('Users').insertOne({
    //     name: 'John',
    //     age: 30,
    //     location: 'Berlin'
    // }, (err, result) => {
    //     if(err){return 'Error creating User', err;}

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
});
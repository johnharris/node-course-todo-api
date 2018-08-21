// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongDB server');
  }
  console.log('Connected to MongDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: 'false'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into the Users collection
  // db.collection('Users').insertOne({
  //   name: 'John',
  //   age: 52,
  //   location: 'Coventry'
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert Users', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });
  
  client.close();
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongDB server');
  }
  console.log('Connected to MongDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name: 'Chris'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("5b7c14034fc6c9107982d914")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
  // client.close();
});

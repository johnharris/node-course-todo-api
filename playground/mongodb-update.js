const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongDB server');
  }
  console.log('Connected to MongDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b81b29a3ee1126d5a41e5c0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b7aafc69bb72c0b09a74f84')
  }, {
    $set: {
      name: 'Johnnie'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // client.close();
});

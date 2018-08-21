const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err){
    return console.log('Unable to connect to MongDB server');
  }
  console.log('Connected to MongDB server');
  const db = client.db('TodoApp');
  db.collection('Todos').find({
      // _id: new ObjectID('5b7c1d6f3a1c636dd5f2af83')
    })
    // .toArray()
    .count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
      // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
  });
  // client.close();
});



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://afeef:afeef@hrms.qyc8v.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


module.exports= uri;
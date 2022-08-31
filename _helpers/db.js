// const config = require('config.json');
// const mongoose = require('mongoose');
// const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
// mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
// mongoose.Promise = global.Promise;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://udhay:passtest@udhaycluster.jje6l.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("users");
  // perform actions on the collection object
  client.close();
});


module.exports = {
    User: require('../modules/users/users.model'),
};
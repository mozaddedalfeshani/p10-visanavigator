const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const result = await client.connect();
    console.log(result);
    const database = client.db("visaease").collection("latestCards");

    const show = await database.find().toArray();
    console.log(show);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");

const port = 8000;
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";
const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db("visaease").collection("latestCards");

    const show = await database.find().toArray();

    //ALL GET , POST
    app.get("/latestCards", async (req, res) => {
      const show = await database.find().toArray();
      res.json(show);
    });
    // console.log(show);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

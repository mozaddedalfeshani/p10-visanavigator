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
    // this const are for lates card faces
    const database = client.db("visaease").collection("latestCards");
    const show = await database.find().toArray();

    //ALL GET , POST
    app.get("/latestCards", async (req, res) => {
      const show = await database.find().limit(6).toArray();
      res.json(show);
    });

    // get specific visa info

    //get visa info
    app.post("/addVisa", async (req, res) => {
      const visa = req.body;
      // for specific user visa info saved in mongo
      const userVisa = client.db("userVisa").collection(visa.userEmail);
      await userVisa.insertOne(visa);
      res.json({ status: "ok" });
    });

    // console.log(show);
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

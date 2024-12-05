const { MongoClient, ObjectID, ObjectId } = require("mongodb");
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
    const database = client.db("visaease").collection("visas");
    const show = await database.find().toArray();

    //ALL GET , POST
    app.get("/latestCards", async (req, res) => {
      const show = await database.find().sort({ _id: -1 }).limit(6).toArray();
      res.json(show);
    });

    // get all visa info
    app.get("/visas", async (req, res) => {
      const visas = await database.find().sort({ _id: -1 }).toArray();
      res.json(visas);
    });

    // get visa info by email
    app.get("/visas/email/:email", async (req, res) => {
      const email = req.params.email;

      const result = await database.find({ email: email }).toArray();
      res.json(result);
    });

    // get visa info by id
    app.get("/visas/id/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await database.findOne(query);
      res.json(result);
    });
    // the address be like http://localhost:8000/visas/id/61f3b3b3b3b3b3b3b3b3b3b3

    //get visa info
    app.post("/addVisa", async (req, res) => {
      const visa = req.body;
      // for specific user visa info saved in mongo
      const userVisa = client.db("userSpecific").collection(visa.email);
      await database.insertOne(visa); // Insert visa into the latestCards collection
      await userVisa.insertOne(visa); // Insert visa into the user's specific collection
      res.json({ status: "ok" });
    });

    // Update visa info
    app.put("/visas/updateVisa:id", async (req, res) => {
      const id = req.params.id;
      const updatedVisa = req.body;
      const result = await database.updateOne(
        { _id: new ObjectID(id) },
        { $set: updatedVisa }
      );
      // res.json({ status: "ok" });
      res.send(result);
    });

    // Delete visa info
    app.delete("/visas/delete/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await database.deleteOne(query);
      // res.json({ status: "ok" });
      res.send(result);
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

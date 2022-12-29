import { Express } from "express";
import { MongoClient } from "mongodb";
const app: Express = require("./app");
const port: number = 3000;

const uri: string = process.env.MONGODB_URI as string;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  return console.log(
    `⚡️[server]: Server is running at https://localhost:${port}`
  );
});

module.exports = app;

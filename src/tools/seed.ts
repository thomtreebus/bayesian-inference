import { seed } from "./seeder";
import { unseed } from "./unseeder";
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri: string = process.env.DB_CONNECTION_URL as string;
/**
 * Connect to the database and run the seeder.
 */
mongoose.connect(uri, async () => {
  console.log("Connected to the database!");
  await unseed(); // Clear the entire database
  await seed(); // Seed the database
  process.exit(); // Disconnect
});

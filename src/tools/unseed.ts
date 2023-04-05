const { unseed } = require("./unseeder");
const mongooses = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const uri: string = process.env.DB_CONNECTION_URL as string;
/**
 * Connect to the database and unseed it
 */
mongooses.connect(uri, async () => {
  console.log("Connected to the database!");
  await unseed(); // Unseed the database
  process.exit();
});

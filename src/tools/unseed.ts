const { unseed } = require("./unseeder");
const mongooses = require("mongoose");

/**
 * Connect to the database and unseed it
 */
mongooses.connect("mongodb://localhost:27017/db", async () => {
  console.log("Connected to the database!");
  await unseed(); // Unseed the database
  process.exit();
});

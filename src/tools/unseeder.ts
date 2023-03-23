const Network = require("../models/Network");

/**
 * Unseed the database by deleting all database documents
 */
export const unseed = async () => {
  await Network.deleteMany({});
  console.log("Finished un-seeding");
};

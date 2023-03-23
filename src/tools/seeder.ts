const Network = require("../models/Network");
import { alarmNodes } from "../../networks/alarm";
import { cancerNodes } from "../../networks/cancer";

/**
 * Seed the database by creating the example networks
 */
export const seed = async () => {
  console.log("Creating alarm network");
  const alarmNetwork = await Network.create({ nodes: alarmNodes });
  console.log("Creating cancer network");
  const cancerNetwork = await Network.create({ nodes: cancerNodes });

  console.log("Finished seeding.");
  console.log("Networks and corresponding IDs in database:");
  console.log("Alarm - ", alarmNetwork.id);
  console.log("Cancer - ", cancerNetwork.id);
};

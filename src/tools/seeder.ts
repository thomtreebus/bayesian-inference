const Network = require("../models/Network");
import { alarmNodes } from "../../networks/alarm";
import { asiaNodes } from "../../networks/asia";
import { allNodes } from "../../networks/big-network";

/**
 * Seed the database by creating the example networks
 */
export const seed = async () => {
  console.log("Creating ALARM network");
  const alarmNetwork = await Network.create({ nodes: alarmNodes });
  console.log("Creating cancer network");
  const asiaNetwork = await Network.create({ nodes: asiaNodes });
  console.log("Creating BIG network");
  const bigNetwork = await Network.create({ nodes: allNodes });

  console.log("Finished seeding.");
  console.log("Networks and corresponding IDs in database:");
  console.log("ALARM - ", alarmNetwork.id);
  console.log("ASIA - ", asiaNetwork.id);
  console.log("BIG - ", bigNetwork.id);
};

import { Request, Response } from "express";
const mongoose = require("mongoose");
const NetworkSchema = require("../models/Network");
import { Network } from "../types";
import validNetwork from "../validation/network";

module.exports.createNetwork = async (req: Request, res: Response) => {
  try {
    // check if input is a valid network
    const network: Network = req.body as Network;
    validNetwork(network);

    // create new network and save to db
    const nodes = Object.values(req.body);
    const newNetwork = await NetworkSchema.create({ nodes: nodes });
    await newNetwork.save();

    return res.status(200).json({
      message: "network successfully created",
      networkId: newNetwork.id,
    });
  } catch (error: any) {
    const statusCode = res.statusCode ? res.statusCode : 500;
    // res.status(statusCode);

    res.status(statusCode).json({
      message: error.message,
      stack: error.stack,
    });
  }
};

module.exports.inference = async (req: Request, res: Response) => {
  console.log(req.body);
  let status = 400;
  try {
    const body = req.body;
    const network = await NetworkSchema.findById({
      _id: new mongoose.Types.ObjectId(body.network),
    });
    if (!network) {
      status = 404;
      throw Error("Network does not exist");
    }

    const algorithm = body.algorithm;
    if (algorithm !== "VE" || algorithm !== "LW") {
      status = 404;
      throw Error("Not a valid algorithm");
    }

    if (algorithm === "LW" && !body.sampleSize) {
      status = 400;
      throw Error("Sample Size required for LW algorithm");
    }

    res.status(200).json({ message: "success!" });
  } catch (err: any) {
    res.status(status).json({ message: err.message, stack: err.stack });
  }
};

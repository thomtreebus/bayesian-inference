import { Request, Response } from "express";
const mongoose = require("mongoose");
const NetworkSchema = require("../models/Network");
import { Network, Combinations } from "../types";
import { createNetwork } from "../../src/utils/network";
import { inferenceAlgorithms } from "../../src";

const { variableElimination, likelihoodWeighting } = inferenceAlgorithms;
import validNetwork from "../validation/network";

/**
 * Create a Bayesian network and store it in the database.
 * In the response, include the id of the network in the database.
 *
 * @param {Request} req - The request
 * @param {Response} res - The response
 * @async
 */
module.exports.createNetwork = async (req: Request, res: Response) => {
  let status = 400;
  try {
    // check if input is a valid network
    if (Object.entries(req.body).length === 0) {
      throw Error("request body must include a network");
    }
    const network: Network = req.body as Network;
    validNetwork(network);

    // create new network and save to db
    const nodes = Object.values(req.body);
    const newNetwork = await NetworkSchema.create({ nodes: nodes });
    await newNetwork.save();
    // console.log(newNetwork);
    return res.status(200).json({
      message: "network successfully created",
      networkId: newNetwork.id,
    });
  } catch (error: any) {
    // const statusCode = res.statusCode ? res.statusCode : 500;
    // res.status(statusCode);

    res.status(status).json({
      message: error.message,
    });
  }
};

/**
 * Run inference using the details provided in the body.
 * The body should include:
 *  - networkId
 *  - algorithm
 *  - query
 *  - evidence
 *  - sampleSize (if algorithm is likelihood weighting)
 *
 * @param {Request} req - The request
 * @param {Response} res - The response
 * @async
 */
module.exports.inference = async (req: Request, res: Response) => {
  let status = 400;
  try {
    const body = req.body;
    const { networkId, algorithm, sampleSize } = body;
    const query = body.query as Combinations;
    const evidence = body.evidence as Combinations;
    const networkFromDB = await NetworkSchema.findById({
      _id: new mongoose.Types.ObjectId(networkId),
    });

    if (!networkId || !algorithm || !query || !evidence) {
      status = 400;
      throw Error(
        "Please make sure all required body elements are included in the request"
      );
    }
    if (!networkFromDB) {
      status = 404;
      throw Error(`Network with id ${networkId} does not exist`);
    }

    const network = createNetwork(...networkFromDB.nodes);

    if (algorithm !== "VE" && algorithm !== "LW") {
      status = 404;
      throw Error(`${algorithm} is not a valid algorithm`);
    }

    if (algorithm === "LW" && !sampleSize) {
      status = 400;
      throw Error("Sample Size required for LW algorithm");
    }

    let result = 0;
    if (algorithm === "VE") {
      result = variableElimination.infer(
        network,
        body.query as Combinations,
        body.evidence as Combinations,
        0
      );
    }
    if (algorithm == "LW") {
      result = likelihoodWeighting.infer(
        network,
        body.query as Combinations,
        body.evidence as Combinations,
        sampleSize
      );
    }
    res.status(200).json({
      message: "success!",
      query: `P(${Object.keys(query)}|${Object.keys(evidence)})`,
      probability: result,
    });
  } catch (err: any) {
    res.status(status).json({ message: err.message });
  }
};

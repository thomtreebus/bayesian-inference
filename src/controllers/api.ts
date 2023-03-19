import { Request, Response } from "express";

import { Network } from "../types";
import validNetwork from "../validation/network";

module.exports.createNetwork = async (req: Request, res: Response) => {
  try {
    const network: Network = req.body as Network;
    validNetwork(network);

    return res.status(200).json({ success: "network successfully created" });
  } catch (error: any) {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    res.json({
      message: error.message,
      stack: error.stack,
    });
  }
};

module.exports.inference = async (req: Request, res: Response) => {
  res.status(200).json({ message: "success!" });
};

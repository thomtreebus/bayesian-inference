import { Request, Response } from "express";

module.exports.createNetwork = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    return res.status(200).json({ success: "network successfully created" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

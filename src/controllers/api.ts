import { Request, Response } from "express";

module.exports.createNetwork = async (req: Request, res: Response) => {
  try {
    const { hello } = req.body;
    console.log(hello);
    return res.status(200).json({ success: "create network" });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

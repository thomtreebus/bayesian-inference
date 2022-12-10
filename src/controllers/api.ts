import { Request, Response } from "express";

module.exports.createNetwork = async (req: Request, res: Response) => {
  res.json({ create: "network" });
  console.log(req);
};

import { Request, Response } from "express";

module.exports.createNetwork = async (req: Request, res: Response) => {
  try {
    if (!req.body.name) {
      res.status(400);
      throw new Error("Please include a network name in the request body.");
    }
    console.log(req.body);
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

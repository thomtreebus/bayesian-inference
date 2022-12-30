import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const apiRoute = require("./routes/api");
const app: Express = express();

dotenv.config();

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`✉ [database] Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.use(express.json());

app.use("/", apiRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ ping: "pong" });
});

module.exports = app;

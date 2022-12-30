import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const apiRoute = require("./routes/api");
const app: Express = express();

dotenv.config();

app.use(express.json());

app.use("/", apiRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ ping: "pong" });
});

module.exports = app;

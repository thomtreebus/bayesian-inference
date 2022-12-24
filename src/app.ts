import express, { Express, Request, Response } from "express";
const apiRoute = require("./routes/api");
const app: Express = express();

app.use("/", apiRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ ping: "pong" });
});

module.exports = app;

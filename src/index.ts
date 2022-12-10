import express, { Express, Request, Response } from "express";
const apiRoute = require("./routes/api");
const app: Express = express();
const port: number = 3000;

app.use("/", apiRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/ping", (req: Request, res: Response) => {
  res.json({ ping: "pong" });
});

app.listen(port, () => {
  return console.log(
    `⚡️[server]: Server is running at https://localhost:${port}`
  );
});

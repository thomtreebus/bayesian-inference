import { Express } from "express";
const app: Express = require("./app");
const port: number = 3000;

app.listen(port, () => {
  return console.log(
    `⚡️[server]: Server is running at https://localhost:${port}`
  );
});

module.exports = app;

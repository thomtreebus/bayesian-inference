import { Express } from "express";
import mongoose from "mongoose";
const app: Express = require("./app");
const port: number = 3000;

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/db");
    mongoose.set("strictQuery", false);
    console.log(`✉ [database] Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();

app.listen(port, () => {
  return console.log(
    `⚡️[server]: Server is running at https://localhost:${port}`
  );
});

module.exports = app;

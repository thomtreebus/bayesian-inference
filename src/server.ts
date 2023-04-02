import { Express } from "express";
import mongoose from "mongoose";
const app: Express = require("./app");
const port: number = 8000;
const dbUrl: string = process.env.DB_CONNECTION_URL as string;
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(dbUrl);
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
    `⚡️[server]: Server is running at ${process.env.URI}${port}`
  );
});

module.exports = app;

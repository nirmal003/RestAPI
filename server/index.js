import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hi...this is home page");
});

mongoose.set("strictQuery", true);

mongoose.connect(process.env.DB_CONNECTION, console.log("DB"));

app.listen(5000, (req, res) => {
  console.log("sever running on 5000 port");
});

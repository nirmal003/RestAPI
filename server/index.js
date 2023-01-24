import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi...this is home page");
});

app.listen(5000, (req, res) => {
  console.log("sever running on 5000 port");
});

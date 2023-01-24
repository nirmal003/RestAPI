import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hi...this is home page");
});

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(5000, () => {
      console.log("sever running on 5000 port");
    })
  )
  .catch((err) => console.log(err.message));

// app.listen(5000, () => {
//   console.log("sever running on 5000 port");
// });

import express from "express";

import users from "../models/users.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await users.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Somthing went wrong");
  }
});

router.post("/data", async (req, res) => {
  console.log(req.body);

  try {
    const user = await new users({
      name: req.body.name,
      age: req.body.age,
    });

    const saveUser = await user.save();

    res.status(200).json(saveUser);
  } catch (error) {
    res.status(404).json("Somthing went wrong");
  }
});

export default router;

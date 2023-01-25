import express from "express";

import {
  getAllUsers,
  getUser,
  postUser,
  removeUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/post", postUser);
router.get("/:id", getUser);
router.delete("/delete/:id", removeUser);
router.patch("/update/:id", updateUser);

export default router;

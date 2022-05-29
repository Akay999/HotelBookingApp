import express from "express";
import { deleteUser, getAllUser, getUserById, updateUser } from "../Controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verfyToken.js";

const router = express.Router();


//  UPDATE
router.put("/:id", verifyUser, updateUser);

//  DELETE
router.delete("/:id", verifyUser, deleteUser);

//  GET
router.get("/:id", verifyUser, getUserById);

//  GETALL
router.get("/", verifyAdmin, getAllUser);


export default router;
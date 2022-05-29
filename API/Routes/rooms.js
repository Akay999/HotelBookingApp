import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoomByID, updateRoom } from "../Controllers/roomController.js";
import { verifyAdmin } from "../utils/verfyToken.js";

const router = express.Router();

//  CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

//  UPDATE
router.put("/:id", verifyAdmin, updateRoom);

//  DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//  GET
router.get("/:id", getRoomByID);

//  GETALL
router.get("/", getAllRooms);


export default router;
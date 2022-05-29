import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../Controllers/hotelController.js";
import { verifyAdmin } from "../utils/verfyToken.js"

const router = express.Router();

//  CREATE
router.post("/", verifyAdmin, createHotel);

//  UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//  DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//  GET
router.get("/:id", getHotelById);

//  GETALL
router.get("/", getAllHotels);

export default router;
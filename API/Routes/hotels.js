import express from "express";
import { createHotel, deleteHotel, getAllByCity, getAllByType, getAllHotels, getHotelById, updateHotel } from "../Controllers/hotelController.js";
import { verifyAdmin } from "../utils/verfyToken.js"

const router = express.Router();

//  CREATE
router.post("/", verifyAdmin, createHotel);

//  UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//  DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//  GET
router.get("/find/:id", getHotelById);

//  GETALL
router.get("/", getAllHotels);

//  GETALL BY CITY NAME
router.get("/countByCity", getAllByCity);

//  GETALL ALL BY TYPE
router.get("/countByType", getAllByType);

export default router;
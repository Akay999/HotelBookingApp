import Hotels from "../Models/Hotels.js";
import Rooms from "../Models/Rooms.js";
import { createError } from "../utils/Error.js";


export const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelId;
    const newRoom = new Rooms(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotels.findByIdAndUpdate(hotelId, {$push : { rooms : savedRoom._id}});
        }
        catch(err) {
            next(err);
        }

        res.status(200).json(savedRoom);
    }
    catch(err) {
        next(err);
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Rooms.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true});
        res.status(200).json(updatedRoom);
    }
    catch(err) {
        next(err);
    }
};


export const deleteRoom = async (req, res, next) => {
    try {
        await Rooms.findByIdAndDelete(req.params.id);
        try {
            await Hotels.findByIdAndUpdate(req.params.hotelId, {$pull : { rooms : req.params.id}});
        }
        catch(err) {
            next(err);
        }
        res.status(200).json("Deleted Successfully");
    }
    catch(err) {
        next(err);
    }
};


export const getRoomByID = async (req, res, next) => {
    try {
        const fetchedRoom = await Rooms.findById(req.params.id);
        res.status(200).json(fetchedRoom);
    }
    catch(err) {
        next(err);
    }
};


export const getAllRooms = async (req, res, next) => {
    try {
        const allRooms = await Rooms.find();
        res.status(200).json(allRooms);
    }
    catch(err) {
        next(err);
    }
};
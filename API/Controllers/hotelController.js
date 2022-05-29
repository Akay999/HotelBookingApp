import Hotel from "../Models/Hotels.js";
import { createError } from "../utils/Error.js";


export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

    try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
    }
    catch(err) {
        next(err);
    }
};


export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true});
        res.status(200).json(updateHotel);
    }
    catch(err) {
        next(err);
    }
};


export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Successfully");
    }
    catch(err) {
        next(err);
    }
};


export const getHotelById = async (req, res, next) => {
    try {
        const fetchHotel = await Hotel.findById(req.params.id);
        res.status(200).json(fetchHotel);
    }
    catch(err) {
        next(err);
    }
};


export const getAllHotels = async (req, res, next) => {
    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    }
    catch(err) {
        next(err);
    }
};


export const getAllByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city : city})
        }))
        res.status(200).json(list);
    }
    catch(err) {
        next(err);
    }
};


export const getAllByType = async (req, res, next) => {
    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    }
    catch(err) {
        next(err);
    }
};




//FOR CRETAING CUSTOM ERROR ON SOME CONDITION WE CAN USE
// failed = true;
// if(failed) return next(creatError(401, "Something happeded!"));

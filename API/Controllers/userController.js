import User from "../Models/User.js";
import { createError } from "../utils/Error.js";



export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true});
        res.status(200).json(updateUser);
    }
    catch(err) {
        next(err);
    }
};


export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User Deleted Successfully");
    }
    catch(err) {
        next(err);
    }
};


export const getUserById = async (req, res, next) => {
    try {
        const fetchUser = await User.findById(req.params.id);
        res.status(200).json(fetchUser);
    }
    catch(err) {
        next(err);
    }
};


export const getAllUser = async (req, res, next) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    }
    catch(err) {
        next(err);
    }
};




//FOR CRETAING CUSTOM ERROR ON SOME CONDITION WE CAN USE
// failed = true;
// if(failed) return next(creatError(401, "Something happeded!"));

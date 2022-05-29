import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/Error.js";

export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hash
        });

        await newUser.save();
        res.status(201).json("New user created Successfully");
    }
    catch(err) {
        next(err);
    }
};


export const login = async (req, res, next) => {
    try {
        const userOne = await User.findOne({username : req.body.username});
        if(!userOne) {
            return next(createError(401, "User not found!"));
        }

        const isPasswordCorrect = await bcrypt.compare(req.body.password, userOne.password );
        if(!isPasswordCorrect) return next(createError(400, "Password incorrect"));

        //CREATING A JSON WEB TOKEN FOR THE USER.
        const token = jwt.sign({id : userOne.id, isAdmin : userOne.isAdmin}, process.env.JWT);

        const {password, isAdmin, ...otherDetails} = userOne._doc;

        res.cookie("access_token", token, {
            httpOnly : true,
        }).status(200).json({...otherDetails});
    }
    catch(err) {
        next(err);
    }
}
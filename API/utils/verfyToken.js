import jwt from "jsonwebtoken";
import { createError } from "./Error.js";

export const verifyToken  = async (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) return next(createError(401, "You are not Authenticated"));

    jwt.verify(token, process.env.JWT, (err, info) => {
        if(err) return next(createError(403, "Token is not valid"));
        req.user = info;

        next();
    })
};

export const verifyUser = async (req, res, next) => {
    verifyToken(req, res, (err) => {
        if(err) return next(err);
        if((req.user.id === req.params.id) || req.user.isAdmin) next();
        else {
            return next(createError(403, "Permission denied cannot delete the user."));
        }
    })
};


export const verifyAdmin = async (req, res, next) => {
    verifyToken(req, res, (err) => {
        if(err) return next(err);
        if(req.user.isAdmin) next();
        else {
            return next(createError(403, "Permission denied not an admin."));
        }
    })
};


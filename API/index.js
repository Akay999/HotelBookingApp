import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import authRouter from "./Routes/auth.js";
import hotelRouter from "./Routes/hotels.js";
import userRouter from "./Routes/users.js";
import roomRouter from "./Routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()


//CONNECTION TO THE DATABASE.
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to Mongodb..");
    } catch(err) {
        throw err;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
})
// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected");
// })

// BY DEFAULT WE CANNOT SEND JSON TO THE EXPRESS SERVER SO WE HAVE TO USE THIS.
app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Welcome to the booking app");
})

//MIDDLEWARES. ( WE USE MIDDLEWARES BY app.use();
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/hotels", hotelRouter);
app.use("/rooms", roomRouter);

//ERROR HANDLING MIDDLEWARE.
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    });
});

const port = process.env.port ||  7070;
app.listen(port, () => {
    connectDB();
    console.log("Listening on port ", port, " ...");
})





// FOR VERIFYING THE TOKEN FUNCTIONALITY WE CAN USE

// router.get("/checkAuth", verifyToken, (req, res, next) => {
//     res.send("Hello, you are authenticated");
// });


// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//     res.send("Permission granted");
// });


// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Permission granted");
// });

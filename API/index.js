import express from "express";
import dotenv from "dotenv";
import mongoose  from "mongoose";
import authRouter from "./Routes/auth.js";
import hotelRouter from "./Routes/hotels.js";
import userRouter from "./Routes/users.js";
import roomRouter from "./Routes/rooms.js";

const app = express();
dotenv.config()


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


app.get("/", (req, res) => {
    res.send("Welcome to the booking app");
})

//MIDDLEWARES. ( WE USE MIDDLEWARES BY app.use();

app.use("/auth", authRouter);
app.use("/users", authRouter);
app.use("/hotels", authRouter);
app.use("/rooms", authRouter);

const port = process.env.port ||  7070;
app.listen(port, () => {
    connectDB();
    console.log("Listening on port ", port, " ...");
})
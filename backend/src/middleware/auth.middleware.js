import { getAuth } from "@clerk/express";
import User from "../models/user.model.js";


export async function protectRoutes(req, res, next) {
    try {
        const {userId }= getAuth(req);

    if(!userId) {
        res.status(401).json({message: "Unauthorized"});
        return;
    }

    const user = User.findOne({clerkId:userId});

    if(!user) {
        res.status(404).json({ message: "User profile is not yet synced"});
        return;
    }

    req.user = user;
    next();
    } catch (error) {
        console.error("Error in protectRoutes middleware", error.message);
        res.status(500).json({message: "internal server error"});
    }
}
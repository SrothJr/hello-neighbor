import mongoose from "mongoose";

export async function connectDB() {
    try {
        const mongoUri = process.env.MONGODB_URI;

        if(!mongoUri) {
            throw new Error("MONGODB_URI is needed!")
        }

        const conn = await mongoose.connect(mongoUri, {dbName: "hello_neighbor"});

        console.log("MONGODB connected ", conn.connection.host, conn.connection.name);
    } catch (error) {
        console.log("MONGO DB CONNECTION ERROR", error.message);
        process.exit(1);
    }
}
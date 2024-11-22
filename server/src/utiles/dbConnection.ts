import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        if (!process.env.DB_URL) {
            throw new Error('CRYPTR_KEY is not set. Please define it in the environment variables.');
        }
        await mongoose.connect(process.env.DB_URL!)
        return true
    } catch (err) {
        console.error(err);
        return false
    }
}
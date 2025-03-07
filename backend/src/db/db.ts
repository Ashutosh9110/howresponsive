import mongoose from 'mongoose';

export const connectDB = async () => {
    const DB_URL = process.env.MONGODB_URI;
        try {
        if(!DB_URL){
            console.log('db url not defined');
            return
        }
        await mongoose.connect(DB_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
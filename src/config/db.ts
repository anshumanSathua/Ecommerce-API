import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MONGODB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Connectio failed!");
    process.exit(1);
  }
};

export default connectDb;

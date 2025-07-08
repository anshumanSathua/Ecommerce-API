import mongoose from "mongoose";
import { env } from "./env";

const { dbUri } = env;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(dbUri);
    console.log(`MONGODB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Connectio failed!");
    process.exit(1);
  }
};

export default connectDb;

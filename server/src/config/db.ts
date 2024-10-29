import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://ProjectPlannerDev:jnXpBUbGkEZW0Me3@projectplanner.zuqhq.mongodb.net/project_planner";

export const connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB Connected");
    } catch (error) {
      console.error("MongoDB connection error:", error);
    }
  };
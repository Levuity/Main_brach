// connect.js
require("dotenv").config({ path: __dirname + "/.env" }); // load .env at the very top
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("Error: MONGODB_URI is not defined in .env");
  process.exit(1);
}

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 60000,
      maxPoolSize: 10,
      socketTimeoutMS: 45000
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { login, register } from "./Controller/auth.js";

const app = express();

dotenv.config();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Set endpoints
app.post("/api/auth/register", register); // Assuming register handles POST requests
app.post("/api/auth/login", login); // Assuming login handles POST requests

const DatabaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Connection Error:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected!");
});

mongoose.connection.on("error", (error) => {
  console.error("MongoDB Connection Error:", error);
});

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

const port = process.env.PORT || 5000;

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  DatabaseConnection();
  console.log(`Server listening on port ${port}`);
});

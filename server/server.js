import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js"; 

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route (Optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB and Start Server
 connectDB()
  .then(() => {
    console.log("MongoDB Connected...");

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); 
  });

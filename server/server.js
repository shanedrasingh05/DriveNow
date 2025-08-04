import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js"; 
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route (Optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

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


import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;


// app.get("/", (req, res) => res.send("Server is running"));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
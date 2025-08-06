import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Car from "../models/Car.js"

// Generate JWt token

const  generateToken = (userId) =>{
    const payload =userId
    // const payload = { id: userId };
    return jwt.sign(payload, process.env.JWT_SECRET);
}

// Register User
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password || password.length < 8) {
      return res.json({ success: false, message: "Fill all the fields" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    const token = generateToken(user._id.toString());

    res.json({ message: "User registered successfully", success: true, token });

   
  } catch (error) {
    // ... (error handling)
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};



// User login

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = generateToken(user._id.toString());
    res.json({message: "User logged in successfully", success: true, token });



  } catch (error) {
    // Handle potential errors
     console.log(error.message);
     res.json({ success: false, message: error.message });
  }
};


// Get user Data using jwt token

export const getUserData = async (req, res) => {
  try {
    const { user } = req;
    res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


// Get All Cars for the Frontend
export const getCars = async (req, res)=>{
    try {
        const cars = await Car.find({isAvaliable: true})
        res.json({success: true, cars})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}






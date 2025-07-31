import jwt from "jsonwebtoken";
import User from "../models/User";
import bcrypt from "bcryptjs";


// Generate JWt token

const  generateToken = (userId) =>{
    const payload =userId
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
}

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

    res.json({ success: true, token });

   
  } catch (error) {
    // ... (error handling)
    console.log(error);
  }
};

import express from "express";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
const router = express.Router();
import { sendOtpEmail } from "../utils/email.js";
import { otpgenerator } from "../utils/otp.js";

router.post("/signup", async function (req, res) {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "Sign-up successful", user: newUser });
  } catch (error) {
    console.error("Error signing up user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    return res.status(200).json({ message: "Sign-in successful", user });
  } catch (error) {
    console.error("Error signing in user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

// router.post("/forgotpassword", async function (req, res) {
//   try {
//     const { email } = req.body;
//     if (!email) {
//       return res.status(400).json({ message: "Email required" });
//     }
//     const otp = otpgenerator();
//     await sendOtpEmail(otp, email);
//     console.log("OTP:", otp);

//     return res.status(201).json({ message: "OTP sent successfully", otp });
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

export default router;

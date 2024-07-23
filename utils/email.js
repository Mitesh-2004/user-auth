import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASS,
  },
});

export function sendOtpEmail(otp, email) {
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code user-authentication web application is ",
    text: `Your OTP code is ${otp}, please do not share this code with anyone.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db.js";
import authRoutes from "./routes/user.js";
dotenv.config();
const app = express();

connectToDB(process.env.URI);

app.use(express.json());
app.use(cors());

app.use("/api/v1", authRoutes);

app.listen(process.env.PORT, function () {
  console.log(`Server running on ${process.env.PORT}`);
});

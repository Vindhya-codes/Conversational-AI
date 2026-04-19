import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.ts";
import chatRoute from "./routes/chat.ts";

dotenv.config();

const startServer = async () => {

  await connectDB();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/chat", chatRoute);

  app.get("/", (req, res) => {
    res.send("Backend is running successfully 🚀");
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

};

startServer();
import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";
import Groq from "groq-sdk";
import dotenv from "dotenv";

import Chat from "../models/Chat";

dotenv.config();

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(
    process.env.MONGO_URI!
  );
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    await connectDB();

    const { message } = req.body;

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY!
    });

    const completion =
      await groq.chat.completions.create({
        model:
          "llama-3.1-8b-instant",
        messages: [
          {
            role: "user",
            content:
              `Answer clearly using headings, numbered steps, and bullet points when appropriate:

${message}`
          }
        ]
      });

    const reply =
      completion?.choices?.[0]?.message
        ?.content ||
      "No response generated.";

    await Chat.create({
      userMessage: message,
      aiResponse: reply
    });

    return res.status(200).json({
      reply
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error:
        "AI response failed"
    });

  }

}
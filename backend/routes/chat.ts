import express from "express";
import Groq from "groq-sdk";
import Chat from "../models/Chat.ts";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    //console.log("API KEY EXISTS:", process.env.GROQ_API_KEY);

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      });

      //console.log("Completion response:", completion);

    const reply = completion.choices?.[0]?.message?.content ?? "No response generated";

    if (reply) {
  await Chat.create({
    userMessage: message,
    aiResponse: reply
  });
}

    res.json({
      reply
    });

  } catch (error) {

    console.error("FULL ERROR:", error);
    //console.error(error);

    res.status(500).json({
      error: "AI response failed"
    });

  }

});

export default router;
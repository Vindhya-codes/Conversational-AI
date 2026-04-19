import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userMessage: {
    type: String,
    required: true,
  },

  aiResponse: {
    type: String,
    required: true,
  },
  
});

export default mongoose.model("Chat", chatSchema);
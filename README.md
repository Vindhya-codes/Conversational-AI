Conversational AI Web Assistant (Full-Stack)
Project Overview

This project is a full-stack conversational AI web application that allows users to interact with an AI assistant through a clean browser interface. The system accepts a user query, forwards it to an AI model via API, and displays the generated response in real time.

The backend integrates the Groq API (llama-3.1-8b-instant model) and stores interactions in MongoDB Atlas, while the frontend provides a responsive React-based interface for user interaction.

This project demonstrates:

full-stack architecture design
serverless API deployment
cloud database integration
third-party AI API usage
production deployment workflow
Features
Accepts natural language user queries
Sends queries to Groq LLM API
Returns AI-generated responses instantly
Stores chat interactions in MongoDB
Clean React UI for structured response display
Serverless backend deployment
Cloud database connectivity
Tech Stack Explanation
Frontend

Built using:

React
Vite
Bun (package/runtime manager)
TypeScript
CSS

Responsibilities:

Accept user input
Send POST requests to backend API
Display structured AI responses
Backend

Built using:

Node.js
Express.js
Bun runtime
TypeScript
Groq SDK

Responsibilities:

Accept API requests
Forward prompts to Groq model
Return generated responses
Store conversation data in MongoDB
Database

Database used:

MongoDB Atlas (Cloud-hosted NoSQL database)

Stores:

{
  "userMessage": "...",
  "aiResponse": "..."
}
AI Model

Provider:

Groq API

Model:

llama-3.1-8b-instant

Capabilities:

fast inference
natural conversation responses
free-tier accessible
optimized latency
Project Folder Structure
conv_ai/
│
├── backend/
│   ├── api/
│   │   └── chat.ts
│   ├── config/
│   │   └── db.ts
│   ├── models/
│   │   └── Chat.ts
│   ├── routes/
│   │   └── chat.ts
│   ├── index.ts
│   └── vercel.json
│
├── frontend/
│   ├── src/
│   │   └── App.tsx
│   └── index.html
│
└── README.md
Setup Instructions

Follow these steps to run the project locally.

1. Clone repository
git clone <repository-url>
cd conv_ai
2. Install Bun (if not installed)

Linux / Mac:

curl -fsSL https://bun.sh/install | bash

Verify installation:

bun --version
3. Setup Backend

Navigate to backend folder:

cd backend

Install dependencies:

bun install

Create .env file:

GROQ_API_KEY=your_groq_api_key
MONGO_URI=your_mongodb_connection_string

Run backend:

bun run index.ts

Backend runs at:

http://localhost:5000
4. Setup Frontend

Navigate to frontend folder:

cd ../frontend

Install dependencies:

bun install

Start frontend:

bun run dev

Frontend runs at:

http://localhost:5173
API Usage Details
Endpoint
POST /api/chat
Request Body

Example:

{
  "message": "Explain recursion simply"
}
Response Format

Example:

{
  "reply": "Recursion is a function calling itself..."
}
API Flow
Frontend → Express Backend → Groq API
                      ↓
                  MongoDB Atlas
Deployment Steps

The application is deployed using serverless backend architecture.

Backend Deployment (Vercel)

Steps followed:

Converted Express routes into serverless API format
Added vercel.json
Installed Vercel CLI
bun add -g vercel
vercel login
vercel
Added environment variables:
MONGO_URI
GROQ_API_KEY
Disabled deployment protection for public access
Allowed MongoDB Atlas cloud access:
0.0.0.0/0
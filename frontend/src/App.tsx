import { useState } from "react";

function App() {

  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async () => {

    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {

      const response =
        await fetch(
          "http://localhost:5000/chat",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              message: message
            })
          }
        );

      const data =
        await response.json();

      setReply(data.reply);

    } catch {

      setReply(
        "Error contacting server"
      );

    }

    setLoading(false);

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "#f4f6f8",
        display: "flex",
        flexDirection:
          "column",
        alignItems:
          "center",
        justifyContent:
          "center",
        fontFamily:
          "Arial, sans-serif"
      }}
    >

      {/* Title */}

      <h1
        style={{
          marginBottom:
            "20px"
        }}
      >
        AI Assistant
      </h1>

      {/* Input Card */}

      <div
        style={{
          background:
            "white",
          padding:
            "30px",
          borderRadius:
            "12px",
          boxShadow:
            "0px 4px 12px rgba(0,0,0,0.1)",
          width: "420px"
        }}
      >

        <input
        type="text"
        placeholder="Ask your question..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
  disabled={loading}
          style={{
            width: "100%",
            padding:
              "12px",
            borderRadius:
              "8px",
            border:
              "1px solid #ccc",
            marginBottom:
              "15px"
          }}
        />

        <button
          onClick={
            sendMessage
          }
          style={{
            width: "100%",
            padding:
              "12px",
            background:
              "#2c3e50",
            color: "white",
            border: "none",
            borderRadius:
              "8px",
            cursor: "pointer"
          }}
        >
          Send
        </button>

      </div>

      {/* Response Card */}

      {loading && (

        <p
          style={{
            marginTop:
              "20px"
          }}
        >
          Generating response...
        </p>

      )}

      {reply && (

        <div
          style={{
            marginTop:
              "25px",
            background:
              "white",
            padding:
              "25px",
            borderRadius:
              "12px",
            width: "420px",
            boxShadow:
              "0px 4px 12px rgba(0,0,0,0.1)"
          }}
        >

          <h3>
            Response
          </h3>

          <p>
            {reply}
          </p>

        </div>

      )}

    </div>

  );

}

export default App;
import { useState } from "react";
// import { GoogleGenAI } from "@google/genai";
import { Assistant } from "./assistants/googleai.js";
import { Chat } from "./components/Chat/Chat.jsx";
import { Controls } from "./components/Controls/Controls.jsx";
import styles from "./app.module.css";

// const ai = new GoogleGenAI({
//   apiKey: "AIzaSyCbuYcVoOtZuOLbHsTdZkbQ5a_cUB44JpA",
// });

// const chat = ai.chats.create({
//   model: "gemini-2.0-flash",
//   history: [],
// });

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);

  function addMessages(messages) {
    setMessages((prevMessages) => [...prevMessages, ...messages]);
  }

  async function handleContentSend(content) {
    addMessages([{ content: content, role: "user" }]);
    try {
      const response = await assistant.chat(content);
      addMessages([{ content: response, role: "assistant" }]);
    } catch (error) {
      console.error(error);
      addMessages([
        {
          content: `Sorry, something went wrong: ${error.message}`,
          role: "system",
        },
      ]);
    }
  }

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img className={styles.logo} src="./bmo-bot.svg"></img>
        <h2 className="Title">AI Chat Bot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>
  );
}

export default App;

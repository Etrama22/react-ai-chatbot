import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

export class Assistant {
  #chat;

  constructor(model = "gemini-2.0-flash") {
    this.#chat = ai.chats.create({
      model,
      history: [],
    });
  }

  async chat(content) {
    try {
      const response = await this.#chat.sendMessage({ message: content });
      return response.text;
    } catch (error) {
      console.error(error);
      return `Sorry, something went wrong: ${error.message}`;
    }
  }
}

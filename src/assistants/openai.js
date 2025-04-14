import openai from "openai";

const apiKey = import.meta.env.VITE_OPEN_AI_API_KEY;
const ai = new openai({ apiKey });
export default ai;

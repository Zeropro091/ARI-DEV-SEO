import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (
  history: { role: string; parts: { text: string }[] }[],
  message: string
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "SYSTEM_ERR: API_KEY_MISSING. Please configure the environment.";
  }

  try {
    // Construct a prompt that includes context about the portfolio owner
    const systemInstruction = `
      You are the digital twin of Ari, a Senior Full Stack Engineer. 
      You live inside this neubrutalist portfolio website.
      Your personality is: Witty, direct, slightly robotic but helpful, and confident.
      
      About Ari:
      - Expert in React, TypeScript, Node.js, and WebGL.
      - Loves minimalism, brutalism, and clean code.
      - Based in San Francisco.
      - 5 years of experience in building scalable web apps.
      - Hobbies: Photography, Mechanical Keyboards, and Espresso.
      
      Rules:
      - Keep answers concise (under 3 sentences usually).
      - Use some tech jargon where appropriate but stay accessible.
      - If asked about contact, direct them to the "Send Signals" section.
      - If asked about projects, mention "Selected Chaos" section.
      - Do not hallucinate projects that aren't mentioned.
    `;

    // We use a simple generateContent call here for stateless simplicity in this demo,
    // but effectively we simulate chat by passing the current user message with context.
    // For a full chat history, we would use ai.chats.create, but here we just do single turn for simplicity or minimal history.
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "NO_DATA_RECEIVED";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "SYSTEM_ERR: CONNECTION_LOST. Try again later.";
  }
};
import { GoogleGenerativeAI } from "@google/generative-ai"

const googleai = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY)

export class Assistant {
    #chat

    constructor(model = "gemini-2.5-flash") {
        const gemini = googleai.getGenerativeModel({
            model: model,
            systemInstruction: "You are Gemini X, a minimal and helpful AI assistant. Always provide concise, accurate, and professional responses. Avoid excessive fluff or unnecessary explanations unless specifically asked. Focus on the user's specific question.",
            generationConfig: {
                maxOutputTokens: 800,
                temperature: 0.7,
            }
        })
        this.#chat = gemini.startChat({ history: [] })
    }

    async chat(content) {
        try {
            const result = await this.#chat.sendMessage(content)
            return result.response.text()
        } catch (error) {
            throw error
        }
    }
}
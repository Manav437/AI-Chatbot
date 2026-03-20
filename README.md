# Gemini X

<div align="center">
  <img src="public/gemini-icon.png" alt="Gemini X Logo" width="50" />
  <h3>The future of real-time intelligence is here.</h3>
  <p>A premium, state-of-the-art AI chatbot interface powered by Google's Gemini 2.5 Flash.</p>
</div>

---

<img width="1920" height="1080" alt="geminiX" src="https://github.com/user-attachments/assets/fab16dfd-36fb-4b4a-a644-781e950aed85" />


## Overview

**Gemini X** is a high-performance, visually stunning AI chat application. Designed with a laser focus on premium aesthetics and seamless user experience, it serves as a powerful interface for interacting with the Gemini API.

## Key Features

- **Real-time Intelligence**: Sub-second responses using the optimized `gemini-2.5-flash` model, configured for concise and professional output.
- **Code Expert**: Built-in syntax highlighting (VSC Dark Plus theme) for over 50+ languages, complete with functional "Copy Code" actions and glassy headers.
- **Rich Typography**: Perfect markdown rendering for lists, bolding, and blockquotes using Tailwind Typography.
- **Smart Scrolling**: Chat scrolling that respects user intent and anchors large generated blocks perfectly on screen.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) + [AOS](https://michalsnik.github.io/aos/)
- **AI Integration**: [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai) (Gemini API)
- **Markdown & Code**: `react-markdown` + `react-syntax-highlighter`

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manav437/AI-Chatbot.git
   cd AI-Chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   VITE_GOOGLE_AI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   Navigate to `http://localhost:5173` in your browser to launch the Gemini X interface.

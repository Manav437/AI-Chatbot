import React, { useState } from "react"
import { Assistant } from "./assistance/googleai"
import { Chat } from "./components/Chat/Chat"
import { Controls } from "./components/Controls/Controls"
import { Loader } from "./components/Loader/Loader"
import styles from "./App.module.css"

function App() {
  const assistant = new Assistant()
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  async function handleContentSend(content) {
    // alert(content)
    addMessage({ content, role: "user" })
    setIsLoading(true)
    try {
      const result = await assistant.chat(content)
      addMessage({ content: result, role: "assistant" })
    } catch (error) {
      addMessage({ content: "Sorry, I couldn't process your request!", role: "system" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
      <header className={styles.Header}>
        <img className={styles.Logo} src="/bot-img.png" />
        <h2 className={styles.Title}>AI Chabot</h2>
      </header>

      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls isDisabled={isLoading} onSend={handleContentSend} />
    </div>
  )
}


export default App

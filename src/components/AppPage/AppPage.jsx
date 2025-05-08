import React, { useState, useEffect } from "react"
import { Assistant } from "../../assistance/googleai"
import { Chat } from "../Chat/Chat"
import { Controls } from "../Controls/Controls"
import { Loader } from "../Loader/Loader"
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./App.module.css"

function AppPage() {
    const assistant = new Assistant()
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 1200, // animation duration in ms
            once: true, // whether animation should happen only once
            easing: 'ease-in-out',
        });
    }, []);

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
        <div style={{
            backgroundColor: "#121212",
            backgroundImage: `
              linear-gradient(#1e1e1e 1px, transparent 1px),
              linear-gradient(90deg, #1e1e1e 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            minHeight: "100vh",
            width: "100vw",
            color: "white"
        }} data-aos="fade-in">
            <div className={styles.App}>
                {isLoading && <Loader />}
                <header className={styles.Header}>
                    <Link style={{ cursor: "pointer" }} to="/"><img className={styles.Logo} src="/header-img.png" /></Link>
                    <h2 className={styles.Title}>Gemini X</h2>
                </header>

                <div className={styles.ChatContainer}>
                    <Chat messages={messages} />
                </div>
                <Controls isDisabled={isLoading} onSend={handleContentSend} />
            </div>
        </div>
    )
}


export default AppPage;
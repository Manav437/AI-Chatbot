import React, { useEffect, useRef, useMemo } from "react"
import Markdown from "react-markdown"
import styles from "./Chat.module.css"

const WELCOME_MESSAGE_GROUP = [
    {
        role: "assistant",
        content: "Hello! How may I assist you. 🤠"
    },
]

export function Chat({ messages }) {
    const messagesEndRef = useRef(null)
    const messagesGroups = useMemo(
        () =>
            messages.reduce((groups, message) => {
                if (message.role === 'user') groups.push([])
                groups[groups.length - 1].push(message)
                return groups
            }, []),
        [messages]
    )

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div className={styles.Chat}>
            {[WELCOME_MESSAGE_GROUP, ...messagesGroups].map((messages, groupIndex) => (
                <div key={groupIndex} className={styles.Group}>
                    {messages.map(({ role, content }, index) => (
                        <div className={styles.Message} key={index} data-role={role}>
                            <Markdown>{content}</Markdown>
                        </div>
                    ))}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}
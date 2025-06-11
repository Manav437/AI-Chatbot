import React, { useEffect, useRef, useState } from "react"
import TextareaAutosize from "react-textarea-autosize"
import styles from "./Controls.module.css"

export function Controls({ isDisabled = false, onSend, onFocus }) {
    const textareaRef = useRef(null)
    const [content, setContent] = useState("")

    useEffect(() => {
        if (!isDisabled) {
            textareaRef.current.focus()
        }
    }, [isDisabled])

    function handleContentChange(event) {
        setContent(event.target.value)
    }
    function handleContentSend() {
        if (content.length > 0) {
            onSend(content)
            setContent("")
        }
    }

    function handleEnterPress(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            handleContentSend()
        }
    }

    return (
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer} tabindex="0">
                <TextareaAutosize
                    ref={textareaRef}
                    className={styles.TextArea}
                    placeholder="Message Gemini X"
                    value={content}
                    disabled={isDisabled}
                    minRows={1}
                    maxRows={4}
                    onChange={handleContentChange}
                    onKeyDown={handleEnterPress}
                    onFocus={onFocus}
                />
            </div>
            <button className={styles.Button} disabled={isDisabled} onClick={handleContentSend}><SendIcon /></button>
        </div>
    )
}

function SendIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#2e2f33" d="m21.426 11.095l-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909l-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81" /></svg>)
}
import React, { useEffect, useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

function SendIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="m21.426 11.095l-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909l-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81"
            />
        </svg>
    );
}

export function Controls({ isDisabled = false, onSend, initialValue = "" }) {
    const textareaRef = useRef(null);
    const [content, setContent] = useState("");

    useEffect(() => {
        if (initialValue) {
            setContent(initialValue);
            textareaRef.current?.focus();
        }
    }, [initialValue]);

    useEffect(() => {
        if (!isDisabled) {
            textareaRef.current?.focus();
        }
    }, [isDisabled]);

    const hasContent = content.trim().length > 0;

    const handleContentChange = (e) => setContent(e.target.value);

    const handleContentSend = () => {
        if (hasContent) {
            onSend(content.trim());
            setContent("");
        }
    };

    const handleEnterPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleContentSend();
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full bg-white/[0.05] border border-white/10 rounded-[1rem] p-0.5 md:p-1.5  backdrop-blur-3xl shadow-2xl focus-within:border-white/20 transition-all duration-300">
                <div className="flex items-end gap-2 px-2 py-1">
                    <TextareaAutosize
                        ref={textareaRef}
                        className="flex-grow bg-transparent border-none text-text-primary text-[1rem] leading-relaxed resize-none focus:outline-0 focus:ring-0 p-2 min-h-[44px] placeholder:text-text-secondary/50"
                        placeholder="Message Gemini X..."
                        value={content}
                        disabled={isDisabled}
                        minRows={1}
                        maxRows={8}
                        onChange={handleContentChange}
                        onKeyDown={handleEnterPress}
                    />
                    <button
                        className="flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-white text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-20 disabled:hover:scale-100 disabled:grayscale cursor-pointer mb-1 shadow-lg shadow-white/5"
                        disabled={isDisabled || !hasContent}
                        onClick={handleContentSend}
                        title="Send Message"
                    >
                        <SendIcon />
                    </button>
                </div>
            </div>
            <p className="text-[0.7rem] text-text-secondary/50 text-center max-w-[90%] tracking-tight">
                Gemini X can make mistakes. Consider verifying important information.
            </p>
        </div>
    );
}

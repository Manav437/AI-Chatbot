import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Assistant } from "../../assistance/googleai";
import { Chat } from "../Chat/Chat";
import { Controls } from "../Controls/Controls";
import { Loader } from "../Loader/Loader";
import { Sidebar } from "../SideBar/Sidebar";
import { FiMenu } from "react-icons/fi";

function AppPage() {
    const assistantRef = useRef(null);
    const scrollRef = useRef(null);
    if (!assistantRef.current) {
        assistantRef.current = new Assistant();
    }

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [suggestedText, setSuggestedText] = useState("");

    const isDesktop = () => window.innerWidth > 768;
    const [isSidebarOpen, setSidebarOpen] = useState(isDesktop());
    const [activeItem, setActiveItem] = useState("Chat");

    const toggleSidebar = () => setSidebarOpen((o) => !o);

    useEffect(() => {
        AOS.init({ duration: 600, once: true, easing: "ease-in-out" });
        const handleResize = () => {
            setSidebarOpen(window.innerWidth > 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const addMessage = (message) => {
        setMessages((prev) => [...prev, message]);
    };

    const handleContentSend = async (content) => {
        setSuggestedText("");
        addMessage({ content, role: "user" });
        setIsLoading(true);
        try {
            const result = await assistantRef.current.chat(content);
            addMessage({ content: result, role: "assistant" });
        } catch (error) {
            console.error("Chat Error:", error);

            let errorMessage = "Something went wrong. Please try again.";

            if (
                error?.message?.includes("API_KEY_INVALID") ||
                error?.message?.includes("API key not valid")
            ) {
                errorMessage = "Invalid API key. Please check your configuration.";
            } else if (
                error?.status === 404 ||
                error?.message?.includes("is not found for API version") ||
                error?.message?.includes("not supported for generateContent")
            ) {
                errorMessage =
                    "Model not available. The selected model may be deprecated or unsupported.";
            } else if (error?.message?.includes("SAFETY")) {
                errorMessage =
                    "The response was blocked due to safety filters. Try rephrasing your message.";
            } else if (error?.message?.includes("quota")) {
                errorMessage =
                    "API quota exceeded. Please wait a moment before sending another message.";
            } else if (!navigator.onLine) {
                errorMessage =
                    "Network error. Check your internet connection and try again.";
            }

            addMessage({ content: errorMessage, role: "system" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen w-screen bg-bg text-text-primary font-sans">
            <Sidebar
                isOpen={isSidebarOpen}
                toggle={toggleSidebar}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
            />

            <main
                className={`flex-grow flex flex-col h-screen transition-[margin-left] duration-300 ease-in-out overflow-hidden ${isSidebarOpen && isDesktop() ? "ml-[240px]" : "ml-[65px] max-md:ml-0"
                    }`}
            >
                {!isSidebarOpen && (
                    <button
                        className="fixed top-4 left-4 z-[100] bg-surface/80 backdrop-blur-md border border-border text-text-primary cursor-pointer hidden max-md:flex items-center justify-center p-2.5 rounded-xl shadow-lg transition-all hover:bg-surface"
                        onClick={toggleSidebar}
                    >
                        <FiMenu size={20} />
                    </button>
                )}
                <div
                    ref={scrollRef}
                    className="flex-grow w-full max-w-[760px] mt-20 md:mt-0 mx-auto overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 pt-8 pb-32 max-md:px-3 max-md:pt-4"
                >
                    <Chat
                        messages={messages}
                        onSuggest={(text) => setSuggestedText(text)}
                        scrollContainerRef={scrollRef}
                    />
                    {isLoading && <Loader />}
                </div>

                <div className="w-full max-w-[760px] mx-auto flex-shrink-0 px-4 pt-3 pb-5 max-md:px-3 max-md:pt-2 max-md:pb-4">
                    <Controls
                        isDisabled={isLoading}
                        onSend={handleContentSend}
                        initialValue={suggestedText}
                    />
                </div>
            </main>
        </div>
    );
}

export default AppPage;

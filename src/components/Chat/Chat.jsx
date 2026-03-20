import React, { useEffect, useRef, useMemo, useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiCpu,
    FiClipboard,
    FiCheck,
    FiZap,
    FiCode,
    FiSearch,
    FiEdit3,
    FiUser,

} from "react-icons/fi";
import { zenburn } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SUGGESTIONS = [
    { text: "Explain quantum computing simply", icon: FiZap, color: "#3b82f6" },
    { text: "Write a React component for a modal", icon: FiCode, color: "#8b5cf6" },
    { text: "What's the best way to learn Python?", icon: FiSearch, color: "#ec4899" },
    { text: "Write a short story about AI", icon: FiEdit3, color: "#f59e0b" },
];

const CodeBlock = ({ node, inline, className, children, ...props }) => {
    const [isCopied, setIsCopied] = useState(false);
    const match = /language-(\w+)/.exec(className || "");
    const codeString = String(children).replace(/\n$/, "");

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return !inline && match ? (
        <div className="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="flex items-center rounded-2xl m-0.5 justify-between px-5 py-3 bg-white/[0.03] backdrop-blur-md border-b border-white/5 text-[11px] text-white/40 font-mono tracking-widest uppercase">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <span>{match[1]}</span>
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-300 cursor-pointer group"
                >
                    {isCopied ? <FiCheck className="text-emerald-400" /> : <FiClipboard className="group-hover:scale-110 transition-transform" />}
                    <span>{isCopied ? "COPIED" : "COPY"}</span>
                </button>
            </div>
            <div className="p-1">
                <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                        background: "#0d0d0d",
                        margin: 0,
                        padding: "1.5rem",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        borderRadius: "0 0 1rem 1rem"
                    }}
                    {...props}
                >
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    ) : (
        <code className="bg-white/10 px-1.5 py-0.5 text-sm font-mono text-white/90" {...props}>
            {children}
        </code>
    );
};

export function Chat({ messages, onSuggest, scrollContainerRef }) {
    const messagesEndRef = useRef(null);

    const messagesGroups = useMemo(() => {
        if (!messages || messages.length === 0) return [];
        return messages.reduce((groups, message) => {
            const lastGroup = groups[groups.length - 1];
            if (lastGroup && lastGroup[0].role === message.role) {
                lastGroup.push(message);
            } else {
                groups.push([message]);
            }
            return groups;
        }, []);
    }, [messages]);

    useEffect(() => {
        if (!messages || messages.length === 0) return;

        const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

        if (lastMessageIsUser) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const hasMessages = messages && messages.length > 0;

    return (
        <div className="flex flex-col gap-12 pb-0 max-w-4xl mx-auto w-full">
            <AnimatePresence mode="wait">
                {!hasMessages ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4"
                    >
                        <div className="space-y-6 mb-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", damping: 15 }}
                                className="w-16 h-16 mx-auto bg-white/[0.03] rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-3xl"
                            >
                                <img src="/gemini-icon.png" className="w-8 h-8 opacity-80" alt="Gemini" />
                            </motion.div>
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold text-white tracking-tighter uppercase max-md:text-3xl">Gemini X</h1>
                                <p className="text-text-secondary text-lg max-w-md mx-auto leading-relaxed">
                                    The future of real-time intelligence is here. How can I assist you today?
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
                            {SUGGESTIONS.map((s, i) => (
                                <motion.button
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    onClick={() => onSuggest?.(s.text)}
                                    className="group relative flex flex-row md:flex-col items-center md:items-start w-full gap-4 p-4 md:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.15] text-left overflow-hidden"
                                >
                                    <div
                                        className="absolute -top-6 -left-6 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                                        style={{ backgroundColor: s.color }}
                                    />

                                    <div
                                        className="relative h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${s.color}18`, color: s.color }}
                                    >
                                        <s.icon className="text-lg" />
                                    </div>

                                    <p className="relative flex-1 text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors duration-300 leading-snug">
                                        {s.text}
                                    </p>

                                    <div className="hidden md:block absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
                                        <FiArrowRightAlt className="text-white/30 text-lg" />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    messagesGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex gap-6 w-full ${group[0].role === "user" ? "flex-row-reverse" : ""}`}
                        >
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 border border-white/5 transition-all ${group[0].role === "user" ? "bg-white/[0.05] text-white/40" : "bg-white/[0.1] text-black"
                                }`}>
                                {group[0].role === "user" ? <FiUser className="text-xl" /> : <img src="/gemini-icon.png" className="w-5 h-5" />}
                            </div>

                            <div className="flex flex-col gap-3 flex-grow min-w-0">
                                {group.map(({ role, content }, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={`relative group/msg transition-all ${role === "user"
                                            ? "self-end bg-white/[0.08] backdrop-blur-3xl px-6 py-3 rounded-[2rem] rounded-tr-[0.2rem] border border-white/10 max-w-[85%] text-white/90"
                                            : "self-start bg-white/[0.03] backdrop-blur-2xl px-6 py-4 rounded-[2rem] rounded-tl-[0.2rem] border border-white/[0.05] max-w-[90%] text-white/80"
                                            }`}
                                    >
                                        <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-transparent prose-pre:p-0">
                                            <Markdown components={{ code: CodeBlock }}>
                                                {content}
                                            </Markdown>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))
                )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
        </div>
    );
}


function FiArrowRightAlt({ className }) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    )
}

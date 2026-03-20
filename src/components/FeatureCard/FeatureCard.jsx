import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCpu, FiZap, FiCode, FiShield, FiArrowRight, FiLayers } from "react-icons/fi";

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export const BouncyCardsFeatures = () => {
    return (
        <section className="max-w-[1200px] mx-auto py-24 px-6 text-white">
            <div className="flex flex-col items-center text-center mb-20 space-y-4">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs font-black uppercase tracking-[0.3em] text-white/40"
                >
                    Capabilities
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl font-black text-white uppercase tracking-tighter max-md:text-4xl"
                >
                    Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Performance</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl text-lg text-text-secondary leading-relaxed"
                >
                    Gemini X combines state-of-the-art LLMs with a lightning-fast interface to redefine your creative workflow.
                </motion.p>
            </div>

            <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                <BounceCard
                    className="md:col-span-2"
                    title="Real-time Intelligence"
                    description="Experience sub-second responses with our optimized inference engine."
                    icon={FiZap}
                    colors={["#6366f1", "#a78bfa"]}
                />
                <BounceCard
                    className="md:col-span-1"
                    title="Code Expert"
                    description="Write, debug and explain code across 50+ languages."
                    icon={FiCode}
                    colors={["#f97316", "#fbbf24"]}
                />
                <BounceCard
                    className="md:col-span-1"
                    title="Privacy First"
                    description="Your data is encrypted and never used for training."
                    icon={FiShield}
                    colors={["#ef4444", "#f472b6"]}
                />
                <BounceCard
                    className="md:col-span-2"
                    title="Enterprise Scale"
                    description="Deploy custom models and manage team permissions with ease."
                    icon={FiLayers}
                    colors={["#10b981", "#4ade80"]}
                />
            </motion.div>
        </section>
    );
};

const BounceCard = ({ className, title, description, icon: Icon, colors }) => {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${className}`}
        >
            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-10 -left-10 h-48 w-48 rounded-full blur-[60px]"
                    style={{ background: colors[0] }}
                />
                <motion.div
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full blur-[60px]"
                    style={{ background: colors[1] }}
                />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between space-y-8">
                <div className="space-y-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl shadow-white/5">
                        <Icon className="text-2xl" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{title}</h3>
                        <p className="text-base text-text-secondary leading-relaxed max-w-[280px]">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/0 group-hover:text-white/60 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    Learn more <FiArrowRight />
                </div>
            </div>
        </motion.div>
    );
};

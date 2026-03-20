import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.1, ease: [0.23, 1, 0.32, 1] },
    },
};

const SquishyCard = () => {
    const plans = [
        {
            title: "Starter",
            price: "$0",
            description: "Perfect for exploring the power of Gemini X.",
            features: ["100 messages / month", "Standard AI model", "24h Chat history"],
            colors: ["#3b82f6", "#2dd4bf"],
            delay: 0,
        },
        {
            title: "Pro",
            price: "$29",
            description: "For creators who need more speed and power.",
            features: ["Unlimited messages", "Advanced Pro models", "Priority response time", "Custom themes"],
            colors: ["#8b5cf6", "#ec4899"],
            delay: 0.1,
            popular: true
        },
        {
            title: "Enterprise",
            price: "$99",
            description: "Scale your workflow with custom features.",
            features: ["Custom model training", "Full API access", "Dedicated support", "Team collaboration"],
            colors: ["#f59e0b", "#ef4444"],
            delay: 0.2,
        },
    ];

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="py-12 px-4"
        >
            <div className="flex gap-8 justify-center flex-wrap">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        {...plan}
                    />
                ))}
            </div>
        </motion.section>
    );
};

const Card = ({ title, price, description, features, colors, popular }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="group relative h-[32rem] w-80 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-20 -left-20 h-64 w-64 rounded-full blur-[80px]"
                    style={{ background: colors[0] }}
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full blur-[80px]"
                    style={{ background: colors[1] }}
                />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/80 border border-white/5">
                            {title}
                        </span>
                        {popular && (
                            <span className="text-[10px] font-black bg-gradient-to-r from-amber-200 to-yellow-500 text-black px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-yellow-500/20">
                                Most Popular
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <span className="text-5xl font-black tracking-tighter text-white">
                            {price}
                        </span>
                        <span className="ml-1 text-sm font-medium text-white/50 lowercase">
                            /mo
                        </span>
                    </div>

                    <p className="mb-8 text-sm leading-relaxed text-white/60">
                        {description}
                    </p>

                    <ul className="space-y-4">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10px] border border-white/5 group-hover:border-white/20 transition-colors">
                                    <FiCheck />
                                </div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link
                    to="/chat"
                    className="group/btn relative mt-8 overflow-hidden rounded-[50px] [corner-shape:squircle] bg-white p-4 text-center text-sm font-bold uppercase tracking-widest text-[#1a1a1a] transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-white/5"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started
                    </span>
                    <div className="absolute inset-0 z-0 translate-y-full bg-gradient-to-r from-zinc-200 to-white transition-transform duration-300 group-hover/btn:translate-y-0" />
                </Link>
            </div>
        </motion.div>
    );
};

export default SquishyCard;

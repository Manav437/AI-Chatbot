import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SquishyCard from "../PricingCard/Card";
import { BouncyCardsFeatures } from "../FeatureCard/FeatureCard";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FiTwitter,
    FiGithub,
    FiLinkedin,
    FiTwitch,
    FiSun,
    FiMoon,
    FiCpu,
    FiArrowRight
} from "react-icons/fi";

function LandingPage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="min-h-screen bg-bg text-text-primary flex flex-col font-sans selection:bg-white/10 selection:text-white">
            <nav className="w-full px-8 py-6 flex justify-between items-center fixed top-0 left-0 z-[1000] bg-[#121212]/70 backdrop-blur-xl border-b border-white/5" data-aos="fade-down">
                <a className="font-mauline text-2xl font-bold no-underline text-white tracking-tighter hover:opacity-80 transition-opacity" href="#">
                    Gemini X
                </a>
                <div className="flex items-center gap-8 max-md:gap-4">
                    <a className="no-underline text-text-secondary text-sm font-medium px-4 py-2 rounded-lg transition-all hover:text-white sm:block hidden" href="#features">
                        Features
                    </a>
                    <a className="no-underline text-text-secondary text-sm font-medium px-4 py-2 rounded-lg transition-all hover:text-white sm:block hidden" href="#pricing">
                        Pricing
                    </a>
                    <Link className="bg-white text-black text-sm font-bold px-3 py-2 rounded-[50px] [corner-shape:squircle] flex items-center gap-2 transition-all hover:scale-103 duration-300 active:scale-95 shadow-lg shadow-white/5" to="/chat">
                        GET STARTED <FiArrowRight />
                    </Link>
                </div>
            </nav>

            <main className="pt-[100px]">
                <section className="min-h-[calc(100vh-100px)] w-[90%] mx-auto flex flex-col justify-center pb-24 border-b border-white/5">
                    <div className="flex items-center gap-16 max-md:flex-col max-md:text-center max-md:gap-12">
                        <div className="w-1/2 max-md:w-full space-y-7" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-wide max-md:mx-auto">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Powered by Gemini 2.5
                            </div>
                            <h1 className="font-mauline text-[8rem] font-black leading-[0.9] text-white max-lg:text-[6rem] max-md:text-[5rem] max-[480px]:text-[4rem] tracking-tighter">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">Gemini X</span>
                            </h1>
                            <p className="text-lg text-text-secondary max-w-md leading-relaxed max-md:mx-auto" data-aos="fade-up" data-aos-delay="200">
                                Experience the future of real-time content generation.
                                Powered by Gemini to help you create, refine, and ship in seconds.
                            </p>
                            <div className="flex items-center gap-3 max-md:justify-center" data-aos="fade-up" data-aos-delay="300">
                                <Link className="bg-white text-black px-7 py-3.5 rounded-2xl font-bold text-sm transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95" to="/chat">
                                    Launch Interface
                                </Link>
                                <a href="#features" className="text-white/40 hover:text-white/70 text-sm font-medium px-4 py-3.5 transition-colors">
                                    See features →
                                </a>
                            </div>
                        </div>

                        <div className="w-1/2 max-md:w-full relative group" data-aos="fade-left">
                            <div className="absolute -inset-px bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                            <img
                                src="/chat-example.png"
                                alt="Chat example"
                                className="relative w-full h-auto border border-white/10"
                            />
                        </div>
                    </div>

                    <div
                        className="flex justify-center items-center gap-10 mt-20 py-6 px-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] max-md:flex-col max-md:gap-5"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/15">
                                <FiSun className="text-amber-400 text-base" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-medium">Student by day</p>
                                <p className="text-white/35 text-xs">Building in the gaps</p>
                            </div>
                        </div>
                        <svg width="48" height="20" viewBox="0 0 48 20" fill="none" className="text-white/20 max-md:hidden">
                            <path d="M2 10h40M34 2l8 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-indigo-400/10 border border-indigo-400/15">
                                <FiMoon className="text-indigo-400 text-base" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-medium">Engineer by night</p>
                                <p className="text-white/35 text-xs">Shipping what matters</p>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="features" className="w-full py-24 border-b border-white/5">
                    <BouncyCardsFeatures />
                </section>

                <section id="pricing" className="w-full py-24">
                    <div className="w-[90%] mx-auto text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-black text-white uppercase tracking-tighter" data-aos="fade-up">
                                Simple Pricing
                            </h2>
                            <p className="text-text-secondary text-lg" data-aos="fade-up" data-aos-delay="100">Choose the perfect plan for your needs.</p>
                        </div>
                        <SquishyCard />
                    </div>
                </section>
            </main>

            <footer className="w-full border-t border-white/5 bg-surface/30 backdrop-blur-md">
                <div className="w-[90%] mx-auto py-12 flex justify-between items-center max-md:flex-col max-md:gap-12">
                    <div className="flex flex-col gap-10 max-md:items-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-text-secondary">Connected Channels</p>
                        <div className="flex gap-4">
                            {[
                                { icon: FiTwitter, label: "Twitter", href: "https://x.com/Manav437" },
                                { icon: FiGithub, label: "GitHub", href: "https://github.com/Manav437" },
                                { icon: FiLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/manav-gusain/" },
                                { icon: FiTwitch, label: "Twitch", href: "https://www.twitch.tv/manav437" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all hover:-translate-y-1"
                                >
                                    <social.icon className="text-xl text-text-secondary group-hover:text-white transition-colors" />
                                    <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bottom-[130%] left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-xl transition-all duration-300">
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-10 max-md:items-center">
                        <div className="flex items-center gap-3 text-text-secondary text-sm tracking-tight opacity-50">
                            <span>© 2025 Gemini X. Designed with precision.</span>
                        </div>
                        <div className="font-mauline text-4xl font-bold opacity-30 select-none flex items-center gap-2">
                            <img src="gemini-icon.png" className='w-8 h-8' />
                            GEMINI X
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;

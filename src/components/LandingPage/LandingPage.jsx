import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SquishyCard from "../PricingCard/Card"
import { BouncyCardsFeatures } from "../FeatureCard/FeatureCard"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./LandingPage.css"

function LandingPage() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true, // whether animation should happen only once
        });
    }, []);

    return (
        <div className="landing-page">
            <div className="navbar" data-aos="fade-down">
                <a className="a-tag" style={{ fontWeight: "700", padding: "5px 9px", borderRadius: "10px" }} href="#pricing">pricing</a>
                <a className="a-tag" style={{ fontWeight: "700", padding: "5px 9px", borderRadius: "10px" }} href="#features">features</a>
                <Link style={{ color: "black" }} className="get-started" to="/chat">TRY NOW</Link>
            </div>

            <div className="about">
                <div className="about-one">
                    <div className="text-one">
                        <h1 style={{ margin: "0" }} data-aos="fade-left">Gemini <br /> X</h1>
                    </div>

                    <div className="one-img">
                        <img src="/chat-example.png" alt="" />
                    </div>
                </div>
                <div className="about-two">
                    <div className="ellipse-container" data-aos="fade-up">
                        <div className="ellipse-shape"></div>
                        <p data-aos="zoom-in" >Generate high-quality, real-time content with ease
                            using Gemini X, designed to help creators and developers
                            get text done in seconds.
                        </p>
                    </div>

                    <div className="student-div" >
                        {/* Arrow SVG */}
                        <svg
                            style={{ zIndex: 1, position: "absolute", top: "30px", left: "0", width: "100%", height: "100%", pointerEvents: "none" }}
                            viewBox="0 0 300 200" // You can adjust this size as needed
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                                </marker>
                            </defs>

                            <line
                                className="draw-arrow"
                                x1="50"
                                y1="20"
                                x2="250"  // Reaches far right
                                y2="140"  // Reaches near bottom
                                stroke="white"
                                strokeWidth="2"
                                markerEnd="url(#arrowhead)"
                            />
                        </svg>

                        <p style={{ width: "100%", fontSize: "1.5rem", textAlign: "start", margin: "0" }}>Student by day ☀️</p>
                        <p style={{ zIndex: "2", alignItems: "center", margin: "0 auto" }}>
                            <img style={{ height: "110px", borderRadius: "10px" }} src="https://i.pinimg.com/originals/11/89/75/118975fbaee98771358217256730bc40.gif" alt="" />
                        </p>
                        <p style={{ width: "100%", fontSize: "1.5rem", textAlign: "end", margin: "0" }}>🌜Engineer by night</p>
                    </div>
                </div>
            </div>

            <div id="features" style={{ width: "100%", margin: "0 auto" }}>
                <BouncyCardsFeatures />
            </div>


            <div id="pricing" className="info" >
                <div className="info-content">
                    <h1 style={{ fontWeight: "800", fontSize: "3rem", textDecoration: "underline", textUnderlineOffset: "5px", color: "#fff" }}>PRICING</h1>
                    <SquishyCard />
                    {/* <p className="follow-p"><a target="_blank" href="https://x.com/Manav437">Follow Manav →</a></p> */}
                </div>
            </div>


            <div className="footer">
                <div id="socials" className="socials">
                    <div style={{ paddingTop: "5px", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "30px", width: "95%", margin: "0 auto" }}>
                        <p style={{ fontSize: "1.2rem", fontWeight: "800", color: "black" }}>Let's Connect :</p>
                        <div className="tooltip">
                            <a target="_blank" href="https://x.com/Manav437"><img src="/twitter.png" alt="twitter" /></a>
                            <span className="tooltiptext">Twitter</span>
                        </div>

                        <div className="tooltip">
                            <a target="_blank" href="https://github.com/Manav437"><img src="/github.png" alt="GitHub" /></a>
                            <span className="tooltiptext">GitHub</span>
                        </div>

                        <div className="tooltip">
                            <a target="_blank" href="https://www.linkedin.com/in/manav-gusain/"><img src="/linkedin.png" alt="LinkedIn" /></a>
                            <span className="tooltiptext">LinkedIn</span>
                        </div>

                        <div className="tooltip">
                            <a target="_blank" href="https://www.twitch.tv/manav437"><img src="/twitch.png" alt="Twitch" /></a>
                            <span className="tooltiptext">Twitch</span>
                        </div>

                    </div>
                </div>
                <div style={{ background: "#F5EEDD", margin: "auto", width: "95%" }}>
                    <p style={{ fontSize: "1rem" }}>© Copyright 2025 <img className="spin" src="https://xtinastarr.com/assets/img/xtinalogo.svg" alt="" /></p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
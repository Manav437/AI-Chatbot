import { Link } from "react-router-dom";
import SquishyCard from "../PricingCard/Card"
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="navbar">
                <a className="a-tag" style={{ fontWeight: "500", padding: "5px 9px", borderRadius: "20px", border: "1px solid white" }} href="#pricing">pricing</a>
                <a className="a-tag" style={{ fontWeight: "500", padding: "5px 9px", borderRadius: "20px", border: "1px solid white" }} href="#socials">connect</a>
                <Link style={{ color: "black" }} className="get-started" to="/chat">get started</Link>
            </div>

            <div className="about">
                <div className="about-one">
                    <div className="text-one">
                        <h1 style={{ margin: "0" }}>Gemini <br /> X</h1>
                    </div>

                    <div className="one-img">
                        <img src="/chat-example.png" alt="" />
                    </div>
                </div>
                <div className="about-two">
                    <div className="ellipse-container">
                        <div className="ellipse-shape"></div>
                        <p>Generate high-quality, real-time content with ease
                            using Gemini X, designed to help creators and developers
                            get text done in seconds.
                        </p>
                    </div>

                    <div style={{ position: "relative", width: "100%", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "220px", height: "400px" }}>
                        {/* Arrow SVG */}
                        <svg
                            style={{ zIndex: "1", position: "absolute", top: "30px", left: "0", width: "90%", height: "90%", pointerEvents: "none" }}
                        >
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                                </marker>

                            </defs>
                            <line
                                x1="200px"
                                y1="25px"
                                x2="80%"
                                y2="81%"
                                stroke="white"
                                strokeWidth="2"
                                markerEnd="url(#arrowhead)"
                                strokeDasharray="6,4"
                            />
                        </svg>

                        <p style={{ width: "100%", fontSize: "1.5rem", textAlign: "start", margin: "0" }}>Student by day ☀️</p>
                        <p style={{ zIndex: "2", alignItems: "center", margin: "0 auto" }}>
                            <img style={{ height: "60px", borderRadius: "10px" }} src="/giphy.gif" alt="" />
                        </p>
                        <p style={{ width: "100%", fontSize: "1.5rem", textAlign: "end", margin: "0" }}>🌜Engineer by night</p>
                    </div>
                </div>
            </div>


            <div id="pricing" className="info">
                <div className="info-content">
                    <h3 style={{ fontWeight: "800", fontSize: "2rem", color: "#fff" }}>PRICING</h3>
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
                    <p>© Copyright 2025 <img src="https://xtinastarr.com/assets/img/xtinalogo.svg" alt="" /></p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
import { Link } from "react-router-dom";
import SquishyCard from "../PricingCard/Card"
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="navbar">
                <a className="a-tag" style={{ fontWeight: "500", padding: "5px", borderRadius: "10px", border: "1px solid white" }} href="#pricing">pricing</a>
                <a className="a-tag" style={{ fontWeight: "500", padding: "5px", borderRadius: "10px", border: "1px solid white" }} href="#socials">connect</a>
                <Link className="get-started" to="/chat">get started</Link>
            </div>

            <div className="about">
                <div className="about-one">
                    <div className="text-one">
                        <h1 style={{ paddingTop: "35px", margin: "0" }}>Gemini X</h1>
                    </div>

                    <div className="one-img">
                        <img src="https://i.pinimg.com/736x/8d/ff/a1/8dffa167d7c06c98303cf74e1e684c0c.jpg" alt="" />
                    </div>
                </div>
                <div className="about-two">
                    <p>Generate high-quality, real-time content with ease using Gemini X, designed to help creators and developers get text done in seconds.
                    </p>

                    <div style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: "220px", height: "400px" }}>
                        <p style={{ fontSize: "1.5rem", textAlign: "start", margin: "0" }}>Student by day ☀️</p>

                        <p style={{ fontSize: "1.5rem", textAlign: "end", margin: "0" }}>🌜Engineer by night</p>
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
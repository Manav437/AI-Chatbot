import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./FeatureCard.css";

export const BouncyCardsFeatures = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true, // whether animation should happen only once
        });
    }, []);

    return (
        <section className="features-section">
            <div className="features-header">
                <h1 style={{ fontSize: "3rem", textDecoration: "underline", textUnderlineOffset: "5px" }}>FEATURES</h1>
                <h2>
                    Grow faster with our
                    <span className="text-muted"> all in one solution</span>
                </h2>
                <Link to='/chat'>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="features-button"
                    >
                        Get Started
                    </motion.button></Link>
            </div>
            <div className="features-grid">
                <BounceCard className="grid-span-1">
                    <CardTitle>Real time AI Chat</CardTitle>
                    <div className="card-contents violet">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/originals/94/d6/66/94d6668cb38b312395c40c0e77be5566.gif" alt="" />
                    </div>
                </BounceCard>
                <BounceCard className="grid-span-2">
                    <CardTitle>Code & Content Generation</CardTitle>
                    <div className="card-contents amber">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/5d/c5/86/5dc586842083f830e72cbc832182e8e9.jpg" alt="" />
                    </div>
                </BounceCard>
            </div>
            <div className="features-grid">
                <BounceCard className="grid-span-2">
                    <CardTitle>Developer-Friendly API</CardTitle>
                    <div className="card-contents green">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/76/aa/32/76aa32ec6ef4555a91196fd1517b1292.jpg" alt="" />
                    </div>
                </BounceCard>
                <BounceCard className="grid-span-1">
                    <CardTitle>No Signup Needed</CardTitle>
                    <div className="card-contents pink">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/6a/8c/79/6a8c79638d848dd53672e7287843f3e6.jpg" alt="" />
                    </div>
                </BounceCard>
            </div>
        </section>
    );
};

const BounceCard = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`bounce-card ${className}`}
            data-aos="zoom-in"
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }) => {
    return <h3 className="card-title">{children}</h3>;
};

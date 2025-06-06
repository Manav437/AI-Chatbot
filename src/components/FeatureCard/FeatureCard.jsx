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
        <section className="features-section" >
            <div className="features-header">
                <h1 style={{ fontSize: "3rem", textDecoration: "underline", textUnderlineOffset: "5px" }}>FEATURES</h1>
                <h2>
                    Grow faster with our
                    <span className="text-muted"> all in one solution</span>
                </h2>
                <Link to='/chat'>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="features-button"
                    >
                        Get Started
                    </motion.button></Link>
            </div>
            <div className="features-grid" data-aos="zoom-in">
                <BounceCard className="grid-span-1">
                    <CardTitle>Real time AI Chat</CardTitle>
                    <div className="card-contents violet">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/16/3e/20/163e20d67dfd76dc4bf604bcbc505b34.jpg" alt="" />
                    </div>
                </BounceCard>
                <BounceCard className="grid-span-2">
                    <CardTitle>Code & Content Generation</CardTitle>
                    <div className="card-contents amber">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/d0/c9/d7/d0c9d725a3fb1a3619f3b124de63a109.jpg" alt="" />
                    </div>
                </BounceCard>
            </div>
            <div className="features-grid" data-aos="zoom-in">
                <BounceCard className="grid-span-2">
                    <CardTitle>Developer-Friendly API</CardTitle>
                    <div className="card-contents green">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/0d/33/94/0d3394bf32ac9f7186e66f21c5ca7084.jpg" alt="" />
                    </div>
                </BounceCard>
                <BounceCard className="grid-span-1">
                    <CardTitle>No Signup Needed</CardTitle>
                    <div className="card-contents pink">
                        {/* <span>FEATURE DEMO HERE</span> */}
                        <img style={{ width: "100%" }} src="https://i.pinimg.com/736x/24/1e/52/241e521caa67fb5ec8a2a269f9030e39.jpg" alt="" />
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
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`bounce-card ${className}`}
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }) => {
    return <h3 className="card-title">{children}</h3>;
};

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.css';

const SquishyCard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true, // whether animation should happen only once
        });
    }, []);

    const plans = [
        { title: "Individual Free", price: "$0", description: "Basic access with limited features.", color: "#3b82f6" }, // blue
        { title: "Individual Pro", price: "$299", description: "Access to all pro features.", color: "#8b5cf6" }, // purple
        { title: "Enterprise", price: "$999", description: "Full enterprise-level access. Connect for more details.", color: "#ec4899" } // pink
    ];

    return (
        <section className="squishy-card-section" >
            <div className="squishy-card-container" data-aos="fade" data-aos-easing="ease-in">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        title={plan.title}
                        price={plan.price}
                        description={plan.description}
                        color={plan.color}
                    />
                ))}
            </div>
        </section>
    );
};

const Card = ({ title, price, description, color }) => {
    return (
        <motion.div
            whileHover="hover"
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
            variants={{
                hover: {
                    scale: 1.05,
                },
            }}
            className="card"
            style={{ backgroundColor: color }}
        >
            <div className="card-content">
                <span className="badge">{title}</span>
                <motion.span
                    initial={{ scale: 0.85 }}
                    variants={{
                        hover: {
                            scale: 1,
                        },
                    }}
                    transition={{
                        duration: 1,
                        ease: "backInOut",
                    }}
                    className="price"
                >
                    {price}/
                    <br />
                    Month
                </motion.span>
                <p className="description">
                    {description}
                </p>
            </div>
            {/* <button className="button"> */}
            <Link className="cta-button" to="/chat">Get it now</Link>
            {/* </button> */}
            <Background />
        </motion.div>
    );
};

const Background = () => {
    return (
        <motion.svg
            width="320"
            height="384"
            viewBox="0 0 320 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="background-svg"
            variants={{
                hover: {
                    scale: 1.5,
                },
            }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <motion.circle
                variants={{
                    hover: {
                        scaleY: 0.5,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="114.5"
                r="101.5"
                fill="#262626"
            />
            <motion.ellipse
                variants={{
                    hover: {
                        scaleY: 2.25,
                        y: -25,
                    },
                }}
                transition={{
                    duration: 1,
                    ease: "backInOut",
                    delay: 0.2,
                }}
                cx="160.5"
                cy="265.5"
                rx="101.5"
                ry="43.5"
                fill="#262626"
            />
        </motion.svg>
    );
};

export default SquishyCard;

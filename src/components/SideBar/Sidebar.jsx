import React from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.css";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <motion.div
            initial={{ width: 75 }}
            animate={{ width: isOpen ? 200 : 75 }}
            transition={{ duration: 0.3 }}
            className={styles.sidebar}
        >
            <button onClick={toggleSidebar} className={styles.toggleButton}>
                {isOpen ? <img style={{ marginLeft: "0", borderRadius: "10px", padding: "10px", height: "50px" }} src="https://img.icons8.com/?size=100&id=97655&format=png&color=ffffff" alt="" /> : <img style={{ marginLeft: "0", borderRadius: "10px", padding: "10px", height: "50px" }} src="https://img.icons8.com/?size=100&id=97654&format=png&color=ffffff" />}
            </button>
            {isOpen && (
                <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <ul className={styles.navList}>
                        <li>Home</li>
                        <li>Chat</li>
                        <li>About</li>
                        {/* Add more items */}
                    </ul>

                    <ul className={styles.navList}>
                        <li style={{ display: "flex", alignItems: "center", gap: "10px" }}><img style={{ height: "30px" }} src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --%3E%3Cpath fill='%23fbff00' d='M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2' opacity='.6'/%3E%3Cpath fill='%23fbff00' d='M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h.141C8 18.657 8 17.538 8 16z' opacity='.4'/%3E%3Cpath fill='%23fbff00' fill-rule='evenodd' d='M14.53 11.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H5a.75.75 0 0 1 0-1.5h7.19l-.72-.72a.75.75 0 1 1 1.06-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E" alt="" /> Login</li>
                    </ul>
                </div>
            )}
        </motion.div>
    );
};

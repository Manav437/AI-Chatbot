// src/components/BackgroundGrid.jsx
import React from "react";
import "./BackgroundGrid.css";

const rows = 12;
const cols = 12;

export const BackgroundGrid = () => {
    const total = rows * cols;
    const filledBoxes = new Set(
        Array.from({ length: Math.floor(total * 0.3) }, () => Math.floor(Math.random() * total))
    );

    return (
        <div className="background-grid">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`box ${filledBoxes.has(i) ? "filled" : ""}`}
                />
            ))}
        </div>
    );
};

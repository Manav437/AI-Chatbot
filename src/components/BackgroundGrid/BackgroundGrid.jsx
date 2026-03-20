import React from "react";

const rows = 12;
const cols = 12;

export const BackgroundGrid = () => {
    const total = rows * cols;
    const filledBoxes = new Set(
        Array.from({ length: Math.floor(total * 0.3) }, () =>
            Math.floor(Math.random() * total),
        ),
    );

    return (
        <div className="fixed top-0 left-0 w-screen h-screen grid grid-cols-12 grid-rows-12 -z-10 pointer-events-none">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`border border-white/5 transition-colors duration-300 ${filledBoxes.has(i) ? "bg-white/5" : "bg-transparent"}`}
                />
            ))}
        </div>
    );
};

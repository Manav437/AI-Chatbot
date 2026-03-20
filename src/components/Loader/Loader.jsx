import React from "react";

export function Loader() {
    return (
        <div className="flex items-center gap-1.5 p-3 animate-in fade-in duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-text-secondary animate-bounce" />
        </div>
    );
}
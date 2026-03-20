import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiMessageSquare, FiUsers, FiLogOut, FiSettings } from "react-icons/fi";
import { BsLayoutSidebar } from "react-icons/bs";

const navItems = [
    { text: "Home", icon: <FiHome />, path: "/" },
    { text: "Chat", icon: <FiMessageSquare />, path: "/chat" },
    { text: "Users", icon: <FiUsers />, path: "/chat" },
    { text: "Settings", icon: <FiSettings />, path: "/chat" },
];

const footerItems = [
    { text: "Logout", icon: <FiLogOut />, path: "/" },
];

const NavItem = ({ item, isOpen, isActive, onClick }) => (
    <Link to={item.path} onClick={onClick} className="no-underline text-inherit block group">
        <div
            className={`
                flex items-center rounded-lg cursor-pointer text-sm font-normal w-full overflow-hidden relative
                whitespace-nowrap mb-1 transition-colors duration-150
                ${isOpen ? "px-3 py-2.5 gap-3" : "px-0 py-2.5 justify-center"}
                ${isActive
                    ? "bg-active-bg text-text-primary"
                    : "text-text-secondary hover:bg-active-bg hover:text-white"
                }
            `}
        >
            <span className="text-[1.1rem] flex items-center justify-center flex-shrink-0">
                {item.icon}
            </span>

            <span
                className={`
                    overflow-hidden transition-all duration-200
                    ${isOpen ? "opacity-100 max-w-[160px]" : "opacity-0 max-w-0"}
                `}
            >
                {item.text}
            </span>

            {!isOpen && (
                <div className="
                    absolute left-[58px] top-1/2 -translate-y-1/2
                    bg-active-bg text-text-primary px-2.5 py-1.5 rounded-md
                    text-xs font-medium whitespace-nowrap
                    opacity-0 invisible pointer-events-none
                    transition-all duration-150 z-20
                    border border-border
                    group-hover:opacity-100 group-hover:visible group-hover:delay-150
                ">
                    {item.text}
                </div>
            )}
        </div>
    </Link>
);

export const Sidebar = ({ isOpen, toggle, activeItem, setActiveItem }) => {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={toggle}
                />
            )}

            <div
                className={`
                    bg-bg text-text-secondary h-screen fixed top-0 left-0 z-50
                    border-r border-border flex flex-shrink-0
                    transition-all duration-300 ease-in-out
                    md:translate-x-0
                    ${isOpen ? "w-[240px] translate-x-0" : "w-[65px] -translate-x-full md:translate-x-0"}
                `}
            >
                <div className="h-full w-full flex flex-col py-3 overflow-y-auto overflow-x-hidden scrollbar-none">
                    <div className={`
                        flex items-center px-2.5 pt-1 pb-3 mb-1 min-h-[48px]
                        ${isOpen ? "justify-between" : "justify-center"}
                    `}>
                        <Link to="/"
                            className={`
                                font-semibold text-base text-text-primary tracking-tight
                                overflow-hidden transition-all duration-200
                                ${isOpen ? "opacity-100 max-w-[160px]" : "opacity-0 max-w-0"}
                            `}
                        >
                            GeminiX
                        </Link>

                        <div
                            className={`
                                flex items-center justify-center rounded-lg cursor-pointer
                                transition-colors duration-150 hidden md:block
                                text-text-secondary hover:bg-active-bg hover:text-white
                                ${isOpen ? "p-2" : "p-2 w-10 h-10"}
                            `}
                            onClick={toggle}
                            title={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
                        >
                            <BsLayoutSidebar className="text-[1.2rem]" />
                        </div>
                    </div>

                    <div className="flex flex-col px-2 flex-grow">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.text}
                                item={item}
                                isOpen={isOpen}
                                isActive={activeItem === item.text}
                                onClick={() => setActiveItem(item.text)}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col px-2 pt-3 mt-auto border-t border-border">
                        {footerItems.map((item) => (
                            <NavItem
                                key={item.text}
                                item={item}
                                isOpen={isOpen}
                                isActive={activeItem === item.text}
                                onClick={() => setActiveItem(item.text)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
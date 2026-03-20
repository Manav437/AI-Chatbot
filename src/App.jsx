import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppPage from "./components/AppPage/AppPage";
import LandingPage from "./components/LandingPage/LandingPage";
function App() {
    return (
        <div className="bg-bg min-h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/chat" element={<AppPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

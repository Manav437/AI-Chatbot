import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AppPage from "./components/AppPage/AppPage"
import LandingPage from "./components/LandingPage/LandingPage"
import "./App.css"
function App() {

	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element=<LandingPage /> />
					<Route path="/chat" element=<AppPage /> />
				</Routes>
			</Router>
		</div>
	)
}


export default App;

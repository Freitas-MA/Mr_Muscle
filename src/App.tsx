import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes";
import "./styles/globals.css";
import CookieConsent from "./components/layout/cookies";

function App() {
	return (
		<Router>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow pt-14">
					<AppRoutes />
				</main>
        <CookieConsent/>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

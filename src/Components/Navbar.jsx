// File: Navbar.jsx
// Author: Lex Albrandt, Lucas Cook
// Purpose: This file is the react component for the site navbar

// Imports
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function handleMenuToggle() {
		setIsMenuOpen((currentValue) => !currentValue);
	}

	return (
		<nav className="navbar">
			<section className="navbar-container">
				<div className="navbar-titles">
					<h1 className="navbar-title">Change is in the Air</h1>
					<p className="navbar-subtitle">
						Community Air Quality Dashboard — Portland &amp; Gresham
					</p>
				</div>
				<button
					className={isMenuOpen ? "navbar-toggle open" : "navbar-toggle"}
					onClick={handleMenuToggle}
					type="button"
				>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
				<ul className={isMenuOpen ? "navbar-menu active" : "navbar-menu"}>
					<li>Home</li>
					<li>Your Neighborhood AQI</li>
					<li>Learn More</li>
					<li>The Blueprint Foundation</li>
				</ul>
			</section>
		</nav>
	);
}

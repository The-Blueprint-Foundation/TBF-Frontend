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
					<li><a href="#top" onClick={handleMenuToggle}>Home</a></li>
					<li><a href="#map" onClick={handleMenuToggle}>AQI Map</a></li>
					<li><a href="#learn-more" onClick={handleMenuToggle}>Learn More</a></li>
					<li><a href="#foundation" onClick={handleMenuToggle}>The Blueprint Foundation</a></li>
				</ul>
			</section>
		</nav>
	);
}

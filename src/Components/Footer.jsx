// File: Footer.jsx
// Author: Lucas Cook
// Purpose: This file is the react component for the footer section

import "./Footer.css";
import blueprintLogo from "../assets/Blueprint_Foundation_Logo.png";

export default function Footer() {
	return (
		<footer>
			<div className="foundation">
				<img
					src={blueprintLogo}
					alt="The Blueprint Foundation logo"
					className="foundation-logo"
				/>
				<h2 className="foundation-title">The Blueprint Foundation</h2>
				<div className="foundation-links">
					<a href="https://www.theblueprintfoundation.org/about-us/our-story/" target="_blank" rel="noopener noreferrer" className="foundation-button">
						About Us
					</a>
					<a href="https://www.theblueprintfoundation.org/contact-us/" target="_blank" rel="noopener noreferrer" className="foundation-button">
						Contact Us
					</a>
				</div>
			</div>
			<div className="footer-copyright">
				<small>&copy; 2026 Change is in the Air. All rights reserved.</small>
			</div>
		</footer>
	);
}

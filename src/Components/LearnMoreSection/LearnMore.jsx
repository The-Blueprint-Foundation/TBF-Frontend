// File: LearnMore.jsx
// Author: Lex Albrandt
// Purpose: This file is the react component for the learn more section
// Note: This section uses React Bootstrap, be sure to install it!
// Resource: https://react-bootstrap.netlify.app/docs/components/accordion/

// Imports
import "./LearnMore.css";
import LearnMoreAccordion from "./LearnMoreAccordion";

export default function LearnMore() {
	return (
		<section className="learn-more">
			<div className="learn-more-container">
				<h2 className="lm-header">Learn more</h2>
				<LearnMoreAccordion />
			</div>
		</section>
	);
}

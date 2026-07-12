// File: LearnMoreAccordion.jsx
// Author: Lex Albrandt
// Purpose: This file is the React component for the learn more accordion

import Accordion from "react-bootstrap/Accordion";

export default function LearnMoreAccordion() {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>How is AQI Calculated?</Accordion.Header>
				<Accordion.Body>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
					repellendus vitae eos, laborum ipsa error obcaecati, nam alias autem
					reprehenderit optio? Odit magni beatae similique sapiente voluptatem
					natus ducimus ipsa.
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>What is Particulate Matter?</Accordion.Header>
				<Accordion.Body>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
					voluptas ut cupiditate dolor illo sapiente et impedit perspiciatis!
					Eaque soluta reprehenderit consectetur, pariatur temporibus commodi
					nesciunt quia distinctio at repellendus?
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

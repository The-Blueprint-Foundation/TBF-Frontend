// File: LearnMoreAccordion.jsx
// Author: Lex Albrandt
// Purpose: This file is the React component for the learn more accordion

import Accordion from "react-bootstrap/Accordion";
import PMScaleGraphic from "./PMScaleGraphic";
import AQITable from "./AQITable";

const accordionItems = [
	{
		title: "What do the air quality sensors measure?",
		body: (
			<>
				<p>
					Each of the air quality sensors measure a variety of parameters that
					are ultimately used to calculate the Air Quality Index (AQI).
				</p>
				<p id="param-list-head">Parameters Measured:</p>
				<ul>
					<li>PM2.5 (Particulate Matter 2.5µ - 2.5 micrometers)</li>
					<li>PM10 (Particulate Matter 10µ - 10 micrometers)</li>
					<li>Temperature</li>
					<li>Humidity</li>
				</ul>
			</>
		),
	},

	{
		title: "What is Particulate Matter?",
		body: (
			<>
				<p>
					According to the{" "}
					<a
						href="https://www.epa.gov/pm-pollution/particulate-matter-pm-basics"
						target="_blank"
						rel="noopener noreferrer"
					>
						U.S. Environmental Protection Agency
					</a>
					:
				</p>
				<p>
					"PM stands for particulate matter (also called particle pollution):
					the term for a mixture of solid particles and liquid droplets found in
					the air. Some particles, such as dust, dirt, soot, or smoke, are large
					or dark enough to be seen with the naked eye. Others are so small they
					can only be detected using an electron microscope."
				</p>
				<p>
					<strong>PM2.5</strong> particles are inhalable combustion particles,
					like vehicle exhaust, wildfire smoke, or fossil fuel emissions that
					measure 2.5 micrometers (2.5μ) or less in diameter.
				</p>
				<p>
					<strong>PM10</strong> particles are inhalable particles, like dust,
					pollen, mold, and ash that measure 10 micrometers (10μ) or less in
					diamter.
				</p>
				<p>
					The picture below shows <strong>PM2.5</strong> and{" "}
					<strong>PM10</strong> particles in relation to a human hair and beach
					sand.
				</p>
				<PMScaleGraphic />
			</>
		),
	},

	{
		title: "How is AQI Calculated?",
		body: (
			<>
				<p>
					The AQI (Air Quality Index) is calculated by converting the measured
					concentration of key air pollutants (PM2.5, PM10, etc) into an index
					using Environmental Protection Agency (EPA) or World Health
					Organization (WHO) breakpoints.
				</p>
			</>
		),
	},

	{
		title: "What are the categories of the AQI?",
		body: (
			<>
				<p>
					In the United States there are 6 catories of the Air Quality Index.
					The table below shows the category names, colors, and associated AQI
					value ranges:
				</p>
				<AQITable />
			</>
		),
	},
];

export default function LearnMoreAccordion() {
	return (
		<Accordion>
			{accordionItems.map((item, index) => (
				<Accordion.Item key={index} eventKey={String(index)}>
					<Accordion.Header>{item.title}</Accordion.Header>

					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}

// File: LearnMoreAccordion.jsx
// Author: Lex Albrandt
// Purpose: This file is the React component for the learn more accordion

import Accordion from "react-bootstrap/Accordion";
import pmScaleGraphic from "./pm2.5_scale_graphic-color.jpg";

export default function LearnMoreAccordion() {
	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>
					What do the air quality sensors measure?
				</Accordion.Header>
				<Accordion.Body id="body-1">
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
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header>What is Particulate Matter?</Accordion.Header>
				<Accordion.Body id="body-2">
					<p>
						According to the{" "}
						<a href="https://www.epa.gov/pm-pollution/particulate-matter-pm-basics">
							Environmental Protection Agency's website
						</a>
						:
						<br />
						<br />
						"PM stands for particulate matter (also called particle pollution):
						the term for a mixture of solid particles and liquid droplets found
						in the air. Some particles, such as dust, dirt, soot, or smoke, are
						large or dark enough to be seen with the naked eye. Others are so
						small they can only be detected using an electron microscope."
						<br />
						<br />
						<strong>PM2.5</strong> particles are inhalable combustion particles,
						like vehicle exhaust, wildfire smoke, or fossil fuel emissions that
						measure 2.5 micrometers (2.5μ) or less in diameter.
						<br />
						<br />
						<strong>PM10</strong> particles are inhalable particles, like dust,
						pollen, mold, and ash that measure 10 micrometers (10μ) or less in
						<br />
						<br />
						diamter. The picture below shows <strong>PM2.5</strong> and{" "}
						<strong>PM10</strong> particles in relation to a human hair and
						beach sand.
						<br />
						<img
							src={pmScaleGraphic}
							id="pm-graphic"
							alt="An image showing a human hair and fine beach sand as a scale for particulate matter sizes"
						></img>
						<figcaption id="img-cap">
							Source:{" "}
							<a href="https://www.epa.gov/pm-pollution/particulate-matter-pm-basics">
								epa.gov
							</a>
						</figcaption>
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header>How is AQI calculated?</Accordion.Header>
				<Accordion.Body id="body-3">
					<p>
						The AQI (Air Quality Index) is calculated by converting the measured
						concentration of key air pollutants (PM2.5, PM10, etc) into an index
						using Environmental Protection Agency (EPA) or World Health
						Organization (WHO) breakpoints.
					</p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="3">
				<Accordion.Header>What are the categories of the AQI?</Accordion.Header>
				<Accordion.Body id="body-4">
					<p>
						In the United States there are 6 catories of the Air Quality Index.
						The table below shows the category names, colors, and associated AQI
						value ranges:
					</p>
					<div className="aqi-table">
						{/* Column headers */}
						<div className="table-row-header">Category</div>
						<div className="table-row-header">Value Range</div>

						{/* Good row */}
						<div className="table-row-good cat">Good</div>
						<div className="table-row-good">0 to 50</div>

						{/* Moderate row */}
						<div className="table-row-mod cat">Moderate</div>
						<div className="table-row-mod">51 to 100</div>

						{/*Unhealthy for sensitive groups row */}
						<div className="table-row-unhealthy-sensitive cat">
							Unhealthy for sensitive groups
						</div>
						<div className="table-row-unhealthy-sensitive">101 to 150</div>

						{/*Unhealthy row */}
						<div className="table-row-unhealthy cat">Unhealthy</div>
						<div className="table-row-unhealthy">151 to 200</div>

						{/*Very Unhealthy row */}
						<div className="table-row-v-unhealthy cat">Very Unhealthy</div>
						<div className="table-row-v-unhealthy">201 to 300</div>

						{/*Hazardous row */}
						<div className="table-row-hazardous cat">Hazardous</div>
						<div className="table-row-hazardous">301 to 500</div>
					</div>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

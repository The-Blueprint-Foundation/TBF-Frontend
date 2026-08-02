// File: AQISafety.jsx
// Author: Lex Albrandt
// Purpose: This file is the React component for the AQI Safety table

import { Fragment } from "react";

const safetyRows = [
	{
		category: "Good (0-50)",
		categoryClass: "table-row-good",
		concern: "N/A",
		actions: "No action needed",
	},
	{
		category: "Moderate",
		categoryClass: "table-row-mod",
		concern: "Some people who are sensitive to pollution",
		actions: (
			<>
				<p>
					<strong>Sensitive people:</strong> limit outdoor activites and pay
					attention to symptoms like coughing or shortness of breath.
				</p>
				<p>
					<strong>Everyone Else:</strong> no action needed
				</p>
			</>
		),
	},
	{
		category: "Unhealthy for sensitive groups",
		categoryClass: "table-row-unhealthy-sensitive",
		concern:
			"Sensitive groups include children, older adults, pregnant women, outdoor workers, and people with heart or lung disease",
		actions: (
			<>
				<p>
					<strong>Sensitive Groups:</strong> Limit oudoor activites, and take
					frequent breaks. Watch for symptoms like coughing or shortness of
					breath. In addition, follow guidlines from your health care provider.
				</p>
				<p>
					<strong>Everyone else: </strong>Watch for symptoms like coughing or
					shortness of breath.
				</p>
			</>
		),
	},
	{
		category: "Unhealthy",
		categoryClass: "table-row-unhealthy",
		concern: "Everyone",
		actions: (
			<>
				<p>
					<strong>Sensitive Groups: </strong>
					Avoid long or intense outdoor activities, and consider moving
					activities indoors.
				</p>
				<p>
					<strong>Everyone else: </strong>
					Reduce long or intense outdoor activities, and take frequent breaks.
				</p>
			</>
		),
	},
	{
		category: "Very Unhealthy",
		categoryClass: "table-row-v-unhealthy",
		concern: "Everyone",
		actions: (
			<>
				<p>
					<strong>Sensitive Groups: </strong>
					Avoid all outdoor physical activities and consider moving activities
					indoors.
				</p>
				<p>
					<strong>Everyone else: </strong>
					Avoid long or intense outdoor activity. Consider moving activities
					indoors.
				</p>
			</>
		),
	},
	{
		category: "Unhealthy for sensitive groups",
		categoryClass: "table-row-hazardous",
		concern: "Everyone",
		actions: (
			<>
				<p>
					<strong>Everyone: </strong>
					avoid all outdoor physical activity.
				</p>
				<p>
					<strong>Sensitive Groups: </strong>
					remain indoors and keep activity levels low. In addition, follow
					guidelines from your healthcare provider.
				</p>
			</>
		),
	},
];

export default function AQISafetyTable() {
	return (
		<div className="aqi-safety-table">
			<div className="table-cell table-row-header">Category</div>
			<div className="table-cell table-row-header">
				Who Needs to be Concerned?
			</div>
			<div className="table-cell table-row-header">Recommended Actions</div>

			{
				safetyRows.map((row) => (
					<Fragment key={row.category}>
						<div className={`table-cell ${row.categoryClass} cat`}>
							{row.category}
						</div>
						<div className="table-cell">{row.concern}</div>
						<div className="table-cell">{row.actions}</div>
					</Fragment>
				))

				// <div className="table-cell table-row-unhealthy-sensitive cat">
				// 	Unhealthy for sensitive groups
				// </div>
				// <div className="table-cell">Sensitive Groups</div>
				// <div className="table-cell">101 to 150</div>

				// <div className="table-cell table-row-unhealthy cat">Unhealthy</div>
				// <div className="table-cell">Everyone</div>
				// <div className="table-cell">151 to 200</div>

				// <div className="table-cell table-row-v-unhealthy cat">Very Unhealthy</div>
				// <div className="table-cell">Everyone</div>
				// <div className="table-cell">201 to 300</div>

				// <div className="table-cell table-row-hazardous cat">Hazardous</div>
				// <div className="table-cell">Everyone</div>
				// <div className="table-cell">
				// 	<p>
				// 		<strong>Everyone: </strong>Avoid all outdoor physical activity.
				// 	</p>
				// </div> */
			}
		</div>
	);
}

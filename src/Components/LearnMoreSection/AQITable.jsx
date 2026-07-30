// File: AQITable.jsx
// Author: Lex Albrandt
// Purpose: This code pulls out the AQI Table into its own component, allowing
// for more efficient and easier maintainability

export default function AQITable() {
	return (
		<div className="aqi-table">
			<div className="table-cell table-row-header">Category</div>
			<div className="table-cell table-row-header">Value Range</div>

			<div className="table-cell table-row-good cat">Good</div>
			<div className="table-cell">0 to 50</div>

			<div className="table-cell table-row-mod cat">Moderate</div>
			<div className="table-cell">51 to 100</div>

			<div className="table-cell table-row-unhealthy-sensitive cat">
				Unhealthy for sensitive groups
			</div>
			<div className="table-cell">101 to 150</div>

			<div className="table-cell table-row-unhealthy cat">Unhealthy</div>
			<div className="table-cell">151 to 200</div>

			<div className="table-cell table-row-v-unhealthy cat">Very Unhealthy</div>
			<div className="table-cell">201 to 300</div>

			<div className="table-cell table-row-hazardous cat">Hazardous</div>
			<div className="table-cell">301 to 500</div>
		</div>
	);
}

// File: PMScaleGraphic.jsx
// Author: Lex Albrandt
// Purpose: this code pulls the scale graphic from the accordion for rendering

import pmScaleGraphic from "./pm2.5_scale_graphic-color.jpg";

export default function PMScaleGraphic() {
	return (
		<figure className="pm-scale-figure">
			<img
				src={pmScaleGraphic}
				className="pm-graphic"
				alt="An image showing a human hair and fine beach sand as a scale for particulate matter sizes"
			/>

			<figcaption className="img-cap">
				Source={" "}
				<a
					href="https://www.epa.gov/pm-pollution/particulate-matter-pm-basics"
					target="_blank"
					rel="noopener noreferrer"
				>
					U.S. Environmental Protection Agency
				</a>
			</figcaption>
		</figure>
	);
}

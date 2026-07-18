import "./App.css";
import Navbar from "./Components/Navbar";
import SensorCard from "./Components/SensorCard";
import SensorMap from "./Components/SensorMap";
import sensors from "./mockData";
import LearnMore from "./Components/LearnMoreSection/LearnMore";

function App() {
	return (
		<div className="app">
			<Navbar />
			<main className="app__main">
				<div className="app__filter-bar">
					<span className="app__filter-label">Showing all sensors</span>
					<div className="app__legend">
						<span className="app__legend-item app__legend-item--good">
							Good
						</span>
						<span className="app__legend-item app__legend-item--average">
							Average
						</span>
						<span className="app__legend-item app__legend-item--poor">
							Poor
						</span>
					</div>
				</div>

				<div className="app__grid">
					{sensors.map((sensor) => (
						<SensorCard key={sensor.id} sensor={sensor} />
					))}
				</div>
				<h2 className="app__section-title">Sensor Locations</h2>
				<SensorMap sensors={sensors} />
				<LearnMore />
			</main>
		</div>
	);
}

export default App;
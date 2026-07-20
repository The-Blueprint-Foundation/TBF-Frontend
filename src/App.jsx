import "./App.css";
import Navbar from "./Components/Navbar";
import SensorCard from "./Components/SensorCard";
import SensorMap from "./Components/SensorMap";
import sensors from "./mockData";
import LearnMore from "./Components/LearnMoreSection/LearnMore";

function App() {
	return (
		<div className="app" id="top">
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

				<section id="map">
          <div className="app__grid">
            {sensors.map((sensor) => (
              <SensorCard key={sensor.id} sensor={sensor} />
            ))}
          </div>
          <div className="app__map-container">
					  <SensorMap sensors={sensors} />
				  </div>
				</section>

				<section id="learn-more">
					<LearnMore />
				</section>
			</main>
		</div>
	);
}

export default App;

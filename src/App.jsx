import "./App.css";
import Navbar from "./Components/Navbar";
import SensorCard from "./Components/SensorCard";
import SensorMap from "./Components/SensorMap";
import sensors from "./mockData";
import LearnMore from "./Components/LearnMoreSection/LearnMore";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app" id="top">
      <Navbar />
      <main className="app__main">
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
			<section id="foundation">
	      <Footer />
      </section>
		</div>
	);
}

export default App;
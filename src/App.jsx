import "./App.css";
import Navbar from "./Components/Navbar";
import SensorCard from "./Components/SensorCard";
import SensorMap from "./Components/SensorMap";
import LearnMore from "./Components/LearnMoreSection/LearnMore";
import Footer from "./Components/Footer";
import { useSensors } from "./hooks/useSensors";

function App() {
  const { sensors, isLoading, error } = useSensors();

  return (
    <div className="app" id="top">
      <Navbar />
      <main className="app__main">
        <section id="map">
          {isLoading && (
            <p className="app__status">Loading sensor data…</p>
          )}

          {!isLoading && error && (
            <p className="app__status app__status--error">
              Couldn't load sensor data ({error}). Try refreshing the page.
            </p>
          )}

          {!isLoading && !error && (
            <>
              <div className="app__grid">
                {sensors.map((sensor) => (
                  <SensorCard key={sensor.id} sensor={sensor} />
                ))}
              </div>
              <div className="app__map-container">
                <SensorMap sensors={sensors} />
              </div>
            </>
          )}
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


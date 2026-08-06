import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "./SensorMap.css";
import oregonBoundary from "./oregonBoundary";

const statusColors = {
  good: "var(--color-aqi-good)",
  moderate: "var(--color-aqi-mod)",
  sensitive: "var(--color-aqi-unhealthy-sens)",
  unhealthy: "var(--color-aqi-unhealthy)",
  veryunhealthy: "var(--color-aqi-v-unhealthy)",
  hazardous: "var(--color-aqi-haz)",
};

const statusLabels = {
  good: "Good",
  moderate: "Moderate",
  sensitive: "Sensitive Groups",
  unhealthy: "Unhealthy",
  veryunhealthy: "Very Unhealthy",
  hazardous: "Hazardous",
};

function createColoredIcon(color) {
  return L.divIcon({
    className: "sensor-marker",
    html: `<div style="background-color:${color}; width:18px; height:18px; border-radius:50%; border:2px solid white; box-shadow:0 0 3px rgba(0,0,0,0.4);"></div>`,
    iconSize: [18, 18],
  });
}

function SensorMap({ sensors }) {
  return (
    <MapContainer
      center={[45.5001, -122.4302]}
      zoom={11}
      minZoom={7}
      maxBounds={[
        [41.5, -125.2],
        [46.5, -116.2],
      ]}
      maxBoundsViscosity={1.0}
      scrollWheelZoom={false}
      className="sensor-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Polygon
        positions={[
          [
            [30, -140],
            [30, -100],
            [55, -100],
            [55, -140],
          ],
          oregonBoundary,
        ]}
        pathOptions={{ color: "transparent", fillColor: "#ffffff", fillOpacity: 0.85 }}
      />
      {sensors
        .filter((sensor) => sensor.lat && sensor.lng)
        .map((sensor) => (
          <Marker
            key={sensor.id}
            position={[sensor.lat, sensor.lng]}
            icon={createColoredIcon(statusColors[sensor.status])}
          >
            <Popup>
              <strong>{sensor.name}</strong>
              <br />
              {sensor.type} &middot; {sensor.location}
              <br />
              AQI: {sensor.aqi}
              <br />
              Temp: {sensor.temperature}°F, Humidity: {sensor.humidity}%
              <br />
              Status:{" "}
              <span style={{ color: statusColors[sensor.status], fontWeight: "bold" }}>
                {statusLabels[sensor.status]}
              </span>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default SensorMap;
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./SensorMap.css";

const statusColors = {
  good: "#3b6d11",
  average: "#856500",
  poor: "#c0392b",
};

const statusLabels = {
  good: "Good",
  average: "Average",
  poor: "Poor",
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
    <MapContainer center={[45.52, -122.55]} zoom={11} scrollWheelZoom={false} className="sensor-map">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
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
              PM2.5: {sensor.pm25} µg/m³<br />
              PM10: {sensor.pm10} µg/m³<br />
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
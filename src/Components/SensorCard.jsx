import "./SensorCard.css";

function SensorCard({ sensor }) {
  const { name, aqi, temperature, humidity, status } = sensor;

  const statusLabels = {
    good: "Good",
    moderate: "Moderate",
    sensitive: "Unhealthy for Sensitive Groups",
    unhealthy: "Unhealthy",
    veryunhealthy: "Very Unhealthy",
    hazardous: "Hazardous",
  };

  const statusDescriptions = {
    good: "Air quality is satisfactory. Safe for all activities.",
    moderate: "Acceptable air quality. Sensitive individuals should take note.",
    sensitive: "Members of sensitive groups may experience health effects.",
    unhealthy: "Everyone may begin to experience health effects.",
    veryunhealthy: "Health alert — everyone may experience serious effects.",
    hazardous: "Health warning of emergency conditions for everyone.",
  };

  return (
    <div className={`sensor-card sensor-card--${status}`}>
      <div className="sensor-card__header">
        <h2 className="sensor-card__name">{name}</h2>
      </div>

      <div className={`sensor-card__aqi sensor-card__aqi--${status}`}>
        <span className="sensor-card__aqi-number">{aqi}</span>
        <span className="sensor-card__aqi-label">AQI</span>
      </div>

      <div className={`sensor-card__status sensor-card__status--${status}`}>
        <span className="sensor-card__status-label">
          {statusLabels[status]}
        </span>
        <p className="sensor-card__status-description">
          {statusDescriptions[status]}
        </p>
      </div>

      <div className="sensor-card__readings">
        <div className="sensor-card__reading">
          <span className="sensor-card__reading-label">Temp</span>
          <span className="sensor-card__reading-value">{temperature}</span>
          <span className="sensor-card__reading-unit">°F</span>
        </div>
        <div className="sensor-card__reading">
          <span className="sensor-card__reading-label">Humidity</span>
          <span className="sensor-card__reading-value">{humidity}</span>
          <span className="sensor-card__reading-unit">%</span>
        </div>
      </div>
    </div>
  );
}

export default SensorCard;
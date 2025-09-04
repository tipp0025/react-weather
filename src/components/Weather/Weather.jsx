import PropTypes from "prop-types";
import "./Weather.css";

function Weather({ data }) {
  if (!data) return null;

  const w = data.weather?.[0];
  const description =
    w?.description
      ?.split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ") ?? "Weather";

  return (
    <div
      id="weather-container"
      role="region"
      aria-label={`Weather for ${data.name}`}
    >
      <h2 id="weather-title">
        Detailed Weather for <span className="accent">{data.name}</span>
      </h2>

      <div id="weather-info">
        <div id="info-left">
          {w?.icon && (
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
              alt={description}
              width="100"
              height="100"
            />
          )}
          <p className="description">{description}</p>
        </div>

        <div id="info-right">
          <div className="metric">
            <span className="label">Temperature</span>
            <span className="value">{Math.round(data.main.temp)} °C</span>
          </div>
          <div className="metric">
            <span className="label">Feels Like</span>
            <span className="value">{Math.round(data.main.feels_like)} °C</span>
          </div>
          <div className="metric">
            <span className="label">Wind</span>
            <span className="value">{Math.round(data.wind.speed)} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Weather.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      feels_like: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

export default Weather;

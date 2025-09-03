import PropTypes from "prop-types";
import "./Weather.css";

function Weather({ data }) {
  if (!data) return null;
  return (
    <div id="weather-container">
      <h2>Detailed Weather for {data.name}</h2>
      <div id="weather-info">
        <div id="info-left">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <p>
            {data.weather[0].description
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
        <div id="info-right">
          <p>Temperature: {data.main.temp} °C</p>
          <p>Feels Like: {data.main.feels_like} °C</p>
          <p>Wind: {data.wind.speed} m/s</p>
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

import PropTypes from "prop-types";
import LocationCard from "../LocationCard/LocationCard";
import "./LocationBar.css";

function LocationBar({ initialWeatherData, onItemRemove, onCardClick }) {
  const removeCard = (indexToRemove) => {
    onItemRemove(indexToRemove);
  };

  return (
    <div className="location-bar">
      {initialWeatherData && initialWeatherData.length > 0 ? (
        initialWeatherData
          .slice(0, 5)
          .map((data, index) => (
            <LocationCard
              key={index}
              data={data}
              onRemove={() => removeCard(index)}
              onClick={() => onCardClick(data)}
            />
          ))
      ) : (
        <p>Search for a location to add a city.</p>
      )}
    </div>
  );
}

LocationBar.propTypes = {
  initialWeatherData: PropTypes.array,
  onItemRemove: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default LocationBar;

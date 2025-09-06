import PropTypes from "prop-types";
import "./LocationCard.css";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

function LocationCard({ data, onRemove, onClick }) {
  const countryCode = data?.sys?.country;
  const countryName = countryCode ? regionNames.of(countryCode) : "";

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className="location-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`${data?.name}, ${data?.sys?.country}`}
    >
      <h2 className="card-title">{data?.name}</h2>
      <p className="card-subtitle">{countryName}</p>
      <button
        className="card-remove"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        aria-label={`Remove ${data?.name}`}
        title="Remove"
      >
        Remove
      </button>
    </div>
  );
}

LocationCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    sys: PropTypes.shape({
      country: PropTypes.string,
    }),
  }),
  onRemove: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LocationCard;

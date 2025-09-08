import PropTypes from "prop-types";
import "./LocationCard.css";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

function LocationCard({ data, onRemove, onClick, isSelected = false }) {
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
      className={`location-card compact${isSelected ? " is-selected" : ""}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-label={`${data?.name}, ${countryName}`}
      title={`${data?.name}, ${countryName}`}
    >
      <button
        className="card-remove-icon"
        type="button"
        aria-label={`Remove ${data?.name}`}
        title="Remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        ×
      </button>

      <div className="card-main">
        <h3 className="card-title" title={data?.name}>
          {data?.name}
        </h3>
        <p className="card-subtitle" title={countryName}>
          {countryName}
        </p>
      </div>
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
  isSelected: PropTypes.bool,
};

export default LocationCard;

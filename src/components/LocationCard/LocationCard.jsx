import PropTypes from "prop-types";
import "./LocationCard.css";

function LocationCard({ data, onRemove, onClick }) {
  return (
    <button className="location-card" onClick={onClick} type="button">
      <h2 className="card-title">{data?.name}</h2>
      <p className="card-subtitle">{data?.sys?.country}</p>
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
    </button>
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

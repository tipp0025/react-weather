import PropTypes from "prop-types";
import "./LocationCard.css";

function LocationCard({ data, onRemove, onClick }) {
  return (
    <div className="location-card" onClick={onClick}>
      <h2>{data?.name}</h2>
      <p>{data?.sys?.country}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
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

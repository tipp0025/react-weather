function LocationBar({ children }) {
  return (
    <div className="location-bar">
      <h2>Locations</h2>
      <div className="location-cards">{children}</div>
    </div>
  );
}

export default LocationBar;

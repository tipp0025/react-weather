import "./Header.css";
import PropTypes from "prop-types";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <h1 className="title">React Weather</h1>
      <button
        className="themeToggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;

import "./Header.css";
import PropTypes from "prop-types";

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <h1 className="title">React Weather</h1>
      <button
        className={`themeToggle ${theme === "dark" ? "is-dark" : "is-light"}`}
        type="button"
        role="switch"
        aria-checked={theme === "dark"}
        onClick={onToggleTheme}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <span className="icon">{theme === "dark" ? "🌙" : "☀️"}</span>
        <span className="slider" />
      </button>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;

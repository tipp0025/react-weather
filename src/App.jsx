import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import LocationBar from "./components/LocationBar/LocationBar";
import LocationCard from "./components/LocationCard/LocationCard";
import Weather from "./components/Weather/Weather";

function App() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <div className="app-container">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="main">
          <SearchBar />
          <FeedbackBar />
          <LocationBar>
            <LocationCard />
          </LocationBar>
          <Weather></Weather>
        </main>
      </div>
    </>
  );
}

export default App;

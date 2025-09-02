import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import LocationBar from "./components/LocationBar/LocationBar";
import LocationCard from "./components/LocationCard/LocationCard";
import Weather from "./components/Weather/Weather";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");

  const onSearch = (result) => {
    if (result.error) {
      setErrorMessage(result.error);
    } else if (weatherData.length >= 5) {
      setErrorMessage("You cannot add more than five locations.");
    } else {
      setWeatherData([...weatherData, result]);
      setErrorMessage("");
    }
  };
  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  return (
    <>
      <div className="app-container">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="main">
          <SearchBar onSearch={onSearch} />
          <FeedbackBar
            message={errorMessage}
            clearMessage={clearErrorMessage}
          />
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

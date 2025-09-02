import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import LocationBar from "./components/LocationBar/LocationBar";
import Weather from "./components/Weather/Weather";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);

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

  const removeWeatherDataItem = (index) => {
    setWeatherData((currentData) => currentData.filter((_, i) => i !== index));
  };

  const handleCardClick = (data) => {
    setSelectedWeather(data);
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
          <LocationBar
            initialWeatherData={weatherData}
            onItemRemove={removeWeatherDataItem}
            onCardClick={handleCardClick}
          />
          <Weather data={selectedWeather} />
        </main>
      </div>
    </>
  );
}

export default App;

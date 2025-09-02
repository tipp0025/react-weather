import { useTheme } from "./hooks/useTheme";
import { useWeatherData } from "./hooks/useWeatherData";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import LocationBar from "./components/LocationBar/LocationBar";
import Weather from "./components/Weather/Weather";

function App() {
  const { theme, toggleTheme } = useTheme();

  const {
    errorMessage,
    weatherData,
    selectedWeather,
    addFromSearchResult,
    clearErrorMessage,
    removeByIndex,
    selectWeather,
  } = useWeatherData();

  return (
    <div className="app-container">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="main">
        <SearchBar onSearch={addFromSearchResult} />
        <FeedbackBar message={errorMessage} clearMessage={clearErrorMessage} />
        <LocationBar
          initialWeatherData={weatherData}
          onItemRemove={removeByIndex}
          onCardClick={selectWeather}
        />
        <Weather data={selectedWeather} />
      </main>
    </div>
  );
}

export default App;

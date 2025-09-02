import { useCallback, useState } from "react";

const MAX_ITEMS = 5;

export function useWeatherData() {
  const [errorMessage, setErrorMessage] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState(null);

  const addFromSearchResult = useCallback(
    (result) => {
      if (!result || typeof result !== "object") {
        setErrorMessage("Invalid result.");
        return;
      }
      if (result.error) {
        setErrorMessage(result.error);
        return;
      }
      if (weatherData.length >= MAX_ITEMS) {
        setErrorMessage(`You cannot add more than ${MAX_ITEMS} locations.`);
        return;
      }
      setWeatherData((prev) => [...prev, result]);
      setErrorMessage("");
    },
    [weatherData.length]
  );

  const clearErrorMessage = useCallback(() => setErrorMessage(""), []);

  const removeByIndex = useCallback(
    (index) => {
      setWeatherData((current) => current.filter((_, i) => i !== index));
      setSelectedWeather((currentSelected) =>
        currentSelected && weatherData[index] === currentSelected
          ? null
          : currentSelected
      );
    },
    [weatherData]
  );

  const selectWeather = useCallback((data) => {
    setSelectedWeather(data);
  }, []);

  return {
    // state
    errorMessage,
    weatherData,
    selectedWeather,
    // actions
    addFromSearchResult,
    clearErrorMessage,
    removeByIndex,
    selectWeather,
  };
}

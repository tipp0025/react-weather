import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import LocationBar from "./components/LocationBar/LocationBar";
import LocationCard from "./components/LocationCard/LocationCard";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <SearchBar />
        <FeedbackBar />
        <LocationBar>
          <LocationCard />
        </LocationBar>
        <Weather></Weather>
      </div>
    </>
  );
}

export default App;

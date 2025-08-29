import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar";
import LocationBar from "./components/LocationBar/LocationBar";
import LocationCard from "./components/LocationCard/LocationCard";
import Weather from "./components/Weather/Weather";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <FeedbackBar />
      <LocationBar>
        <LocationCard />
      </LocationBar>
      <Weather></Weather>
    </>
  );
}

export default App;

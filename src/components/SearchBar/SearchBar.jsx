const apiKey = import.meta.env.VITE_API_KEY;

import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      onSearch({ error: "Please enter a search term." });
    } else {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          if (response.status === 404) {
            onSearch({
              error: "Location not found. Please try another search.",
            });
          } else {
            onSearch({ error: "An error occurred. Please try again later." });
          }
        } else {
          const result = await response.json();
          console.log("Search result:", result);
          onSearch(result);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        onSearch({
          error:
            "Failed to fetch data. Please check your internet connection and try again.",
        });
      }
    }
  };

  return (
    <form id="searchForm" role="search" onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Location:</label>
      <input
        id="searchInput"
        name="q"
        type="text"
        placeholder="Search by City"
        value={searchTerm}
        onChange={handleChange}
        autoComplete="off"
        aria-label="Search by city"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

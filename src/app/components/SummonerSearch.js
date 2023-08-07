"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SummonerSearch() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      window.location.href = `/profile/${searchText}`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-container bg-brand-bg2 flex items-center rounded-md h-8">
        <input
          type="text"
          placeholder="Search Summoner"
          className="text-white placeholder-white/50 bg-brand-bg2 caret-white text-sm py-1 px-3 rounded-l-md h-8 outline-none ring-none"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPress}
        ></input>
        <button type="submit" className="py-1 px-3 rounded-r-md h-8">
          <FontAwesomeIcon
            className="w-3 text-white/50"
            icon={faMagnifyingGlass}
          />
        </button>
      </div>
    </form>
  );
}

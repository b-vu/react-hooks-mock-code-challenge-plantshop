import React from "react";

function Search({ handleSearchOnPlants, searchTerm }) {
  const handleSearchChange = event => {
    handleSearchOnPlants(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchChange}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;

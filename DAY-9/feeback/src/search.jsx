import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const Search = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here..."
      />
    </div>
  );
};

export default Search;

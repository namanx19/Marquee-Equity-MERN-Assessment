// src/components/BookSearch.js
import React, { useState } from "react";

const BookSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      className="md:w-96 sm:w-72 w-3/4 px-4 py-2 rounded-lg border-2 hover:blue-500 duration-300 placeholder:text-center"
      type="text"
      placeholder="Search for books"
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default BookSearch;

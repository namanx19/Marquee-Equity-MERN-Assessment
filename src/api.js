// src/api.js
export const fetchBooks = async (query) => {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
  );
  const data = await response.json();
  return data.docs;
};

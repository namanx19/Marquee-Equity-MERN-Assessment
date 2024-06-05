import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BookSearch from "../components/BookSearch";
import BookCard from "../components/BookCard";
import { fetchBooks } from "../api";
import { Grid } from "react-loader-spinner";

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );
  const [loading, setLoading] = useState(false);

  // Media query hooks for responsive sizes
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });

  // Determine the size of the loader based on the screen size
  const loaderSize = isSmallScreen ? 40 : isMediumScreen ? 60 : 80;

  const handleSearch = async (query) => {
    if (query.length > 2) {
      setLoading(true);
      const results = await fetchBooks(query);
      setBooks(results);
      setLoading(false);
    } else {
      setBooks([]);
    }
  };

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col col-span-12 items-center space-y-6">
        <div className="w-full flex justify-center mt-6">
          <h1 className="px-4 py-2 text-blue-500 font-semibold md:text-4xl sm:text-3xl text-2xl text-center">
            Explore Book Treasures
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <BookSearch onSearch={handleSearch} />
        </div>
        {loading ? (
          <div className="flex flex-col justify-center items-center w-full h-64">
            <Grid
              height={loaderSize}
              width={loaderSize}
              color="#3B81F6"
              ariaLabel="grid-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <h1 className="font-light text-xl mt-6">
              Fetching Books from the API
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <div key={book.key} className="flex justify-center">
                <BookCard
                  book={book}
                  addToBookshelf={addToBookshelf}
                  showAddButton={true}
                />
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center py-8">
          <a
            className="flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold md:w-96 sm:w-72 w-auto duration-300"
            href="/bookshelf"
          >
            Go to My Bookshelf
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

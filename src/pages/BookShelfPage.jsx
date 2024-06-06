import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import Lottie from "react-lottie";
import animationData from "../assets/BookShelfPageOops.json";

const BookshelfPage = () => {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("bookshelf")) || []);
  const isLocalStorageEmpty = books.length === 0;

  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("bookshelf")) || []);
  }, []);

  const removeFromBookshelf = (book) => {
    const updatedBooks = books.filter((b) => b.key !== book.key);
    setBooks(updatedBooks);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBooks));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold text-black">My Bookshelf</h1>
      </div>

      {isLocalStorageEmpty && (
        <div className="w-full flex justify-center mt-8">
          <div className="flex flex-col justify-center items-center w-full h-64">
            <Lottie options={defaultOptions} height={350} width={350} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center lg:px-24 py-2">
        {books.map((book, index) => (
          <div key={index} className="flex justify-center">
            <BookCard book={book} showAddButton={false} showRemoveButton={true} removeFromBookshelf={removeFromBookshelf} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;

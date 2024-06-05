import React from "react";
import BookCard from "../components/BookCard";

const BookshelfPage = () => {
  const books = JSON.parse(localStorage.getItem("bookshelf")) || [];

  return (
    <div className="container mx-auto">
      <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold text-black">My Bookshelf</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} showAddButton={false} />
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;

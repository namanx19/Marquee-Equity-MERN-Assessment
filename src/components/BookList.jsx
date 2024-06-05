import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, showAddButton }) => {
  return (
    <div className="container mx-auto p-4 gap-x-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book, index) => (
          <BookCard key={index} book={book} showAddButton={showAddButton} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

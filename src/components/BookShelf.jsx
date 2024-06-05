// src/components/Bookshelf.js
import React from "react";

const Bookshelf = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>
            Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;

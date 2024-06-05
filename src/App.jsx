import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import BookshelfPage from "./pages/BookShelfPage"; // Ensure this filename matches the actual file
import "./App.css";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainLayout>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/bookshelf" element={<BookshelfPage />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
};

export default App;

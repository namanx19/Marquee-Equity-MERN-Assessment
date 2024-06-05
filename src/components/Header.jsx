import React from "react";
import images from "../constants/images";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const Header = () => {
  return (
    <section className="sticky backdrop-blur bg-opacity-10 shadow-sm bg-white top-0 left-0 right-0 z-50">
      <header className="container mx-auto px-5 flex justify-between lg:py-3 py-2 items-center relative">
        <a href="/">
          <div className="flex items-center">
            <img
              src={images.Logo}
              alt="MyBookshelf"
              className="w-12 h-12 mr-4"
            />
            <h1 className="hidden sm:block sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
              Bookshelf
            </h1>
          </div>
        </a>
        <nav className="flex space-x-6">
          {/* <div className="bg-gray-100 rounded-lg hover:bg-gray-200 duration-300 flex items-center gap-x-2 px-4 py-2">
            <a href="/about" className="text-lg text-black px-2 py-1">
              About
            </a>
          </div> */}
          <div className="bg-gray-100 backdrop-blur bg-opacity-60 rounded-lg hover:bg-gray-200 duration-500 flex items-center gap-x-2 px-4 py-2">
            <a
              href="/mybookshelf"
              className="lg:text-lg sm:text-sm text-xs text-black "
            >
              My Bookshelf
            </a>
            <IoIosArrowDroprightCircle className="text-black lg:text-lg sm:text-sm text-xs" />
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Header;

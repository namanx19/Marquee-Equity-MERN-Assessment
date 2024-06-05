/* eslint-disable no-unused-vars */
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="bg-gray-200">
      <footer className="container mx-auto px-5 py-10 gap-y-10 gap-x-5 md:pt-20 lg:gap-x-10">
        <div className="md:text-base">
          <h1 className="font-courierprime text-2xl lg:text-3xl md:text-3xl xl:text-3xl text-blacktext text-center">
            My Bookshelf
          </h1>
          <p className="text-blacktext text-xs text-center mt-4 mb-8">
            Read Anywhere, Anytime: E-Books at Your Fingertips.
          </p>
          <ul className="flex justify-center items-center mt-5 mb-16 space-x-4 text-blacktext">
            <div className="flex items-center gap-x-4 rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-300 duration-300">
              <li>
                <a href="/">
                  <FaGithub className="w-6 h-auto" />
                </a>
              </li>
              <h1>My Bookshelf</h1>
            </div>
          </ul>
        </div>
        <div className="flex flex-col items-center space-y-4 col-span-12">
          <div className="bg-dark-soft bg-gray-300 p-3 rounded-full">
            <FaHeart className="w-4 h-auto text-pink-600" />
          </div>
          <p className="font-bold italic text-dark-light text-sm">
            Copyright © {currentYear}. Crafted with love.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

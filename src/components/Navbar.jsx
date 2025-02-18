"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full shadow-md z-50 h-20 flex justify-center items-center ">
      <div className=" mx-auto px-6 py-4 flex justify-around items-center gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          WebOrbify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "About", "Services", "Blog"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-red-500 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {["Home", "About", "Services", "Blog"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-red-500 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

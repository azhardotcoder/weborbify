"use client";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Blog"];

  return (
    <nav className="bg-[#09101C] font-semibold text-white fixed w-full shadow-md z-50 h-16 flex items-center">
      <div className="w-full px-7 flex justify-between items-center">
        <div className="flex gap-8">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-500 transition-colors"
          >
            WebOrbify
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:text-[#84888E] transition-colors duration-300 ${
                    isActive ? "text-blue-500 font-semibold" : "text-white"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Desktop Download Buttons */}
        <div className="hidden md:flex gap-4">
          <Button title="Download for mobile" />
          <Button title="Download for linux" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute flex flex-col justify-between gap-20 top-16 w-full bg-[#09101C] py-4 px-6 space-y-6">
          <div>
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `block text-white text-lg pl-1 pb-2 hover:text-blue-500 transition-colors ${
                    isActive ? "text-blue-500 font-semibold" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {"> " + item}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col py-5 gap-2">
            <Button title="Download for mobile" />
            <Button title="Download for linux" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

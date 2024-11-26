"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State til at vise/skjule dropdown

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Skifter mellem åben og lukket
  };

  return (
    <header className="p-6 bg-[#FEFEF2] text-[#343067] justify-items-end z-1">
      <nav className="flex justify-between items-center">
        
        <div className="flex space-x-6 items-center">
          <Link href="/" className="hover:text-gray-400 font-camelia">
            Frontpage
          </Link>

        
          <div className="relative">
            
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-400 focus:outline-none flex items-center font-camelia"
            >
              Categories
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.064a.75.75 0 111.08 1.04l-4.25 4.663a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown-indhold */}
            {isOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 font-camelia">
                <div className="py-1">
                  <Link
                    href="/skills"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Skills
                  </Link>
                  <Link
                    href="/resume"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Resume
                  </Link>
                  <Link
                    href="/aboutme"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    About Me
                  </Link>
                  <Link
                    href="/link"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Links
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

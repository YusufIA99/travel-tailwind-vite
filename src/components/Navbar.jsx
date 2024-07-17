import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-4  md:px-8">
      <div>
        <h1 className="text-xl font-bold">RELOCATE.</h1>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`absolute w-full flex-col bg-white transition-all duration-300 ease-in md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent ${
          isOpen ? "left-0 top-16" : "top-[-200px]"
        }`}
      >
        <li className="py-2 md:px-4 md:py-0">
          <a href="#">Home</a>
        </li>
        <li className="py-2 md:px-4 md:py-0">
          <a href="#">Deals</a>
        </li>
        <li className="py-2 md:px-4 md:py-0">
          <a href="#">Explore</a>
        </li>
        <li className="py-2 md:px-4 md:py-0">
          <a href="#">Resources</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

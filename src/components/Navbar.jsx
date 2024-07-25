import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1>RELOCATE.</h1>
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
        className={`absolute w-full flex-col bg transition-all duration-300 ease-in md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent ${
          isOpen ? "left-0 top-16" : "top-[-200px]"
        }`}
      >
        <li>
          <a href="#Hero">Home</a>
        </li>
        <li>
          <a href="#Destination">Destinations</a>
        </li>
        <li>
          <a href="#Morelocations">Explore</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

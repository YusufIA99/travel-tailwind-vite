import React, { useState } from "react";
import hero_video from "../assets/hero_video.mp4";
import { FaSearch } from "react-icons/fa";

function Hero() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    try {
      const response = await fetch(finalURL);
      if (!response.ok) {
        throw new Error("Country not found");
      }
      const data = await response.json();
      setCountryData(data[0]);
      setErrorMessage("");
    } catch (error) {
      setCountryData(null);
      setErrorMessage("Country not found. Please try again.");
      console.error("Error fetching country data:", error);
    }
  };

  return (
    <div id="Hero" className="relative flex h-screen w-full flex-col items-center justify-center">
      <video
        className="absolute h-full w-full object-cover"
        src={hero_video}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute left-0 top-0 h-full w-full bg-gray-900/50"></div>
      <div className="z-10 space-y-6 p-6 text-center text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Welcome to Relocate</h1>
        <p className="text-2xl font-light drop-shadow-md">Discover any place</p>
        <div className="relative flex items-center justify-center">
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-[700px] items-center justify-between border bg-gray-100/90 p-1 text-black"
          >
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search country"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                className="w-full bg-transparent p-1 focus:outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center justify-center rounded-md bg-blue-500 p-2"
              >
                <FaSearch className="" />
              </button>
            </div>
          </form>
        </div>
        {errorMessage && (
          <div className="mt-6 bg-red-500 p-4 rounded-lg text-white shadow-lg">
            <p>{errorMessage}</p>
          </div>
        )}
       {countryData && (
  <div className="mt-6 bg-white p-6 rounded-lg text-black shadow-lg">
    <h2 className="text-3xl font-bold">{countryData.name.common}</h2>
    <div className="flex justify-center mt-4">
      <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} className="w-32 h-20" />
    </div>
    <p className="text-lg">Capital: {countryData.capital}</p>
    <p className="text-lg">Region: {countryData.region}</p>
    <p className="text-lg">Population: {countryData.population.toLocaleString()}</p>
  </div>
)}
      </div>
    </div>
  );
}

export default Hero;
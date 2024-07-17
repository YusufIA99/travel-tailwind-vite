import React from "react";
import hero_video from "../assets/hero_video.mp4";
import { FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      <video
        className="absolute h-full w-full object-cover"
        src={hero_video}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute left-0 top-0 h-full w-full bg-gray-900/30"></div>
      <div className="z-10 space-y-4 p-4 text-center text-white">
        <h1>Make the right</h1>
        <h2>MOVE</h2>
        <form className="flex w-full max-w-[700px] items-center justify-between border bg-gray-100/90 p-1 text-black">
          <div>
            <input
              type="text"
              placeholder="Search Destination"
              className="font-[poppins semibold] w-[300px] bg-transparent p-1 focus:outline-none sm:w-[400px]"
            />
          </div>
          <div>
            <button className="flex items-center justify-center rounded-md bg-blue-500 p-2">
              <FaSearch className="mr-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;

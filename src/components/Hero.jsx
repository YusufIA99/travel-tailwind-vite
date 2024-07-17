import React from "react";
import hero_video from "../assets/hero_video.mp4";

function Hero() {
  return (
    <div className="relative h-screen w-full">
      <video
        className="h-full w-full object-cover"
        src={hero_video}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default Hero;

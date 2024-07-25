import React from 'react';
import Paraty from '../assets/Paraty.png';
import Olinda from '../assets/Olinda.png';
import Morettes from '../assets/Morettes.png';
import Gramado from '../assets/Gramado.png';
import { Carousel } from "@material-tailwind/react";

function Destinations() {
  return (
    <div id='Destination' className="bg-gradient-to-b from-teal-500 to-teal-50 p-4 flex flex-col items-center">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-white">
          <span className="text-yellow-500">Top</span> <br /> Destinations
        </h1>
        <p className="mt-4 text-white">
          It’s hard enough deciding to move, you don’t have to worry about where to move <br /> to.
          These are some of the most popular and best locations to move to based on a <br /> number of factors.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {[Paraty, Olinda, Morettes, Gramado].map((image, index) => (
          <div key={index} className="relative rounded-lg shadow-lg w-full max-w-xs mx-auto">
            <img src={image} alt={`Destination ${index}`} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 p-4 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex flex-col justify-end">
              <h1 className="text-white text-2xl">{['Paraty', 'Olinda', 'Morettes', 'Gramado'][index]}</h1>
              <p className="text-white">{['Rio de Janeiro', 'Pernambuco', 'Paraná', 'Rio Grande do Sul'][index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
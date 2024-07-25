import React from 'react';
import France from '../assets/France.png';
import Iceland from '../assets/Iceland.png';
import Jamaica from '../assets/Jamaica.png';
import Norway from '../assets/Norway.png';

function Morelocations() {
  return (
    <div id='Morelocations' className="bg-white p-4 flex flex-col items-center">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-black">
          <span className="text-teal-500">More</span> <br /> Destinations
        </h1>
        <p className="mt-4 text-black">
          Your peace of mind doesn’t have to be tied to where everyone else is. We have a <br />
          good number of travel and relocation destinations. Take your time and find the <br />
          perfect one for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {[France, Iceland, Norway, Jamaica].map((image, index) => (
          <div key={index} className="relative rounded-lg shadow-lg w-full max-w-xs mx-auto">
            <img src={image} alt={`Destination ${index}`} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute bottom-0 left-0 p-4 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex flex-col justify-end">
              <h1 className="text-white text-2xl">{['Estaing', 'Vík í Mýrdal', 'Hamnøy village', 'Montego Bay'][index]}</h1>
              <p className="text-white">{['FRANCE', 'ICELAND', 'NORWAY', 'JAMAICA'][index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Morelocations;
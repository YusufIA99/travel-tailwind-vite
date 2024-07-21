import React from 'react';
import France from '../assets/France.png';
import Iceland from '../assets/Iceland.png';
import Jamaica from '../assets/Jamaica.png';
import Norway from '../assets/Norway.png';

function Morelocations() {
  return (
    <div>
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold text-black">
          <span className="text-teal-500">More</span> <br /> Destinations
        </h1>
        <p className="mt-4 text-black">
          Your peace of mind doesn’t have to be tied to where everyone else is. We have a
          good number of travel and relocation destinations. Take your time and find the
          perfect one for you.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="relative w-full sm:w-[calc(50%-1rem)] lg:w-[310px] h-[553px]">
          <img src={France} alt="Estaing, France" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 p-4 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex flex-col justify-end">
            <h1 className="text-white text-2xl">Estaing</h1>
            <p className="text-white">FRANCE</p>
          </div>
        </div>
        <div className="relative w-full sm:w-[calc(50%-1rem)] lg:w-[310px] h-[553px]">
          <img src={Iceland} alt="Vík í Mýrdal, Iceland" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 p-4 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex flex-col justify-end">
            <h1 className="text-white text-2xl">Vík í Mýrdal</h1>
            <p className="text-white">ICELAND</p>
          </div>
        </div>
        <div className="relative w-full sm:w-[calc(50%-1rem)] lg:w-[310px] h-[553px]">
          <img src={Norway} alt="Hamnøy village, Norway" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 p-4 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex flex-col justify-end">
            <h1 className="text-white text-2xl">Hamnøy village</h1>
            <p className="text-white">NORWAY</p>
          </div>
        </div>
        <div className="relative w-full lg:w-[960px] h-[459px]">
          <img src={Jamaica} alt="Montego Bay, Jamaica" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 p-4 w-full h-full bg-gradient-to-t from-black to-transparent rounded-lg flex flex-col justify-end">
            <h1 className="text-white text-2xl">Montego Bay</h1>
            <p className="text-white">JAMAICA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morelocations;
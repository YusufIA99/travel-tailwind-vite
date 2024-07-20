import React from 'react';
import Paraty from '../assets/Paraty.png';
import Olinda from '../assets/Olinda.png';
import Morettes from '../assets/Morettes.png';
import Gramado from '../assets/Gramado.png';

function Destinations() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Top Destinations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <img src={Paraty} alt="Paraty" className="w-[310px] h-[553px] object-cover rounded-lg shadow-lg"/>
          <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
            <h1 className="text-white">Paraty</h1>
            <p className="text-white">Rio Grande do Sul</p>
          </div>
        </div>
        <div className="relative">
          <img src={Olinda} alt="Olinda" className="w-[310px] h-[553px] object-cover rounded-lg shadow-lg"/>
          <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
            <h1 className="text-white">Olinda</h1>
            <p className="text-white">Pernambuco</p>
          </div>
        </div>
        <div className="relative">
          <img src={Morettes} alt="Morettes" className="w-[310px] h-[553px] object-cover rounded-lg shadow-lg"/>
          <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
            <h1 className="text-white">Morettes</h1>
            <p className="text-white">Rio de Janeiro</p>
          </div>
        </div>
        <div className="relative">
          <img src={Gramado} alt="Gramado" className="w-[310px] h-[553px] object-cover rounded-lg shadow-lg"/>
          <div className="absolute bottom-0 left-0 p-4 w-full bg-gradient-to-t from-black to-transparent">
            <h1 className="text-white">Gramado</h1>
            <p className="text-white">Rio Grande do Sul</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
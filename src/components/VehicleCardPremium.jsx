import { useState } from 'react';

export default function VehicleCardPremium({ car, onClick }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  return (
    <div 
      onClick={() => onClick && onClick(car)}
      className="relative flex flex-col overflow-hidden transition-all duration-500 border border-primary-red/50 bg-bg-dark rounded-3xl group cursor-pointer hover:shadow-[0_0_30px_rgba(229,9,20,0.3)] hover:-translate-y-2"
    >
      {/* Premium Badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 px-6 py-1.5 bg-gradient-to-r from-primary-red to-red-800 rounded-b-xl shadow-lg">
        <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          Sponsorisé
        </span>
      </div>

      <div className="relative w-full aspect-video bg-black">
        <img
          src={car.images[activeImgIndex]}
          alt={`${car.brand} ${car.model}`}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent pointer-events-none" />
      </div>

      {/* Content pulled up over the image */}
      <div className="relative flex flex-col flex-grow p-6 -mt-16 z-10">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-widest text-primary-red font-bold mb-1">{car.brand}</p>
          <h3 className="text-3xl font-extrabold text-white leading-tight">{car.model} <span className="font-light">{car.version}</span></h3>
        </div>

        <div className="grid grid-cols-4 gap-4 py-6 border-y border-white/10 mb-6">
          <div className="text-center">
            <span className="block text-text-gray text-xs mb-1 uppercase tracking-wider">Année</span>
            <span className="text-white font-bold">{car.year}</span>
          </div>
          <div className="text-center">
            <span className="block text-text-gray text-xs mb-1 uppercase tracking-wider">Km</span>
            <span className="text-white font-bold">{car.mileage / 1000}k</span>
          </div>
          <div className="text-center">
            <span className="block text-text-gray text-xs mb-1 uppercase tracking-wider">Énergie</span>
            <span className="text-white font-bold truncate block">{car.fuel}</span>
          </div>
          <div className="text-center">
            <span className="block text-text-gray text-xs mb-1 uppercase tracking-wider">Moteur</span>
            <span className="text-white font-bold truncate block">{car.specs?.power}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-sm text-text-gray mb-1">{car.wilaya || car.location}</p>
            <p className="text-3xl font-black text-white">{car.priceDa}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-red flex items-center justify-center text-white transform group-hover:rotate-45 transition-transform duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function VehicleCardMobile({ car, onClick }) {
  return (
    <div 
      onClick={() => onClick && onClick(car)}
      className="flex bg-surface border border-white/10 rounded-xl overflow-hidden active:scale-95 transition-transform"
    >
      <div className="w-2/5 h-32 relative">
        <img src={car.images[0]} alt={car.model} className="w-full h-full object-cover" />
        {car.badge && (
          <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-primary-red text-white text-[9px] font-bold rounded uppercase">
            {car.badge}
          </span>
        )}
      </div>
      <div className="w-3/5 p-3 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-white text-sm leading-tight line-clamp-1">{car.brand} {car.model}</h3>
          <p className="text-[10px] text-text-gray mt-0.5 line-clamp-1">{car.version}</p>
        </div>
        
        <div className="flex gap-2 text-[10px] text-white/60 my-1.5">
          <span className="bg-white/5 px-1.5 py-0.5 rounded">{car.year}</span>
          <span className="bg-white/5 px-1.5 py-0.5 rounded">{car.fuel}</span>
          <span className="bg-white/5 px-1.5 py-0.5 rounded">{car.transmission === 'Automatique' ? 'Auto' : 'Man'}</span>
        </div>
        
        <div className="flex justify-between items-end">
          <span className="text-[10px] text-text-gray">{car.wilaya || car.location}</span>
          <span className="font-bold text-primary-red text-sm">{car.priceDa}</span>
        </div>
      </div>
    </div>
  );
}

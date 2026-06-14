import { useState } from 'react';

export default function VehicleCardCompact({ car, isFavorite = false, onToggleFavorite, onClick }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const nextImg = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div 
      onClick={() => onClick && onClick(car)}
      className="relative flex flex-col overflow-hidden transition-all duration-300 border bg-glass border-glass rounded-2xl glass-card-hover group cursor-pointer"
    >
      {/* Favorite Icon */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite && onToggleFavorite(car.id);
        }}
        className="absolute z-10 p-2.5 transition-all duration-300 rounded-full top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/80 text-white"
        aria-label="Add to favorites"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-colors duration-300 ${isFavorite ? 'fill-neon-pink text-neon-pink' : 'text-white/70'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      {/* Badges */}
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
        {car.badge && (
          <span className="px-3 py-1 text-xs font-bold text-white uppercase tracking-wider bg-primary-red/90 backdrop-blur-md rounded-full shadow-lg">
            {car.badge}
          </span>
        )}
        <span className="px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-wider bg-black/55 backdrop-blur-md border border-white/10 rounded-full w-fit">
          {car.wilaya || car.location}
        </span>
      </div>

      {/* Multi-Image Slider Container */}
      <div className="relative w-full overflow-hidden aspect-[4/3] bg-black/40">
        <img
          src={car.images[activeImgIndex]}
          alt={`${car.brand} ${car.model}`}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent pointer-events-none opacity-80" />

        {/* Nav arrows */}
        <button
          onClick={prevImg}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/80 hover:bg-primary-red hover:text-white transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m15 19-7-7 7-7"/></svg>
        </button>
        <button
          onClick={nextImg}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/80 hover:bg-primary-red hover:text-white transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
          {car.images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeImgIndex ? 'bg-primary-red w-3' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Details Content */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-xs uppercase tracking-wider text-text-gray font-semibold">{car.brand}</p>
            <h3 className="text-lg font-bold text-white group-hover:text-primary-red transition-colors duration-200 line-clamp-1">{car.model} {car.version}</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 py-3 mt-2 border-t border-white/5 text-xs text-text-gray">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span className="truncate">{car.transmission}</span>
          </div>
        </div>

        <div className="mt-auto pt-3 border-t border-white/5">
          <p className="text-xs text-text-gray mb-1">Prix TTC</p>
          <p className="text-xl font-extrabold text-white">{car.priceDa}</p>
        </div>
      </div>
    </div>
  );
}

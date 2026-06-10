import { useState } from 'react';

export default function VehicleCard({ car, favorites, toggleFavorite, setSelectedVehicle }) {
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
    <div className="relative flex flex-col overflow-hidden transition-all duration-300 border bg-glass border-glass rounded-2xl glass-card-hover group">
      {/* Favorite Icon */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(car.id);
        }}
        className="absolute z-10 p-2.5 transition-all duration-300 rounded-full top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 hover:bg-black/80 text-white"
        aria-label="Add to favorites"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-colors duration-300 ${favorites.has(car.id) ? 'fill-neon-pink text-neon-pink' : 'text-white/70'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      {/* Location Badge */}
      <span className="absolute left-4 top-4 z-10 px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider bg-black/55 backdrop-blur-md border border-white/10 rounded-full">
        {car.location}
      </span>

      {/* Multi-Image Slider Container */}
      <div className="relative w-full overflow-hidden aspect-video bg-black/40">
        <img
          src={car.images[activeImgIndex]}
          alt={`${car.brand} ${car.model}`}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* Nav arrows */}
        <button
          onClick={prevImg}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/80 hover:bg-neon-pink hover:text-white transition-all duration-200"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m15 19-7-7 7-7"/></svg>
        </button>
        <button
          onClick={nextImg}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/80 hover:bg-neon-pink hover:text-white transition-all duration-200"
          aria-label="Next image"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
          {car.images.map((_, idx) => (
            <span
              key={idx}
              className={`block w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === activeImgIndex ? 'bg-neon-pink w-3' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* Details Content */}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-neon-pink font-semibold">{car.brand}</p>
            <h3 className="text-lg font-bold text-white group-hover:text-neon-pink transition-colors duration-200">{car.model}</h3>
          </div>
          <span className="px-2.5 py-0.5 text-xs rounded border border-white/10 text-white/80 font-medium bg-white/5">
            {car.year}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 py-4 my-3 border-y border-white/5 text-xs text-white/60">
          <div className="flex items-center space-x-1.5">
            <svg className="w-3.5 h-3.5 text-neon-pink shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m12 14 4-4-4-4M6 20h12v-2H6v2ZM8 12V4h8v8"/></svg>
            <span>{car.mileage.toLocaleString()} km</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <svg className="w-3.5 h-3.5 text-neon-pink shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <svg className="w-3.5 h-3.5 text-neon-pink shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 16V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM4 12h16"/></svg>
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className="flex items-end justify-between mt-auto pt-3">
          <div>
            <p className="text-xs text-white/40">Prix Estimé</p>
            <p className="text-xl font-extrabold text-white">{car.price.toLocaleString('fr-FR')} €</p>
            <p className="text-xs text-neon-pink font-semibold mt-0.5">{car.priceDa}</p>
          </div>

          <button
            onClick={() => setSelectedVehicle(car)}
            className="px-4 py-2 text-xs font-bold text-white transition-all duration-200 border rounded-lg border-white/20 bg-white/5 hover:bg-neon-pink hover:border-neon-pink hover:shadow-neon-sm active:scale-95"
          >
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
}

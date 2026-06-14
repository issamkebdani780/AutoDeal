export default function VehicleCardCompare({ car, onRemove }) {
  if (!car) return null;
  
  return (
    <div className="relative flex flex-col bg-surface border border-white/10 rounded-xl overflow-hidden group">
      {onRemove && (
        <button 
          onClick={onRemove}
          className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-primary-red transition-colors"
        >
          &times;
        </button>
      )}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img src={car.images[0]} alt={car.model} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4 text-center border-b border-white/5">
        <h3 className="font-bold text-white text-lg">{car.brand}</h3>
        <p className="text-text-gray text-sm">{car.model} {car.version}</p>
        <p className="text-primary-red font-bold mt-2">{car.priceDa}</p>
      </div>
    </div>
  );
}

export default function ShowroomCardCompact({ showroom, onClick }) {
  if (!showroom) return null;

  return (
    <div 
      onClick={() => onClick && onClick(showroom)}
      className="flex items-center p-4 bg-surface border border-white/5 rounded-2xl cursor-pointer hover:bg-white/5 transition-colors group"
    >
      <div className="w-16 h-16 rounded-full bg-bg-dark flex flex-shrink-0 items-center justify-center text-2xl font-bold text-white border border-white/10 group-hover:border-primary-red transition-colors overflow-hidden">
        {showroom.logo}
      </div>
      
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-bold text-white group-hover:text-primary-red transition-colors line-clamp-1">
          {showroom.name}
        </h3>
        <p className="text-sm text-text-gray flex items-center gap-1.5 mt-1">
          <svg className="w-4 h-4 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {showroom.city}
        </p>
      </div>

      <div className="text-right">
        <div className="flex items-center gap-1 text-yellow-400 mb-1 justify-end">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <span className="text-sm font-bold">{showroom.rating}</span>
        </div>
        <span className="inline-block px-3 py-1 bg-white/5 text-xs text-white rounded-lg whitespace-nowrap">
          {showroom.inventoryCount} véhicules
        </span>
      </div>
    </div>
  );
}

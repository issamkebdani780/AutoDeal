export default function ShowroomCardPremium({ showroom, onClick }) {
  if (!showroom) return null;

  return (
    <div 
      onClick={() => onClick && onClick(showroom)}
      className="relative flex flex-col overflow-hidden bg-bg-dark border border-primary-red/40 rounded-3xl cursor-pointer group hover:shadow-[0_0_25px_rgba(229,9,20,0.2)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1.5">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
          Partenaire Premium
        </span>
      </div>

      <div className="relative h-32 w-full overflow-hidden">
        <img 
          src={showroom.coverImage} 
          alt={`Cover ${showroom.name}`} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent"></div>
      </div>

      <div className="relative flex flex-col items-center px-6 pb-6 -mt-10 z-10">
        <div className="w-20 h-20 rounded-full bg-surface flex items-center justify-center text-3xl font-black text-white border-4 border-bg-dark shadow-xl mb-3">
          {showroom.logo}
        </div>
        
        <h3 className="text-xl font-bold text-white text-center mb-1 group-hover:text-primary-red transition-colors">
          {showroom.name}
        </h3>
        <p className="text-text-gray text-sm mb-4">{showroom.city}</p>

        <div className="w-full flex justify-between items-center pt-4 border-t border-white/10">
          <div className="flex flex-col">
            <span className="text-xs text-text-gray uppercase tracking-wider mb-1">Stock</span>
            <span className="text-white font-bold">{showroom.inventoryCount} véhicules</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-text-gray uppercase tracking-wider mb-1">Avis ({showroom.reviewCount})</span>
            <div className="flex items-center gap-1 text-yellow-400">
              <span className="text-white font-bold mr-1">{showroom.rating}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

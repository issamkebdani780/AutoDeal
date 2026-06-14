import VehicleCardCompact from './VehicleCardCompact'

export default function Marketplace({
  searchQuery,
  setSearchQuery,
  brandFilter,
  setBrandFilter,
  fuelFilter,
  setFuelFilter,
  transFilter,
  setTransFilter,
  maxBudget,
  setMaxBudget,
  filteredVehicles,
  favorites,
  toggleFavorite,
  setSelectedVehicle
}) {
  return (
    <section id="marketplace" className="py-24 bg-black/30 border-y border-glass">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">VroomMarket By AutoDeal</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">Notre catalogue de véhicules</p>
          </div>
          
          {/* Search Input */}
          <div className="mt-6 lg:mt-0 relative w-full lg:w-96">
            <input
              type="text"
              placeholder="Rechercher une marque, un modèle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-glass bg-white/5 focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white"
            />
            <svg className="absolute left-4 top-3.5 w-4 h-4 text-white/40" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 p-6 border border-glass bg-glass rounded-2xl h-fit">
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <h3 className="font-bold text-white flex items-center space-x-2">
                <svg className="w-4 h-4 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3.75 6h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 12H7.5m3.75 6h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 18H7.5"/></svg>
                <span>Filtres</span>
              </h3>
              <button
                onClick={() => {
                  setBrandFilter('');
                  setFuelFilter('');
                  setTransFilter('');
                  setMaxBudget(200000);
                  setSearchQuery('');
                }}
                className="text-2xs font-semibold uppercase tracking-wider text-neon-pink hover:underline cursor-pointer"
              >
                Réinitialiser
              </button>
            </div>

            {/* Brand filter */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-white/50 font-bold mb-2.5">Marque</label>
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-glass bg-black text-sm text-white focus:outline-none focus:border-neon-pink"
              >
                <option value="">Toutes les marques</option>
                <option value="Porsche">Porsche</option>
                <option value="BYD">BYD</option>
                <option value="Audi">Audi</option>
                <option value="Zeekr">Zeekr</option>
                <option value="Mercedes-AMG">Mercedes-AMG</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
            </div>

            {/* Fuel filter */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-white/50 font-bold mb-2.5">Carburant</label>
              <div className="space-y-2">
                {['Toutes', 'Essence', 'Électrique'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFuelFilter(f === 'Toutes' ? '' : f)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors duration-200 cursor-pointer ${((f === 'Toutes' && !fuelFilter) || fuelFilter === f) ? 'bg-neon-pink text-white font-bold' : 'bg-white/5 border border-glass hover:bg-white/10 text-white/70'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Transmission filter */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-white/50 font-bold mb-2.5">Boîte de vitesse</label>
              <div className="flex space-x-2">
                {['Toutes', 'Automatique', 'Manuelle'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTransFilter(t === 'Toutes' ? '' : t)}
                    className={`flex-1 text-center py-2 rounded-lg text-xs transition-colors duration-200 cursor-pointer ${((t === 'Toutes' && !transFilter) || transFilter === t) ? 'bg-neon-pink text-white font-bold' : 'bg-white/5 border border-glass hover:bg-white/10 text-white/70'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs uppercase tracking-wider text-white/50 font-bold">Budget Max (€)</label>
                <span className="text-xs text-neon-pink font-bold">{maxBudget.toLocaleString()} €</span>
              </div>
              <input
                type="range"
                min="40000"
                max="200000"
                step="5000"
                value={maxBudget}
                onChange={(e) => setMaxBudget(parseInt(e.target.value))}
                className="w-full accent-neon-pink bg-white/10 cursor-pointer"
              />
            </div>

          </div>

          {/* Vehicle Grid Area */}
          <div className="lg:col-span-3">
            {filteredVehicles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map(car => (
                  <VehicleCardCompact
                    key={car.id}
                    car={car}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    setSelectedVehicle={setSelectedVehicle}
                  />
                ))}
              </div>
            ) : (
              <div className="h-64 border border-glass bg-glass rounded-2xl flex flex-col items-center justify-center text-center p-8">
                <svg className="w-10 h-10 text-white/20 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                <p className="text-lg font-bold text-white/80">Aucun véhicule trouvé</p>
                <p className="text-xs text-white/50 mt-1">Essayez de réinitialiser ou de modifier vos critères de filtrage.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

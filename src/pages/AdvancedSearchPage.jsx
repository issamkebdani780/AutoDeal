import PageHeader from '../components/PageHeader';

export default function AdvancedSearchPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Recherche Avancée" 
        subtitle="Utilisez nos filtres précis pour trouver le véhicule qui correspond exactement à vos critères."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-surface p-8 rounded-3xl border border-white/5">
          <form action="/resultats" className="space-y-8">
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Marque et Modèle</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-2">Marque</label>
                  <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors">
                    <option value="">Toutes les marques</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-2">Modèle</label>
                  <input type="text" placeholder="Ex: A3, Golf..." className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Caractéristiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-2">Année Min.</label>
                  <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white">
                    <option>2010</option><option>2015</option><option>2020</option><option>2024</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-2">Kilométrage Max.</label>
                  <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white">
                    <option>50 000 km</option><option>100 000 km</option><option>150 000 km</option><option>Peu importe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-2">Carburant</label>
                  <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white">
                    <option>Tous</option><option>Essence</option><option>Diesel</option><option>Hybride</option><option>Électrique</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Budget</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-2">Prix Min (DA)</label>
                  <input type="number" placeholder="0" className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-2">Prix Max (DA)</label>
                  <input type="number" placeholder="50000000" className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                Afficher les résultats
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

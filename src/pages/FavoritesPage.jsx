import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import VehicleCardCompact from '../components/VehicleCardCompact';
import { initialVehicles } from '../mockData';

export default function FavoritesPage() {
  // For visual demonstration, we pre-select a few favorites
  const [favorites, setFavorites] = useState(new Set([1, 3]));
  
  const favoriteVehicles = initialVehicles.filter(car => favorites.has(car.id));

  const toggleFavorite = (id) => {
    const updated = new Set(favorites);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setFavorites(updated);
  };

  return (
    <div className="pb-20 min-h-[80vh]">
      <PageHeader 
        title="Mes Favoris" 
        subtitle="Retrouvez ici tous les véhicules que vous avez sauvegardés."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {favoriteVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteVehicles.map(car => (
              <VehicleCardCompact 
                key={car.id}
                car={car}
                isFavorite={favorites.has(car.id)}
                onToggleFavorite={() => toggleFavorite(car.id)}
                onClick={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface rounded-2xl border border-white/5">
            <svg className="w-16 h-16 text-text-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <h3 className="text-xl font-bold text-white mb-2">Aucun favori</h3>
            <p className="text-text-gray mb-6">Vous n'avez pas encore sauvegardé de véhicules.</p>
            <a href="/vehicules" className="inline-block bg-primary-red hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Parcourir le catalogue
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

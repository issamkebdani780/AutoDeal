import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { initialVehicles } from '../mockData';

export default function VehicleDetailShowroom() {
  const { id } = useParams();
  const car = initialVehicles.find(v => v.id === parseInt(id)) || initialVehicles[0];

  if (!car) {
    return <div className="pt-32 text-center">Véhicule non trouvé</div>;
  }

  return (
    <div className="pb-20">
      <PageHeader 
        title="Gestion de l'annonce" 
        subtitle={`${car.brand} ${car.model} ${car.version}`}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Panneau de gestion Showroom */}
        <div className="bg-gradient-to-r from-bg-dark to-surface p-6 rounded-2xl border border-white/20 mb-12 shadow-lg">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                
                <div className="flex gap-8">
                    <div className="text-center">
                        <span className="block text-text-gray text-sm mb-1">Vues de l'annonce</span>
                        <span className="text-3xl font-black text-white">1,245</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-text-gray text-sm mb-1">Mises en favoris</span>
                        <span className="text-3xl font-black text-primary-red">84</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-text-gray text-sm mb-1">Contacts générés</span>
                        <span className="text-3xl font-black text-green-400">12</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                        Modifier la fiche
                    </button>
                    <button className="bg-primary-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        Mettre en avant
                    </button>
                    <select className="bg-bg-dark border border-white/20 rounded-xl px-4 py-3 text-white">
                        <option>Statut : En Ligne</option>
                        <option>Statut : Réservé</option>
                        <option>Statut : Vendu</option>
                        <option>Statut : Brouillon</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Aperçu de la fiche publique */}
        <div className="opacity-70 pointer-events-none border-t border-white/10 pt-12">
            <h2 className="text-2xl text-center text-text-gray mb-8">Aperçu Public</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10">
                    <img src={car.images[0]} alt={car.model} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-4xl font-bold text-white mb-2">{car.priceDa}</h3>
                    <div className="bg-surface p-6 rounded-2xl border border-white/5 mt-8">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-text-gray">Année</span><span className="text-white">{car.year}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-text-gray">Kilométrage</span><span className="text-white">{car.mileage.toLocaleString()} km</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-text-gray">Motorisation</span><span className="text-white text-right truncate w-1/2">{car.specs?.engine}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

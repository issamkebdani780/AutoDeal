import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { initialVehicles } from '../mockData';

export default function VehicleDetailAdmin() {
  const { id } = useParams();
  const car = initialVehicles.find(v => v.id === parseInt(id)) || initialVehicles[0];

  if (!car) {
    return <div className="pt-32 text-center">Véhicule non trouvé</div>;
  }

  return (
    <div className="pb-20">
      <PageHeader 
        title="Modération Annonce" 
        subtitle={`ID: #${car.id} - ${car.brand} ${car.model}`}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Panneau de modération Admin */}
        <div className="bg-red-900/20 p-6 rounded-2xl border border-red-500/30 mb-12 shadow-lg">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Actions Administrateur</h3>
                    <p className="text-text-gray text-sm">Vérifiez les documents et la conformité avant publication.</p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                        Approuver
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                        Rejeter / Suspendre
                    </button>
                    <div className="h-12 w-px bg-white/20 mx-2"></div>
                    <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2">
                        + Badge "Certifié"
                    </button>
                </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-red-500/20 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/40 p-4 rounded-xl">
                    <span className="block text-text-gray text-xs mb-1">Vendeur</span>
                    <span className="text-white font-semibold">Showroom AutoDeal Alger</span>
                </div>
                <div className="bg-black/40 p-4 rounded-xl">
                    <span className="block text-text-gray text-xs mb-1">Documents vérifiés</span>
                    <span className="text-green-400 font-semibold flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        Carte grise OK
                    </span>
                </div>
                <div className="bg-black/40 p-4 rounded-xl">
                    <span className="block text-text-gray text-xs mb-1">Analyse du prix</span>
                    <span className="text-white font-semibold">Conforme au marché (+2%)</span>
                </div>
            </div>
        </div>

        {/* Données brutes du véhicule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Données extraites</h3>
                <pre className="text-xs text-text-gray whitespace-pre-wrap font-mono">
{JSON.stringify(car, null, 2)}
                </pre>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10">
                <img src={car.images[0]} alt={car.model} className="w-full h-full object-cover" />
            </div>
        </div>

      </div>
    </div>
  );
}

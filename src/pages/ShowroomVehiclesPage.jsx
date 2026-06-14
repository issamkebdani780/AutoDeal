import PageHeader from '../components/PageHeader';
import VehicleCardCompact from '../components/VehicleCardCompact';
import { initialVehicles } from '../mockData';

export default function ShowroomVehiclesPage() {
  // Simulate fetching stock for this specific showroom
  const showroomStock = initialVehicles.slice(0, 5);

  return (
    <div className="pb-20">
      <PageHeader 
        title="Stock Showroom Alger" 
        subtitle="Découvrez les véhicules actuellement disponibles et exposés dans notre showroom de Bab Ezzouar."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">{showroomStock.length} Véhicules en exposition</h2>
            <a href="/showroom/alger" className="text-primary-red hover:text-red-400 font-semibold flex items-center gap-2">
                Retour au showroom
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showroomStock.map(car => (
            <VehicleCardCompact 
              key={car.id} 
              car={car} 
              isFavorite={false} 
              onToggleFavorite={() => {}} 
              onClick={() => {}} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

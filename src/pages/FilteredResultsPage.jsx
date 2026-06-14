import PageHeader from '../components/PageHeader';
import VehicleCardCompact from '../components/VehicleCardCompact';
import { initialVehicles } from '../mockData';

export default function FilteredResultsPage() {
  // Mock filtered results
  const filteredVehicles = initialVehicles.slice(0, 3);

  return (
    <div className="pb-20">
      <PageHeader 
        title="Résultats de recherche" 
        subtitle={`${filteredVehicles.length} véhicule(s) correspondent à vos critères.`}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                Marque: Audi
                <button className="text-text-gray hover:text-white">&times;</button>
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm flex items-center gap-2">
                Budget &lt; 20 000 000 DA
                <button className="text-text-gray hover:text-white">&times;</button>
            </span>
            <a href="/recherche-avancee" className="text-primary-red hover:underline px-4 py-2 text-sm font-medium">Modifier la recherche</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVehicles.map(car => (
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

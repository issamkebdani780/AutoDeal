import PageHeader from '../components/PageHeader';
import VehicleCardCompact from '../components/VehicleCardCompact';
import { initialVehicles } from '../mockData';

export default function CertifiedUsedPage() {
  const usedVehicles = initialVehicles.filter(car => car.condition === 'Occasion');

  return (
    <div className="pb-20">
      <PageHeader 
        title="Occasions Certifiées AutoDeal" 
        subtitle="Découvrez notre sélection de véhicules d'occasion rigoureusement inspectés sur 150 points de contrôle."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usedVehicles.map(car => (
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

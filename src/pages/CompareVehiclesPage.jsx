import PageHeader from '../components/PageHeader';
import { initialVehicles } from '../mockData';

export default function CompareVehiclesPage() {
  const carsToCompare = [initialVehicles[0], initialVehicles[1]];

  return (
    <div className="pb-20">
      <PageHeader 
        title="Comparateur de véhicules" 
        subtitle="Comparez les caractéristiques, les prix et les équipements pour faire le meilleur choix."
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 overflow-x-auto">
        <table className="w-full min-w-[800px] text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-white/10 w-1/4"></th>
              {carsToCompare.map(car => (
                <th key={car.id} className="p-4 border-b border-white/10 w-[37.5%]">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <img src={car.image} alt={car.model} className="object-cover w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{car.brand} {car.model}</h3>
                  <p className="text-primary-red font-bold text-lg mt-1">{car.price.toLocaleString('fr-FR')} DA</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-text-gray">
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 font-medium text-white">Année</td>
              {carsToCompare.map(car => <td key={car.id} className="p-4 border-b border-white/5">{car.year}</td>)}
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 font-medium text-white">Kilométrage</td>
              {carsToCompare.map(car => <td key={car.id} className="p-4 border-b border-white/5">{car.mileage.toLocaleString('fr-FR')} km</td>)}
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 font-medium text-white">Carburant</td>
              {carsToCompare.map(car => <td key={car.id} className="p-4 border-b border-white/5">{car.fuel}</td>)}
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 font-medium text-white">Transmission</td>
              {carsToCompare.map(car => <td key={car.id} className="p-4 border-b border-white/5">{car.transmission}</td>)}
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-4 border-b border-white/5 font-medium text-white">Condition</td>
              {carsToCompare.map(car => (
                <td key={car.id} className="p-4 border-b border-white/5">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    car.condition === 'Neuf' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {car.condition}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

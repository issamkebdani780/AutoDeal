import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Marketplace from '../components/Marketplace';
import { initialVehicles } from '../mockData';

export default function VehiclesListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [fuelFilter, setFuelFilter] = useState('');
  const [transFilter, setTransFilter] = useState('');
  const [maxBudget, setMaxBudget] = useState(200000); // 200k Euro (wait, default was in Euro logic, let's keep it as is)
  const [favorites, setFavorites] = useState(new Set());
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Local state for modal if used

  const filteredVehicles = initialVehicles.filter(car => {
    const matchesSearch = `${car.brand} ${car.model}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = brandFilter ? car.brand.toLowerCase() === brandFilter.toLowerCase() : true;
    const matchesFuel = fuelFilter ? car.fuel === fuelFilter : true;
    const matchesTrans = transFilter ? car.transmission === transFilter : true;
    const matchesBudget = car.price <= maxBudget;
    return matchesSearch && matchesBrand && matchesFuel && matchesTrans && matchesBudget;
  });

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
    <div className="pb-20">
      <PageHeader 
        title="Catalogue des véhicules" 
        subtitle="Parcourez notre large sélection de véhicules neufs et d'occasion certifiés."
      />
      
      <div className="mt-8">
        {/* We use the existing Marketplace component which has its own layout */}
        <Marketplace 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          brandFilter={brandFilter}
          setBrandFilter={setBrandFilter}
          fuelFilter={fuelFilter}
          setFuelFilter={setFuelFilter}
          transFilter={transFilter}
          setTransFilter={setTransFilter}
          maxBudget={maxBudget}
          setMaxBudget={setMaxBudget}
          filteredVehicles={filteredVehicles}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          setSelectedVehicle={setSelectedVehicle}
        />
      </div>
    </div>
  );
}

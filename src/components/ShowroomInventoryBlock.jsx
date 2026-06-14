import { useState, useEffect } from 'react';
import VehicleCardCompact from './VehicleCardCompact';
import { initialVehicles } from '../mockData';
import { useNavigate } from 'react-router-dom';

export default function ShowroomInventoryBlock({ showroom }) {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Faux filtrage : on prend quelques véhicules aléatoires de initialVehicles pour simuler le stock du showroom
    const showroomVehicles = initialVehicles.slice(0, showroom.id === 1 ? 4 : 2);
    setVehicles(showroomVehicles);
  }, [showroom]);

  if (!showroom || vehicles.length === 0) return null;

  return (
    <div className="bg-transparent">
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-2xl font-bold text-white">Véhicules en stock <span className="text-text-gray font-normal text-lg ml-2">({showroom.inventoryCount})</span></h3>
        <button 
          onClick={() => navigate(`/showroom/${showroom.id}/vehicules`)}
          className="text-primary-red hover:text-white font-semibold transition-colors text-sm flex items-center gap-2"
        >
          Voir tout le stock
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vehicles.map(car => (
          <VehicleCardCompact 
            key={car.id} 
            car={car} 
            onClick={() => navigate(`/vehicule/${car.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

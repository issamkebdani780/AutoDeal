import { useParams } from 'react-router-dom';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { initialVehicles } from '../mockData';
import BaseModal from '../components/modals/BaseModal';
import InterestPopup from '../components/modals/InterestPopup';
import { 
  RequestInfoForm, 
  TestDriveForm, 
  FinancingForm, 
  ReservationForm, 
  TradeInForm 
} from '../components/forms/VehicleForms';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const car = initialVehicles.find(v => v.id === parseInt(id)) || initialVehicles[0]; // fallback
  const [activeImg, setActiveImg] = useState(car.images[0]);
  
  // Modal states
  const [activeModal, setActiveModal] = useState(null); // 'info' | 'testDrive' | 'finance' | 'reserve' | 'tradeIn' | null

  if (!car) {
    return <div className="pt-32 text-center">Véhicule non trouvé</div>;
  }

  const closeModal = () => setActiveModal(null);

  return (
    <div className="pb-20 relative">
      <PageHeader 
        title={`${car.brand} ${car.model}`} 
        subtitle={`${car.version} • ${car.year}`}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Badges */}
        <div className="flex gap-2 mb-6">
          {car.badge && (
            <span className="px-4 py-1 text-sm font-bold text-white bg-primary-red rounded-full shadow-lg">
              {car.badge}
            </span>
          )}
          <span className="px-4 py-1 text-sm font-bold text-white bg-white/10 border border-white/20 rounded-full">
            {car.condition}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galerie & Vidéo */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 border border-white/10">
              <img src={activeImg} alt={car.model} className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-4 gap-3">
              {car.images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveImg(img)}
                  className={`aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImg === img ? 'border-primary-red' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`thumb ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {car.video && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Vidéo du véhicule</h3>
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={car.video} 
                    title="Video presentation" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Informations détaillées */}
          <div className="space-y-8">
            <div className="bg-surface p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              </div>
              <p className="text-sm text-text-gray mb-1 uppercase tracking-wider">Prix de vente TTC</p>
              <h2 className="text-4xl font-black text-white mb-2">{car.priceDa}</h2>
              <p className="text-lg text-primary-red font-semibold mb-6">Équivalent : {car.price.toLocaleString('fr-FR')} €</p>
              
              <div className="flex items-center gap-3 text-text-gray">
                <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-lg">{car.wilaya || car.location}</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setActiveModal('reserve')}
                className="col-span-2 bg-primary-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(229,9,20,0.3)] hover:shadow-[0_0_30px_rgba(229,9,20,0.5)]"
              >
                Demander une réservation
              </button>
              
              <button 
                onClick={() => setActiveModal('testDrive')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
              >
                Demander un essai
              </button>
              
              <button 
                onClick={() => setActiveModal('info')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors"
              >
                Demander infos
              </button>

              <button 
                onClick={() => setActiveModal('finance')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors"
              >
                Financement
              </button>
              
              <button 
                onClick={() => setActiveModal('tradeIn')}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors"
              >
                Estimer ma reprise
              </button>
            </div>

            {/* Caractéristiques Techniques */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Spécifications</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Marque</span><span className="font-semibold text-white">{car.brand}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Modèle</span><span className="font-semibold text-white">{car.model}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Version</span><span className="font-semibold text-white">{car.version}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Année</span><span className="font-semibold text-white">{car.year}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Kilométrage</span><span className="font-semibold text-white">{car.mileage.toLocaleString()} km</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Motorisation</span><span className="font-semibold text-white text-right w-1/2 truncate">{car.specs?.engine}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Boîte</span><span className="font-semibold text-white">{car.transmission}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Énergie</span><span className="font-semibold text-white">{car.fuel}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-text-gray">Garantie</span><span className="font-semibold text-white text-right w-1/2 truncate">{car.specs?.warranty}</span>
                </div>
              </div>
            </div>

            {/* Options et Historique */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {car.options && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Options principales</h3>
                  <ul className="space-y-2">
                    {car.options.map((opt, i) => (
                      <li key={i} className="flex items-center text-text-gray">
                        <svg className="w-5 h-5 text-primary-red mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        {opt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {car.history && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Historique</h3>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-text-gray leading-relaxed">
                    {car.history}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Popup Intérêt */}
      <InterestPopup car={car} onAction={(action) => setActiveModal(action)} />

      {/* Modals de formulaires */}
      <BaseModal isOpen={activeModal === 'info'} onClose={closeModal} title="Demande d'information">
        <RequestInfoForm car={car} onSuccess={() => { closeModal(); alert("Demande envoyée avec succès !"); }} />
      </BaseModal>

      <BaseModal isOpen={activeModal === 'testDrive'} onClose={closeModal} title="Demande d'essai">
        <TestDriveForm car={car} onSuccess={closeModal} />
      </BaseModal>

      <BaseModal isOpen={activeModal === 'finance'} onClose={closeModal} title="Simulation Financement">
        <FinancingForm car={car} onSuccess={closeModal} />
      </BaseModal>

      <BaseModal isOpen={activeModal === 'reserve'} onClose={closeModal} title="Réservation de véhicule">
        <ReservationForm car={car} onSuccess={closeModal} />
      </BaseModal>

      <BaseModal isOpen={activeModal === 'tradeIn'} onClose={closeModal} title="Estimation de Reprise">
        <TradeInForm onSuccess={closeModal} />
      </BaseModal>

    </div>
  );
}

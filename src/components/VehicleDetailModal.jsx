import { useState } from 'react';

export default function VehicleDetailModal({ selectedVehicle, setSelectedVehicle }) {
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [inquirySuccess, setInquirySuccess] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) {
      alert("Veuillez remplir au moins votre nom et numéro de téléphone.");
      return;
    }
    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryForm({ name: '', phone: '', message: '' });
      setSelectedVehicle(null);
    }, 3000);
  };

  if (!selectedVehicle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-4xl border border-glass bg-glass-strong rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
        
        {/* Close Button */}
        <button
          onClick={() => setSelectedVehicle(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white/80 hover:bg-neon-pink hover:text-white transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Images display - Left panel */}
        <div className="w-full md:w-1/2 relative bg-black flex items-center justify-center">
          <img
            src={selectedVehicle.images[0]}
            alt={selectedVehicle.model}
            className="object-cover w-full h-full aspect-video md:aspect-auto md:h-[550px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-6 left-6">
            <span className="px-2.5 py-1 text-2xs uppercase tracking-wider font-extrabold bg-neon-pink rounded text-white">
              {selectedVehicle.origin}
            </span>
            <h3 className="text-2xl font-black text-white mt-2 leading-none">{selectedVehicle.brand} {selectedVehicle.model}</h3>
          </div>
        </div>

        {/* Specs & Contact Form - Right panel */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto max-h-[50vh] md:max-h-[550px] border-t md:border-t-0 md:border-l border-glass flex flex-col justify-between">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-4">Caractéristiques Techniques</h4>
            
            <div className="grid grid-cols-2 gap-4 text-xs mb-6 pb-6 border-b border-white/5">
              <div>
                <span className="text-white/40 block">Motorisation :</span>
                <span className="font-bold text-white">{selectedVehicle.specs.engine}</span>
              </div>
              <div>
                <span className="text-white/40 block">Puissance :</span>
                <span className="font-bold text-white">{selectedVehicle.specs.power}</span>
              </div>
              <div>
                <span className="text-white/40 block">Kilométrage :</span>
                <span className="font-bold text-white">{selectedVehicle.mileage.toLocaleString()} km</span>
              </div>
              <div>
                <span className="text-white/40 block">Transmission :</span>
                <span className="font-bold text-white">{selectedVehicle.transmission}</span>
              </div>
              <div>
                <span className="text-white/40 block">Couleur Extérieure :</span>
                <span className="font-bold text-white">{selectedVehicle.specs.color}</span>
              </div>
              <div>
                <span className="text-white/40 block">Sellerie :</span>
                <span className="font-bold text-white">{selectedVehicle.specs.interior}</span>
              </div>
            </div>

            <div className="flex items-center justify-between bg-white/5 border border-glass p-4 rounded-xl mb-6">
              <div>
                <p className="text-2xs text-white/40 uppercase">Garantie incluse</p>
                <p className="text-xs font-bold text-white mt-0.5">{selectedVehicle.specs.warranty}</p>
              </div>
              <svg className="w-6 h-6 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806z" />
              </svg>
            </div>

            {/* Inquiry Form */}
            <h4 className="text-xs uppercase tracking-wider text-white/40 font-bold mb-3">Demander des informations</h4>
            <form onSubmit={handleInquirySubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Votre nom"
                value={inquiryForm.name}
                onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-lg border border-glass bg-black/45 focus:outline-none focus:border-neon-pink text-white"
              />
              <input
                type="tel"
                required
                placeholder="Votre numéro de téléphone"
                value={inquiryForm.phone}
                onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-lg border border-glass bg-black/45 focus:outline-none focus:border-neon-pink text-white"
              />
              <textarea
                rows="2"
                placeholder="Message complémentaire..."
                value={inquiryForm.message}
                onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-lg border border-glass bg-black/45 focus:outline-none focus:border-neon-pink text-white resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-neon-pink text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-neon-pink-hover transition-colors cursor-pointer"
              >
                Envoyer ma demande
              </button>
            </form>

            {inquirySuccess && (
              <div className="mt-3 p-2 bg-green-500/10 border border-green-500/20 text-green-400 text-center text-xs font-bold rounded-lg animate-pulse">
                ✓ Demande reçue. Un courtier vous rappelle d'ici 2 heures !
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

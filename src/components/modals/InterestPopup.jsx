import { useState, useEffect } from 'react';

export default function InterestPopup({ car, onAction }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Affiche le popup après 15 secondes d'inactivité
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    // TODO: Add exit-intent logic (mouse leaving top of window)
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible || !car) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up max-w-sm w-full">
      <div className="bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/40 rounded-full text-white hover:bg-primary-red transition-colors"
        >
          &times;
        </button>

        <div className="p-5 flex gap-4">
          <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-black">
            <img src={car.images[0]} alt="Car" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-white font-bold leading-tight mb-1">Ce véhicule vous intéresse ?</h4>
            <p className="text-xs text-text-gray mb-3">Ne passez pas à côté de cette {car.brand}. Contactez le vendeur avant qu'elle ne soit vendue.</p>
            <div className="flex gap-2">
              <button 
                onClick={() => { setIsVisible(false); onAction('contact'); }}
                className="bg-primary-red hover:bg-red-700 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors flex-1"
              >
                Contacter
              </button>
              <button 
                onClick={() => { setIsVisible(false); onAction('reserve'); }}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors flex-1"
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

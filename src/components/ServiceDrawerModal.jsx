export default function ServiceDrawerModal({ activeService, setActiveService, servicesDetails }) {
  if (!activeService || !servicesDetails[activeService]) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-md border border-glass bg-glass-strong rounded-3xl p-8 shadow-2xl text-center">
        
        <button
          onClick={() => setActiveService(null)}
          className="absolute top-4 right-4 p-1 rounded-full bg-white/5 border border-white/10 text-white hover:text-neon-pink transition-colors cursor-pointer"
          aria-label="Close service"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-12 h-12 rounded-xl bg-neon-pink/15 border border-neon-pink/30 flex items-center justify-center text-neon-pink mx-auto mb-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-white mb-4">{activeService}</h3>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
          {servicesDetails[activeService].desc}
        </p>

        <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4 mb-6 text-xs text-left">
          <div>
            <span className="text-white/40 block">Durée moyenne :</span>
            <span className="font-bold text-white">{servicesDetails[activeService].time}</span>
          </div>
          <div>
            <span className="text-white/40 block">Tarif estimé :</span>
            <span className="font-bold text-neon-pink">{servicesDetails[activeService].price}</span>
          </div>
        </div>

        <a
          href={`https://wa.me/213550123456?text=Bonjour, je souhaite réserver la prestation ${encodeURIComponent(activeService)} chez AutoDeal.`}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-block py-3.5 bg-neon-pink text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-neon-pink-hover hover:shadow-neon-sm text-center"
        >
          Prendre Rendez-vous
        </a>

      </div>
    </div>
  );
}

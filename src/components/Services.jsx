export default function Services({ servicesDetails, setActiveService }) {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">Atelier & Diagnostics</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white">Nos prestations de services automobiles</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.keys(servicesDetails).map((serviceName, idx) => (
          <div
            key={idx}
            onClick={() => setActiveService(serviceName)}
            className="p-6 border border-glass bg-glass rounded-2xl cursor-pointer transition-all duration-300 hover:border-neon-pink/30 hover:bg-white/5 group text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-neon-pink mx-auto mb-4 transition-transform group-hover:scale-110">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 className="text-sm font-extrabold text-white group-hover:text-neon-pink transition-colors">{serviceName}</h3>
            <p className="text-2xs text-white/40 mt-1 uppercase tracking-wider">Voir détails</p>
          </div>
        ))}
      </div>
    </section>
  );
}

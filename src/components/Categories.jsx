export default function Categories({ setActiveImportTab, scrollToSection }) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">Nos Domaines d'Expertise</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white">Découvrez nos solutions automobiles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1 */}
        <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-glass flex flex-col justify-end p-6 transition-all duration-500 hover:border-neon-pink/40 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/france_import.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-90" />
          <div className="relative z-10">
            <span className="px-2.5 py-1 text-2xs uppercase tracking-widest bg-neon-pink text-white rounded font-bold">Europe</span>
            <h3 className="text-xl font-bold mt-3 mb-2 text-white">Importation France</h3>
            <p className="text-sm text-white/70 mb-4 line-clamp-2">Commandez votre véhicule en France. Inspection complète et prise en charge administrative intégrale.</p>
            <button onClick={() => { setActiveImportTab('france'); scrollToSection('import-process'); }} className="text-xs font-bold text-neon-pink flex items-center space-x-1 hover:underline cursor-pointer">
              <span>En savoir plus</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-glass flex flex-col justify-end p-6 transition-all duration-500 hover:border-neon-pink/40 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/china_import.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-90" />
          <div className="relative z-10">
            <span className="px-2.5 py-1 text-2xs uppercase tracking-widest bg-neon-pink text-white rounded font-bold">Chine / EV</span>
            <h3 className="text-xl font-bold mt-3 mb-2 text-white">Importation Chine</h3>
            <p className="text-sm text-white/70 mb-4 line-clamp-2">Accédez aux dernières innovations technologiques et véhicules électriques neufs ou certifiés.</p>
            <button onClick={() => { setActiveImportTab('china'); scrollToSection('import-process'); }} className="text-xs font-bold text-neon-pink flex items-center space-x-1 hover:underline cursor-pointer">
              <span>En savoir plus</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-glass flex flex-col justify-end p-6 transition-all duration-500 hover:border-neon-pink/40 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/certified_used.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-90" />
          <div className="relative z-10">
            <span className="px-2.5 py-1 text-2xs uppercase tracking-widest bg-neon-pink text-white rounded font-bold">Showroom</span>
            <h3 className="text-xl font-bold mt-3 mb-2 text-white">Occasion Certifiée</h3>
            <p className="text-sm text-white/70 mb-4 line-clamp-2">Large choix de modèles premium inspectés en Algérie, disponibles immédiatement avec garantie.</p>
            <button onClick={() => scrollToSection('marketplace')} className="text-xs font-bold text-neon-pink flex items-center space-x-1 hover:underline cursor-pointer">
              <span>Voir le catalogue</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-glass flex flex-col justify-end p-6 transition-all duration-500 hover:border-neon-pink/40 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('/maintenance.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent opacity-90" />
          <div className="relative z-10">
            <span className="px-2.5 py-1 text-2xs uppercase tracking-widest bg-neon-pink text-white rounded font-bold">Atelier</span>
            <h3 className="text-xl font-bold mt-3 mb-2 text-white">Entretien & Diagnostic</h3>
            <p className="text-sm text-white/70 mb-4 line-clamp-2">Atelier mécanique haut de gamme pour l'entretien programmé ou le diagnostic informatique avancé.</p>
            <button onClick={() => scrollToSection('services')} className="text-xs font-bold text-neon-pink flex items-center space-x-1 hover:underline cursor-pointer">
              <span>Réserver un service</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

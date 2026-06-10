export default function ImportProcess({ activeImportTab, setActiveImportTab, timelineStep, setTimelineStep }) {
  return (
    <section id="import-process" className="py-24 bg-black/30 border-y border-glass">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">Guide d'Importation</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Le Processus AutoDeal en 5 étapes</p>

          {/* Toggle Tabs */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setActiveImportTab('france')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeImportTab === 'france' ? 'bg-neon-pink text-white shadow-neon-sm' : 'bg-white/5 hover:bg-white/10 text-white/60 border border-glass'}`}
            >
              Depuis la France
            </button>
            <button
              onClick={() => setActiveImportTab('china')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeImportTab === 'china' ? 'bg-neon-pink text-white shadow-neon-sm' : 'bg-white/5 hover:bg-white/10 text-white/60 border border-glass'}`}
            >
              Depuis la Chine
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-glass-strong -translate-y-1/2 z-0">
            <div
              className="h-full bg-gradient-to-r from-neon-pink to-pink-500 transition-all duration-500"
              style={{ width: `${timelineStep * 25}%` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            
            {/* Step 1 */}
            <div
              onClick={() => setTimelineStep(0)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${timelineStep === 0 ? 'bg-neon-pink/10 border-neon-pink shadow-neon-sm scale-102' : 'bg-glass border-glass hover:bg-white/5'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-neon-pink">01</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">Concept</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Choix du véhicule</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {activeImportTab === 'france'
                  ? "Sélectionnez un véhicule depuis les centrales d'achat françaises ou demandez notre recherche personnalisée."
                  : "Accédez à notre catalogue exclusif de voitures électriques neuves ou d'occasions récentes certifiées en Chine."}
              </p>
            </div>

            {/* Step 2 */}
            <div
              onClick={() => setTimelineStep(1)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${timelineStep === 1 ? 'bg-neon-pink/10 border-neon-pink shadow-neon-sm scale-102' : 'bg-glass border-glass hover:bg-white/5'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-neon-pink">02</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">Expertise</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Vérification physique</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {activeImportTab === 'france'
                  ? "Un technicien agréé se déplace en France pour auditer le véhicule : contrôle carrosserie, moteur, et valise."
                  : "Chaque véhicule électrique subit un test strict d'état de santé de la batterie (SOH) et d'intégrité électrique."}
              </p>
            </div>

            {/* Step 3 */}
            <div
              onClick={() => setTimelineStep(2)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${timelineStep === 2 ? 'bg-neon-pink/10 border-neon-pink shadow-neon-sm scale-102' : 'bg-glass border-glass hover:bg-white/5'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-neon-pink">03</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">Transit</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Achat & Importation</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {activeImportTab === 'france'
                  ? "Acquisition sécurisée hors-taxes, chargement en container à Marseille et transport vers le port d'Alger."
                  : "Logistique sécurisée par voie maritime directe depuis le port de Shanghai vers Alger en container ventilé."}
              </p>
            </div>

            {/* Step 4 */}
            <div
              onClick={() => setTimelineStep(3)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${timelineStep === 3 ? 'bg-neon-pink/10 border-neon-pink shadow-neon-sm scale-102' : 'bg-glass border-glass hover:bg-white/5'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-neon-pink">04</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">Douane</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Dédouanement</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Prise en charge complète du dossier de transit par nos déclarants en douane agréés aux ports algériens.
              </p>
            </div>

            {/* Step 5 */}
            <div
              onClick={() => setTimelineStep(4)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${timelineStep === 4 ? 'bg-neon-pink/10 border-neon-pink shadow-neon-sm scale-102' : 'bg-glass border-glass hover:bg-white/5'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-neon-pink">05</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70">Livraison</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Livraison finale</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Nettoyage esthétique haut de gamme, contrôle final et livraison à votre adresse via notre remorque fermée.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default function EstimationForm({
  estimationForm,
  setEstimationForm,
  estimationLoading,
  estimationResult,
  handleEstimateSubmit
}) {
  return (
    <section id="estimation" className="py-24 max-w-3xl mx-auto px-6 relative">
      <div className="p-8 sm:p-12 border border-glass-pink bg-glass rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-24 h-24 bg-neon-pink/10 rounded-bl-full border-b border-l border-neon-pink/20" />
        
        <div className="mb-10 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">Service de Reprise</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">Estimer la valeur de votre véhicule</p>
          <p className="text-xs text-white/50 mt-2">Obtenez une valeur indicative sur le marché algérien instantanément.</p>
        </div>

        <form onSubmit={handleEstimateSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 font-bold mb-2">Marque *</label>
              <input
                type="text"
                required
                placeholder="Ex: Porsche, Audi..."
                value={estimationForm.brand}
                onChange={(e) => setEstimationForm({ ...estimationForm, brand: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-glass bg-black/45 focus:outline-none focus:border-neon-pink text-white"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 font-bold mb-2">Modèle *</label>
              <input
                type="text"
                required
                placeholder="Ex: 911 Carrera, RS6..."
                value={estimationForm.model}
                onChange={(e) => setEstimationForm({ ...estimationForm, model: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-glass bg-black/45 focus:outline-none focus:border-neon-pink text-white"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 font-bold mb-2">Année de mise en circulation *</label>
              <select
                value={estimationForm.year}
                onChange={(e) => setEstimationForm({ ...estimationForm, year: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-glass bg-black text-white focus:outline-none focus:border-neon-pink cursor-pointer"
              >
                {Array.from({ length: 12 }, (_, i) => 2026 - i).map((yr) => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 font-bold mb-2">Kilométrage (km) *</label>
              <input
                type="number"
                required
                placeholder="Ex: 25000"
                value={estimationForm.mileage}
                onChange={(e) => setEstimationForm({ ...estimationForm, mileage: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-glass bg-black/45 focus:outline-none focus:border-neon-pink text-white"
              />
            </div>

          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-white/60 font-bold mb-2">Téléphone *</label>
            <input
              type="tel"
              required
              placeholder="Ex: 0550 12 34 56"
              value={estimationForm.phone}
              onChange={(e) => setEstimationForm({ ...estimationForm, phone: e.target.value })}
              className="w-full px-4 py-3 text-sm rounded-xl border border-glass bg-black/45 focus:outline-none focus:border-neon-pink text-white"
            />
          </div>

          <button
            type="submit"
            disabled={estimationLoading}
            className="w-full py-4 bg-neon-pink text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-neon-pink-hover hover:shadow-neon-md transition-all duration-300 disabled:opacity-50 cursor-pointer"
          >
            {estimationLoading ? "Calcul de la cote en cours..." : "Obtenir une estimation"}
          </button>
        </form>

        {/* Loader Component */}
        {estimationLoading && (
          <div className="mt-8 p-6 border border-glass bg-white/5 rounded-2xl flex flex-col items-center justify-center animate-pulse">
            <div className="w-8 h-8 rounded-full border-2 border-neon-pink border-t-transparent animate-spin mb-4" />
            <p className="text-sm font-bold">Interrogation des bases de données de marché...</p>
          </div>
        )}

        {/* Results Block */}
        {estimationResult && (
          <div className="mt-8 p-6 border border-glass bg-white/5 rounded-2xl text-center">
            <svg className="w-10 h-10 text-neon-pink mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0 1 18 0z"/></svg>
            <h3 className="text-base font-extrabold text-white mb-1">Estimation finale indicative</h3>
            <p className="text-xs text-white/50 uppercase tracking-wider mb-4">{estimationResult.car}</p>
            
            <div className="inline-flex flex-col sm:flex-row sm:items-center sm:space-x-3 px-6 py-3 rounded-xl bg-neon-pink/10 border border-neon-pink/20 mb-6">
              <span className="text-2xl font-black text-white">{estimationResult.min}</span>
              <span className="text-white/40 font-bold hidden sm:inline">-</span>
              <span className="text-2xl font-black text-neon-pink">{estimationResult.max}</span>
            </div>
            
            <p className="text-2xs text-white/40 leading-relaxed max-w-md mx-auto mb-4">
              Cette valeur est basée sur l'historique récent des ventes locales et le coût d'importation d'un modèle équivalent. Notre équipe va vous contacter sous 24h pour affiner l'offre physique.
            </p>
            <a
              href={`https://wa.me/213550123456?text=Bonjour, je souhaite vendre ma ${encodeURIComponent(estimationForm.brand)} ${encodeURIComponent(estimationForm.model)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-bold text-neon-pink hover:underline"
            >
              <span>Discuter de l'offre sur WhatsApp</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-4 .5.012 1 .5 1.5 1M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
            </a>
          </div>
        )}

      </div>
    </section>
  );
}

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">Nos Engagements</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white">Pourquoi choisir AutoDeal ?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="p-8 border border-glass bg-glass rounded-2xl glass-card-hover flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-neon-pink mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-9.618 5.04M12 20.944a11.953 11.953 0 009.618-5.04M12 20.944a11.953 11.953 0 01-9.618-5.04m12.784-6.314a5.002 5.002 0 11-6.331 6.331"/></svg>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-3">Transactions Sécurisées</h3>
            <p className="text-sm text-white/60 leading-relaxed">Paiement via compte séquestre et contrats d'importation certifiés conformes aux législations en vigueur.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-8 border border-glass bg-glass rounded-2xl glass-card-hover flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-neon-pink mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-3">Véhicules Vérifiés</h3>
            <p className="text-sm text-white/60 leading-relaxed">Inspection technique rigoureuse avec diagnostic valise et rapport détaillé avant tout acte d'achat logistique.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="p-8 border border-glass bg-glass rounded-2xl glass-card-hover flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-neon-pink mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-3">Importation Simplifiée</h3>
            <p className="text-sm text-white/60 leading-relaxed">Nous prenons en charge la totalité de la logistique, du transport maritime aux assurances de convoi.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="p-8 border border-glass bg-glass rounded-2xl glass-card-hover flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-neon-pink mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17h2m10 0h2"/></svg>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-3">Livraison Nationale</h3>
            <p className="text-sm text-white/60 leading-relaxed">Livraison par camion plateau sécurisé dans les 58 wilayas d'Algérie, directement à votre porte.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="p-8 border border-glass bg-glass rounded-2xl glass-card-hover flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-neon-pink mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-3">Accompagnement Administratif</h3>
            <p className="text-sm text-white/60 leading-relaxed">Constitution du dossier de douane, homologation des plaques temporaires et montage de dossiers de licence.</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="p-8 border border-glass bg-glass rounded-2xl glass-card-hover flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center text-neon-pink mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            </div>
            <h3 className="text-lg font-extrabold text-white mb-3">Garantie Qualité</h3>
            <p className="text-sm text-white/60 leading-relaxed">Une garantie contractuelle sur le moteur et la boîte de vitesse pour rouler l'esprit tranquille.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

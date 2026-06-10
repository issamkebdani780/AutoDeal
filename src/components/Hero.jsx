export default function Hero({ scrollToSection }) {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center py-32 md:py-40 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero_car.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,5,0.95)_90%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/20 text-neon-pink text-xs font-bold uppercase tracking-wider mb-6 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
            <span>Importation & Occasion Premium Algérie</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-white tracking-tight">
            Votre partenaire <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neon-pink text-glow-strong">
              automobile de confiance
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
            Importation personnalisée depuis la France et la Chine, vente de véhicules d'occasion certifiés et services d'entretien automobiles haut de gamme.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => scrollToSection('marketplace')}
              className="px-8 py-4 bg-neon-pink text-white text-sm font-extrabold uppercase tracking-wider rounded-xl hover:bg-neon-pink-hover hover:shadow-neon-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
            >
              Voir les véhicules
            </button>
            <button
              onClick={() => scrollToSection('estimation')}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 text-white text-sm font-extrabold uppercase tracking-wider rounded-xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 text-center cursor-pointer"
            >
              Estimer mon véhicule
            </button>
          </div>

          {/* Statistics Counters */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8">
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-4xl font-extrabold text-white text-glow">500+</p>
              <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Véhicules Livrés</p>
            </div>
            <div className="text-center sm:text-left border-x border-white/10 px-4">
              <p className="text-2xl sm:text-4xl font-extrabold text-white text-glow">98%</p>
              <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Satisfaction Client</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-4xl font-extrabold text-white text-glow">24h</p>
              <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Support Client</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

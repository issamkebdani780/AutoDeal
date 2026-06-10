export default function FinalCTA({ scrollToSection }) {
  return (
    <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bmw_final_cta.png')" }}>
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-bg-dark" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
          Prêt à trouver votre <br className="sm:hidden" />
          <span className="text-neon-pink text-glow">prochain véhicule ?</span>
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
          Que vous recherchiez une sportive européenne, un véhicule électrique chinois, ou un service après-vente d'exception, AutoDeal est à vos côtés.
        </p>

        <button
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 bg-neon-pink text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-neon-pink-hover hover:shadow-neon-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Contactez-nous
        </button>
      </div>
    </section>
  );
}

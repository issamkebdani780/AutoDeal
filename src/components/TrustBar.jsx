export default function TrustBar() {
  return (
    <section className="relative z-20 py-10 bg-black/45 border-y border-glass backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center text-center">
          
          <div className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <span className="text-xs font-bold text-neon-pink">FR</span>
            </div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-white/80">Partenaire France</span>
          </div>

          <div className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <span className="text-xs font-bold text-neon-pink">CN</span>
            </div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-white/80">Partenaire Chine</span>
          </div>

          <div className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="text-xs uppercase tracking-wider font-extrabold text-white/80">Transactions Sécurisées</span>
          </div>

          <div className="flex items-center space-x-2 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0 1 18 0z"/></svg>
            <span className="text-xs uppercase tracking-wider font-extrabold text-white/80">Véhicules Certifiés</span>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center space-x-2 hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-neon-pink" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18.36 12.83l-5.66 5.66-1.41-1.41 4.24-4.25-4.24-4.24 1.41-1.42 5.66 5.66zM5.64 11.17l5.66-5.66 1.41 1.41-4.24 4.25 4.24 4.24-1.41 1.42-5.66-5.66z"/></svg>
            <span className="text-xs uppercase tracking-wider font-extrabold text-white/80">Support Premium</span>
          </div>

        </div>
      </div>
    </section>
  );
}

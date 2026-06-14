import { useEffect } from 'react';

export default function Navbar({ scrolled, scrollToSection, favoritesCount, mobileMenuOpen, setMobileMenuOpen }) {
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-4 left-0 right-0 z-50 px-4 max-w-7xl mx-auto transition-all duration-300 ${scrolled ? 'transform scale-[0.98]' : ''}`}>
        <div className="w-full bg-[#050505]/80 backdrop-blur-md rounded-full border border-neon-pink/25 shadow-[0_0_20px_rgba(255,0,110,0.15)] py-3 px-6 flex items-center justify-between">
          
          {/* Logo block */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-xl font-black tracking-tighter uppercase text-white">
              AUTO<span className="text-neon-pink text-glow">DEAL</span>
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-2xs font-bold uppercase tracking-wider text-white/70">
            <button onClick={() => scrollToSection('home')} className="hover:text-neon-pink hover:text-glow transition-all duration-200 cursor-pointer">Accueil</button>
            <button onClick={() => scrollToSection('marketplace')} className="hover:text-neon-pink hover:text-glow transition-all duration-200 cursor-pointer">Véhicules</button>
            <button onClick={() => scrollToSection('import-process')} className="hover:text-neon-pink hover:text-glow transition-all duration-200 cursor-pointer">Import France</button>
            <button onClick={() => scrollToSection('import-process')} className="hover:text-neon-pink hover:text-glow transition-all duration-200 cursor-pointer">Import Chine</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-neon-pink hover:text-glow transition-all duration-200 cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('why-choose')} className="hover:text-neon-pink hover:text-glow transition-all duration-200 cursor-pointer">À propos</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-neon-pink hover:text-glow transition-all duration-200 cursor-pointer">Contact</button>
          </nav>

          {/* CTA & Language Selector & Favorites */}
          <div className="hidden md:flex items-center">
            {favoritesCount > 0 && (
              <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-2xs font-bold mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-neon-pink animate-pulse" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                <span>{favoritesCount}</span>
              </div>
            )}
            <button
              onClick={() => scrollToSection('estimation')}
              className="px-6 py-2.5 text-2xs font-extrabold uppercase tracking-widest text-white bg-neon-pink rounded-full hover:bg-neon-pink-hover hover:shadow-neon-sm active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Réserver
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-neon-pink transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-bg-dark border-l border-glass p-8 flex flex-col justify-between transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-6 border-b border-glass">
              <span className="text-xl font-bold uppercase tracking-tighter">Auto<span className="text-neon-pink">Deal</span></span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-neon-pink cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18 18 6M6 6l12 12"/></svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4 text-base font-semibold">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 hover:text-neon-pink transition-colors cursor-pointer">Accueil</button>
              <button onClick={() => scrollToSection('marketplace')} className="text-left py-2 hover:text-neon-pink transition-colors cursor-pointer">Véhicules</button>
              <button onClick={() => scrollToSection('import-process')} className="text-left py-2 hover:text-neon-pink transition-colors cursor-pointer">Import France</button>
              <button onClick={() => scrollToSection('import-process')} className="text-left py-2 hover:text-neon-pink transition-colors cursor-pointer">Import Chine</button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-neon-pink transition-colors cursor-pointer">Services</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-left py-2 hover:text-neon-pink transition-colors cursor-pointer">À propos</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-neon-pink transition-colors cursor-pointer">Contact</button>
            </nav>
          </div>

          <div className="pt-6 border-t border-glass space-y-6">
            {/* Language Selector for mobile */}
            <div className="flex items-center justify-center space-x-6 text-xs font-bold text-white/60">
              <span className="bg-neon-pink text-white px-3 py-1 rounded font-black cursor-pointer shadow-[0_0_5px_rgba(255,0,110,0.3)]">FR</span>
              <span className="hover:text-neon-pink cursor-pointer transition-colors uppercase">EN</span>
              <span className="hover:text-neon-pink cursor-pointer transition-colors font-sans text-sm">عربي</span>
            </div>

            <button
              onClick={() => scrollToSection('estimation')}
              className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-neon-pink rounded-full hover:bg-neon-pink-hover transition-colors cursor-pointer"
            >
              Réserver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

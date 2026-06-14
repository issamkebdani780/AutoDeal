import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    // Dans une architecture multi-pages, si on n'est pas sur la page d'accueil,
    // il faudra rediriger vers la page d'accueil puis scroller.
    // Pour l'instant, on laisse le défilement basique ou on redirige.
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: rediriger vers /#id (à implémenter si on change de page)
      window.location.hash = id;
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-bg-dark text-white select-none flex flex-col">
      {/* GLOW DECORATIONS */}
      <div className="fixed top-1/4 left-1/10 glow-spot-pink -z-10" />
      <div className="fixed top-1/2 right-1/10 glow-spot-pink -z-10" />
      <div className="fixed bottom-1/4 left-1/3 glow-spot-pink -z-10" />

      <Navbar
        scrolled={scrolled}
        scrollToSection={scrollToSection}
        favoritesCount={favoritesCount}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { initialVehicles, testimonials, faqData, servicesDetails } from './mockData';

// Import decoupled sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Categories from './components/Categories';
import Marketplace from './components/Marketplace';
import WhyChoose from './components/WhyChoose';
import ImportProcess from './components/ImportProcess';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import EstimationForm from './components/EstimationForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Import interactive overlays
import VehicleDetailModal from './components/VehicleDetailModal';
import ServiceDrawerModal from './components/ServiceDrawerModal';

export default function App() {
  // Navigation & UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImportTab, setActiveImportTab] = useState('france'); // 'france' | 'china'
  const [favorites, setFavorites] = useState(new Set());
  
  // Marketplace Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [fuelFilter, setFuelFilter] = useState('');
  const [transFilter, setTransFilter] = useState('');
  const [maxBudget, setMaxBudget] = useState(200000); // 200k Euro

  // Modal / Drawer Interactive states
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [timelineStep, setTimelineStep] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  // Form states
  const [estimationForm, setEstimationForm] = useState({
    brand: '',
    model: '',
    year: '2022',
    mileage: '',
    phone: ''
  });
  const [estimationLoading, setEstimationLoading] = useState(false);
  const [estimationResult, setEstimationResult] = useState(null);

  // Testimonial index
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Scroll handler for translucent header
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

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Filter vehicles logic
  const filteredVehicles = initialVehicles.filter(car => {
    const matchesSearch = `${car.brand} ${car.model}`.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = brandFilter ? car.brand.toLowerCase() === brandFilter.toLowerCase() : true;
    const matchesFuel = fuelFilter ? car.fuel === fuelFilter : true;
    const matchesTrans = transFilter ? car.transmission === transFilter : true;
    const matchesBudget = car.price <= maxBudget;
    return matchesSearch && matchesBrand && matchesFuel && matchesTrans && matchesBudget;
  });

  const toggleFavorite = (id) => {
    const updated = new Set(favorites);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    setFavorites(updated);
  };

  // Run dynamic calculation for estimation
  const handleEstimateSubmit = (e) => {
    e.preventDefault();
    if (!estimationForm.brand || !estimationForm.model || !estimationForm.mileage || !estimationForm.phone) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    
    setEstimationLoading(true);
    setEstimationResult(null);

    setTimeout(() => {
      const yearInt = parseInt(estimationForm.year);
      const mileageInt = parseInt(estimationForm.mileage) || 0;
      
      // Dynamic estimation algorithm (DA basis)
      let baseVal = 9500000;
      
      const brandLower = estimationForm.brand.toLowerCase();
      if (brandLower.includes('porsche') || brandLower.includes('911') || brandLower.includes('amg')) {
        baseVal = 25000000;
      } else if (brandLower.includes('audi') || brandLower.includes('bmw') || brandLower.includes('mercedes')) {
        baseVal = 16000000;
      } else if (brandLower.includes('byd') || brandLower.includes('zeekr')) {
        baseVal = 11000000;
      }

      const yearsOld = Math.max(0, 2026 - yearInt);
      let depVal = baseVal - (yearsOld * 900000) - (mileageInt * 25);
      
      depVal = Math.max(depVal, 1800000);
      
      const minVal = Math.round(depVal * 0.93 / 50000) * 50000;
      const maxVal = Math.round(depVal * 1.07 / 50000) * 50000;

      setEstimationResult({
        min: minVal.toLocaleString('fr-FR') + " DA",
        max: maxVal.toLocaleString('fr-FR') + " DA",
        car: `${estimationForm.brand} ${estimationForm.model}`
      });
      setEstimationLoading(false);
    }, 2000);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-bg-dark text-white select-none">
      
      {/* GLOW DECORATIONS */}
      <div className="top-1/4 left-1/10 glow-spot-pink" />
      <div className="top-1/2 right-1/10 glow-spot-pink" />
      <div className="bottom-1/4 left-1/3 glow-spot-pink" />

      {/* Header / Navbar Section */}
      <Navbar
        scrolled={scrolled}
        scrollToSection={scrollToSection}
        favoritesCount={favorites.size}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Banner */}
      <Hero scrollToSection={scrollToSection} />

      {/* Partner Logos & Trust Badges */}
      <TrustBar />

      {/* Business Core Categories */}
      <Categories
        setActiveImportTab={setActiveImportTab}
        scrollToSection={scrollToSection}
      />

      {/* Interactive Used Vehicle Catalog */}
      <Marketplace
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        brandFilter={brandFilter}
        setBrandFilter={setBrandFilter}
        fuelFilter={fuelFilter}
        setFuelFilter={setFuelFilter}
        transFilter={transFilter}
        setTransFilter={setTransFilter}
        maxBudget={maxBudget}
        setMaxBudget={setMaxBudget}
        filteredVehicles={filteredVehicles}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        setSelectedVehicle={setSelectedVehicle}
      />

      {/* Why Choose AutoDeal Commitments */}
      <WhyChoose />

      {/* Guide to China and France Import Operations */}
      <ImportProcess
        activeImportTab={activeImportTab}
        setActiveImportTab={setActiveImportTab}
        timelineStep={timelineStep}
        setTimelineStep={setTimelineStep}
      />

      {/* Maintenance & Workshop Service List */}
      <Services
        servicesDetails={servicesDetails}
        setActiveService={setActiveService}
      />

      {/* Testimonials Slider */}
      <Testimonials
        testimonials={testimonials}
        testimonialIndex={testimonialIndex}
        setTestimonialIndex={setTestimonialIndex}
      />

      {/* Reprise Estimation Engine */}
      <EstimationForm
        estimationForm={estimationForm}
        setEstimationForm={setEstimationForm}
        estimationLoading={estimationLoading}
        estimationResult={estimationResult}
        handleEstimateSubmit={handleEstimateSubmit}
      />

      {/* Frequently Asked Questions */}
      <FAQ
        faqData={faqData}
        activeFaqIndex={activeFaqIndex}
        setActiveFaqIndex={setActiveFaqIndex}
      />

      {/* Bottom Conversion Visual Banner */}
      <FinalCTA scrollToSection={scrollToSection} />

      {/* Navigation, Contact & Newsletter Footer */}
      <Footer scrollToSection={scrollToSection} />

      {/* Modals & Overlays */}
      <VehicleDetailModal
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
      />
      <ServiceDrawerModal
        activeService={activeService}
        setActiveService={setActiveService}
        servicesDetails={servicesDetails}
      />
    </div>
  );
}

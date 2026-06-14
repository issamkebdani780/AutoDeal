import { useState, useEffect } from 'react';
import { initialVehicles, testimonials, faqData, servicesDetails } from '../mockData';

// Import decoupled sections
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Categories from '../components/Categories';
import Marketplace from '../components/Marketplace';
import WhyChoose from '../components/WhyChoose';
import ImportProcess from '../components/ImportProcess';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import EstimationForm from '../components/EstimationForm';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

// Import interactive overlays
import VehicleDetailModal from '../components/VehicleDetailModal';
import ServiceDrawerModal from '../components/ServiceDrawerModal';

export default function HomePage() {
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <TrustBar />
      <Categories
        setActiveImportTab={setActiveImportTab}
        scrollToSection={scrollToSection}
      />
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
      <WhyChoose />
      <ImportProcess
        activeImportTab={activeImportTab}
        setActiveImportTab={setActiveImportTab}
        timelineStep={timelineStep}
        setTimelineStep={setTimelineStep}
      />
      <Services
        servicesDetails={servicesDetails}
        setActiveService={setActiveService}
      />
      <Testimonials
        testimonials={testimonials}
        testimonialIndex={testimonialIndex}
        setTestimonialIndex={setTestimonialIndex}
      />
      <EstimationForm
        estimationForm={estimationForm}
        setEstimationForm={setEstimationForm}
        estimationLoading={estimationLoading}
        estimationResult={estimationResult}
        handleEstimateSubmit={handleEstimateSubmit}
      />
      <FAQ
        faqData={faqData}
        activeFaqIndex={activeFaqIndex}
        setActiveFaqIndex={setActiveFaqIndex}
      />
      <FinalCTA scrollToSection={scrollToSection} />

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
    </>
  );
}

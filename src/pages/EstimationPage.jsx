import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import EstimationForm from '../components/EstimationForm';

export default function EstimationPage() {
  const [estimationForm, setEstimationForm] = useState({
    brand: '',
    model: '',
    year: '2022',
    mileage: '',
    phone: ''
  });
  const [estimationLoading, setEstimationLoading] = useState(false);
  const [estimationResult, setEstimationResult] = useState(null);

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

  return (
    <div className="pb-20">
      <PageHeader 
        title="Estimez votre véhicule" 
        subtitle="Obtenez une estimation rapide et précise du prix de rachat de votre voiture actuelle."
      />
      
      <div className="mt-12 max-w-7xl mx-auto px-4">
        {/* We reuse the component but we can wrap it or just render it */}
        <div className="bg-surface rounded-2xl overflow-hidden border border-white/5">
            <EstimationForm 
              estimationForm={estimationForm}
              setEstimationForm={setEstimationForm}
              estimationLoading={estimationLoading}
              estimationResult={estimationResult}
              handleEstimateSubmit={handleEstimateSubmit}
            />
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import ServiceDrawerModal from '../components/ServiceDrawerModal';
import { servicesDetails } from '../mockData';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="pb-20">
      <PageHeader 
        title="Nos Services" 
        subtitle="Découvrez l'ensemble de nos prestations d'entretien, de réparation et d'accompagnement sur mesure."
      />
      
      <div className="mt-12">
        <Services 
          servicesDetails={servicesDetails} 
          setActiveService={setActiveService} 
        />
      </div>

      <ServiceDrawerModal 
        activeService={activeService} 
        setActiveService={setActiveService} 
        servicesDetails={servicesDetails} 
      />
    </div>
  );
}

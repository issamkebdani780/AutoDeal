import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import FAQ from '../components/FAQ';
import { faqData } from '../mockData';

export default function FAQPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  return (
    <div className="pb-20">
      <PageHeader 
        title="Foire Aux Questions" 
        subtitle="Trouvez rapidement des réponses à vos questions concernant l'achat, l'importation et nos services."
      />
      <div className="mt-12">
        <FAQ 
          faqData={faqData} 
          activeFaqIndex={activeFaqIndex} 
          setActiveFaqIndex={setActiveFaqIndex} 
        />
      </div>
    </div>
  );
}

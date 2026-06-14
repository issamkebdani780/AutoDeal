import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="À Propos d'AutoDeal" 
        subtitle="Votre partenaire de confiance pour l'achat, la vente et l'importation de véhicules premium en Algérie."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-text-gray space-y-8 leading-relaxed text-lg">
        <p>
          Fondé en 2020, <strong className="text-white">AutoDeal</strong> est né d'une passion pour l'automobile et d'une volonté de moderniser le marché de la voiture en Algérie. Nous avons pour mission d'offrir une expérience transparente, sécurisée et premium à tous nos clients.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
          <div className="bg-surface p-6 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl font-bold text-primary-red mb-2">+500</div>
            <div className="text-sm">Véhicules importés</div>
          </div>
          <div className="bg-surface p-6 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl font-bold text-primary-red mb-2">98%</div>
            <div className="text-sm">Clients satisfaits</div>
          </div>
          <div className="bg-surface p-6 rounded-2xl border border-white/5 text-center">
            <div className="text-3xl font-bold text-primary-red mb-2">24/7</div>
            <div className="text-sm">Support client</div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Notre Vision</h2>
        <p>
          Devenir la plateforme de référence pour l'automobile en Algérie, en combinant l'innovation technologique à un service client exceptionnel. Que vous cherchiez un véhicule neuf, d'occasion certifiée, ou que vous souhaitiez importer un modèle exclusif de France ou de Chine, nous simplifions chaque étape du processus.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Nos Engagements</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong className="text-white">Transparence totale :</strong> Historique des véhicules, prix clairs sans frais cachés.</li>
          <li><strong className="text-white">Qualité garantie :</strong> Tous nos véhicules d'occasion passent par un contrôle rigoureux en 150 points.</li>
          <li><strong className="text-white">Accompagnement de A à Z :</strong> De la recherche au financement, jusqu'à la livraison et l'immatriculation.</li>
        </ul>
      </div>
    </div>
  );
}

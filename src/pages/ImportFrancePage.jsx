import PageHeader from '../components/PageHeader';

export default function ImportFrancePage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Importation de France" 
        subtitle="Le marché automobile français et européen à portée de main, livré clé en main en Algérie."
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">Service Premium</span>
            <h2 className="text-3xl font-bold text-white mb-6">Pourquoi importer de France avec AutoDeal ?</h2>
            <p className="text-text-gray text-lg max-w-3xl mx-auto leading-relaxed">
              Nous prenons en charge l'intégralité du processus d'importation : de la recherche du véhicule idéal sur le marché européen, à son inspection sur place, jusqu'au dédouanement et à la livraison finale à votre domicile en Algérie.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
          <div className="bg-surface p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Traçabilité Garantie</h3>
            <p className="text-text-gray">Historique d'entretien complet, certification du kilométrage réel et inspection physique détaillée par nos experts partenaires en Europe.</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-3">Démarches Simplifiées</h3>
            <p className="text-text-gray">Licence Moudjahid, dédouanement, transport maritime sécurisé et immatriculation locale : on s'occupe de toutes les formalités administratives.</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-3">Large Choix</h3>
            <p className="text-text-gray">Accès exclusif aux réseaux de concessionnaires et ventes privées en France et en Allemagne pour trouver la configuration exacte que vous souhaitez.</p>
          </div>
        </div>

        <div className="mt-16">
          <a href="/contact" className="inline-block bg-white text-bg-dark font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105">
            Parler à un conseiller Import
          </a>
        </div>
      </div>
    </div>
  );
}

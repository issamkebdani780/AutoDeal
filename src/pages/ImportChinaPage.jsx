import PageHeader from '../components/PageHeader';

export default function ImportChinaPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Importation de Chine" 
        subtitle="L'avant-garde technologique et les nouvelles marques premium chinoises, importées directement pour vous."
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold mb-4">Véhicules Nouvelles Énergies</span>
            <h2 className="text-3xl font-bold text-white mb-6">Découvrez le futur de l'automobile</h2>
            <p className="text-text-gray text-lg max-w-3xl mx-auto leading-relaxed">
              Accédez aux dernières innovations des géants chinois de l'automobile (BYD, Zeekr, Geely, etc.). AutoDeal gère l'importation de ces véhicules ultra-technologiques avec une maîtrise totale de la chaîne logistique.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
          <div className="bg-gradient-to-br from-surface to-bg-dark p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Technologies de pointe</h3>
              <p className="text-text-gray mb-6">
                Profitez d'interfaces dernier cri, d'autonomies électriques record et d'assistances à la conduite avancées à des prix ultra-compétitifs par rapport au marché traditionnel.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-text-gray">
                <svg className="w-5 h-5 text-primary-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Marques premium (Zeekr, Nio, Li Auto)
              </li>
              <li className="flex items-center text-sm text-text-gray">
                <svg className="w-5 h-5 text-primary-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Véhicules 100% Électriques et Hybrides
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-bl from-surface to-bg-dark p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Logistique Maîtrisée</h3>
              <p className="text-text-gray mb-6">
                Un réseau de partenaires solides en Asie pour assurer le contrôle qualité avant départ et un transport maritime optimisé vers les ports algériens.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-text-gray">
                <svg className="w-5 h-5 text-primary-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Contrôle qualité certifié avant embarquement
              </li>
              <li className="flex items-center text-sm text-text-gray">
                <svg className="w-5 h-5 text-primary-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Gestion complète du dédouanement
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <a href="/contact" className="inline-block bg-primary-red text-white font-bold py-4 px-8 rounded-xl transition-transform hover:scale-105">
            Demander un devis d'importation
          </a>
        </div>
      </div>
    </div>
  );
}

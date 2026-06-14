import PageHeader from '../components/PageHeader';

export default function FinancingPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Financement & Crédit Auto" 
        subtitle="Des solutions de financement flexibles pour concrétiser votre projet d'achat automobile."
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Le crédit auto islamique (Mourabaha)</h2>
            <p className="text-text-gray text-lg mb-6 leading-relaxed">
              En partenariat avec les principales banques en Algérie, AutoDeal vous propose des solutions de financement conformes aux principes de la finance islamique (Mourabaha) pour l'achat de véhicules neufs.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-white">Financement allant jusqu'à 90% de la valeur du véhicule.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-white">Durée de remboursement flexible de 12 à 60 mois.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-white">Traitement rapide de votre dossier sous 48h à 72h.</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Simulateur de crédit (Bientôt disponible)</h3>
            <div className="space-y-6 opacity-50 pointer-events-none">
              <div>
                <label className="block text-sm font-medium text-text-gray mb-2">Prix du véhicule (DA)</label>
                <input type="range" className="w-full" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-gray mb-2">Apport personnel (DA)</label>
                <input type="range" className="w-full" disabled />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-gray mb-2">Durée (Mois)</label>
                <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white" disabled>
                  <option>12 mois</option>
                  <option>24 mois</option>
                  <option>36 mois</option>
                  <option>48 mois</option>
                  <option>60 mois</option>
                </select>
              </div>
              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-text-gray mb-2">Mensualité estimée</p>
                <p className="text-4xl font-bold text-primary-red">- DA / mois</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block bg-white/10 text-white text-sm py-1 px-3 rounded-full">Fonctionnalité en cours de développement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

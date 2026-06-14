import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      <PageHeader 
        title="Merci !" 
        subtitle="Votre demande a été enregistrée avec succès."
      />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-black text-white mb-4">Demande Confirmée</h2>
        <p className="text-text-gray text-lg mb-10 leading-relaxed">
          Nous avons bien reçu votre demande. Un conseiller AutoDeal ou le concessionnaire en charge vous contactera dans les plus brefs délais (généralement sous 24h ouvrées).
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/vehicules')}
            className="bg-primary-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-colors"
          >
            Continuer la recherche
          </button>
          <button 
            onClick={() => navigate('/')}
            className="bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-colors border border-white/10"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}

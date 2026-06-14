import PageHeader from '../components/PageHeader';

export default function SellVehiclePage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Vendre mon véhicule" 
        subtitle="Vendez votre voiture rapidement, au meilleur prix et en toute sécurité."
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface p-8 rounded-2xl border border-white/5 text-center">
            <div className="w-16 h-16 bg-primary-red/20 text-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Estimez en ligne</h3>
            <p className="text-text-gray">Obtenez une première estimation de la valeur de votre véhicule en quelques clics.</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5 text-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-red/50 to-transparent -z-10"></div>
            <div className="w-16 h-16 bg-primary-red/20 text-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expertise gratuite</h3>
            <p className="text-text-gray">Prenez rendez-vous dans notre showroom pour une expertise complète de 30 minutes.</p>
          </div>
          <div className="bg-surface p-8 rounded-2xl border border-white/5 text-center">
            <div className="w-16 h-16 bg-primary-red/20 text-primary-red rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Paiement immédiat</h3>
            <p className="text-text-gray">Acceptez notre offre finale et recevez votre paiement par virement bancaire sécurisé.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-surface to-bg-dark p-8 md:p-12 rounded-3xl border border-white/10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à vendre ?</h2>
          <p className="text-text-gray mb-8 max-w-2xl mx-auto">
            Gagnez du temps et évitez les tracas de la vente entre particuliers. Nous rachetons votre véhicule sans obligation d'achat d'un nouveau.
          </p>
          <a href="/estimation" className="inline-block bg-primary-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Démarrer l'estimation de ma voiture
          </a>
        </div>
      </div>
    </div>
  );
}

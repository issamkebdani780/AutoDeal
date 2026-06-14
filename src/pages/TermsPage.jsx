import PageHeader from '../components/PageHeader';

export default function TermsPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Conditions Générales d'Utilisation" 
        subtitle="Règles et conditions d'utilisation de nos services et de notre plateforme."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-text-gray space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptation des conditions</h2>
          <p>
            En accédant et en utilisant le site Web AutoDeal, vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Services proposés</h2>
          <p>
            AutoDeal propose des services d'information, de mise en relation, d'estimation et de facilitation pour l'achat, la vente et l'importation de véhicules automobiles. Les annonces et les prix affichés sont indicatifs et peuvent être sujets à modification sans préavis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilité</h2>
          <p>
            Bien que nous nous efforcions de fournir des informations précises, AutoDeal ne garantit pas l'exactitude, la complétude ou l'actualité des informations disponibles sur le site. Nous déclinons toute responsabilité en cas de dommages directs ou indirects résultant de l'utilisation de nos services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
          <p>
            Tout le contenu présent sur ce site (textes, images, logos, design) est la propriété exclusive d'AutoDeal ou de ses partenaires. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.
          </p>
        </section>

        <p className="text-sm mt-12 pt-8 border-t border-white/10">
          Dernière mise à jour : 14 Juin 2026
        </p>
      </div>
    </div>
  );
}

import PageHeader from '../components/PageHeader';

export default function PrivacyPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Politique de Confidentialité" 
        subtitle="Comment nous protégeons et gérons vos données personnelles."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-text-gray space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Collecte des données</h2>
          <p>
            Nous collectons des informations lorsque vous utilisez nos formulaires de contact, d'estimation ou lors de la création d'un compte (nom, adresse e-mail, numéro de téléphone, informations sur votre véhicule).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Utilisation des informations</h2>
          <p>
            Les informations que nous recueillons peuvent être utilisées pour :
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
            <li>Fournir un contenu publicitaire personnalisé</li>
            <li>Améliorer notre site Web</li>
            <li>Améliorer le service client et vos besoins de prise en charge</li>
            <li>Vous contacter par e-mail ou par téléphone concernant votre projet automobile</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Protection des informations</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Divulgation à des tiers</h2>
          <p>
            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers, à l'exception de nos partenaires de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
          </p>
        </section>

        <p className="text-sm mt-12 pt-8 border-t border-white/10">
          Dernière mise à jour : 14 Juin 2026
        </p>
      </div>
    </div>
  );
}

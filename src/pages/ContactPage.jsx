import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <div className="pb-20">
      <PageHeader 
        title="Contactez-nous" 
        subtitle="Notre équipe est à votre disposition pour vous accompagner dans votre projet automobile."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Nos Coordonnées</h3>
              <div className="space-y-4 text-text-gray">
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary-red">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  Route Nationale N°5, Bab Ezzouar, Alger, Algérie
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary-red">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  +213 555 12 34 56
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary-red">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  contact@autodeal.dz
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Horaires d'ouverture</h3>
              <ul className="space-y-2 text-text-gray">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Dimanche - Jeudi</span> <span className="text-white">09:00 - 18:00</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Samedi</span> <span className="text-white">09:00 - 15:00</span></li>
                <li className="flex justify-between pb-2"><span>Vendredi</span> <span className="text-primary-red">Fermé</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-1">Nom complet</label>
                  <input type="text" className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors" placeholder="Votre nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-gray mb-1">Téléphone</label>
                  <input type="tel" className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors" placeholder="Votre téléphone" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-gray mb-1">Sujet</label>
                <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors">
                  <option>Renseignement sur un véhicule</option>
                  <option>Service d'importation</option>
                  <option>Estimation de reprise</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-gray mb-1">Message</label>
                <textarea rows="4" className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

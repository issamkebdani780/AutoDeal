import { useState } from 'react';
import BaseModal from './modals/BaseModal';
import { ContactShowroomForm } from './forms/VehicleForms';

export default function ShowroomContactBlock({ showroom }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!showroom) return null;

  return (
    <div className="bg-surface border border-white/5 rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Coordonnées & Accès</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Infos & Boutons */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-start gap-4 text-text-gray">
              <svg className="w-6 h-6 text-primary-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <p className="text-white font-bold mb-1">Adresse</p>
                <p className="leading-relaxed">{showroom.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 text-text-gray">
              <svg className="w-6 h-6 text-primary-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <p className="text-white font-bold mb-1">Horaires d'ouverture</p>
                <p className="whitespace-pre-line leading-relaxed">{showroom.workingHours}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="col-span-2 bg-primary-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Envoyer un message</span>
            </button>
            <a href={`tel:${showroom.phone.replace(/\\s/g, '')}`} className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex flex-col items-center justify-center gap-2">
              <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-sm">Appeler</span>
            </a>
            <a href={`https://wa.me/${showroom.whatsapp.replace(/\\s/g, '').replace('+', '')}`} target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-bold uppercase tracking-wider">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Google Maps Fictif */}
        <div className="bg-bg-dark rounded-2xl border border-white/10 overflow-hidden relative min-h-[300px]">
          <iframe 
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102319.46788506087!2d3.0182559!3d36.7381273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad1f4148e6c1%3A0xc6c76449195ba5c3!2sAlger!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz`} 
            width="100%" 
            height="100%" 
            style={{ border: 0, position: 'absolute', inset: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map for ${showroom.name}`}
          ></iframe>
        </div>
      </div>

      <BaseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={`Contacter ${showroom.name}`}
      >
        <ContactShowroomForm showroom={showroom} />
      </BaseModal>
    </div>
  );
}

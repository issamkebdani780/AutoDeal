import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputField = ({ label, type = "text", placeholder, required = true }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-text-gray mb-1.5">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      required={required}
      className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors"
    />
  </div>
);

const SubmitButton = ({ text }) => (
  <button type="submit" className="w-full bg-primary-red hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors mt-4">
    {text}
  </button>
);

export function ContactShowroomForm({ showroom, onSuccess }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess ? onSuccess() : navigate('/merci');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-text-gray text-sm mb-6">Envoyez un message direct à <strong>{showroom?.name || 'ce showroom'}</strong>. Ils vous répondront rapidement.</p>
      <InputField label="Nom complet" placeholder="Ex: Karim Benz..." />
      <InputField label="Numéro de téléphone" type="tel" placeholder="05..." />
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-gray mb-1.5">Votre message</label>
        <textarea 
          rows="4" 
          placeholder="Bonjour, je souhaite avoir plus d'informations..."
          required
          className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red transition-colors resize-none"
        ></textarea>
      </div>
      <SubmitButton text="Envoyer le message" />
    </form>
  );
}

export function RequestInfoForm({ car, onSuccess }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(); // Simple success state for basic info
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-text-gray text-sm mb-6">Demandez des détails techniques, des photos supplémentaires ou le dossier complet pour le véhicule <strong>{car?.brand} {car?.model}</strong>.</p>
      <InputField label="Nom complet" placeholder="Votre nom" />
      <InputField label="Numéro de téléphone" type="tel" placeholder="05..." />
      <InputField label="Email (Optionnel)" type="email" placeholder="votre@email.com" required={false} />
      <SubmitButton text="Demander des informations" />
    </form>
  );
}

export function TestDriveForm({ car, onSuccess }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/merci');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-text-gray text-sm mb-6">Réservez un créneau pour essayer le véhicule <strong>{car?.brand} {car?.model}</strong> en concession.</p>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Date souhaitée" type="date" />
        <InputField label="Heure souhaitée" type="time" />
      </div>
      <InputField label="Nom complet" placeholder="Votre nom" />
      <InputField label="Numéro de téléphone" type="tel" placeholder="05..." />
      <SubmitButton text="Confirmer la demande d'essai" />
    </form>
  );
}

export function FinancingForm({ car, onSuccess }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/merci');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-text-gray text-sm mb-6">Obtenez une pré-approbation de crédit pour l'achat de ce véhicule <strong>({car?.priceDa})</strong>.</p>
      <InputField label="Apport initial (DA)" type="number" placeholder="Ex: 2000000" />
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-gray mb-1.5">Durée du crédit souhaitée</label>
        <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red">
          <option>12 mois</option>
          <option>24 mois</option>
          <option>36 mois</option>
          <option>48 mois</option>
          <option>60 mois</option>
        </select>
      </div>

      <InputField label="Salaire mensuel net estimé (DA)" type="number" placeholder="Ex: 150000" required={false} />
      <InputField label="Numéro de téléphone" type="tel" placeholder="05..." />
      
      <SubmitButton text="Simuler mon financement" />
    </form>
  );
}

export function ReservationForm({ car, onSuccess }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/merci');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-primary-red/10 border border-primary-red/30 rounded-xl p-4 mb-6">
        <h4 className="text-white font-bold mb-1">Verrouillez ce véhicule !</h4>
        <p className="text-sm text-text-gray">Une demande de réservation bloque le véhicule pendant 48h. Un conseiller vous contactera pour les modalités d'acompte.</p>
      </div>
      
      <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
        <div>
          <span className="block text-sm text-text-gray">Véhicule</span>
          <span className="font-bold text-white">{car?.brand} {car?.model}</span>
        </div>
        <div className="text-right">
          <span className="block text-sm text-text-gray">Prix total</span>
          <span className="font-black text-primary-red text-xl">{car?.priceDa}</span>
        </div>
      </div>

      <InputField label="Nom et Prénom" placeholder="Identité complète" />
      <InputField label="Numéro de téléphone" type="tel" placeholder="05..." />
      <InputField label="Numéro de carte d'identité / Permis" placeholder="Pour le dossier" required={false} />
      
      <SubmitButton text="Demander la réservation" />
    </form>
  );
}

export function TradeInForm({ onSuccess }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/merci');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-text-gray text-sm mb-6">Estimez la valeur de votre véhicule actuel en vue d'une reprise ou d'un échange.</p>
      
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Marque" placeholder="Ex: Peugeot" />
        <InputField label="Modèle" placeholder="Ex: 208" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Année" type="number" placeholder="2018" />
        <InputField label="Kilométrage" type="number" placeholder="85000" />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-gray mb-1.5">État général</label>
        <select className="w-full bg-bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-red">
          <option>Excellent (Aucun frais)</option>
          <option>Bon (Petits défauts esthétiques)</option>
          <option>Moyen (Frais mécaniques à prévoir)</option>
        </select>
      </div>

      <InputField label="Téléphone" type="tel" placeholder="05..." />
      
      <SubmitButton text="Demander l'estimation" />
    </form>
  );
}

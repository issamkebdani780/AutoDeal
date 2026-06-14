import { useParams } from 'react-router-dom';
import { showrooms } from '../mockData';
import ShowroomReviewsBlock from '../components/ShowroomReviewsBlock';
import ShowroomContactBlock from '../components/ShowroomContactBlock';
import ShowroomInventoryBlock from '../components/ShowroomInventoryBlock';

export default function ShowroomDetailPage() {
  const { id } = useParams();
  const showroom = showrooms.find(s => s.id === parseInt(id)) || showrooms[0];

  if (!showroom) {
    return <div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-bold">Showroom non trouvé</h1></div>;
  }

  return (
    <div className="pb-20">
      
      {/* HEADER / COVER (Mini-site hero) */}
      <div className="relative w-full h-[40vh] min-h-[300px]">
        <img 
          src={showroom.coverImage} 
          alt={`Couverture de ${showroom.name}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent"></div>
        
        {/* Contenu superposé */}
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transform translate-y-1/3 flex items-end gap-6">
          <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-3xl bg-surface border-4 border-bg-dark shadow-2xl flex items-center justify-center text-5xl font-black text-white z-10 overflow-hidden relative">
            {showroom.logo}
            {showroom.isPremium && (
               <div className="absolute inset-0 border-4 border-yellow-500/50 rounded-3xl pointer-events-none"></div>
            )}
          </div>
          <div className="pb-4 md:pb-8 z-10">
            {showroom.isPremium && (
               <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest rounded-full mb-2">Partenaire Premium</span>
            )}
            <h1 className={`text-3xl md:text-5xl font-black ${showroom.isPremium ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : 'text-white'}`}>
              {showroom.name}
            </h1>
            <p className="text-text-gray mt-1 text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {showroom.city}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-16">
        
        {/* BLOC : VÉHICULES DU SHOWROOM */}
        <section id="inventory">
          <ShowroomInventoryBlock showroom={showroom} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           {/* BLOC : AVIS SHOWROOM */}
          <section id="reviews">
            <ShowroomReviewsBlock showroom={showroom} />
          </section>

           {/* BLOC : CONTACT SHOWROOM */}
          <section id="contact">
            <ShowroomContactBlock showroom={showroom} />
          </section>
        </div>

      </div>
    </div>
  );
}

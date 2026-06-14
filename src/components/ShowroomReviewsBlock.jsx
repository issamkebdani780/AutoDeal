export default function ShowroomReviewsBlock({ showroom }) {
  if (!showroom || !showroom.reviews) return null;

  return (
    <div className="bg-surface border border-white/5 rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Avis Clients</h3>
      
      <div className="flex flex-col md:flex-row gap-12 mb-10">
        {/* Résumé des notes */}
        <div className="md:w-1/3 flex flex-col items-center justify-center p-6 bg-bg-dark rounded-2xl border border-white/5">
          <span className="text-5xl font-black text-white mb-2">{showroom.rating}</span>
          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-6 h-6 ${i < Math.floor(showroom.rating) ? 'text-yellow-400' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
          <span className="text-sm text-text-gray">Sur la base de {showroom.reviewCount} avis</span>
          
          <button className="mt-6 w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-xl transition-colors text-sm">
            Laisser un avis
          </button>
        </div>

        {/* Fiabilité */}
        <div className="md:w-2/3 flex flex-col justify-center space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white">Véhicules conformes</span>
              <span className="text-text-gray">98%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-primary-red h-2 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white">Service après-vente</span>
              <span className="text-text-gray">92%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-primary-red h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-white">Rapidité de réponse</span>
              <span className="text-text-gray">95%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-primary-red h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des avis */}
      <div className="space-y-4">
        {showroom.reviews.map(review => (
          <div key={review.id} className="p-6 bg-white/5 rounded-2xl border border-white/5">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-red/20 text-primary-red flex items-center justify-center font-bold">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.author}</h4>
                  <span className="text-xs text-text-gray">{review.date}</span>
                </div>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
            <p className="text-text-gray text-sm leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

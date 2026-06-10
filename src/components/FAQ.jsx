export default function FAQ({ faqData, activeFaqIndex, setActiveFaqIndex }) {
  return (
    <section className="py-24 bg-black/30 border-y border-glass">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">FAQ</h2>
          <p className="text-3xl font-extrabold text-white">Questions Fréquentes</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-glass bg-glass rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-4">{faq.question}</span>
                  <span className={`p-1 rounded-lg bg-white/5 text-neon-pink transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="m19 9-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div className={`transition-all duration-300 ${isOpen ? 'max-h-60 border-t border-white/5' : 'max-h-0'} overflow-hidden`}>
                  <p className="p-6 text-xs sm:text-sm text-white/60 leading-relaxed bg-black/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

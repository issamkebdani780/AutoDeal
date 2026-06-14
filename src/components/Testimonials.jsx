export default function Testimonials({ testimonials, testimonialIndex, setTestimonialIndex }) {
  return (
    <section className="py-24 bg-black/30 border-y border-glass">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-pink text-glow mb-3">Témoignages</h2>
          <p className="text-3xl font-extrabold text-white">Ce qu'en disent nos clients</p>
        </div>

        <div className="relative overflow-hidden p-8 sm:p-12 border border-glass bg-glass rounded-3xl min-h-[250px]">
          {/* Carousel Item */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-neon-pink/15 border border-neon-pink/30 flex items-center justify-center text-neon-pink font-bold text-xl mb-4">
              {testimonials[testimonialIndex].avatar}
            </div>

            {/* Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-neon-pink fill-neon-pink" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>

            <p className="text-sm sm:text-base text-white/80 italic leading-relaxed max-w-2xl font-medium">
              "{testimonials[testimonialIndex].comment}"
            </p>

            <h3 className="text-sm font-bold text-white mt-6">{testimonials[testimonialIndex].name}</h3>
            <p className="text-2xs uppercase tracking-wider text-neon-pink mt-1">{testimonials[testimonialIndex].role}</p>
          </div>

          {/* Nav controls (Desktop) */}
          <button
            onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-glass bg-black/50 text-white/70 hover:border-neon-pink hover:text-white cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m15 19-7-7 7-7"/></svg>
          </button>
          <button
            onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
            className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full border border-glass bg-black/50 text-white/70 hover:border-neon-pink hover:text-white cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>
          </button>

          {/* Carousel Pagination & Mobile Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="sm:hidden p-2 rounded-full border border-glass bg-black/50 text-white/70 hover:border-neon-pink hover:text-white cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m15 19-7-7 7-7"/></svg>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === testimonialIndex ? 'bg-neon-pink w-6' : 'bg-white/20'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              className="sm:hidden p-2 rounded-full border border-glass bg-black/50 text-white/70 hover:border-neon-pink hover:text-white cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

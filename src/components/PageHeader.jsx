export default function PageHeader({ title, subtitle }) {
  return (
    <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden border-b border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bg-dark opacity-90 mix-blend-multiply" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-primary-red/10 to-transparent blur-3xl pointer-events-none" />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-text-gray font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

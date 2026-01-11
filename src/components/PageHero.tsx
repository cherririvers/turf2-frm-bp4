interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 min-h-[400px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/70 to-charcoal-950/90" />
      </div>

      <div className="relative z-10 section-container text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-charcoal-200 max-w-2xl mx-auto animate-fade-in">
          {subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ChevronDown, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-900/70 to-charcoal-950/90" />
      </div>

      <div className="relative z-10 section-container text-center pt-20">
        <div className="inline-flex items-center gap-2 bg-turf-600/20 border border-turf-500/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Clock size={16} className="text-turf-400" />
          <span className="text-turf-100 text-sm font-medium">Open 5 AM - 2 AM Daily</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          Sports - Imperative
          <br />
          <span className="text-gradient">To A Happy Life</span>
        </h1>

        <p className="text-lg md:text-xl text-charcoal-200 max-w-2xl mx-auto mb-8 animate-slide-up">
          Premium artificial turf grounds for Football, Box Cricket, Pickleball & Snooker.
          Play under floodlights, any time of day or night.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Book Your Slot
          </Link>
          <Link to="/sports" className="btn-secondary text-lg px-8 py-4">
            Explore Sports
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-charcoal-300 animate-fade-in">
          <MapPin size={18} className="text-turf-400" />
          <span>Shafipur Road, Sector 150, Near ATS Pristine, Noida</span>
        </div>
      </div>

      <a
        href="#sports"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-turf-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

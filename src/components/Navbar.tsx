import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sports', href: '/sports' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Corporate', href: '/corporate' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-turf-600 flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">360</span>
            </div>
            <span className="font-display font-bold text-xl text-white">
              Turf <span className="text-turf-400">360</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-turf-400'
                    : 'text-white/90 hover:text-turf-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918076714176"
              className="flex items-center gap-2 text-white/90 hover:text-turf-400 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">Call Now</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900/95 backdrop-blur-md animate-slide-down">
          <div className="section-container py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block font-medium py-2 transition-colors ${
                  location.pathname === link.href
                    ? 'text-turf-400'
                    : 'text-white/90 hover:text-turf-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary w-full text-center block">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

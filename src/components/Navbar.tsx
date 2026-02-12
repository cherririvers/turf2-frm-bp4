import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const mainNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sports', href: '/sports' },
  { name: 'Cafe', href: '/cafe' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const moreLinks = [
  { name: 'Corporate', href: '/corporate' },
  { name: 'Events', href: '/events' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
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
    setIsMoreOpen(false);
  }, [location]);

  const isLinkActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 lg:gap-3">
            <img
              src="/logo-dark.jpeg"
              alt="Turf 360"
              className="h-10 lg:h-12 w-auto"
            />
            <span className="font-display font-bold text-lg lg:text-xl text-white">
              The Turf <span className="text-turf-400">360</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors ${
                  isLinkActive(link.href)
                    ? 'text-turf-400'
                    : 'text-white/90 hover:text-turf-400'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`flex items-center gap-1 font-medium transition-colors ${
                  moreLinks.some((link) => isLinkActive(link.href))
                    ? 'text-turf-400'
                    : 'text-white/90 hover:text-turf-400'
                }`}
              >
                More
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 bg-charcoal-800 rounded-xl shadow-xl py-2 min-w-[160px] animate-fade-in">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`block px-4 py-2 font-medium transition-colors ${
                        isLinkActive(link.href)
                          ? 'text-turf-400 bg-charcoal-700'
                          : 'text-white/90 hover:text-turf-400 hover:bg-charcoal-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900/95 backdrop-blur-md animate-slide-down max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="section-container py-4 space-y-2">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block font-medium py-3 px-4 rounded-xl transition-colors ${
                  isLinkActive(link.href)
                    ? 'text-turf-400 bg-charcoal-800'
                    : 'text-white/90 hover:text-turf-400 active:bg-charcoal-800'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-charcoal-700 pt-2 mt-2">
              <p className="text-white/50 text-sm px-4 py-2">More</p>
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`block font-medium py-3 px-4 rounded-xl transition-colors ${
                    isLinkActive(link.href)
                      ? 'text-turf-400 bg-charcoal-800'
                      : 'text-white/90 hover:text-turf-400 active:bg-charcoal-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="tel:+918076714176"
                className="flex items-center justify-center gap-2 text-white bg-charcoal-800 py-3 rounded-xl font-medium"
              >
                <Phone size={18} />
                <span>+91 80767 14176</span>
              </a>
              <Link
                to="/contact"
                className="btn-primary w-full text-center block"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sports', href: '/sports' },
  { name: 'Cafe', href: '/cafe' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Corporate', href: '/corporate' },
  { name: 'Events', href: '/events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

const sports = [
  { name: 'Football / Futsal', href: '/sports#football' },
  { name: 'Box Cricket', href: '/sports#cricket' },
  { name: 'Pickleball', href: '/sports#pickleball' },
  { name: 'Snooker', href: '/sports#snooker' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-white pb-20 lg:pb-0">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="block mb-6">
              <img
                src="/logo-dark.jpeg"
                alt="Turf 360"
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-charcoal-400 mb-6 leading-relaxed">
              Premium sports facility in Noida offering Football, Box Cricket, Pickleball, and
              Snooker on artificial turf with floodlights.
            </p>
            <a
              href="https://www.instagram.com/turf__360/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal-400 hover:text-turf-400 transition-colors"
            >
              <Instagram size={20} />
              <span>@turf__360</span>
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-charcoal-400 hover:text-turf-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Sports</h4>
            <ul className="space-y-3">
              {sports.map((sport) => (
                <li key={sport.name}>
                  <Link
                    to={sport.href}
                    className="text-charcoal-400 hover:text-turf-400 transition-colors"
                  >
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-turf-500 mt-1 flex-shrink-0" />
                <span className="text-charcoal-400">
                  Shafipur Road, Sector 150, Near ATS Pristine, Noida
                </span>
              </li>
              <li>
                <a
                  href="tel:+918076714176"
                  className="flex items-center gap-3 text-charcoal-400 hover:text-turf-400 transition-colors"
                >
                  <Phone size={18} className="text-turf-500" />
                  +91-8076714176
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@theturf360.com"
                  className="flex items-center gap-3 text-charcoal-400 hover:text-turf-400 transition-colors"
                >
                  <Mail size={18} className="text-turf-500" />
                  support@theturf360.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Turf 360. All rights reserved.
            </p>
            <p className="text-charcoal-600 text-sm italic">
              Thank You For Playing With Us
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-charcoal-800 hover:bg-turf-600 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

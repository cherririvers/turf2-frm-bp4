import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Shield,
  Calendar,
  Smartphone,
  TreePine,
  GraduationCap,
  Trophy,
  Coffee,
  Droplets,
  Bath,
  Sun,
  Moon,
  Clock,
  CheckCircle,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const amenities = [
  {
    icon: Lightbulb,
    title: 'Professional Floodlights',
    description:
      'Our state-of-the-art floodlight system ensures perfect visibility for day and night play. Never let darkness stop your game.',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Safe Environment for Women',
    description:
      'We prioritize safety with dedicated facilities, proper lighting, and a secure environment where women can play with confidence.',
    highlight: true,
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description:
      'Book slots that fit your schedule. With 21 hours of daily operation from 5 AM to 2 AM, there\'s always time to play.',
    highlight: false,
  },
  {
    icon: Smartphone,
    title: 'Easy Booking System',
    description:
      'Quick and hassle-free booking via phone call or direct message. Get instant confirmation for your preferred time slots.',
    highlight: false,
  },
  {
    icon: TreePine,
    title: 'Picturesque Setting',
    description:
      'Enjoy sports in beautiful natural surroundings. Our location offers a refreshing escape from urban congestion.',
    highlight: true,
  },
  {
    icon: GraduationCap,
    title: 'Professional Coaching',
    description:
      'Learn from experienced coaches who can help improve your game. Available for football, cricket, and pickleball.',
    highlight: false,
  },
  {
    icon: Trophy,
    title: 'Custom Tournaments',
    description:
      'Organize your own tournaments with our full support. We handle logistics, scoring, and refreshments.',
    highlight: false,
  },
  {
    icon: Coffee,
    title: 'On-Site Cafe',
    description:
      'Refuel after your game at our on-site food cart. Enjoy refreshments and snacks in a relaxed atmosphere.',
    highlight: false,
  },
  {
    icon: Droplets,
    title: 'Clean Drinking Water',
    description:
      'Stay hydrated with clean drinking water available throughout the facility. RO purified for your safety.',
    highlight: false,
  },
  {
    icon: Bath,
    title: 'Modern Washrooms',
    description:
      'Clean, well-maintained washroom facilities with separate sections for men and women.',
    highlight: false,
  },
];

const timingFeatures = [
  { icon: Sun, time: '5:00 AM', label: 'Early Morning Start', desc: 'Beat the heat with early sessions' },
  { icon: Clock, time: '21 Hours', label: 'Daily Operation', desc: 'Maximum playing flexibility' },
  { icon: Moon, time: '2:00 AM', label: 'Late Night Close', desc: 'Perfect for night owls' },
];

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        title="Premium Amenities"
        subtitle="Everything you need for the perfect sports experience, all in one place"
        backgroundImage="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 card-hover group ${
                  amenity.highlight
                    ? 'bg-gradient-to-br from-turf-50 to-turf-100 border-2 border-turf-200'
                    : 'bg-charcoal-50'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    amenity.highlight ? 'bg-turf-600' : 'bg-turf-100 group-hover:bg-turf-600'
                  }`}
                >
                  <amenity.icon
                    size={32}
                    className={`transition-colors duration-300 ${
                      amenity.highlight
                        ? 'text-white'
                        : 'text-turf-600 group-hover:text-white'
                    }`}
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal-900 text-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Operating <span className="text-gradient-gold">Hours</span>
            </h2>
            <p className="text-charcoal-300 text-lg max-w-2xl mx-auto">
              We're open 21 hours a day to give you maximum flexibility for your games
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {timingFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center bg-charcoal-800/50 rounded-2xl p-8 border border-charcoal-700"
              >
                <div className="w-16 h-16 rounded-full bg-turf-600 flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} />
                </div>
                <div className="text-3xl font-display font-bold text-turf-400 mb-2">
                  {feature.time}
                </div>
                <h3 className="font-semibold text-lg mb-1">{feature.label}</h3>
                <p className="text-charcoal-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-turf-600 to-turf-700 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  What Makes Us Unique
                </h3>
                <ul className="space-y-3">
                  {[
                    'Premium artificial turf maintained daily',
                    'All-weather playing conditions',
                    'Professional-grade equipment',
                    'Ample parking space',
                    'Easy accessibility from Noida Expressway',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-turf-50">
                      <CheckCircle size={20} className="text-gold-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <Link to="/contact" className="btn-gold text-lg px-8 py-4">
                  Book Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

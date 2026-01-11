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
} from 'lucide-react';

const amenities = [
  {
    icon: Lightbulb,
    title: 'Floodlights',
    description: 'Play day or night with our professional floodlight setup',
  },
  {
    icon: Shield,
    title: 'Safe for Women',
    description: 'Secure environment with dedicated facilities for women',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book slots from 5 AM to 2 AM to fit your schedule',
  },
  {
    icon: Smartphone,
    title: 'Easy Booking',
    description: 'Quick and hassle-free booking via phone or DM',
  },
  {
    icon: TreePine,
    title: 'Picturesque Setting',
    description: 'Beautiful natural surroundings for a refreshing experience',
  },
  {
    icon: GraduationCap,
    title: 'Coaching Available',
    description: 'Professional coaches to help improve your game',
  },
  {
    icon: Trophy,
    title: 'Custom Tournaments',
    description: 'Organize your own tournaments with our support',
  },
  {
    icon: Coffee,
    title: 'On-Site Cafe',
    description: 'Refreshments and food cart for post-game enjoyment',
  },
  {
    icon: Droplets,
    title: 'Drinking Water',
    description: 'Clean drinking water available throughout',
  },
  {
    icon: Bath,
    title: 'Washrooms',
    description: 'Clean and well-maintained washroom facilities',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-charcoal-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Premium <span className="text-gradient">Amenities</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need for the perfect sports experience, all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-turf-100 flex items-center justify-center mb-4 group-hover:bg-turf-600 transition-colors duration-300">
                <amenity.icon
                  size={28}
                  className="text-turf-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-charcoal-900 mb-2">
                {amenity.title}
              </h3>
              <p className="text-sm text-charcoal-500">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

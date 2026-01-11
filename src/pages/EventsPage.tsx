import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, ChevronRight, Trophy, PartyPopper, Briefcase } from 'lucide-react';
import PageHero from '../components/PageHero';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  description: string;
  image: string;
  category: 'tournament' | 'corporate' | 'celebration';
  highlights: string[];
};

const pastEvents: Event[] = [
  {
    id: 1,
    title: 'Inter-Corporate Cricket Championship 2024',
    date: 'December 15, 2024',
    time: '9:00 AM - 6:00 PM',
    location: 'Cricket Arena',
    attendees: '120+ participants',
    description: 'Our biggest corporate cricket tournament of the year brought together 12 teams from leading companies across Noida. The day was filled with intense matches, incredible sportsmanship, and unforgettable moments.',
    image: '/gallery/events1.jpeg',
    category: 'tournament',
    highlights: [
      '12 corporate teams competed',
      'Professional umpires and scoring',
      'Trophies and prizes worth Rs 50,000',
      'Live commentary and match streaming'
    ]
  },
  {
    id: 2,
    title: 'TechCorp Annual Team Building Day',
    date: 'November 28, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Full Facility',
    attendees: '80 employees',
    description: 'TechCorp chose Turf 360 for their annual team building event. The day included cricket matches, pickleball tournaments, and ended with a celebration at our cafe lounge.',
    image: '/gallery/events2.jpeg',
    category: 'corporate',
    highlights: [
      'Custom team jerseys provided',
      'Professional event coordination',
      'Catered lunch and refreshments',
      'Award ceremony with custom trophies'
    ]
  },
  {
    id: 3,
    title: 'Weekend Warriors Pickleball Tournament',
    date: 'November 10, 2024',
    time: '8:00 AM - 2:00 PM',
    location: 'Pickleball Courts',
    attendees: '48 players',
    description: 'Our monthly pickleball tournament saw record participation with players competing in singles and doubles categories. The event showcased the growing popularity of pickleball in our community.',
    image: '/gallery/events3.jpeg',
    category: 'tournament',
    highlights: [
      'Singles and doubles categories',
      'Age-based divisions',
      'Professional coaching tips session',
      'Equipment showcase by sponsors'
    ]
  },
  {
    id: 4,
    title: 'Birthday Celebration - Raj\'s 30th',
    date: 'October 22, 2024',
    time: '4:00 PM - 9:00 PM',
    location: 'Private Turf + Cafe',
    attendees: '35 guests',
    description: 'A milestone birthday celebration that combined sports and party perfectly. Raj and his friends enjoyed a friendly football match followed by a celebration at our cafe with customized decorations.',
    image: '/gallery/events4.jpeg',
    category: 'celebration',
    highlights: [
      'Private turf booking',
      'Customized decorations',
      'Catering and cake arrangement',
      'Photo booth setup'
    ]
  },
  {
    id: 5,
    title: 'Startup League Finals',
    date: 'October 8, 2024',
    time: '11:00 AM - 7:00 PM',
    location: 'Cricket Arena',
    attendees: '200+ spectators',
    description: 'The culmination of our 8-week startup cricket league. Four teams battled it out in the semi-finals and finals, with InnovateTech emerging as champions after an thrilling super over finish.',
    image: '/gallery/events5.jpeg',
    category: 'tournament',
    highlights: [
      '8 weeks of league matches',
      'Professional commentary',
      'Live scoreboard display',
      'Championship trophy presentation'
    ]
  },
  {
    id: 6,
    title: 'GlobalFinance Employee Sports Day',
    date: 'September 25, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Full Facility',
    attendees: '150 employees',
    description: 'A full day corporate event featuring multiple sports activities across all our facilities. Teams competed in cricket, football, pickleball, and snooker for the overall championship trophy.',
    image: '/gallery/events6.jpeg',
    category: 'corporate',
    highlights: [
      'Multi-sport competition format',
      'Team-wise point system',
      'Executive participation',
      'Grand prize ceremony'
    ]
  },
  {
    id: 7,
    title: 'Friends Reunion Football Match',
    date: 'September 14, 2024',
    time: '6:00 PM - 10:00 PM',
    location: 'Football Turf',
    attendees: '22 players',
    description: 'A group of college friends reunited after 10 years for a nostalgic football match. The evening was filled with competitive spirit, laughter, and memories relived on our premium turf.',
    image: '/gallery/events7.jpeg',
    category: 'celebration',
    highlights: [
      'Night match under floodlights',
      'Custom team photos',
      'Post-match dinner at cafe',
      'Video highlights created'
    ]
  }
];

const categoryIcons = {
  tournament: Trophy,
  corporate: Briefcase,
  celebration: PartyPopper
};

const categoryLabels = {
  tournament: 'Tournament',
  corporate: 'Corporate Event',
  celebration: 'Celebration'
};

const categoryColors = {
  tournament: 'bg-amber-100 text-amber-700',
  corporate: 'bg-blue-100 text-blue-700',
  celebration: 'bg-rose-100 text-rose-700'
};

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const filteredEvents = selectedCategory === 'all'
    ? pastEvents
    : pastEvents.filter(event => event.category === selectedCategory);

  return (
    <>
      <PageHero
        title="Events at Turf 360"
        subtitle="Relive the excitement - tournaments, celebrations, and corporate gatherings"
        backgroundImage="/gallery/events1.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Past <span className="text-gradient">Events</span>
            </h2>
            <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
              From thrilling tournaments to memorable celebrations, see what makes Turf 360 the preferred venue for events in Noida.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'tournament', 'corporate', 'celebration'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-turf-600 text-white shadow-lg'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {category === 'all' ? 'All Events' : categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </div>

          <div className="space-y-8">
            {filteredEvents.map((event) => {
              const Icon = categoryIcons[event.category];
              const isExpanded = expandedEvent === event.id;

              return (
                <div
                  key={event.id}
                  className="bg-charcoal-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative h-64 md:h-auto">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-4 left-4 ${categoryColors[event.category]} px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5`}>
                        <Icon size={14} />
                        {categoryLabels[event.category]}
                      </div>
                    </div>

                    <div className="md:col-span-3 p-6 md:p-8">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal-900 mb-3">
                        {event.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-charcoal-600 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} className="text-turf-600" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={16} className="text-turf-600" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-turf-600" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users size={16} className="text-turf-600" />
                          {event.attendees}
                        </div>
                      </div>

                      <p className="text-charcoal-700 mb-4">
                        {event.description}
                      </p>

                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-charcoal-200 animate-fade-in">
                          <h4 className="font-semibold text-charcoal-900 mb-3">Event Highlights</h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {event.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-charcoal-600">
                                <ChevronRight size={16} className="text-turf-600 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button
                        onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                        className="mt-4 text-turf-600 font-medium hover:text-turf-700 transition-colors flex items-center gap-1"
                      >
                        {isExpanded ? 'Show Less' : 'View Highlights'}
                        <ChevronRight size={18} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-turf-600 to-turf-700">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Host Your Event at Turf 360
              </h2>
              <p className="text-turf-100 text-lg mb-8">
                Whether it's a corporate team building, birthday celebration, tournament, or reunion - our facilities and team are ready to make your event memorable.
              </p>
              <div className="space-y-4">
                {[
                  'Dedicated event coordinator',
                  'Customizable packages',
                  'Catering services available',
                  'Professional photography options'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <ChevronRight size={14} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Ready to Plan Your Event?
              </h3>
              <p className="text-turf-100 mb-6">
                Contact our events team for personalized packages and availability.
              </p>
              <Link to="/contact" className="btn-gold text-lg px-8 py-4 inline-block">
                Get in Touch
              </Link>
              <p className="text-turf-200 text-sm mt-4">
                Or call us at <a href="tel:+918076714176" className="text-white hover:underline">+91 80767 14176</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

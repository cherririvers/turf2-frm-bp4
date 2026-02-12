import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ChevronRight, Trophy, Phone, Users, IndianRupee, ImageIcon } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useSEO, seoConfig } from '../utils/seo';

type EventStatus = 'upcoming' | 'past';

interface TournamentEvent {
  id: string;
  title: string;
  subtitle?: string;
  status: EventStatus;
  date: string;
  time?: string;
  location: string;
  entryFee: string;
  prizePool: string;
  description: string;
  highlights: string[];
  contacts?: { name: string; phone: string }[];
  images: string[];
}

const events: TournamentEvent[] = [
  {
    id: 'box-cricket-2026-season-2',
    title: 'Box Cricket Tournament 2026',
    subtitle: 'Season 2',
    status: 'upcoming',
    date: '25-26 January 2026',
    location: 'Turf 360, Sector 150, Noida',
    entryFee: '4,900',
    prizePool: '1,00,000',
    description: 'The highly anticipated Season 2 of the Turf 360 Box Cricket Tournament is here! After the massive success of Season 1, we\'re back with bigger prizes and more excitement. Limited slots available - register now to secure your team\'s spot in this premium cricket tournament.',
    highlights: [
      'Prize money up to Rs 1,00,000',
      '2-day tournament format',
      'Limited slots available',
      'Professional umpiring',
      'Live scoring and updates',
      'Refreshments included'
    ],
    contacts: [
      { name: 'Yash', phone: '7011155069' },
      { name: 'Sonu', phone: '7835939361' }
    ],
    images: ['/events/event-upcoming-poster-2026-cricket-tournament.jpg']
  },
  {
    id: 'rv-cricket-championship-season-2',
    title: 'RV Cricket (Box) Championship',
    subtitle: 'Season 2 - Presented by Sports Development Federation & GameRun',
    status: 'past',
    date: 'Sunday, 21st December 2025',
    location: 'Turf 360, Sector 150, Noida, Greater Noida, UP - 201302',
    entryFee: '3,000 - 3,500',
    prizePool: '24,000',
    description: 'Season 2 of the RV Cricket Championship brought back the excitement with even more competitive action! Organized by Sports Development Federation and GameRun, this tournament featured intense box cricket matches with live YouTube streaming for fans to watch from anywhere.',
    highlights: [
      'Winner: Rs 16,000 | Runner-up: Rs 8,000',
      'Early bird entry: Rs 3,000 (before 14th Dec)',
      'Regular entry: Rs 3,500 (after 14th Dec)',
      'Live YouTube streaming of matches',
      'Professional tournament coordination',
      'Exciting cricket action throughout the day'
    ],
    contacts: [
      { name: 'Akash', phone: '8860182600' }
    ],
    images: ['/events/rvcc-season2.jpg']
  },
  {
    id: 'rv-cricket-championship-2025',
    title: 'RV Cricket (Box) Championship',
    subtitle: 'Season 1 - Presented by Sports Development Federation',
    status: 'past',
    date: 'Sunday, 9th November 2025',
    location: 'Turf 360, Sector 150, Noida',
    entryFee: '3,500',
    prizePool: '21,000',
    description: 'The RV Cricket Championship 2025 welcomes all cricket lovers - no age limits, just pure passion! Join us for an exciting day of competitive box cricket action. Each team has 7 players (6 on field + 1 sub). Players receive an exclusive T-shirt and refreshments to stay fueled through the games.',
    highlights: [
      'Winner: Rs 21,000 | Runner-up: Rs 11,000 (16 teams)',
      'Winner: Rs 16,000 | Runner-up: Rs 8,000 (12 teams)',
      'Winner: Rs 12,000 | Runner-up: Rs 7,000 (8 teams)',
      '7 players per team (6 + 1 substitute)',
      'Exclusive T-shirt for all players',
      'Refreshments included',
      'Last date of registration: 3rd November 2025'
    ],
    contacts: [
      { name: 'Contact', phone: '8860182600' }
    ],
    images: ['/events/evet-rvcc.jpg', '/events/rvcc2025.jpg']
  },
  {
    id: 'box-cricket-season-1',
    title: 'Box Cricket Tournament Season 1',
    subtitle: 'Sponsored by Lifelong',
    status: 'past',
    date: '15th August 2025',
    time: '11:00 AM Onwards',
    location: 'Turf 360, Sector 150, Noida',
    entryFee: '3,500',
    prizePool: '22,000',
    description: 'Our inaugural Box Cricket Tournament was a massive success! Held on Independence Day 2025, teams from across Noida competed in thrilling matches throughout the day. The tournament showcased incredible talent, sportsmanship, and the true spirit of cricket.',
    highlights: [
      'Independence Day special tournament',
      'Prize pool worth Rs 22,000',
      'Sponsored by Lifelong',
      'Multiple teams participated',
      'Professional match coordination',
      'Memorable day of cricket action'
    ],
    images: ['/events/event_turf360-box-cricket-tournament.jpg', '/events/event-turf360-box-cricket-tournament.jpg']
  }
];

function EventCard({ event, isReversed }: { event: TournamentEvent; isReversed: boolean }) {
  const [showDetails, setShowDetails] = useState(false);
  const isUpcoming = event.status === 'upcoming';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-charcoal-100">
      <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:flex lg:flex-row-reverse' : ''}`}>
        <div className="relative bg-charcoal-100 min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden">
          {event.images.length > 0 ? (
            <div className={`w-full h-full p-3 ${
              event.images.length === 1
                ? 'flex'
                : event.images.length === 2
                  ? 'grid grid-cols-2 gap-2'
                  : 'grid grid-cols-2 gap-2'
            }`}>
              {event.images.slice(0, 4).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${event.title} photo ${idx + 1}`}
                  className={`object-cover rounded-lg ${
                    event.images.length === 1
                      ? 'w-full h-full object-contain bg-charcoal-200'
                      : 'w-full h-full'
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="text-center p-8">
              <ImageIcon size={64} className="mx-auto text-charcoal-300 mb-4" />
              <p className="text-charcoal-400 font-medium">Event photos coming soon</p>
            </div>
          )}
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold ${
            isUpcoming
              ? 'bg-turf-600 text-white'
              : 'bg-charcoal-700 text-white'
          }`}>
            {isUpcoming ? 'Upcoming' : 'Past Event'}
          </div>
        </div>

        <div className="p-6 lg:p-8">
          {event.subtitle && (
            <p className="text-turf-600 font-medium text-sm mb-2">{event.subtitle}</p>
          )}
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal-900 mb-4">
            {event.title}
          </h3>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 text-charcoal-600">
              <Calendar size={18} className="text-turf-600 flex-shrink-0" />
              <span className="text-sm">{event.date}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-2 text-charcoal-600">
                <Clock size={18} className="text-turf-600 flex-shrink-0" />
                <span className="text-sm">{event.time}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-charcoal-600">
              <MapPin size={18} className="text-turf-600 flex-shrink-0" />
              <span className="text-sm">{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-600">
              <Users size={18} className="text-turf-600 flex-shrink-0" />
              <span className="text-sm">Entry: Rs {event.entryFee}/team</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="text-amber-600" size={28} />
              <div>
                <p className="text-xs text-amber-700 font-medium uppercase tracking-wide">Prize Pool</p>
                <p className="text-2xl font-bold text-amber-800 flex items-center">
                  <IndianRupee size={20} className="mr-0.5" />
                  {event.prizePool}
                </p>
              </div>
            </div>
          </div>

          <p className="text-charcoal-600 mb-4 leading-relaxed">
            {event.description}
          </p>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-turf-600 font-medium hover:text-turf-700 transition-colors flex items-center gap-1 mb-4"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
            <ChevronRight size={18} className={`transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </button>

          {showDetails && (
            <div className="space-y-4 animate-fade-in">
              <div className="border-t border-charcoal-100 pt-4">
                <h4 className="font-semibold text-charcoal-900 mb-3">Event Highlights</h4>
                <ul className="space-y-2">
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-charcoal-600 text-sm">
                      <ChevronRight size={16} className="text-turf-600 flex-shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {event.contacts && event.contacts.length > 0 && (
                <div className="border-t border-charcoal-100 pt-4">
                  <h4 className="font-semibold text-charcoal-900 mb-3">
                    {isUpcoming ? 'Register Now' : 'Contact'}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {event.contacts.map((contact, idx) => (
                      <a
                        key={idx}
                        href={`tel:+91${contact.phone}`}
                        className="inline-flex items-center gap-2 bg-turf-50 hover:bg-turf-100 text-turf-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <Phone size={16} />
                        <span className="font-medium">{contact.name}: {contact.phone}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  useSEO(seoConfig.events);

  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'past');

  return (
    <>
      <PageHero
        title="Events at Turf 360"
        subtitle="Tournaments, Championships, and Sporting Excellence"
        backgroundImage="/gallery/events1.jpeg"
      />

      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-turf-50 to-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <div className="inline-block bg-turf-100 text-turf-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Mark Your Calendar
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                Upcoming <span className="text-gradient">Events</span>
              </h2>
              <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
                Don't miss out on these exciting tournaments. Register now to secure your spot!
              </p>
            </div>

            <div className="space-y-8">
              {upcomingEvents.map((event, idx) => (
                <EventCard key={event.id} event={event} isReversed={idx % 2 !== 0} />
              ))}
            </div>
          </div>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="py-16 bg-charcoal-50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                Past <span className="text-gradient">Events</span>
              </h2>
              <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
                Relive the excitement from our previous tournaments and championships.
              </p>
            </div>

            <div className="space-y-8">
              {pastEvents.map((event, idx) => (
                <EventCard key={event.id} event={event} isReversed={idx % 2 !== 0} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-br from-turf-600 to-turf-700">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Host Your Tournament at Turf 360
              </h2>
              <p className="text-turf-100 text-lg mb-8">
                Looking to organize a cricket tournament, corporate league, or sports event? Our facilities and team are ready to make your event a success.
              </p>
              <div className="space-y-4">
                {[
                  'Professional turf and facilities',
                  'Event coordination support',
                  'Customizable tournament formats',
                  'Catering and refreshments available'
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
                Want to Organize an Event?
              </h3>
              <p className="text-turf-100 mb-6">
                Contact us to discuss your requirements and get a customized quote.
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

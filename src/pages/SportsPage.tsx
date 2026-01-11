import { Link } from 'react-router-dom';
import { ArrowRight, Users, Timer, Trophy, Target, Dumbbell, Award } from 'lucide-react';
import PageHero from '../components/PageHero';

const sports = [
  {
    id: 'cricket',
    name: 'Box Cricket',
    image: '/cricket.jpeg',
    description:
      'Box cricket emerged from India\'s street and gully cricket culture, driven by increasing urbanization and the scarcity of large playing fields. From makeshift beginnings to structured formats, box cricket has become a beloved urban sport.',
    longDescription:
      'Box cricket is a popular, fast-paced version of cricket played in enclosed spaces like indoor courts or netted outdoor areas. It\'s ideal for areas with limited space as the smaller, contained format uses modified rules and soft balls, making it accessible and fun for casual players.',
    features: [
      { icon: Users, text: '6-8 players per team' },
      { icon: Timer, text: 'Quick 20-minute matches' },
      { icon: Award, text: 'League tournaments available' },
      { icon: Target, text: 'Enclosed netted area' },
    ],
  },
  {
    id: 'football',
    name: 'Football / Futsal',
    image: '/football.jpg',
    description:
      'The history of football is a long one, with ancient ball games played in cultures like China, Greece, and Rome. Modern football was codified in England with standardized rules, and the sport was introduced to India in the 19th century.',
    longDescription:
      'Experience the thrill of football on our premium artificial turf. At Turf 360, we help budding footballers with professional coaches and assistance to take up football as a career. Our facility accommodates both 5-a-side and 7-a-side matches, perfect for casual games or competitive tournaments.',
    features: [
      { icon: Users, text: '5-a-side & 7-a-side formats' },
      { icon: Trophy, text: 'Tournament-ready facilities' },
      { icon: Dumbbell, text: 'Professional coaching available' },
      { icon: Target, text: 'Career guidance for aspiring players' },
    ],
  },
  {
    id: 'pickleball',
    name: 'Pickleball',
    image: '/pickleball.jpeg',
    description:
      'Pickleball originating from its humble roots in 1965 on Bainbridge Island, Washington came to Indian soil around 2008. The sport is on the increase in India because of shifting recreational patterns.',
    longDescription:
      'As cities become smaller in size, individuals are seeking sports that do not demand large courts. Pickleball involves racket skills, hand-eye coordination, and strategic gameplay. While perfecting the shots, the true essence lies in the camaraderie it fosters. It welcomes everyone, regardless of age.',
    features: [
      { icon: Users, text: 'All ages welcome' },
      { icon: Timer, text: 'Easy to learn, fun to master' },
      { icon: Dumbbell, text: 'Great full-body workout' },
      { icon: Award, text: 'Growing pickleball hub' },
    ],
  },
  {
    id: 'snooker',
    name: 'Snooker',
    image: '/snooker.webp',
    description:
      'Snooker originated in the 19th century in colonial India, where British soldiers stationed in the country sought ways to pass the time. The game evolved from traditional billiards and other cue sports.',
    longDescription:
      'Snooker skills include fundamental techniques like proper stance, grip, and a smooth, straight cue action with follow-through. Advanced skills involve exceptional cue ball control, positional play, aiming accuracy, and a strong mental game. We offer a unique combination of a snooker table in a picturesque setting.',
    features: [
      { icon: Target, text: 'Premium quality tables' },
      { icon: Trophy, text: 'Scenic outdoor setting' },
      { icon: Dumbbell, text: 'Skill development focus' },
      { icon: Award, text: 'Strategic gameplay' },
    ],
  },
];

export default function SportsPage() {
  return (
    <>
      <PageHero
        title="Our Sports"
        subtitle="Choose from Football, Box Cricket, Pickleball, and Snooker on our premium facilities"
        backgroundImage="https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-16 bg-white">
        <div className="section-container">
          {sports.map((sport, index) => (
            <div
              key={sport.id}
              id={sport.id}
              className={`grid lg:grid-cols-2 gap-12 items-center py-16 ${
                index !== sports.length - 1 ? 'border-b border-charcoal-100' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
                  {sport.name}
                </h2>
                <p className="text-charcoal-600 mb-4 leading-relaxed">{sport.description}</p>
                <p className="text-charcoal-600 mb-8 leading-relaxed">{sport.longDescription}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {sport.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-turf-100 flex items-center justify-center flex-shrink-0">
                        <feature.icon size={20} className="text-turf-600" />
                      </div>
                      <span className="text-charcoal-700 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 btn-primary">
                  Book {sport.name}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-turf-600">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Play?
          </h2>
          <p className="text-turf-100 text-lg mb-8 max-w-2xl mx-auto">
            Book your slot now and experience sports on our premium artificial turf facilities.
            Open from 5 AM to 2 AM daily.
          </p>
          <Link to="/contact" className="btn-gold text-lg px-8 py-4">
            Book Your Slot Now
          </Link>
        </div>
      </section>
    </>
  );
}

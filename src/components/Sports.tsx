import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Timer, Trophy } from 'lucide-react';

const sports = [
  {
    id: 'football',
    name: 'Football / Futsal',
    image: '/football.jpg',
    description:
      'Experience the thrill of football on our premium artificial turf. Professional coaching available to help budding footballers take up the sport as a career.',
    features: ['5-a-side & 7-a-side', 'Professional Coaching', 'Tournament Ready'],
    color: 'from-turf-600 to-turf-700',
  },
  {
    id: 'cricket',
    name: 'Box Cricket',
    image: '/cricket.jpeg',
    description:
      'Fast-paced cricket in an enclosed space. Perfect for urban enthusiasts with 6-8 players per side. Modified rules and soft balls make it accessible and fun.',
    features: ['6-8 Players Per Team', 'Enclosed Net Area', 'Quick Matches'],
    color: 'from-blue-600 to-blue-700',
  },
  {
    id: 'pickleball',
    name: 'Pickleball',
    image: '/pickleball.jpeg',
    description:
      'The fastest-growing sport in India! Easy to learn, fun to play, and great exercise. Perfect for all ages - as long as you can move around and swing a racket.',
    features: ['All Ages Welcome', 'Easy to Learn', 'Great Workout'],
    color: 'from-gold-500 to-gold-600',
  },
  {
    id: 'snooker',
    name: 'Snooker',
    image: '/snooker.webp',
    description:
      'A unique combination of snooker in a picturesque setting. Develop fundamental techniques like proper stance, grip, and smooth cue action.',
    features: ['Premium Tables', 'Scenic Setting', 'Skill Development'],
    color: 'from-charcoal-700 to-charcoal-800',
  },
];

export default function Sports() {
  const [activeSport, setActiveSport] = useState(sports[0].id);
  const currentSport = sports.find((s) => s.id === activeSport)!;

  return (
    <section id="sports" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Choose Your <span className="text-gradient">Game</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From football to pickleball, we offer a variety of sports on premium artificial turf
            with professional facilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setActiveSport(sport.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeSport === sport.id
                  ? 'bg-turf-600 text-white shadow-lg scale-105'
                  : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
              }`}
            >
              {sport.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src={currentSport.image}
              alt={currentSport.name}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${currentSport.color} opacity-60`}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-3xl font-bold text-white mb-2">
                {currentSport.name}
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-charcoal-600 leading-relaxed">
              {currentSport.description}
            </p>

            <div className="space-y-4">
              {currentSport.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-turf-100 flex items-center justify-center">
                    {index === 0 && <Users size={20} className="text-turf-600" />}
                    {index === 1 && <Timer size={20} className="text-turf-600" />}
                    {index === 2 && <Trophy size={20} className="text-turf-600" />}
                  </div>
                  <span className="font-medium text-charcoal-700">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary mt-4"
            >
              Book {currentSport.name}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/sports"
            className="inline-flex items-center gap-2 text-turf-600 font-semibold hover:text-turf-700 transition-colors"
          >
            View All Sports Details
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

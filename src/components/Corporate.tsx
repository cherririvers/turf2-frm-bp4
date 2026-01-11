import { Link } from 'react-router-dom';
import { Building2, Users, Zap, Target, HeartHandshake, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Building2,
    title: 'Promote Company Culture',
    description:
      'Energize your corporate culture with dynamic sports events. Transform corporate gatherings into unforgettable celebrations of success.',
  },
  {
    icon: Users,
    title: 'Bond With Your Team',
    description:
      'Foster teamwork, camaraderie, and healthy competitive spirit. Unite teams to boost morale and create the hallway buzz that brings people together.',
  },
  {
    icon: Zap,
    title: 'Energize Your Team',
    description:
      'Inspire, energize, and foster a sense of belonging with sports initiatives. Ignite passion, fuel creativity, and build lasting connections.',
  },
];

const highlights = [
  { icon: Target, text: 'Break Silos & Build Teams' },
  { icon: HeartHandshake, text: 'High Engagement & Participation' },
  { icon: TrendingUp, text: 'Boost Productivity & Efficiency' },
];

export default function Corporate() {
  return (
    <section id="corporate" className="py-20 bg-charcoal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-gold-300 text-sm font-semibold uppercase tracking-wider">
              Exclusive Package
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Corporate <span className="text-gradient-gold">Sports Events</span>
          </h2>
          <p className="text-lg text-charcoal-300 max-w-3xl mx-auto">
            Sports positively impact corporate teams by improving communication, cohesion, and
            teamwork. Reduced stress and increased energy lead to a more engaged, collaborative,
            and healthier work environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-charcoal-800/50 backdrop-blur-sm border border-charcoal-700 rounded-2xl p-8 hover:border-turf-500/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-turf-500 to-turf-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={32} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-charcoal-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-turf-600 to-turf-700 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Energize Your Team?
              </h3>
              <p className="text-turf-100 mb-6">
                We design and deliver sporting challenges, group initiatives, and leadership
                exercises that challenge and stimulate both the mind and the body.
              </p>
              <div className="flex flex-wrap gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2"
                  >
                    <item.icon size={16} className="text-gold-400" />
                    <span className="text-sm font-medium text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                to="/corporate"
                className="btn-gold text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

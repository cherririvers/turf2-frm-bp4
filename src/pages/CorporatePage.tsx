import { Link } from 'react-router-dom';
import {
  Building2,
  Users,
  Zap,
  Target,
  HeartHandshake,
  TrendingUp,
  CheckCircle,
  Calendar,
  Trophy,
  Utensils,
  Award,
  Briefcase,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const benefits = [
  {
    icon: Building2,
    title: 'Promote Company Culture',
    description:
      'Energize your corporate culture with dynamic sports events. Fostering team unity through adrenaline-pumping tournaments and tailored challenges, we go beyond the boardroom, transforming your corporate events into unforgettable celebrations of success.',
  },
  {
    icon: Users,
    title: 'Bond With Your Team',
    description:
      'Our events aren\'t just about athletic prowess but about fostering teamwork, camaraderie, and a healthy competitive spirit within the corporate landscape. We unite teams to boost morale and create the hallway buzz that brings people together physically and emotionally.',
  },
  {
    icon: Zap,
    title: 'Energize Your Team',
    description:
      'Inspire, energize, and foster a sense of belonging with our Corporate Employee Engagement initiatives. From promoting a healthy work-life balance through wellness programs to enhancing collaboration with team-building adventures.',
  },
];

const outcomes = [
  { icon: Target, text: 'Break Silos & Build Teams' },
  { icon: HeartHandshake, text: 'High Engagement & Participation' },
  { icon: TrendingUp, text: 'Boost Productivity & Efficiency' },
  { icon: Award, text: 'Create Lasting Memories' },
];

const packageFeatures = [
  {
    icon: Trophy,
    title: 'Custom Tournaments',
    description: 'Inter-department competitions, leagues, and championship formats',
  },
  {
    icon: Utensils,
    title: 'Catering Services',
    description: 'Food and beverages for your entire team during the event',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Book full-day or half-day slots based on your requirements',
  },
  {
    icon: Briefcase,
    title: 'Event Management',
    description: 'Complete logistics, scoring, and coordination support',
  },
];

const sports = ['Football / Futsal', 'Box Cricket', 'Pickleball', 'Snooker'];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        title="Corporate Packages"
        subtitle="Transform your corporate events into unforgettable celebrations of success"
        backgroundImage="/corporate-banner.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              Exclusive Corporate Package
            </span>
            <h2 className="section-title mb-4">
              Why Corporate <span className="text-gradient">Sports Events?</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Sports positively impact corporate teams by improving communication, cohesion, and
              teamwork by breaking down hierarchical barriers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-charcoal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-turf-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-charcoal-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-charcoal-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                  Expected Outcomes
                </h3>
                <p className="text-charcoal-300 mb-8">
                  Participation in sports leads to reduced stress and increased energy and
                  productivity due to the release of endorphins. This leads to a more engaged,
                  collaborative, and healthier work environment.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-charcoal-800/50 rounded-lg px-4 py-3"
                    >
                      <outcome.icon size={20} className="text-turf-400" />
                      <span className="font-medium">{outcome.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-turf-600 to-turf-700 rounded-2xl p-8">
                <h4 className="font-display text-xl font-bold mb-4">What We Offer</h4>
                <p className="text-turf-100 mb-6">
                  We design and deliver sporting challenges, group initiatives, and leadership
                  exercises that stimulate both the mind and the body.
                </p>
                <ul className="space-y-3">
                  {packageFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-gold-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">{feature.title}</span>
                        <p className="text-sm text-turf-100">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Available <span className="text-gradient">Sports</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Choose from multiple sports options for your corporate event
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sports.map((sport, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center card-hover border-2 border-transparent hover:border-turf-500"
              >
                <div className="w-16 h-16 rounded-full bg-turf-100 flex items-center justify-center mx-auto mb-4">
                  <Trophy size={28} className="text-turf-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal-900">{sport}</h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Request Corporate Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-turf-600 to-turf-700 text-white">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Energize Your Team?
          </h2>
          <p className="text-turf-100 text-lg mb-8 max-w-2xl mx-auto">
            With sports, teams unite to create unforgettable journeys and once-in-a-lifetime
            memories. Let us help you build a stronger, more connected team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold text-lg px-8 py-4">
              Get Started Today
            </Link>
            <a href="tel:+919999999999" className="btn-secondary text-lg px-8 py-4">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

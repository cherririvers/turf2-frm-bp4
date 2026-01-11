import { Heart, Users, Brain, Smile } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Physical Wellbeing',
    description: 'Exercise releases endorphins, reduces stress, and elevates your mood.',
  },
  {
    icon: Brain,
    title: 'Mental Fitness',
    description: 'A healthy body houses a healthy mind, contributing to overall wellness.',
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Sports bring people together, creating lasting bonds and friendships.',
  },
  {
    icon: Smile,
    title: 'Pure Joy',
    description: 'Experience the fun and excitement of playing with friends and teammates.',
  },
];

export default function Vision() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-turf-600 font-semibold uppercase tracking-wider text-sm">
              Our Vision
            </span>
            <h2 className="section-title mt-2 mb-6">
              Be the Leading Destination for{' '}
              <span className="text-gradient">Sports & Fitness</span>
            </h2>
            <p className="text-lg text-charcoal-600 mb-6 leading-relaxed">
              Sport has the power to bring people together. It functions as a universal platform
              through which people of all different backgrounds can debate, grumble, celebrate,
              rejoice and most importantly unite.
            </p>
            <p className="text-lg text-charcoal-600 mb-8 leading-relaxed">
              Our vision is to be a leading destination for sports and a pickleball hub, where
              players can connect and encourage each other to achieve mental and physical well
              being while creating an awareness in society about the importance of being fit and
              active.
            </p>

            <blockquote className="border-l-4 border-turf-500 pl-6 py-2 bg-turf-50 rounded-r-lg">
              <p className="text-charcoal-700 italic">
                "A game in the natural surroundings we offer releases endorphins, reduces stress
                and elevates your mood. A relaxed mind contributes so much more to family,
                friends, and society."
              </p>
            </blockquote>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-charcoal-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-turf-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-charcoal-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal-500 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Instagram, ExternalLink } from 'lucide-react';

const feedImages = [
  { src: '/gallery/cric1.jpeg', alt: 'Cricket match' },
  { src: '/gallery/pickleball1.jpeg', alt: 'Pickleball game' },
  { src: '/gallery/events1.jpeg', alt: 'Event celebration' },
  { src: '/gallery/cafe1.jpeg', alt: 'Cafe ambiance' },
  { src: '/gallery/cric3.jpeg', alt: 'Cricket players' },
  { src: '/gallery/events3.jpeg', alt: 'Sports event' },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-charcoal-50">
      <div className="section-container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full px-5 py-2 mb-4">
            <Instagram size={20} />
            <span className="font-semibold">Follow Us on Instagram</span>
          </div>
          <h2 className="section-title mb-4">
            Stay <span className="text-gradient">Connected</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Follow @turf__360 for the latest updates, match highlights, and behind-the-scenes action
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {feedImages.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/turf__360/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/60 transition-all duration-300 flex items-center justify-center">
                <Instagram
                  size={32}
                  className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/turf__360/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-charcoal-900 hover:bg-charcoal-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <Instagram size={22} />
            <span>@turf__360</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

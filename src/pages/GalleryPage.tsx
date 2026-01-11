import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Play, Instagram, ExternalLink } from 'lucide-react';
import PageHero from '../components/PageHero';

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  type: 'image' | 'video';
};

const galleryItems: GalleryItem[] = [
  { src: '/football.jpg', alt: 'Football turf', category: 'Football', type: 'image' },
  { src: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Football turf at night', category: 'Football', type: 'image' },
  { src: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Players on the field', category: 'Football', type: 'image' },
  { src: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Football on turf', category: 'Football', type: 'image' },
  { src: '/gallery/football1.avif', alt: 'Football match action', category: 'Football', type: 'image' },
  { src: '/gallery/football2.webp', alt: 'Football field view', category: 'Football', type: 'image' },
  { src: '/gallery/football3.webp', alt: 'Football players', category: 'Football', type: 'image' },
  { src: '/gallery/football4.png', alt: 'Football game highlights', category: 'Football', type: 'image' },
  { src: '/cricket.jpeg', alt: 'Cricket pitch', category: 'Cricket', type: 'image' },
  { src: '/gallery/cric1.jpeg', alt: 'Cricket action shot', category: 'Cricket', type: 'image' },
  { src: '/gallery/cric2.jpeg', alt: 'Cricket match', category: 'Cricket', type: 'image' },
  { src: '/gallery/cric3.jpeg', alt: 'Cricket players', category: 'Cricket', type: 'image' },
  { src: '/gallery/cric4.jpeg', alt: 'Cricket game', category: 'Cricket', type: 'image' },
  { src: '/gallery/cric5.jpeg', alt: 'Cricket tournament', category: 'Cricket', type: 'image' },
  { src: '/gallery/cri6.jpeg', alt: 'Cricket facility', category: 'Cricket', type: 'image' },
  { src: '/gallery/cric-vid1.mp4', alt: 'Cricket highlights', category: 'Cricket', type: 'video' },
  { src: '/gallery/cric-vid2.mp4', alt: 'Cricket match footage', category: 'Cricket', type: 'video' },
  { src: '/gallery/cric-vid3.mp4', alt: 'Cricket practice session', category: 'Cricket', type: 'video' },
  { src: '/gallery/cric-vid4.mp4', alt: 'Cricket game clip', category: 'Cricket', type: 'video' },
  { src: '/gallery/cric-vid5.mp4', alt: 'Cricket tournament video', category: 'Cricket', type: 'video' },
  { src: '/gallery/cric-vid6.mp4', alt: 'Cricket action video', category: 'Cricket', type: 'video' },
  { src: '/pickleball.jpeg', alt: 'Pickleball courts', category: 'Pickleball', type: 'image' },
  { src: '/gallery/pickleball1.jpeg', alt: 'Pickleball match', category: 'Pickleball', type: 'image' },
  { src: '/gallery/pickleball2.jpeg', alt: 'Pickleball players', category: 'Pickleball', type: 'image' },
  { src: '/gallery/pickleball3.jpeg', alt: 'Pickleball game', category: 'Pickleball', type: 'image' },
  { src: '/gallery/pickleball4.jpeg', alt: 'Pickleball court action', category: 'Pickleball', type: 'image' },
  { src: '/gallery/pickleball-vid1.mp4', alt: 'Pickleball highlights', category: 'Pickleball', type: 'video' },
  { src: '/gallery/pickleball-vid2.mp4', alt: 'Pickleball match video', category: 'Pickleball', type: 'video' },
  { src: '/gallery/pickleball-vid3.mp4', alt: 'Pickleball game clip', category: 'Pickleball', type: 'video' },
  { src: '/snooker.webp', alt: 'Snooker table', category: 'Snooker', type: 'image' },
  { src: '/gallery/sonnker1.jpeg', alt: 'Snooker room', category: 'Snooker', type: 'image' },
  { src: '/gallery/snooker2.jpg', alt: 'Snooker game', category: 'Snooker', type: 'image' },
  { src: '/gallery/snooker3.webp', alt: 'Snooker table close-up', category: 'Snooker', type: 'image' },
  { src: '/corporate-banner.jpeg', alt: 'Corporate event', category: 'Events', type: 'image' },
  { src: '/gallery/events1.jpeg', alt: 'Event celebration', category: 'Events', type: 'image' },
  { src: '/gallery/events2.jpeg', alt: 'Team gathering', category: 'Events', type: 'image' },
  { src: '/gallery/events3.jpeg', alt: 'Sports event', category: 'Events', type: 'image' },
  { src: '/gallery/events4.jpeg', alt: 'Tournament ceremony', category: 'Events', type: 'image' },
  { src: '/gallery/events5.jpeg', alt: 'Group photo', category: 'Events', type: 'image' },
  { src: '/gallery/events6.jpeg', alt: 'Award ceremony', category: 'Events', type: 'image' },
  { src: '/gallery/events7.jpeg', alt: 'Event highlights', category: 'Events', type: 'image' },
  { src: '/gallery/cafe1.jpeg', alt: 'Cafe ambiance', category: 'Cafe', type: 'image' },
  { src: '/gallery/cafe2.jpeg', alt: 'Cafe seating', category: 'Cafe', type: 'image' },
  { src: '/gallery/cafe3.jpeg', alt: 'Cafe interior', category: 'Cafe', type: 'image' },
  { src: '/gallery/cafe4.jpeg', alt: 'Food and beverages', category: 'Cafe', type: 'image' },
  { src: '/gallery/cafe5.jpeg', alt: 'Cafe lounge', category: 'Cafe', type: 'image' },
  { src: '/gallery/cafe6.jpeg', alt: 'Refreshments area', category: 'Cafe', type: 'image' },
  { src: '/gallery/cafe-vid1.mp4', alt: 'Cafe tour', category: 'Cafe', type: 'video' },
  { src: '/gallery/cafe-vid2.mp4', alt: 'Cafe atmosphere', category: 'Cafe', type: 'video' },
  { src: '/gallery/cafe-vid3.mp4', alt: 'Cafe experience', category: 'Cafe', type: 'video' },
];

const categories = ['All', 'Cricket', 'Pickleball', 'Football', 'Snooker', 'Events', 'Cafe'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxIndex === null) return;
    const newIndex =
      direction === 'next'
        ? (lightboxIndex + 1) % filteredItems.length
        : (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(newIndex);
  };

  return (
    <>
      <PageHero
        title="Our Facilities"
        subtitle="Take a visual tour of our premium sports facilities"
        backgroundImage="/gallery/cric1.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-turf-600 text-white shadow-lg'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[4/3]"
                onClick={() => openLightbox(index)}
              >
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 text-turf-600 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{item.alt}</p>
                  <span className="text-sm text-turf-300">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-charcoal-800/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-charcoal-800/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {filteredItems[lightboxIndex].type === 'video' ? (
              <video
                src={filteredItems[lightboxIndex].src}
                className="w-full h-full max-h-[75vh] object-contain rounded-lg"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                className="w-full h-full object-contain rounded-lg"
              />
            )}
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {filteredItems[lightboxIndex].alt}
              </p>
              <p className="text-charcoal-400 text-sm">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                <Instagram size={32} className="text-pink-500" />
              </div>
              <div className="text-white">
                <h3 className="font-display text-2xl font-bold">Follow Us on Instagram</h3>
                <p className="text-white/80">Daily highlights, match moments, and exclusive content</p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/turf__360/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-charcoal-100 text-charcoal-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl"
            >
              <span>@turf__360</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-turf-600">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-turf-100 text-lg mb-8 max-w-2xl mx-auto">
            Visit us in person to experience our facilities firsthand. Book a slot and see why
            Turf 360 is the preferred choice for sports enthusiasts in Noida.
          </p>
          <Link to="/contact" className="btn-gold text-lg px-8 py-4">
            Book a Visit
          </Link>
        </div>
      </section>
    </>
  );
}

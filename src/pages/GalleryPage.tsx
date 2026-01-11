import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const galleryImages = [
  { src: '/football.jpg', alt: 'Football turf', category: 'Football' },
  { src: '/cricket.jpeg', alt: 'Cricket pitch', category: 'Cricket' },
  { src: '/pickleball.jpeg', alt: 'Pickleball courts', category: 'Pickleball' },
  { src: '/snooker.webp', alt: 'Snooker table', category: 'Snooker' },
  { src: '/corporate-banner.jpeg', alt: 'Corporate event', category: 'Events' },
  { src: '/gallery/cric1.jpeg', alt: 'Cricket action shot', category: 'Cricket' },
  { src: '/gallery/cric2.jpeg', alt: 'Cricket match', category: 'Cricket' },
  { src: '/gallery/cric3.jpeg', alt: 'Cricket players', category: 'Cricket' },
  { src: '/gallery/cric4.jpeg', alt: 'Cricket game', category: 'Cricket' },
  { src: '/gallery/cric5.jpeg', alt: 'Cricket tournament', category: 'Cricket' },
  { src: '/gallery/cri6.jpeg', alt: 'Cricket facility', category: 'Cricket' },
  { src: '/gallery/pickleball1.jpeg', alt: 'Pickleball match', category: 'Pickleball' },
  { src: '/gallery/pickleball2.jpeg', alt: 'Pickleball players', category: 'Pickleball' },
  { src: '/gallery/pickleball3.jpeg', alt: 'Pickleball game', category: 'Pickleball' },
  { src: '/gallery/pickleball4.jpeg', alt: 'Pickleball court action', category: 'Pickleball' },
  { src: '/gallery/events1.jpeg', alt: 'Event celebration', category: 'Events' },
  { src: '/gallery/events2.jpeg', alt: 'Team gathering', category: 'Events' },
  { src: '/gallery/events3.jpeg', alt: 'Sports event', category: 'Events' },
  { src: '/gallery/events4.jpeg', alt: 'Tournament ceremony', category: 'Events' },
  { src: '/gallery/events5.jpeg', alt: 'Group photo', category: 'Events' },
  { src: '/gallery/events6.jpeg', alt: 'Award ceremony', category: 'Events' },
  { src: '/gallery/events7.jpeg', alt: 'Event highlights', category: 'Events' },
  { src: '/gallery/cafe1.jpeg', alt: 'Cafe ambiance', category: 'Cafe' },
  { src: '/gallery/cafe2.jpeg', alt: 'Cafe seating', category: 'Cafe' },
  { src: '/gallery/cafe3.jpeg', alt: 'Cafe interior', category: 'Cafe' },
  { src: '/gallery/cafe4.jpeg', alt: 'Food and beverages', category: 'Cafe' },
  { src: '/gallery/cafe5.jpeg', alt: 'Cafe lounge', category: 'Cafe' },
  { src: '/gallery/cafe6.jpeg', alt: 'Refreshments area', category: 'Cafe' },
];

const categories = ['All', 'Cricket', 'Pickleball', 'Football', 'Snooker', 'Events', 'Cafe'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    const newIndex =
      direction === 'next'
        ? (lightboxImage + 1) % filteredImages.length
        : (lightboxImage - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(newIndex);
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
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[4/3]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                  <span className="text-sm text-turf-300">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage !== null && (
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
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 bg-charcoal-800/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxImage].src}
              alt={filteredImages[lightboxImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-medium">
                {filteredImages[lightboxImage].alt}
              </p>
              <p className="text-charcoal-400 text-sm">
                {lightboxImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

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

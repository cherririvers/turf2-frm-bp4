import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Football turf at night',
    category: 'Football',
  },
  {
    src: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Players on the field',
    category: 'Football',
  },
  {
    src: 'https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Team celebration',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cricket match',
    category: 'Cricket',
  },
  {
    src: 'https://images.pexels.com/photos/8224064/pexels-photo-8224064.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Pickleball court',
    category: 'Pickleball',
  },
  {
    src: 'https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Sports facility overview',
    category: 'Facility',
  },
  {
    src: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Football on turf',
    category: 'Football',
  },
  {
    src: 'https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Cricket players',
    category: 'Cricket',
  },
  {
    src: 'https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Pickleball game',
    category: 'Pickleball',
  },
  {
    src: 'https://images.pexels.com/photos/6203795/pexels-photo-6203795.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Snooker table',
    category: 'Snooker',
  },
  {
    src: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Evening game',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Turf overview',
    category: 'Facility',
  },
];

const categories = ['All', 'Football', 'Cricket', 'Pickleball', 'Snooker', 'Facility', 'Events'];

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
        backgroundImage="https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=1920"
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

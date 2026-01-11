import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Football turf at night',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Players on the field',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/2291006/pexels-photo-2291006.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Team celebration',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Cricket match',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/8224064/pexels-photo-8224064.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pickleball court',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Sports facility',
    span: 'col-span-2 row-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-charcoal-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Our <span className="text-gradient">Facilities</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Take a glimpse at our premium sports facilities designed for the ultimate playing
            experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-turf-600 font-semibold hover:text-turf-700 transition-colors"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

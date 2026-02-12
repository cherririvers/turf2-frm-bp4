import { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { menuCategories } from '../data/menuData';
import MenuItemCard from '../components/cafe/MenuItemCard';
import CategoryTabs from '../components/cafe/CategoryTabs';
import FloatingCartButton from '../components/cafe/FloatingCartButton';
import CartDrawer from '../components/cafe/CartDrawer';
import { useCart } from '../context/CartContext';
import { useSEO, seoConfig } from '../utils/seo';

const WHATSAPP_NUMBER = '918076714176';

export default function BrewNPlayPage() {
  useSEO(seoConfig.brewNPlay);

  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isScrollingRef = useRef(false);
  const { setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 200;

      for (const category of menuCategories) {
        const section = sectionRefs.current[category.id];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    isScrollingRef.current = true;
    setActiveCategory(categoryId);

    const section = sectionRefs.current[categoryId];
    if (section) {
      const offset = 140;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      'Hi! I would like to know more about Brew N Play at The Turf 360.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <img
          src="/brew-n-play/cart.jpeg"
          alt="Brew N Play Food Cart"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-turf-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open Now
            </div>

            <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-3">
              Brew <span className="text-turf-400">N</span> Play
            </h1>

            <p className="text-white/90 text-lg lg:text-xl mb-6 max-w-xl">
              Fuel your game with delicious food and refreshing beverages. Order
              fresh, play hard!
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock size={18} className="text-turf-400" />
                <span>6:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin size={18} className="text-turf-400" />
                <span>At The Turf 360</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const menuSection = document.getElementById('menu-section');
                  if (menuSection) {
                    menuSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-turf-500 hover:bg-turf-600 active:bg-turf-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-2"
              >
                View Menu
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-2 border border-white/20"
              >
                <MessageCircle size={20} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} className="text-turf-500" />
                <a
                  href="tel:+918076714176"
                  className="hover:text-turf-600 transition-colors"
                >
                  +91 80767 14176
                </a>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="text-sm text-turf-600 font-medium hover:text-turf-700 transition-colors"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>

      <div id="menu-section">
        <CategoryTabs
          categories={menuCategories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <div className="max-w-6xl mx-auto px-4 py-6 pb-32 lg:pb-12">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              ref={(el) => (sectionRefs.current[category.id] = el)}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-xl lg:text-2xl font-bold text-charcoal-800">
                  {category.name}
                </h2>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm text-gray-500">
                  {category.items.length} items
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <FloatingCartButton />
      <CartDrawer />
    </div>
  );
}

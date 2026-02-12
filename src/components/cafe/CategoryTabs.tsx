import { useRef, useEffect } from 'react';
import {
  Star,
  Coffee,
  Pizza,
  Utensils,
  Soup,
  Salad,
  CircleDot,
  Sandwich,
  Beef,
  Carrot,
  Scroll,
  Croissant,
  ChefHat,
  Droplets,
} from 'lucide-react';
import { MenuCategory } from '../../data/menuData';

const iconMap: Record<string, React.ReactNode> = {
  Star: <Star size={18} />,
  Coffee: <Coffee size={18} />,
  Pizza: <Pizza size={18} />,
  Utensils: <Utensils size={18} />,
  Soup: <Soup size={18} />,
  Salad: <Salad size={18} />,
  CircleDot: <CircleDot size={18} />,
  Sandwich: <Sandwich size={18} />,
  Beef: <Beef size={18} />,
  Carrot: <Carrot size={18} />,
  Scroll: <Scroll size={18} />,
  Croissant: <Croissant size={18} />,
  ChefHat: <ChefHat size={18} />,
  Droplets: <Droplets size={18} />,
};

interface CategoryTabsProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const tabsRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const container = tabsRef.current;
      const activeTab = activeTabRef.current;
      const containerWidth = container.offsetWidth;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;

      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [activeCategory]);

  return (
    <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div
        ref={tabsRef}
        className="flex overflow-x-auto scrollbar-hide gap-2 p-3 lg:p-4 lg:justify-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              ref={isActive ? activeTabRef : null}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                isActive
                  ? 'bg-turf-500 text-white shadow-md shadow-turf-500/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300'
              }`}
            >
              {iconMap[category.icon]}
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

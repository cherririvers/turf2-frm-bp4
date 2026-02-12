import { Link, useLocation } from 'react-router-dom';
import { Home, Dumbbell, Coffee, Images, Phone } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Sports', href: '/sports', icon: Dumbbell },
  { name: 'Cafe', href: '/cafe', icon: Coffee },
  { name: 'Gallery', href: '/gallery', icon: Images },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.href ||
            (item.href !== '/' && location.pathname.startsWith(item.href));

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full px-2 transition-all duration-200 relative ${
                isActive
                  ? 'text-turf-600'
                  : 'text-gray-500 active:text-turf-500'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-turf-500 rounded-b-full" />
              )}
              <item.icon
                size={22}
                className={`transition-transform duration-200 ${
                  isActive ? 'scale-110' : ''
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-[10px] mt-1 font-medium ${
                  isActive ? 'font-semibold' : ''
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

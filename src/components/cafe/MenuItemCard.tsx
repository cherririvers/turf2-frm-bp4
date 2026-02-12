import { Plus, Minus, Star, Flame, Snowflake } from 'lucide-react';
import { MenuItem } from '../../data/menuData';
import { useCart } from '../../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const { items, addItem, updateQuantity } = useCart();
  const cartItem = items.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-200 active:scale-[0.98] hover:shadow-lg group">
      <div className="relative h-36 sm:h-40 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {item.isSpecial && (
          <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Star size={12} fill="currentColor" />
            Special
          </div>
        )}

        {item.isHot && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white p-1.5 rounded-full">
            <Flame size={14} />
          </div>
        )}

        {item.isCold && (
          <div className="absolute top-2 right-2 bg-sky-500 text-white p-1.5 rounded-full">
            <Snowflake size={14} />
          </div>
        )}

        {item.isAddOn && (
          <div className="absolute top-2 left-2 bg-turf-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Add-on
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-charcoal-800 text-sm sm:text-base line-clamp-1 mb-1">
          {item.name}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <span className="text-turf-600 font-bold text-base sm:text-lg">
            ₹{item.price}
          </span>

          {quantity === 0 ? (
            <button
              onClick={() => addItem(item)}
              className="bg-turf-500 hover:bg-turf-600 active:bg-turf-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors min-w-[80px] flex items-center justify-center gap-1"
            >
              <Plus size={16} />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-turf-50 rounded-xl p-1">
              <button
                onClick={() => updateQuantity(item.id, quantity - 1)}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-turf-600 hover:bg-turf-100 active:bg-turf-200 transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-6 text-center font-bold text-charcoal-800">
                {quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, quantity + 1)}
                className="w-8 h-8 flex items-center justify-center bg-turf-500 rounded-lg text-white hover:bg-turf-600 active:bg-turf-700 transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

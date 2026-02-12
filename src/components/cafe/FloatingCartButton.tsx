import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function FloatingCartButton() {
  const { getTotalItems, getTotalPrice, setIsCartOpen } = useCart();
  const totalItems = getTotalItems();

  if (totalItems === 0) return null;

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="fixed bottom-24 lg:bottom-6 right-4 z-40 bg-turf-500 hover:bg-turf-600 active:bg-turf-700 text-white rounded-2xl shadow-lg shadow-turf-500/30 transition-all duration-200 flex items-center gap-3 px-4 py-3 animate-bounce-in"
    >
      <div className="relative">
        <ShoppingBag size={24} />
        <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <div className="text-left">
        <p className="text-xs opacity-90">View Order</p>
        <p className="font-bold">₹{getTotalPrice()}</p>
      </div>
    </button>
  );
}

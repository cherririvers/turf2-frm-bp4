import { X, Plus, Minus, ShoppingBag, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
    sendToWhatsApp,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-left">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-turf-500 text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} />
            <h2 className="text-lg font-bold">Your Order</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-turf-600 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag size={40} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-charcoal-800 mb-2">
              Your cart is empty
            </h3>
            <p className="text-gray-500 text-sm">
              Add some delicious items from our menu!
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-gray-50 rounded-xl p-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-charcoal-800 text-sm line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-turf-600 font-bold text-sm mt-1">
                      ₹{item.price * item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-white rounded-lg shadow-sm text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-5 text-center font-bold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center bg-turf-500 rounded-lg text-white hover:bg-turf-600 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 p-4 space-y-4 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-bold text-lg text-charcoal-800">
                  ₹{getTotalPrice()}
                </span>
              </div>

              <button
                onClick={sendToWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </button>

              <button
                onClick={clearCart}
                className="w-full text-red-500 hover:bg-red-50 py-2 rounded-xl font-medium text-sm transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

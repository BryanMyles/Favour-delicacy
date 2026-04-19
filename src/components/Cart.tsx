import React from 'react';
import { useCart } from '../CartContext';
import { X, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartProps {
  onCheckout: () => void;
}

export default function Cart({ onCheckout }: CartProps) {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.cartQuantity, 0);

  const cartContent = (
    <div className="flex flex-col h-full bg-white rounded-[24px] shadow-custom p-[24px]">
      <h2 className="flex justify-between text-[20px] font-bold mb-[20px] font-display">
        Your Basket
        <span className="font-normal text-[14px] text-gray-400 mt-1">{totalItems} items</span>
      </h2>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 text-sm">
            <p>Your basket is empty.</p>
          </div>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex justify-between mb-[15px] border-b border-dashed border-brand-gray-200 pb-[10px]">
              <div>
                <div className="font-semibold text-brand-black">{item.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="text-[12px] text-gray-400">Qty:</div>
                  <button onClick={() => updateQuantity(item.id, item.cartQuantity - 1)} className="w-5 h-5 rounded-[4px] border border-brand-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 hover:bg-gray-50">-</button>
                  <span className="text-[12px] text-brand-black font-semibold mx-1">{item.cartQuantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.cartQuantity + 1)} className="w-5 h-5 rounded-[4px] border border-brand-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 hover:bg-gray-50">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-500 ml-2">
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
              <div className="font-bold text-brand-black">₦{item.price.toLocaleString()}</div>
            </div>
          ))
        )}
      </div>

      <div className="mt-[20px] pt-[20px] border-t-[2px] border-brand-gray">
        <div className="flex justify-between font-bold text-[20px] mb-[20px] text-brand-black">
          <span>Total</span>
          <span>₦{totalPrice.toLocaleString()}</span>
        </div>
        <button 
          onClick={() => {
            setIsCartOpen(false);
            onCheckout();
          }}
          disabled={items.length === 0}
          className="w-full bg-brand-black text-white border-none p-[16px] rounded-[12px] text-[16px] font-bold cursor-pointer hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          Proceed to Checkout
        </button>
        <div className="text-center mt-[15px] text-[11px] opacity-60 text-brand-black">
          Pay via Card or Bank Transfer
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop side panel (always visible) */}
      <div className="hidden lg:block w-[320px] shrink-0 h-full">
        {cartContent}
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-[320px] h-full sm:p-4 bg-transparent"
            >
              {cartContent}
              <button 
                onClick={() => setIsCartOpen(false)}
                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors sm:hidden"
              >
                <X size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

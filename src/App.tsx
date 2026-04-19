import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import { CartProvider } from './CartContext';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <CartProvider>
      <div className="flex flex-col h-screen font-sans overflow-hidden">
        <Navbar />
        <div className="flex flex-1 overflow-hidden px-4 md:px-10 py-5 gap-6">
          <main className="flex-1 flex flex-col gap-5 overflow-y-auto pb-4 custom-scrollbar">
            <Hero />
            <Menu />
          </main>
          {/* Cart rendered as a side panel on desktop via its own styling updates */}
          <Cart onCheckout={() => setIsCheckoutOpen(true)} />
        </div>
        <Footer />
        <CheckoutModal 
          isOpen={isCheckoutOpen} 
          onClose={() => setIsCheckoutOpen(false)} 
        />
      </div>
    </CartProvider>
  );
}

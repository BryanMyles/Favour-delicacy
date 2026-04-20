import React, { useEffect, useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'contact';
  setCurrentPage: (page: 'home' | 'about' | 'contact') => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const { items, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.cartQuantity, 0);

  const navLinkStyle = (pagePath: string) => 
    `cursor-pointer transition-colors ${currentPage === pagePath ? 'text-brand-orange' : 'hover:text-brand-orange'}`;

  return (
    <header className="h-[70px] bg-white flex items-center justify-between px-4 sm:px-10 border-b border-brand-gray-200 shrink-0">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
        <h1 className="font-display font-extrabold text-2xl text-brand-black">
          Favoured <span className="text-brand-orange">Delicacy</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-[30px] font-semibold text-sm uppercase tracking-wide text-brand-black">
        <a onClick={() => setCurrentPage('home')} className={navLinkStyle('home')}>Menu</a>
        <a onClick={() => setCurrentPage('about')} className={navLinkStyle('about')}>About Us</a>
        <a onClick={() => setCurrentPage('contact')} className={navLinkStyle('contact')}>Contact</a>
      </nav>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-[10px] bg-brand-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors lg:hidden"
        >
          <ShoppingBag size={18} />
          <span className="font-bold text-sm">Cart ({totalItems})</span>
        </button>
        
        <button 
          className="md:hidden p-2 text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 font-semibold text-brand-black border-t border-brand-gray-200 z-50">
          <a onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className={`cursor-pointer ${currentPage === 'home' ? 'text-brand-orange' : ''}`}>Menu</a>
          <a onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className={`cursor-pointer ${currentPage === 'about' ? 'text-brand-orange' : ''}`}>About Us</a>
          <a onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className={`cursor-pointer ${currentPage === 'contact' ? 'text-brand-orange' : ''}`}>Contact</a>
        </div>
      )}
    </header>
  );
}

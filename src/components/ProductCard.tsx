import React, { useState } from 'react';
import { Product } from '../data';
import { useCart } from '../CartContext';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
    setQuantity(1); // reset after adding
  };

  return (
    <div className="bg-white rounded-[18px] p-[12px] shadow-custom relative flex flex-col group">
      {product.isPopular && (
        <span className="bg-[#FF4444] text-white px-2 py-0.5 rounded-[4px] text-[10px] absolute top-[12px] right-[12px] z-10 font-bold uppercase tracking-wide">
          Hot Item
        </span>
      )}
      
      <div className="h-[110px] bg-brand-gray-200 rounded-[12px] mb-[12px] overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className="font-semibold text-[16px] mb-1 text-brand-black">{product.name}</h3>
        <div className="text-brand-orange font-bold text-[18px]">₦{product.price.toLocaleString()}</div>
        
        <div className="flex items-center gap-[12px] mt-auto pt-[10px]">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-[28px] h-[28px] rounded-[8px] border border-brand-gray-200 bg-white flex items-center justify-center font-bold text-gray-500 hover:bg-gray-50 transition-colors"
          >
            -
          </button>
          <span className="font-medium text-sm w-4 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="w-[28px] h-[28px] rounded-[8px] border border-brand-gray-200 bg-white flex items-center justify-center font-bold text-gray-500 hover:bg-gray-50 transition-colors"
          >
            +
          </button>
          
          <button 
            onClick={handleAdd}
            className="flex-1 bg-brand-orange text-white border-none py-[8px] px-[12px] rounded-[8px] font-bold text-[13px] hover:bg-brand-orange-hover transition-colors shadow-sm"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

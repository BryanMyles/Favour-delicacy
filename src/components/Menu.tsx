import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';

export default function Menu() {
  const foods = products.filter(p => p.category === 'food');
  const snacks = products.filter(p => p.category === 'snacks');
  const extras = products.filter(p => p.category === 'extra');

  return (
    <section id="menu" className="flex flex-col gap-6">
      {/* Food Categories */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-display font-bold text-2xl text-brand-black">Meals</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
          {foods.map((food) => (
            <ProductCard key={food.id} product={food} />
          ))}
        </div>
      </div>

      {/* Snacks Category */}
      <div id="snacks">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-display font-bold text-2xl text-brand-black">Snacks</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
          {snacks.map((snack) => (
            <ProductCard key={snack.id} product={snack} />
          ))}
        </div>
      </div>

      {/* Extras Category */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <h3 className="font-display font-bold text-2xl text-brand-orange">Extras</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
          {extras.map((extra) => (
            <ProductCard key={extra.id} product={extra} />
          ))}
        </div>
      </div>
    </section>
  );
}

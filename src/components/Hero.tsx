import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-black to-[#333] text-white p-[30px] rounded-[24px] flex flex-col justify-center relative overflow-hidden h-[180px] shrink-0">
      {/* Background Image overlay for hero */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: "url('/spag%20chicken.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      <div className="relative z-10">
        <h1 className="text-[36px] font-bold mb-2">Our New Menu List</h1>
        <p className="opacity-90 font-medium max-w-[500px] text-[15px]">
          Good food, done right. Check out what's available and order what you're craving today.
        </p>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 rotate-6 bg-brand-orange text-white rounded-full w-[120px] h-[120px] flex flex-col items-center justify-center text-center font-extrabold shadow-[0_10px_20px_rgba(255,107,0,0.3)] hidden sm:flex z-10">
        <span>TODAY'S</span>
        <span className="text-[24px] leading-tight">OFFER</span>
        <span className="text-[10px]">20% OFF</span>
      </div>
    </section>
  );
}

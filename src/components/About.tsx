import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-[24px] shadow-custom p-[30px] md:p-[40px]">
        <h2 className="font-display font-bold text-[32px] md:text-[40px] text-brand-black mb-[20px]">
          About <span className="text-brand-orange">Us</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <p className="text-[16px] leading-[1.6]">
              Welcome to <strong>Favoured Delicacy</strong>! We are passionate about bringing the rich, vibrant, and authentic flavors of Nigerian cuisine directly to your doorstep. 
            </p>
            <p className="text-[16px] leading-[1.6]">
              What started as a small family kitchen has grown into a premium food delivery service, but our core mission remains unchanged: "Good food, done right." We believe that every meal should be a memorable experience, cooked with the freshest ingredients and traditional spices.
            </p>
            <p className="text-[16px] leading-[1.6]">
              Whether you are craving the smoky taste of Asun Jollof Rice, the richness of Native Pasta, or just a quick pack of crunchy Chin-chin, we ensure that every bite feels like home.
            </p>
            
            <div className="mt-8 pt-6 border-t border-brand-gray-200">
              <h3 className="font-bold text-[20px] mb-4 text-brand-black">Our Guarantee</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-full bg-[#FFF5F0] text-brand-orange flex items-center justify-center font-bold text-sm">✓</span>
                  <span>100% Authentic Nigerian Recipes</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-full bg-[#FFF5F0] text-brand-orange flex items-center justify-center font-bold text-sm">✓</span>
                  <span>Freshly Sourced Ingredients Daily</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-full bg-[#FFF5F0] text-brand-orange flex items-center justify-center font-bold text-sm">✓</span>
                  <span>Fast & Secure Delivery to your doorstep</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-[20px] overflow-hidden shadow-custom">
              <img src="/jellof.jpg" alt="Preparing Nigerian Food" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-2xl">Made with Love.</h3>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-brand-black text-white p-6 rounded-2xl shadow-custom hidden md:block">
              <div className="font-display font-extrabold text-[32px] text-brand-orange">10+</div>
              <div className="font-semibold text-sm">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

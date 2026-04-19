import React from 'react';

export default function Footer() {
  return (
    <footer className="h-[40px] bg-[#FFF5F0] border-t border-[#FFE0CC] flex items-center justify-center gap-[30px] text-xs text-[#555] shrink-0 font-sans hidden sm:flex">
      <div>⚠️ <span className="font-semibold text-brand-black">NOTICE:</span> Soup and assorted stews would be sold or ordered in litres</div>
      <div>📞 Phone: <span className="font-bold text-brand-black">09050376719</span></div>
      <div>💬 WhatsApp: <span className="font-bold text-brand-black">09061579279</span></div>
    </footer>
  );
}

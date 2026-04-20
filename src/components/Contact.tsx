import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-[24px] shadow-custom p-[30px] md:p-[40px]">
        <h2 className="font-display font-bold text-[32px] md:text-[40px] text-brand-black mb-[10px]">
          Contact <span className="text-brand-orange">Us</span>
        </h2>
        <p className="text-gray-500 mb-8 max-w-2xl">
          Do you have a question, a special catering request, or just want to say hello? We would love to hear from you. Reach out through any of the channels below.
        </p>
        
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <a href="tel:09050376719" className="flex items-center gap-5 p-5 rounded-[16px] bg-brand-gray border border-brand-gray-200 hover:border-brand-orange transition-colors group">
              <div className="w-[50px] h-[50px] rounded-[12px] bg-white shadow-sm flex items-center justify-center text-brand-black group-hover:text-brand-orange transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1">Call Us Anywhere</p>
                <p className="font-bold text-[18px] text-brand-black">0905 037 6719</p>
              </div>
            </a>

            <a href="https://wa.me/2349061579279" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 rounded-[16px] bg-brand-gray border border-brand-gray-200 hover:border-[#25D366] transition-colors group">
              <div className="w-[50px] h-[50px] rounded-[12px] bg-[#25D366] shadow-sm flex items-center justify-center text-white">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1">Send a WhatsApp</p>
                <p className="font-bold text-[18px] text-brand-black">0906 157 9279</p>
              </div>
            </a>

            <div className="flex items-center gap-5 p-5 rounded-[16px] bg-brand-gray border border-brand-gray-200">
              <div className="w-[50px] h-[50px] rounded-[12px] bg-white shadow-sm flex items-center justify-center text-brand-black">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider mb-1">Our Location</p>
                <p className="font-bold text-[16px] text-brand-black">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-black text-white p-8 rounded-[20px]">
            <h3 className="font-display font-bold text-[24px] mb-[20px]">Send a Message</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <div>
                <label className="block text-[13px] font-semibold text-gray-400 mb-2">Your Name</label>
                <input required type="text" className="w-full bg-gray-800 border-none rounded-[10px] px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-400 mb-2">Phone or Email</label>
                <input required type="text" className="w-full bg-gray-800 border-none rounded-[10px] px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange outline-none" placeholder="09012345678" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-gray-400 mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-gray-800 border-none rounded-[10px] px-4 py-3 text-white focus:ring-2 focus:ring-brand-orange outline-none resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="bg-brand-orange text-white font-bold py-3 rounded-[10px] hover:bg-brand-orange-hover mt-2 transition-colors">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

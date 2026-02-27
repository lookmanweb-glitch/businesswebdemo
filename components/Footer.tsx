import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="bg-[#010808] text-white pt-20 pb-10 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-10 lg:px-20 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20 text-sm">
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-white text-base">Start Your Company</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Business Setup</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-base font-bold text-white">Our Services</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Meydan Free Zone</a></li>
            <li><a href="#" className="hover:text-white transition-colors">IFZA</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-base font-bold text-white">Customer Portal</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Check Application Status</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-base font-bold text-white">Cost calculator</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Trade License Issuance</a></li>
          </ul>
        </div>
        <div className="flex flex-col lg:col-span-2 gap-6">
          <h3 className="font-bold text-white text-base">Contact Us</h3>
          <p className="text-gray-400">Start your UAE business today — book a free consultation.</p>
          <a href="mailto:info@businesssetup.ai" className="hover:text-white transition-colors text-blue-400 text-lg font-medium">info@businesssetup.ai</a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border-white/10 border-t pt-10 items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd43aec4-c0fb-4bf4-bd63-8857f4d979ab_320w.png" 
            alt="Logo" 
            className="w-32 h-10 object-contain brightness-0 invert" 
          />
        </div>
        <div className="flex items-center gap-5">
          <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Linkedin size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      <div className="mt-8 text-center md:text-left text-xs text-gray-500">
        <p>© 2025 Businesssetup.ai. All Rights Reserved</p>
      </div>
    </div>
  </footer>
);
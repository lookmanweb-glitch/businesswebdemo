import React from 'react';
import { Globe, Search, User } from 'lucide-react';

export const Header: React.FC = () => (
  <header className="bg-black/20 w-full z-50 border-b relative backdrop-blur-sm">
    <div className="max-w-[1400px] mx-auto pt-10 px-10 pb-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
        <div className="flex-shrink-0 lg:mr-12">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd43aec4-c0fb-4bf4-bd63-8857f4d979ab_320w.png?w=800&q=80" 
            alt="Jafza Jebel Ali Free Zone" 
            className="w-60 h-20 object-cover"
          />
        </div>

        <div className="flex flex-col w-full items-center lg:items-end">
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 lg:gap-6 text-xs font-medium text-white/90 mb-3 tracking-wide">
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Globe size={14} /> Dubai Trade
            </a>
            <span className="hidden lg:block w-px h-3 bg-white/30"></span>
            <a href="#" className="hover:text-white transition-colors">Rules & Regulations</a>
            <span className="hidden lg:block w-px h-3 bg-white/30"></span>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-8 w-full pt-2 gap-x-4 gap-y-4 items-center justify-end">
            <nav className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 text-sm font-bold text-white tracking-wider">
              <a href="#pricing" className="hover:text-blue-400 transition-colors uppercase">Freezone</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors uppercase">Mainland</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition-colors uppercase">Business Setup</a>
              <a href="#services" className="hover:text-blue-400 transition-colors uppercase">SERVICES</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors uppercase">Connect</a>
            </nav>

            <div className="flex items-center gap-4 lg:pl-4 lg:border-l border-white/20 lg:ml-2">
              <button aria-label="Search" className="text-white hover:text-blue-400 transition-colors"><Search size={20} /></button>
              <button aria-label="User Profile" className="text-white hover:text-blue-400 transition-colors"><User size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
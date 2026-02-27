import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-10">
            <h2 className="text-2xl font-bold text-[#1F1F2C] tracking-tight leading-[1.15]">We help you establish your business in any jurisdiction within the UAE — mainland, free zones, or offshore.</h2>
            <div className="flex items-center gap-4">
              <button onClick={() => setActiveIndex(prev => (prev - 1 + SERVICES.length) % SERVICES.length)} className="p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all"><ArrowLeft size={24} /></button>
              <button onClick={() => setActiveIndex(prev => (prev + 1) % SERVICES.length)} className="p-3 rounded-full border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all"><ArrowRight size={24} /></button>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col lg:flex-row h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {SERVICES.map((s, i) => (
              <div 
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                className={`relative overflow-hidden cursor-pointer transition-[flex-grow] duration-500 ease-in-out ${i === activeIndex ? 'flex-[3]' : 'flex-1'}`}
              >
                <img src={s.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" alt={s.title} />
                <div className={`absolute inset-0 bg-[#004899]/90 transition-opacity duration-500 ${i === activeIndex ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${i === activeIndex ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{s.title}</h3>
                  <div className={`overflow-hidden transition-all duration-500 ${i === activeIndex ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-blue-100 text-lg mb-8">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 uppercase font-semibold text-sm tracking-wide group">
                      Read more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Box, Wifi, User, Check } from 'lucide-react';

const StepCard: React.FC<{ number: string, title: string, desc: string, icon?: React.ReactNode, isPayment?: boolean, isID?: boolean, isDoc?: boolean }> = ({ number, title, desc, icon, isPayment, isID, isDoc }) => (
  <div className="group relative bg-[#F9F9F8] rounded-[24px] p-6 flex flex-col h-[360px] hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg">
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-[10px] font-bold text-gray-500 mb-4 shadow-sm">{number}</span>
    <h3 className="text-xl font-semibold text-blue-700 tracking-tight mb-2">{title}</h3>
    <p className="text-xs text-gray-500 font-medium mb-6 leading-relaxed">{desc}</p>
    <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-white/50 rounded-xl border border-gray-100/50">
      {isPayment && (
        <div className="relative z-10 group-hover:scale-105 transition-transform duration-500">
          <div className="relative w-40 h-24 bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] rounded-xl shadow-xl transform -rotate-6 border border-gray-700 p-3.5 z-20 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="w-7 h-5 rounded bg-yellow-600/20 border border-yellow-600/40 flex items-center justify-center"><div className="w-full h-px bg-yellow-600/30"></div></div>
              <Wifi size={14} className="text-gray-600" />
            </div>
            <div className="space-y-2">
              <div className="flex gap-1.5 opacity-50"><div className="w-8 h-1 bg-white rounded-full"></div><div className="w-5 h-1 bg-white rounded-full"></div></div>
              <div className="flex justify-between items-center">
                <div className="w-16 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="flex -space-x-1.5">
                  <div className="w-4 h-4 rounded-full bg-red-500/90 z-10"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-500/90"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isID && (
        <div className="relative w-32 h-44 bg-white border border-gray-200 rounded-xl shadow-md flex flex-col items-center p-3 overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 mb-3 flex items-center justify-center text-gray-300"><User className="opacity-50" fill="currentColor" /></div>
          <div className="w-16 h-1.5 bg-gray-100 rounded-full mb-2"></div>
          <div className="w-20 h-1.5 bg-gray-100 rounded-full mb-4"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent border-b border-green-400/30 animate-scan-line pointer-events-none"></div>
          <div className="absolute -right-2 top-4 bg-white text-green-500 p-1 rounded-full shadow-md transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-300"><Check size={14} strokeWidth={4} /></div>
        </div>
      )}
      {isDoc && (
        <div className="relative w-32 h-44 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="h-10 bg-gray-50/80 border-b border-gray-100 flex items-center px-3 gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-100/50 border border-blue-200/50"></div>
            <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
          </div>
          <div className="p-3 space-y-2.5">
            <div className="w-full h-1 bg-gray-100 rounded-full"></div>
            <div className="w-full h-1 bg-gray-100 rounded-full"></div>
            <div className="pt-6 flex justify-between items-end">
              <div className="space-y-1.5"><div className="w-8 h-1 bg-gray-200 rounded-full"></div><div className="w-10 h-1 bg-gray-200 rounded-full"></div></div>
              <div className="w-8 h-8 rounded-full bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-500">★</div>
            </div>
          </div>
        </div>
      )}
      {!isPayment && !isID && !isDoc && icon}
    </div>
  </div>
);

export const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="overflow-hidden py-24 bg-white relative">
    <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M100,0 V400 M300,100 V600 M500,50 V500 M700,150 V600" stroke="#A5F3FC" strokeWidth="1" fill="none" opacity="0.5"></path>
      </svg>
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="lg:text-5xl text-4xl font-semibold text-stone-800 tracking-tight mb-6">Launch Your Vision With Your Business License</h2>
        <p className="text-slate-500 text-lg">Your license in 4 simple steps:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StepCard number="1" title="Build Foundation" desc="Expert advice to structure your company for long-term success." icon={<Box className="text-gray-400" size={20} />} />
        <StepCard number="2" title="Apply & Pay" desc="Submit application and payment via our secure encrypted portal." isPayment />
        <StepCard number="3" title="ID Verification" desc="Complete your digital identity verification in just a few clicks." isID />
        <StepCard number="4" title="Get License" desc="Receive your business license and documents within 2 hours." isDoc />
      </div>
    </div>
  </section>
);
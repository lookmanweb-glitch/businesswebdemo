import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { BIZ_OPTIONS } from '../data';
import { Header } from './Header';

export const Hero: React.FC = () => {
  const [bizTypeIndex, setBizTypeIndex] = useState(0);
  const [calcState, setCalcState] = useState({ progress: [0, 0, 0], text: "Analyzing needs...", step: "Step 1/3" });

  useEffect(() => {
    const timer = setInterval(() => {
      setBizTypeIndex(prev => (prev + 1) % BIZ_OPTIONS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let cycle = 0;
    const interval = setInterval(() => {
      cycle = (cycle + 1) % 4;
      if (cycle === 0) setCalcState({ progress: [0, 0, 0], text: "Analyzing needs...", step: "Step 1/3" });
      else if (cycle === 1) setCalcState({ progress: [100, 0, 0], text: "Calculating fees...", step: "Step 2/3" });
      else if (cycle === 2) setCalcState({ progress: [100, 100, 0], text: "Checking availability...", step: "Step 3/3" });
      else if (cycle === 3) setCalcState({ progress: [100, 100, 100], text: "Optimization Complete", step: "Done" });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-center flex flex-col w-full bg-[url(https://images.unsplash.com/photo-1637825891028-564f672aa42c?w=3840&q=80)] bg-cover relative">
      <Header />
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-2 z-10">
            <h1 className="leading-[1.15] lg:text-5xl text-4xl font-normal text-stone-300 tracking-tight">
              AI-Powered UAE Business Setup
            </h1>
            <div className="mt-10 lg:mt-16">
              <p className="lg:text-2xl text-xl font-normal text-amber-100">Starting From</p>
              <p className="lg:text-5xl text-4xl font-semibold text-blue-600 tracking-tight mt-2">Dhs 7,000</p>
            </div>
          </div>

          <div className="min-h-[500px] flex w-full relative items-center justify-center overflow-hidden">
            <div className="bg-center bg-no-repeat bg-contain w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ddb754e-510f-4bf4-99fa-8dce7134efcd_800w.png?w=800&q=80)] rounded-2xl p-1 absolute inset-0 opacity-80"></div>
            <div className="w-full h-[400px] max-w-[400px] relative">
              <div className="z-20 bg-white/90 w-[280px] border-white/40 border rounded-2xl p-6 absolute top-10 right-0 shadow-2xl backdrop-blur-xl transition-all duration-700">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 tracking-tight">Business Type</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {BIZ_OPTIONS.map((opt, i) => (
                    <button 
                      key={opt}
                      className={`px-3 py-1.5 rounded-lg text-[10px] transition-all duration-300 border ${
                        i === bizTypeIndex 
                        ? 'font-semibold border-blue-600 bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-600/20' 
                        : 'font-medium border-gray-200 bg-white text-gray-500'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div 
                  className="absolute w-6 h-6 z-50 pointer-events-none drop-shadow-xl transition-all duration-500 ease-in-out"
                  style={{ 
                    transform: `translate(${[20, 100, 180, 50][bizTypeIndex]}px, ${[50, 50, 50, 90][bizTypeIndex]}px)`
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform -rotate-12">
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="black" stroke="white" stroke-width="1.5"></path>
                  </svg>
                </div>
              </div>

              <div className="z-30 transition-all duration-500 bg-white/90 w-[280px] border-white/40 border rounded-2xl p-6 absolute bottom-10 left-0 shadow-2xl backdrop-blur-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight">Cost Est.</h3>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100">{calcState.step}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-6">
                  {calcState.progress.map((p, i) => (
                    <div key={i} className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 transition-all duration-700 ease-out" style={{ width: `${p}%` }}></div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-500">
                    <Loader2 className="animate-spin w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-800 tracking-tight transition-all duration-300">{calcState.text}</span>
                    <span className="text-[10px] text-gray-400 font-medium">AI Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
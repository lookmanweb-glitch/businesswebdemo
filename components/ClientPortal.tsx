import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { STEPS_DATA } from '../data';

export const ClientPortalSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % STEPS_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#0D0518] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover" alt="city" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <h2 className="lg:text-4xl text-4xl font-medium text-white tracking-tight">Your Business Setup, Fully <span className="text-purple-200/80">Transparent</span></h2>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-white font-medium">Track Your Application</h3>
              <button className="w-fit bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 px-8 rounded-lg transition-all backdrop-blur-sm">Register Now</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            <div className="flex flex-col gap-3 w-full md:w-5/12 justify-center">
              {STEPS_DATA.map((step, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 border cursor-pointer ${i === activeStep ? 'border-purple-500/50 bg-white/10 shadow-lg' : 'border-transparent opacity-60'}`}
                >
                  <div className={`p-2 rounded-full transition-colors ${i === activeStep ? 'bg-blue-500 text-white' : 'bg-white/10 text-gray-400'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                    <p className="text-xs text-gray-400">Application cycle</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-7/12 relative group">
              <div className="relative bg-[#F3F4F6] rounded-[1.75rem] p-6 min-h-[360px] flex flex-col shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-indigo-900 font-bold text-lg">Client Portal</h3>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] font-semibold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">Live</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex gap-4 items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-blue-500 shrink-0">{STEPS_DATA[activeStep].icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm transition-all duration-300">{STEPS_DATA[activeStep].title}</h4>
                      <p className="text-xs text-blue-500 font-medium mt-0.5">Real-time Process Tracking</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-in-out" style={{ width: STEPS_DATA[activeStep].width }}></div>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed min-h-[40px] transition-all duration-300">{STEPS_DATA[activeStep].desc}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-gray-400">
                  <Lock className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] font-medium tracking-wide">Encrypted & Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
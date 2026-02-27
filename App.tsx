import React, { useEffect } from 'react';
import {
  Globe, Zap, ShieldCheck, Coins, Laptop2,
  ArrowUpRight
} from 'lucide-react';

import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { CostEstimateForm } from './components/CostEstimateForm';
import { ClientPortalSection } from './components/ClientPortal';
import { ServicesSection } from './components/Services';
import { AgenciesMarquee } from './components/AgenciesMarquee';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';

const FeatureItem: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="group flex flex-col hover:-translate-y-1 transition-transform duration-300">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10B981]/20 to-transparent border border-[#10B981]/30 flex items-center justify-center mb-4 group-hover:bg-[#10B981]/30 transition-all">{icon}</div>
    <h3 className="group-hover:text-[#4ADE80] transition-colors text-lg font-semibold text-white tracking-tight mb-2">{title}</h3>
    <p className="text-blue-100/70 text-sm leading-relaxed">{desc}</p>
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen selection:bg-blue-100 selection:text-blue-900 scroll-smooth animated-page-bg">
      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-24" data-reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative rounded-[2rem] overflow-hidden h-[500px] p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-[#2563EB] to-[#1E3A8A]">
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
            <span className="text-4xl font-medium text-white tracking-wide z-10 relative">Mainland</span>
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <img src="https://png.pngtree.com/png-vector/20250729/ourmid/pngtree-burj-khalifa-illuminated-at-night-showcasing-its-impressive-architecture-isolated-on-png-image_16930871.webp?w=800&q=80" alt="Burj Khalifa" className="transform group-hover:scale-105 transition-transform duration-500 w-100 h-80 object-contain drop-shadow-2xl" />
            </div>
            <h3 className="text-[1.75rem] leading-snug z-10 text-lg font-bold text-white relative">Mainland Company Formation in Dubai</h3>
          </div>
          <div className="group relative rounded-[2rem] overflow-hidden h-[500px] p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-[#5D4037] to-[#3E2723]">
            <span className="z-10 text-4xl font-medium text-white tracking-wide relative">Free Zone</span>
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/052/295/170/small/a-city-with-tall-buildings-and-skyscrapers-png.png?w=800&q=80" alt="Freezone" className="transform group-hover:scale-105 transition-transform duration-500 grayscale-[20%] sepia-[30%] w-100 h-auto object-contain drop-shadow-2xl" />
            </div>
            <h3 className="text-[1.75rem] leading-snug text-lg font-bold text-white z-10 relative">UAE Freezone Company Formation</h3>
          </div>
          <div className="group relative rounded-[2rem] overflow-hidden h-[500px] p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-[#065f46] to-[#022c22]">
            <span className="z-10 text-4xl font-medium text-white tracking-wide relative">Meydan</span>
            <div className="z-10 flex-1 flex relative items-center justify-center">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5246bf4e-5c3e-46b1-8897-596d383c10cf_800w.png" alt="Meydan" className="transform group-hover:scale-105 transition-transform duration-500 w-30 h-60 object-contain drop-shadow-2xl" />
            </div>
            <h3 className="text-[1.75rem] leading-snug z-10 text-lg font-bold text-white relative">Meydan Freezone Company Formation</h3>
          </div>
        </div>
      </div>

      <div data-reveal><HowItWorks /></div>
      <CostEstimateForm />
      <div data-reveal><ClientPortalSection /></div>

      <section className="overflow-hidden bg-neutral-50 py-24" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:p-12 bg-gradient-to-br from-[#0567c2] to-[#1c0165] rounded-[2.5rem] p-16 relative shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 flex flex-col pt-4">
                <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">Why Setup a <span className="text-sky-400">Business in UAE</span></h2>
                <p className="leading-relaxed text-lg text-blue-100/80 max-w-md mb-8">We take care of all documentation from start to finish, allowing you to focus on your business.</p>
                <button className="group w-fit hover:bg-[#059669] transition-all font-medium text-white bg-sky-400 rounded-full py-3.5 px-8 shadow-lg flex items-center gap-2">Get In Touch <ArrowUpRight size={18} /></button>
                <div className="relative mt-auto w-full flex justify-center lg:justify-start lg:-ml-4 lg:-mb-16 pt-12">
                  <div className="bg-gradient-to-br from-[#005ef5] to-[#047db9] opacity-90 w-72 h-80 absolute bottom-0" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/640d6a93-b8f2-453d-b866-9fe780f47894_1600w.png" alt="Consultant" className="z-10 h-[420px] object-contain relative drop-shadow-2xl" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid md:grid-cols-2 gap-y-12 gap-x-8">
                  <FeatureItem icon={<Globe className="text-sky-400" />} title="100% Control Of Your Business" desc="Full control without needing a local partner in most sectors." />
                  <FeatureItem icon={<Globe className="text-sky-400" />} title="Access To A Global Market" desc="Strategic location connecting Europe, Asia, and Africa." />
                  <FeatureItem icon={<Zap className="text-sky-400" />} title="Fast Company Setup" desc="Quick and efficient business registration in many free zones." />
                  <FeatureItem icon={<ShieldCheck className="text-sky-400" />} title="Complete Confidentiality" desc="Strong legal protections for business and personal info." />
                  <FeatureItem icon={<Coins className="text-sky-400" />} title="Business-Friendly Tax Regimes" desc="No corporate or personal income taxes in most free zones." />
                  <FeatureItem icon={<Laptop2 className="text-sky-400" />} title="No Physical Presence Required" desc="Set up your business remotely without being physically present." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div data-reveal><Pricing /></div>
      <div data-reveal><ServicesSection /></div>
      <div data-reveal><AgenciesMarquee /></div>

      <section className="max-w-7xl mx-auto px-6 py-24" data-reveal>
        <div className="bg-[#F0F6FF] rounded-[2.5rem] p-8 lg:p-20 relative overflow-hidden bg-[url(https://images.unsplash.com/photo-1619252584172-a83a949b6efd?w=2560&q=80)] bg-cover group">
          <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/30 transition-colors duration-500"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left space-y-8">
              <h2 className="text-4xl font-bold text-white tracking-tight drop-shadow-md">Ready to Launch Your Business?</h2>
              <p className="text-lg font-medium text-white/90">Contact the best business setup consultants today for a free customized quotation.</p>
              <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95">Book a Free Consultation</button>
            </div>
            <div className="flex -space-x-8 lg:-space-x-10">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100 hover:z-50 hover:scale-110 transition-all duration-300">
                  <img src={`https://picsum.photos/200/200?random=${i + 10}`} className="w-full h-full object-cover" alt="User" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div data-reveal><ContactSection /></div>
      <Footer />
    </main>
  );
};

export default App;

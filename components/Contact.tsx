import React from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

export const ContactSection: React.FC = () => (
  <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col">
          <h2 className="lg:text-7xl text-5xl font-medium text-[#1a1a1a] tracking-tight font-jakarta mb-6 leading-[1.1]">Smart. Simple. Compliant</h2>
          <p className="text-lg text-gray-600 max-w-md mb-12">Have questions about setting up a business in the UAE? Our experts are here to guide you.</p>
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/508d664d-f35a-44cf-a6e2-39d22a009f8f_1600w.png" className="object-cover max-w-md" alt="Consultant portrait" />
        </div>
        <div className="bg-[#F9F9F9] rounded-[2rem] p-8 lg:p-12 shadow-sm">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="block text-lg text-gray-700 font-jakarta mb-2">Full name*</label>
              <input type="text" required className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 transition-colors" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-lg text-gray-700 font-jakarta mb-2">Email*</label>
                <input type="email" required className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div className="group">
                <label className="block text-lg text-gray-700 font-jakarta mb-2">Phone number</label>
                <input type="tel" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-lg text-gray-700 font-jakarta mb-2">Company name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div className="group relative">
                <label className="block text-lg text-gray-700 font-jakarta mb-2">Inquiry Reason*</label>
                <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-blue-600 appearance-none cursor-pointer">
                  <option value="setup">Business Setup</option>
                  <option value="visa">Visa Services</option>
                  <option value="consulting">Consulting</option>
                </select>
                <ChevronRight className="absolute right-0 bottom-3 rotate-90 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
            <button type="submit" className="hover:bg-[#10B981] inline-flex transition-all text-sm font-bold text-neutral-100 bg-sky-400 rounded-md px-8 py-4 shadow-sm gap-2 items-center transform hover:scale-105">
              Lets Connect <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
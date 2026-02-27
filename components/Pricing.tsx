import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data';

const PricingCard: React.FC<{ plan: PricingPlan, useVisa: boolean, onToggleVisa: (val: boolean) => void }> = ({ plan, useVisa, onToggleVisa }) => (
  <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full transform hover:-translate-y-1">
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[#1F1F2C] mb-3">{plan.title}</h3>
      <div className="text-4xl font-bold text-blue-700 tracking-tight mb-4 transition-all duration-300">
        AED {(useVisa ? plan.visaPrice : plan.basePrice).toLocaleString()}
      </div>
      <p className="text-sm text-gray-500 min-h-[60px]">{plan.desc}</p>
    </div>
    <div className="border-b border-gray-100 mb-8"></div>
    {!plan.isOffshore && (
      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => onToggleVisa(false)}
          className={`flex-1 py-3 text-sm font-semibold rounded transition-all ${!useVisa ? 'text-white bg-blue-700 border-2 border-blue-700' : 'text-[#1F1F2C] border-2 border-gray-200 bg-white hover:border-blue-700'}`}
        >
          Without Visa
        </button>
        <button 
          onClick={() => onToggleVisa(true)}
          className={`flex-1 py-3 text-sm font-semibold rounded transition-all ${useVisa ? 'text-white bg-blue-700 border-2 border-blue-700' : 'text-[#1F1F2C] border-2 border-gray-200 bg-white hover:border-blue-700'}`}
        >
          With Visa
        </button>
      </div>
    )}
    {plan.isOffshore && <div className="h-[50px] mb-8"></div>}
    <ul className="space-y-4 mb-10 flex-1">
      {plan.features.map(f => (
        <li key={f} className="flex items-start gap-3 text-sm text-[#1F1F2C]">
          <Check size={20} className="text-green-500 shrink-0" /> {f}
        </li>
      ))}
    </ul>
    <button className="w-full py-4 rounded border border-gray-200 text-[#1F1F2C] font-semibold text-sm bg-white hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all">Book A Consultation</button>
  </div>
);

export const Pricing: React.FC = () => {
  const [useVisa, setUseVisa] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#1F1F2C] tracking-tight">Choose your right plan!</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Select from best plans, ensuring a perfect match.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
          {PRICING_PLANS.map(plan => (
            <PricingCard 
              key={plan.title} 
              plan={plan} 
              useVisa={useVisa} 
              onToggleVisa={setUseVisa} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
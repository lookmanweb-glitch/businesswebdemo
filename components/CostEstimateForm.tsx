import React, { useState } from 'react';

export const CostEstimateForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState("");
  
  const activities = ["E-commerce", "General Trading", "Media", "Freelancing", "IT Consultancy", "PR"];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 lg:p-14">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Get an estimate of your setup costs</h2>
            <p className="text-slate-500">Begin your journey by filling in the details below. Our precise cost calculator ensures you pay only for what your business needs.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-2xl overflow-hidden bg-[#0F172A] min-h-[460px] flex items-end group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Consultant" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent z-20"></div>
              <div className="relative z-30 p-8 w-full">
                <div className="text-white text-xl font-light mb-1 opacity-90">Determine your business setup cost in</div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB] tracking-tighter">45</span>
                  <span className="text-3xl font-bold text-white tracking-tight">seconds!</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full pt-2">
              <div className="mb-6 flex gap-2">
                {[1, 2, 3].map(s => (
                  <div key={s} className={`h-1 flex-1 rounded-full transition-all duration-300 ${s <= currentStep ? 'bg-blue-600' : 'bg-gray-100'}`}></div>
                ))}
              </div>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {currentStep === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <label className="block text-slate-800 font-semibold mb-4">Select your Business Activity <span className="text-blue-600">*</span></label>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {activities.map(activity => (
                        <button 
                          key={activity} 
                          type="button" 
                          onClick={() => setSelectedActivity(activity)}
                          className={`px-5 py-2.5 rounded border transition-all ${selectedActivity === activity ? 'border-[#10B981] text-[#10B981] bg-[#10B981]/5 ring-1 ring-[#10B981]' : 'border-gray-200 text-slate-600 bg-white hover:border-[#10B981]'}`}
                        >
                          {activity}
                        </button>
                      ))}
                    </div>
                    <input 
                      type="text" 
                      value={selectedActivity}
                      onChange={(e) => setSelectedActivity(e.target.value)}
                      className="w-full h-[52px] px-4 rounded border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm" 
                      placeholder="Or type your activity here..." 
                    />
                  </div>
                )}
                
                {currentStep === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-4">
                    <label className="block text-slate-800 font-semibold">Tell us more</label>
                    <select className="w-full h-[52px] px-4 rounded border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 shadow-sm">
                      <option>Number of shareholders</option>
                      <option>1 Shareholder</option>
                      <option>2-5 Shareholders</option>
                      <option>6+ Shareholders</option>
                    </select>
                    <select className="w-full h-[52px] px-4 rounded border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 shadow-sm">
                      <option>Visa Requirements</option>
                      <option>No Visa needed</option>
                      <option>1-2 Visas</option>
                      <option>3+ Visas</option>
                    </select>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-4">
                    <label className="block text-slate-800 font-semibold">Your Contact Details</label>
                    <input type="email" placeholder="Email Address" className="w-full h-[52px] px-4 rounded border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 shadow-sm" />
                    <input type="tel" placeholder="Phone Number" className="w-full h-[52px] px-4 rounded border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 shadow-sm" />
                  </div>
                )}

                <div className="flex gap-4">
                  {currentStep > 1 && (
                    <button 
                      type="button" 
                      onClick={() => setCurrentStep(prev => prev - 1)}
                      className="px-8 py-3.5 rounded border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button 
                    type="button" 
                    onClick={() => currentStep < 3 ? setCurrentStep(prev => prev + 1) : alert("Estimating...")}
                    className="flex-1 lg:max-w-[160px] py-3.5 rounded bg-gradient-to-r from-[#10B981] to-[#2563EB] text-white font-bold shadow-lg hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5"
                  >
                    {currentStep === 3 ? "Calculate" : "Next"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
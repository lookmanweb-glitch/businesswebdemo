import React, { useMemo, useState } from 'react';

type StepConfig = {
  id: number;
  title: string;
  hint: string;
};

const stepConfig: StepConfig[] = [
  { id: 1, title: 'Business Activity', hint: 'Tell us what you do' },
  { id: 2, title: 'Setup Details', hint: 'Shareholders and visas' },
  { id: 3, title: 'Contact', hint: 'Receive your quote' }
];

export const CostEstimateForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [shareholders, setShareholders] = useState('');
  const [visaRequirements, setVisaRequirements] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const activities = ['E-commerce', 'General Trading', 'Media', 'Freelancing', 'IT Consultancy', 'PR'];

  const estimatedCost = useMemo(() => {
    let cost = 8400;

    if (selectedActivity === 'E-commerce') cost += 900;
    if (selectedActivity === 'Media' || selectedActivity === 'PR') cost += 1200;
    if (selectedActivity === 'IT Consultancy') cost += 1500;

    if (shareholders === '2-5 Shareholders') cost += 700;
    if (shareholders === '6+ Shareholders') cost += 1400;

    if (visaRequirements === '1-2 Visas') cost += 900;
    if (visaRequirements === '3+ Visas') cost += 2000;

    return cost;
  }, [selectedActivity, shareholders, visaRequirements]);

  const canProceed =
    (currentStep === 1 && selectedActivity.trim().length > 0)
    || (currentStep === 2 && shareholders.length > 0 && visaRequirements.length > 0)
    || (currentStep === 3 && email.length > 3 && phone.length > 5);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setShowSuccess(true);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-reveal>
      <div className="estimate-blob absolute -top-16 left-10 w-72 h-72 bg-sky-300/25 blur-3xl rounded-full pointer-events-none" />
      <div className="estimate-blob-delayed absolute -bottom-20 right-8 w-80 h-80 bg-emerald-300/25 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[32px] shadow-2xl border border-gray-100 p-8 lg:p-14">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Get an estimate of your setup costs</h2>
            <p className="text-slate-500">A redesigned smart assistant that reacts instantly as you update your setup preferences.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative rounded-2xl overflow-hidden bg-[#0F172A] min-h-[500px] flex items-end group shadow-2xl">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Consultant" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/45 to-transparent z-20" />
              <div className="relative z-30 p-8 w-full space-y-5">
                <div>
                  <div className="text-white text-xl font-light mb-1 opacity-90">Determine your business setup cost in</div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#2563EB] tracking-tighter">45</span>
                    <span className="text-3xl font-bold text-white tracking-tight">seconds!</span>
                  </div>
                </div>

                <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-md transition-all duration-300 group-hover:bg-white/15">
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-100">Live estimate</p>
                  <p className="text-3xl font-bold text-white mt-1">AED {estimatedCost.toLocaleString()}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {selectedActivity && <span className="estimate-pill">{selectedActivity}</span>}
                    {shareholders && <span className="estimate-pill">{shareholders}</span>}
                    {visaRequirements && <span className="estimate-pill">{visaRequirements}</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full pt-2">
              <div className="mb-2 flex justify-between text-xs text-slate-500">
                <span>Step {currentStep} of 3</span>
                <span>{Math.round((currentStep / 3) * 100)}% complete</span>
              </div>

              <div className="mb-6 flex gap-3">
                {stepConfig.map((step) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setCurrentStep(step.id)}
                    className={`text-left flex-1 rounded-xl border px-3 py-2 transition-all duration-300 ${step.id === currentStep ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-200 bg-white hover:border-blue-300'}`}
                  >
                    <p className="text-xs font-semibold text-slate-700">{step.title}</p>
                    <p className="text-[11px] text-slate-500">{step.hint}</p>
                  </button>
                ))}
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {currentStep === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <label className="block text-slate-800 font-semibold mb-4">Select your Business Activity <span className="text-blue-600">*</span></label>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {activities.map((activity) => (
                        <button
                          key={activity}
                          type="button"
                          onClick={() => setSelectedActivity(activity)}
                          className={`px-5 py-2.5 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${selectedActivity === activity ? 'border-[#10B981] text-[#10B981] bg-[#10B981]/5 ring-1 ring-[#10B981] shadow-md shadow-emerald-100' : 'border-gray-200 text-slate-600 bg-white hover:border-[#10B981]'}`}
                        >
                          {activity}
                        </button>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={selectedActivity}
                      onChange={(e) => setSelectedActivity(e.target.value)}
                      className="w-full h-[52px] px-4 rounded-xl border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
                      placeholder="Or type your activity here..."
                    />
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-4">
                    <label className="block text-slate-800 font-semibold">Tell us more</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['1 Shareholder', '2-5 Shareholders', '6+ Shareholders'].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setShareholders(item)}
                          className={`rounded-xl border p-3 text-sm transition-all ${shareholders === item ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-blue-300 text-slate-600'}`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['No Visa needed', '1-2 Visas', '3+ Visas'].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setVisaRequirements(item)}
                          className={`rounded-xl border p-3 text-sm transition-all ${visaRequirements === item ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 hover:border-emerald-300 text-slate-600'}`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-4">
                    <label className="block text-slate-800 font-semibold">Your Contact Details</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" className="w-full h-[52px] px-4 rounded-xl border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 shadow-sm" />
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="w-full h-[52px] px-4 rounded-xl border border-gray-300 text-slate-700 text-sm focus:outline-none focus:border-blue-500 shadow-sm" />

                    {showSuccess && (
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 text-sm">
                        Thanks! Our advisor will contact you shortly. Estimated setup budget: <strong>AED {estimatedCost.toLocaleString()}</strong>.
                      </div>
                    )}
                  </div>
                )}

                <div className="flex gap-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        setShowSuccess(false);
                        setCurrentStep((prev) => prev - 1);
                      }}
                      className="px-8 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={!canProceed}
                    onClick={handleNext}
                    className="estimate-primary-btn flex-1 lg:max-w-[200px] py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] to-[#2563EB] text-white font-bold shadow-lg hover:shadow-xl hover:opacity-95 transition-all transform hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {currentStep === 3 ? 'Get My Estimate' : 'Next'}
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

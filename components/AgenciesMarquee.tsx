import React from 'react';

export const AgenciesMarquee: React.FC = () => {
  const logos = [
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
  ];
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="max-w-xl">
            <h2 className="lg:text-5xl text-4xl font-semibold text-stone-800 tracking-tight mb-6">We Work Closely With All Government Agencies</h2>
            <p className="lg:text-xl text-gray-500 mb-10">We’re always on the same page with government agencies, working together to get the job done!</p>
          </div>
          <div className="h-[600px] relative fade-mask-y overflow-hidden">
            <div className="grid grid-cols-3 gap-6 h-full">
              {[1, 2, 3].map(col => (
                <div key={col} className={`flex flex-col gap-6 ${col === 2 ? 'animate-vertical-marquee-slow pt-24' : 'animate-vertical-marquee'}`}>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-sm aspect-square flex items-center justify-center p-8">
                      <img src={logos[i % 2]} className="w-full h-full object-contain opacity-80 mix-blend-multiply" alt="Partner Agency" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
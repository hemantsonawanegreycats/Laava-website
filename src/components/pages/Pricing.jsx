import React from 'react';
import SEO from '../SEO';


const plans = [
  {
    name: 'Basic',
    desc: 'Essential research for new investors getting started with equity markets.',
    features: [
      'Stock recommendations',
      'Top Picks access',
      'Real-time notifications',
      'Performance tracking',
    ],
    highlight: false,
  },
  {
    name: 'Premium',
    desc: 'Full access — for serious traders and active investors.',
    features: [
      'Everything in Basic',
      'Multibagger & Short Trades',
      'Futures & Options calls',
      'MTF & Commodity calls',
      'Advanced risk analytics',
      'Priority support',
    ],
    highlight: true,
  },
];

const Pricing = () => (
  <div className="bg-[#030911] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8">
    <SEO 
      title="Laava Pricing – Affordable Stock Advisory Plans for India"
      description="Choose from Laava’s flexible pricing plans. Get expert stock market advisory at transparent rates, designed for Indian investors seeking clarity and value."
    />
    <div className="max-w-6xl mx-auto">

      <div className="text-center mb-20">
        <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-5 opacity-80">Pricing</h2>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 text-hover-gradient">
          Plans for every <span className="text-gradient-accent italic">investor</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">
          Start with a free trial. Current pricing, durations, and discounts are shown live inside the app.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={`group rounded-[2rem] p-10 backdrop-blur-sm relative transition-all duration-500 hover:translate-y-[-8px] ${p.highlight ? 'bg-gradient-to-b from-[#197DFF]/20 to-[#111318]/90 border-2 border-[#197DFF] shadow-[0_0_40px_rgba(25,125,255,0.15)]' : 'bg-[#111318]/80 border border-white/5 hover:border-white/10'}`}>
            {p.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#197DFF] text-white text-[10px] font-bold tracking-[2px] uppercase px-6 py-2 rounded-full shadow-lg">Most Featured</div>}
            <h3 className="text-3xl font-bold text-white mb-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">{p.name}</h3>
            <p className="text-[#ECEDEE]/60 text-[15px] mb-8 min-h-[44px] font-light leading-relaxed">{p.desc}</p>
            <ul className="space-y-4 mb-10">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-4 text-[#ECEDEE]/80 text-[15px]">
                  <i className="fa-solid fa-check text-[#22A756] mt-1 text-lg"></i>
                  <span className="font-light">{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className={`block text-center py-4 rounded-2xl font-bold text-[16px] transition-all tracking-tight ${p.highlight ? 'bg-white text-black hover:bg-gray-100 shadow-xl' : 'bg-[#1E2021] text-white border border-white/5 hover:bg-[#2a2d2e]'}`}>
              View in App
            </a>
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-[#111318]/50 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:border-white/10 group">
          <i className="fa-solid fa-gift text-[#22A756] text-2xl mt-1 group-hover:scale-110 transition-transform"></i>
          <div>
            <h4 className="text-white font-semibold mb-1 text-lg">Free Trial</h4>
            <p className="text-[14px] text-[#ECEDEE]/60 font-light">Try Laava free before you subscribe.</p>
          </div>
        </div>
        <div className="bg-[#111318]/50 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:border-white/10 group">
          <i className="fa-solid fa-users text-[#197DFF] text-2xl mt-1 group-hover:scale-110 transition-transform"></i>
          <div>
            <h4 className="text-white font-semibold mb-1 text-lg">Refer & Earn</h4>
            <p className="text-[14px] text-[#ECEDEE]/60 font-light">Earn ₹250 per successful referral.</p>
          </div>
        </div>
        <div className="bg-[#111318]/50 border border-white/5 rounded-2xl p-6 flex items-start gap-4 transition-all hover:border-white/10 group">
          <i className="fa-solid fa-shield-halved text-[#F5A623] text-2xl mt-1 group-hover:scale-110 transition-transform"></i>
          <div>
            <h4 className="text-white font-semibold mb-1 text-lg">Secure Payments</h4>
            <p className="text-[14px] text-[#ECEDEE]/60 font-light">Payments processed securely via PayU.</p>
          </div>
        </div>
      </div>

      <p className="text-center text-[#ECEDEE]/40 text-sm mt-16 max-w-2xl mx-auto font-light leading-relaxed">
        Plan prices, durations, and offers are managed in-app and governed by SEBI guidelines. Download the Laava app to see current pricing and subscribe.
      </p>
    </div>
  </div>
);

export default Pricing;

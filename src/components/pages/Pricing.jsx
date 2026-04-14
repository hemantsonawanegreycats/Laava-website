import React from 'react';

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
  <div className="bg-[#030911] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Pricing</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.1] mb-6">
          Plans for every <span className="bg-gradient-to-r from-[#E8F2FF] to-[#A4CCFF] bg-clip-text text-transparent">investor</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">
          Start with a free trial. Current pricing, durations, and discounts are shown live inside the app.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className={`card-hover rounded-2xl p-8 backdrop-blur-sm relative ${p.highlight ? 'bg-gradient-to-b from-[#197DFF]/20 to-[#1E2021]/50 border-2 border-[#197DFF]' : 'bg-[#1E2021]/50 border border-[#313131]'}`}>
            {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#197DFF] text-white text-[11px] font-bold tracking-[1px] uppercase px-4 py-1 rounded-full">Most Features</div>}
            <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
            <p className="text-[#ECEDEE]/60 text-[14px] mb-6 min-h-[40px]">{p.desc}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-[#ECEDEE]/80 text-[14px]">
                  <i className="fa-solid fa-check text-[#22A756] mt-1"></i>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className={`block text-center py-3 rounded-xl font-bold transition-all ${p.highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#1E2021] text-white border border-[#313131] hover:bg-[#2a2d2e]'}`}>
              View in App
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <div className="bg-[#1E2021]/40 border border-[#313131] rounded-xl p-5 flex items-start gap-3">
          <i className="fa-solid fa-gift text-[#22A756] text-xl mt-1"></i>
          <div>
            <h4 className="text-white font-semibold mb-1">Free Trial</h4>
            <p className="text-[13px] text-[#ECEDEE]/70">Try Laava free before you subscribe.</p>
          </div>
        </div>
        <div className="bg-[#1E2021]/40 border border-[#313131] rounded-xl p-5 flex items-start gap-3">
          <i className="fa-solid fa-users text-[#197DFF] text-xl mt-1"></i>
          <div>
            <h4 className="text-white font-semibold mb-1">Refer & Earn</h4>
            <p className="text-[13px] text-[#ECEDEE]/70">Earn ₹250 (Basic) or ₹1,000 (Premium) per successful referral.</p>
          </div>
        </div>
        <div className="bg-[#1E2021]/40 border border-[#313131] rounded-xl p-5 flex items-start gap-3">
          <i className="fa-solid fa-shield-halved text-[#F5A623] text-xl mt-1"></i>
          <div>
            <h4 className="text-white font-semibold mb-1">Secure Payments</h4>
            <p className="text-[13px] text-[#ECEDEE]/70">Payments processed securely via PayU.</p>
          </div>
        </div>
      </div>

      <p className="text-center text-[#ECEDEE]/50 text-sm mt-12 max-w-2xl mx-auto">
        Plan prices, durations, and offers are managed in-app and governed by SEBI guidelines. Download the Laava app to see current pricing and subscribe.
      </p>
    </div>
  </div>
);

export default Pricing;

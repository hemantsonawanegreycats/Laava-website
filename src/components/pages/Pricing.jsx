import React from 'react';
import { Link } from 'react-router-dom';
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
    color: '#197DFF',
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
    color: '#197DFF',
  },
];

const Pricing = () => (
  <div className="bg-[#030911] min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
    <SEO 
      title="Laava Pricing – Affordable Stock Advisory Plans for India"
      description="Choose from Laava’s flexible pricing plans. Get expert stock market advisory at transparent rates, designed for Indian investors seeking clarity and value."
    />

    {/* Ambient Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#197DFF]/5 to-transparent pointer-events-none"></div>

    <div className="max-w-7xl mx-auto relative z-10">
      
      <div className="text-center mb-20">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#197DFF] animate-pulse"></span>
          <span className="text-[11px] font-bold text-[#197DFF] tracking-[0.3em] uppercase">Pricing</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
          Plans for every <span className="text-gradient-accent italic">investor</span>
        </h1>
        
        <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">
          Start with a free trial. Current pricing, durations, and discounts are shown live inside the app.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
        {plans.map((p, i) => (
          <div 
            key={i} 
            className={`group relative rounded-[2.5rem] p-10 md:p-12 backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full
              ${p.highlight 
                ? 'bg-[#111318]/90 border-[#197DFF]/30 shadow-[0_20px_50px_rgba(25,125,255,0.1)]' 
                : 'bg-[#111318]/60 border-white/5 hover:border-white/10 hover:bg-[#111318]/80'}`}
          >
            {p.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#197DFF] text-white text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl z-20">
                Most Featured
              </div>
            )}

            {/* Background Glow for highlighted card */}
            {p.highlight && (
              <div className="absolute inset-0 bg-gradient-to-b from-[#197DFF]/10 to-transparent rounded-[2.5rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {p.name}
                </h3>
                <p className="text-[#ECEDEE]/60 text-[15px] font-light leading-relaxed min-h-[44px]">
                  {p.desc}
                </p>
              </div>

              <div className="h-px w-full bg-white/5 mb-10"></div>

              <ul className="space-y-5 mb-12 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-4 group/item">
                    <div className="w-6 h-6 rounded-full bg-[#197DFF]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                      <i className="fa-solid fa-check text-[10px] text-[#197DFF]"></i>
                    </div>
                    <span className="text-[#ECEDEE]/80 text-[15px] font-light leading-snug group-hover/item:text-white transition-colors">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://play.google.com/store/apps/details?id=com.laava.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center justify-center gap-3 w-full py-5 rounded-[1.25rem] font-bold text-[16px] transition-all tracking-tight shadow-xl
                  ${p.highlight 
                    ? 'bg-[#197DFF] text-white hover:bg-[#126bd9] hover:scale-[1.02]' 
                    : 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02]'}`}
              >
                View in App <i className="fa-solid fa-arrow-right text-[14px]"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { icon: 'fa-gift', color: '#6CBB44', title: 'Free Trial', desc: 'Try Laava free before you subscribe.' },
          { icon: 'fa-users', color: '#197DFF', title: 'Refer & Earn', desc: 'Earn ₹250 per successful referral.' },
          { icon: 'fa-shield-halved', color: '#F5A623', title: 'Secure Payments', desc: 'Payments processed securely via PayU.' },
        ].map((item, i) => (
          <div key={i} className="group relative bg-[#111318]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 hover:bg-[#111318]/80 hover:border-white/10 overflow-hidden">
            {/* Watermark Icon */}
            <i className={`fa-solid ${item.icon} absolute -bottom-6 -right-6 text-[100px] opacity-[0.02] group-hover:opacity-[0.04] transition-all duration-500 group-hover:scale-110`}></i>
            
            <div className="relative z-10">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110" 
                style={{ backgroundColor: `${item.color}15` }}
              >
                <i className={`fa-solid ${item.icon} text-2xl`} style={{ color: item.color }}></i>
              </div>
              <h4 className="text-white font-bold mb-2 text-xl tracking-tight">{item.title}</h4>
              <p className="text-[14px] text-[#ECEDEE]/60 font-light leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <div className="mt-24 text-center">
        <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 w-full max-w-3xl"></div>
        <p className="text-[#ECEDEE]/40 text-sm max-w-2xl mx-auto font-light leading-relaxed italic">
          Plan prices, durations, and offers are managed in-app and governed by SEBI guidelines. Download the Laava app to see current pricing and subscribe.
        </p>
      </div>
    </div>
  </div>
);

export default Pricing;

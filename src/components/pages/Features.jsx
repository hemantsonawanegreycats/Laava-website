import React from 'react';

const features = [
  { icon: 'fa-chart-line', title: 'Stock Calls', desc: 'Curated, research-backed equity recommendations for every market condition.', color: '#197DFF' },
  { icon: 'fa-star', title: 'Top Picks', desc: 'Our highest-conviction ideas — the best opportunities handpicked by analysts.', color: '#F5A623' },
  { icon: 'fa-rocket', title: 'Multibagger Portfolio', desc: 'Long-term wealth builders with 3x–10x return potential.', color: '#22A756' },
  { icon: 'fa-bolt', title: 'Short Trades', desc: 'Quick, short-term trading calls with clear entry and exit levels.', color: '#DB3333' },
  { icon: 'fa-layer-group', title: 'MTF Portfolio', desc: 'Leverage your capital with Margin Trading Facility recommendations.', color: '#5E8DD8' },
  { icon: 'fa-chart-column', title: 'Futures & Options', desc: 'Expert F&O strategies for hedging and high-conviction directional plays.', color: '#9B59B6' },
  { icon: 'fa-oil-well', title: 'Commodity Calls', desc: 'Gold, silver, crude, and agri-commodity trading recommendations.', color: '#E67E22' },
  { icon: 'fa-shield-halved', title: 'Risk Profiling', desc: 'Personalized risk score so every call matches your risk appetite.', color: '#0B6CF4' },
  { icon: 'fa-bell', title: 'Real-Time Alerts', desc: 'Instant notifications for new calls, exit triggers, and portfolio updates.', color: '#22A756' },
  { icon: 'fa-magnifying-glass-chart', title: 'Performance Tracking', desc: 'Transparent, verifiable track record across every call we make.', color: '#197DFF' },
];

const Features = () => (
  <div className="bg-[#030911] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Features</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-[-0.025em] mb-6">Everything you need to <span className="bg-gradient-to-r from-[#E8F2FF] to-[#A4CCFF] bg-clip-text text-transparent">trade smarter</span></h1>
        <p className="text-[#ECEDEE]/70 text-lg max-w-2xl mx-auto">From equity research to F&O strategies — one app for every kind of investor.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="card-hover bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-6 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${f.color}20` }}>
              <i className={`fa-solid ${f.icon} text-2xl`} style={{ color: f.color }}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
            <p className="text-[#ECEDEE]/70 text-[14px] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-[0.75rem] font-bold text-[16px] transition-all">
          <i className="fa-brands fa-google-play text-2xl"></i>
          Download Laava App
        </a>
      </div>
    </div>
  </div>
);

export default Features;

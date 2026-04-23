import React from 'react';
import SEO from '../SEO';


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
  <div className="bg-[#030911] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8">
    <SEO 
      title="Laava Features – Smarter Stock Advisory Tools for Indian Investors"
      description="Explore Laava’s powerful features — real‑time insights, compliance checks, and structured advisory tools designed to simplify investing in India’s stock market."
    />
    <div className="max-w-7xl mx-auto">

      <div className="text-center mb-20">
        <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-5 opacity-80">Features</h2>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 text-hover-gradient">
          Everything you need to <span className="text-gradient-accent italic">trade smarter</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">From equity research to F&O strategies — one app for every kind of investor.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="group relative bg-[#111318]/80 border border-white/5 rounded-[2rem] p-10 backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px] hover:border-white/10 hover:bg-[#111318]/95 shadow-xl">
             {/* Gradient Overlay for Hover */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${f.color}15`, boxShadow: `0 0 0 1px ${f.color}20` }}>
              <i className={`fa-solid ${f.icon} text-3xl`} style={{ color: f.color }}></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">
              {f.title}
            </h3>
            <p className="text-[#ECEDEE]/70 text-[15px] md:text-[16px] leading-relaxed relative font-light">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-white hover:bg-gray-100 text-black px-12 py-5 rounded-2xl font-bold text-[18px] transition-all shadow-2xl group">
          <i className="fa-brands fa-google-play text-2xl group-hover:scale-110 transition-transform"></i>
          Download Laava App
        </a>
      </div>
    </div>
  </div>
);

export default Features;

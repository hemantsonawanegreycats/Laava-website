import React from 'react';
import SEO from '../SEO';


const pillars = [
  { icon: 'fa-brain', title: 'AI + Human Expertise', desc: 'Machine intelligence validated by expert analysts.', color: '#197DFF' },
  { icon: 'fa-chart-line', title: 'Transparency First', desc: 'Every insight backed by clear data and methodology.', color: '#22A756' },
  { icon: 'fa-lightbulb', title: 'Innovation at Core', desc: 'Algorithms that evolve with changing markets.', color: '#E8930C' },
  { icon: 'fa-users', title: 'Client-Centric', desc: 'Your profitability is our ultimate benchmark.', color: '#4B83D6' },
];

const AboutUs = () => (
  <div className="bg-[#030911] min-h-screen overflow-hidden">
    <SEO 
      title="About Laava – India’s Trusted Stock Market Advisory Platform"
      description="Laava is a forward‑thinking stock advisory app and web portal built in India. Our mission is to democratize financial knowledge and empower investors with clarity and trust."
    />


    {/* HERO */}
    <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#197DFF]/[0.06] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-5 opacity-80">About Us</h2>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 text-hover-gradient">
          Reimagining <br className="hidden md:block" />
          <span className="text-gradient-accent italic">stock market research</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">
          We believe the future of wealth creation lies in intelligence that works at the speed of markets. Laava combines SEBI-registered analyst experience with modern technology to deliver research that’s clear, fast, and actionable.
        </p>
      </div>
    </section>

    {/* MISSION + VISION */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#313131]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#197DFF]"></div>
            <span className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase opacity-80">Mission</span>
          </div>
          <h3 className="text-2xl md:text-[32px] font-semibold text-white tracking-tight leading-[1.2] mb-5 text-hover-gradient">
            Democratize access to <span className="text-gradient-accent italic">high-quality</span> market research.
          </h3>
          <p className="text-[#ECEDEE]/70 text-[15px] md:text-[16px] leading-relaxed">
            Empower investors of all sizes to make informed, profitable, and confident decisions — not just the privileged few.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#22A756]"></div>
            <span className="text-[11px] font-bold text-[#22A756] tracking-[0.4em] uppercase opacity-80">Vision</span>
          </div>
          <h3 className="text-2xl md:text-[32px] font-semibold text-white tracking-tight leading-[1.2] mb-5 text-hover-gradient">
            Become India’s most <span className="text-gradient-accent italic">trusted</span> research partner.
          </h3>
          <p className="text-[#ECEDEE]/70 text-[15px] md:text-[16px] leading-relaxed">
            Transforming market data into wealth-building insights for retail and institutional investors alike.
          </p>
        </div>
      </div>
    </section>

    {/* VALUES */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#313131] bg-[#0a1220]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-4 opacity-80">What we stand for</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.2] text-hover-gradient">Values that <span className="text-gradient-accent italic">shape</span> our work</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {pillars.map((p, i) => (
            <div key={i} className="group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${p.color}15`, boxShadow: `0 0 0 1px ${p.color}30` }}>
                <i className={`fa-solid ${p.icon} text-[22px]`} style={{ color: p.color }}></i>
              </div>
              <h4 className="text-[20px] font-semibold text-white mb-2 tracking-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">{p.title}</h4>
              <p className="text-[14px] md:text-[15px] text-[#ECEDEE]/70 leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CLOSING */}
    <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-[#313131] relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#197DFF]/30 to-transparent"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="text-[28px] md:text-5xl font-bold text-white tracking-tight leading-[1.2] mb-12 text-hover-gradient">
          Clarity in <span className="text-gradient-accent italic">complexity</span>.
          <span className="block text-[#ECEDEE]/50 font-normal">Confidence in decisions.</span>
          <span className="block bg-gradient-to-r from-[#197DFF] to-[#22A756] bg-clip-text text-transparent italic">Conviction in action.</span>
        </div>
        <p className="text-[#ECEDEE]/60 text-[16px] font-light">
          Questions? Reach us at{' '}
          <a href="mailto:care@laavafin.com" className="text-[#197DFF] hover:text-[#4B83D6] font-medium transition-colors">care@laavafin.com</a>
        </p>
      </div>
    </section>
  </div>
);

export default AboutUs;

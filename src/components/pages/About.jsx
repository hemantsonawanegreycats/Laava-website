import React from 'react';

const pillars = [
  { icon: 'fa-brain', title: 'AI + Human Expertise', desc: 'Machine intelligence validated by expert analysts.', color: '#197DFF' },
  { icon: 'fa-chart-line', title: 'Transparency First', desc: 'Every insight backed by clear data and methodology.', color: '#22A756' },
  { icon: 'fa-lightbulb', title: 'Innovation at Core', desc: 'Algorithms that evolve with changing markets.', color: '#E8930C' },
  { icon: 'fa-users', title: 'Client-Centric', desc: 'Your profitability is our ultimate benchmark.', color: '#4B83D6' },
];

const AboutUs = () => (
  <div className="bg-[#030911] min-h-screen overflow-hidden">

    {/* HERO */}
    <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#197DFF]/[0.06] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[2px] uppercase mb-5">About Us</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.1] mb-6">
          Reimagining <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-[#E8F2FF] via-[#C4DDFF] to-[#A4CCFF] bg-clip-text text-transparent">stock market research</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">
          We believe the future of wealth creation lies in intelligence that works at the speed of markets. Laava combines SEBI-registered analyst experience with modern technology to deliver research that’s clear, fast, and actionable.
        </p>
      </div>
    </section>

    {/* MISSION + VISION — large typography split, no boxes */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#313131]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#197DFF]"></div>
            <span className="text-[12px] font-semibold text-[#197DFF] tracking-[2px] uppercase">Mission</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.02em] leading-[1.25] mb-5">
            Democratize access to high-quality market research.
          </h3>
          <p className="text-[#ECEDEE]/70 text-[14px] md:text-[15px] leading-relaxed">
            Empower investors of all sizes to make informed, profitable, and confident decisions — not just the privileged few.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#22A756]"></div>
            <span className="text-[12px] font-semibold text-[#22A756] tracking-[2px] uppercase">Vision</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.02em] leading-[1.25] mb-5">
            Become India’s most trusted research partner.
          </h3>
          <p className="text-[#ECEDEE]/70 text-[14px] md:text-[15px] leading-relaxed">
            Transforming market data into wealth-building insights for retail and institutional investors alike.
          </p>
        </div>
      </div>
    </section>

    {/* VALUES — horizontal icon grid, minimal */}
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#313131] bg-[#0a1220]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[2px] uppercase mb-4">What we stand for</h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-[-0.025em]">Values that shape our work</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {pillars.map((p, i) => (
            <div key={i} className="group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${p.color}15`, boxShadow: `0 0 0 1px ${p.color}30` }}>
                <i className={`fa-solid ${p.icon} text-[22px]`} style={{ color: p.color }}></i>
              </div>
              <h4 className="text-[18px] font-semibold text-white mb-2 tracking-[-0.01em]">{p.title}</h4>
              <p className="text-[14px] text-[#ECEDEE]/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CLOSING — clean centered statement */}
    <section className="py-28 px-4 sm:px-6 lg:px-8 border-t border-[#313131] relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#197DFF]/30 to-transparent"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-4xl font-semibold text-white tracking-[-0.02em] leading-[1.3] mb-10">
          Clarity in complexity.
          <span className="block text-[#ECEDEE]/50">Confidence in decisions.</span>
          <span className="block bg-gradient-to-r from-[#197DFF] to-[#22A756] bg-clip-text text-transparent">Conviction in action.</span>
        </p>
        <p className="text-[#ECEDEE]/60 text-[15px]">
          Questions? Reach us at{' '}
          <a href="mailto:care@laavafin.com" className="text-[#197DFF] hover:text-[#4B83D6] font-medium">care@laavafin.com</a>
        </p>
      </div>
    </section>
  </div>
);

export default AboutUs;

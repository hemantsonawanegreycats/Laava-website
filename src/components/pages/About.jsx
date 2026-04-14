import React from 'react';

const pillars = [
  { icon: 'fa-brain', title: 'AI + Human Expertise', desc: 'We blend machine intelligence with analyst-driven validation.', color: '#197DFF' },
  { icon: 'fa-chart-line', title: 'Transparency First', desc: 'Every insight is backed by clear data and methodology.', color: '#22A756' },
  { icon: 'fa-lightbulb', title: 'Innovation at Core', desc: 'Continuously evolving algorithms that adapt with the markets.', color: '#E8930C' },
  { icon: 'fa-users', title: 'Client-Centric Approach', desc: 'Your profitability is our ultimate benchmark of success.', color: '#4B83D6' },
];

const AboutUs = () => (
  <div className="bg-[#030911] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">About Us</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-[-0.025em] mb-6">
          Reimagining <span className="bg-gradient-to-r from-[#E8F2FF] to-[#A4CCFF] bg-clip-text text-transparent">stock market research</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-lg max-w-3xl mx-auto leading-relaxed">
          At Laava, we believe the future of wealth creation lies in intelligence that works at the speed of markets. We combine the experience of SEBI-registered analysts with modern technology to deliver research that’s clear, fast, and actionable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <div className="bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-8 backdrop-blur-sm">
          <div className="w-12 h-12 rounded-xl bg-[#197DFF]/10 flex items-center justify-center mb-5">
            <i className="fa-solid fa-bullseye text-2xl text-[#197DFF]"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
          <p className="text-[#ECEDEE]/70 leading-relaxed">
            To democratize access to high-quality research and empower investors of all sizes to make informed, profitable, and confident investment decisions.
          </p>
        </div>
        <div className="bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-8 backdrop-blur-sm">
          <div className="w-12 h-12 rounded-xl bg-[#22A756]/10 flex items-center justify-center mb-5">
            <i className="fa-solid fa-eye text-2xl text-[#22A756]"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
          <p className="text-[#ECEDEE]/70 leading-relaxed">
            To become the most trusted research partner for retail and institutional investors — transforming data into wealth-building insights.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-[-0.025em]">What makes Laava different</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="card-hover bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${p.color}20` }}>
                <i className={`fa-solid ${p.icon} text-2xl`} style={{ color: p.color }}></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{p.title}</h4>
              <p className="text-[14px] text-[#ECEDEE]/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-gradient-to-b from-[#1E2021]/50 to-transparent border border-[#313131] rounded-2xl p-10">
        <p className="text-xl md:text-2xl text-white font-semibold mb-3">Clarity in complexity. Confidence in decisions. Conviction in action.</p>
        <p className="text-[#ECEDEE]/60">
          For any questions, reach us at <a href="mailto:care@laavafin.com" className="text-[#197DFF] hover:text-[#4B83D6]">care@laavafin.com</a>
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

const pillars = [
  { icon: 'fa-brain', title: 'AI + Human Expertise', desc: 'Machine intelligence validated by expert analysts.', color: '#197DFF' },
  { icon: 'fa-chart-line', title: 'Transparency First', desc: 'Every insight backed by clear data and methodology.', color: '#22A756' },
  { icon: 'fa-lightbulb', title: 'Innovation at Core', desc: 'Algorithms that evolve with changing markets.', color: '#E8930C' },
  { icon: 'fa-users', title: 'Client-Centric', desc: 'Your profitability is our ultimate benchmark.', color: '#4B83D6' },
];

const AboutUs = () => {
  const canvasRef = useRef(null);

  // Subtle animated grid effect for the hero
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height, animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7; // Only cover hero area
      width = canvas.width;
      height = canvas.height;
    };

    window.addEventListener('resize', resize);
    resize();

    let offset = 0;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(25, 125, 255, 0.05)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      offset = (offset + 0.5) % gridSize;

      ctx.beginPath();
      for (let x = offset; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = offset; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="bg-[#030911] min-h-screen overflow-hidden">
      <SEO 
        title="About Laava – India’s Trusted Stock Market Advisory Platform"
        description="Laava is a forward‑thinking stock advisory app and web portal built in India. Our mission is to democratize financial knowledge and empower investors with clarity and trust."
      />

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        {/* Animated Background Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></canvas>
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#197DFF]/[0.04] rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#22A756]/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(25,125,255,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#197DFF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#197DFF]"></span>
            </span>
            <span className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase">About Us</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Reimagining <br className="hidden md:block" />
            <span className="text-gradient-accent italic">stock market research</span>
          </h1>
          
          <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">
            We believe the future of wealth creation lies in intelligence that works at the speed of markets. Laava combines SEBI-registered analyst experience with modern technology to deliver research that’s clear, fast, and actionable.
          </p>
        </div>
      </section>

      {/* --- MISSION + VISION BENTO BOX --- */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-white/5 bg-[#0a1220]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="group relative bg-[#111318]/80 border border-white/5 rounded-[2rem] p-10 md:p-14 backdrop-blur-xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-[#197DFF]/30 hover:shadow-[0_20px_60px_rgba(25,125,255,0.1)]">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#197DFF]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#197DFF]/10 flex items-center justify-center mb-8 border border-[#197DFF]/20 group-hover:scale-110 group-hover:bg-[#197DFF]/20 transition-all duration-500">
                    <i className="fa-solid fa-bullseye text-[28px] text-[#197DFF]"></i>
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-6">Mission</div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.2] mb-6">
                    Democratize access to <span className="text-[#197DFF] italic">high-quality</span> market research.
                  </h3>
                </div>
                <p className="text-[#ECEDEE]/70 text-[15px] md:text-[16px] leading-[1.7] font-light">
                  Empower investors of all sizes to make informed, profitable, and confident decisions — not just the privileged few.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-[#111318]/80 border border-white/5 rounded-[2rem] p-10 md:p-14 backdrop-blur-xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-[#22A756]/30 hover:shadow-[0_20px_60px_rgba(34,167,86,0.1)]">
              {/* Background Glow */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#22A756]/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#22A756]/10 flex items-center justify-center mb-8 border border-[#22A756]/20 group-hover:scale-110 group-hover:bg-[#22A756]/20 transition-all duration-500">
                    <i className="fa-solid fa-eye text-[28px] text-[#22A756]"></i>
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.4em] mb-6">Vision</div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.2] mb-6">
                    Become India’s most <span className="text-[#22A756] italic">trusted</span> research partner.
                  </h3>
                </div>
                <p className="text-[#ECEDEE]/70 text-[15px] md:text-[16px] leading-[1.7] font-light">
                  Transforming market data into wealth-building insights for retail and institutional investors alike.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-4 opacity-80">What we stand for</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2]">Values that <span className="text-gradient-accent italic">shape</span> our work</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="group relative bg-[#111318]/60 border border-white/5 rounded-[1.5rem] p-8 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-[#111318]/90 shadow-lg">
                {/* Giant Background Icon */}
                <i className={`fa-solid ${p.icon} absolute -bottom-10 -right-6 text-[120px] opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2`}></i>
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative transition-all duration-500 group-hover:scale-110" style={{ backgroundColor: `${p.color}15` }}>
                  <i className={`fa-solid ${p.icon} text-[22px]`} style={{ color: p.color }}></i>
                </div>
                
                <h4 className="text-[20px] font-bold text-white mb-3 tracking-tight transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                  {p.title}
                </h4>
                
                <p className="text-[14px] md:text-[15px] text-[#ECEDEE]/70 leading-relaxed font-light group-hover:text-[#ECEDEE]/80 transition-colors duration-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CLOSING POSTER --- */}
      <section className="py-40 px-4 sm:px-6 lg:px-8 border-t border-[#313131] relative overflow-hidden bg-[#02050A]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-[#197DFF]/10 to-[#22A756]/10 blur-[100px] rounded-[100%] pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-7xl font-bold text-white tracking-[-0.03em] leading-[1.1] mb-16 select-none">
            Clarity in <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 italic">complexity</span>.<br/>
            <span className="text-[#ECEDEE]/50 text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-normal">Confidence in decisions.</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#197DFF] to-[#22A756] italic">Conviction in action.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <p className="text-[#ECEDEE]/60 text-[18px] font-light">
              Questions? Reach us at{' '}
              <a href="mailto:care@laavafin.com" className="text-[#197DFF] hover:text-[#4B83D6] font-medium transition-colors">care@laavafin.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

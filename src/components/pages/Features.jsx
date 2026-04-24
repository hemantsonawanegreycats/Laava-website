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

const FeatureIllustration = ({ title, color }) => {
  const Glow = () => (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-40 h-40 rounded-full blur-[60px] opacity-30 transition-all duration-700 group-hover:scale-150 group-hover:opacity-70" style={{ backgroundColor: color }}></div>
    </div>
  );

  const renderIllustration = () => {
    switch (title) {
      case 'Stock Calls':
        const heights = [35, 50, 40, 70, 100];
        return (
          <div className="flex items-end gap-3 sm:gap-4 z-10 h-28 translate-y-6 group-hover:-translate-y-1 transition-transform duration-700 ease-out">
            {heights.map((h, i) => (
              <div key={i} className="relative h-full flex items-end">
                 
                 <div className={`w-7 sm:w-8 rounded-t-xl relative border border-white/5 transition-all duration-700 ease-out origin-bottom scale-y-[0.6] group-hover:scale-y-100 group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] ${i === 4 ? 'stock-glow group-hover:border-white/40' : 'group-hover:bg-[#2a2f3a] group-hover:opacity-100'}`}
                      style={{ 
                        height: `${h}%`, 
                        backgroundColor: i === 4 ? color : '#1E222B',
                        opacity: i === 4 ? 1 : 0.6,
                        transitionDelay: `${i * 75}ms`
                      }}>
                    
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none"></div>
                    
                    {i === 4 && <style>{`.group:hover .stock-glow { box-shadow: 0 0 25px ${color}80 !important; }`}</style>}
                 </div>

                 {i === 4 && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-700 delay-[400ms] whitespace-nowrap z-20 flex flex-col items-center">
                      You
                      <div className="absolute -bottom-1 w-2 h-2 bg-white rotate-45"></div>
                    </div>
                 )}
              </div>
            ))}
          </div>
        );
        
      case 'Top Picks':
        return (
          <div className="flex items-center justify-center gap-4 z-10 h-32 group-hover:scale-110 transition-transform duration-700 ease-out">
            {[1, 2, 3].map((card) => (
              <div key={card} className={`w-14 rounded-xl border border-white/10 shadow-2xl transition-all duration-700 ease-out flex items-center justify-center
                ${card === 2 ? 'h-28 z-20 -translate-y-4 bg-gradient-to-b group-hover:-translate-y-8' : 'h-20 bg-[#1E222B] opacity-60 group-hover:-translate-y-2 group-hover:rotate-6'}`}
                style={{
                  ...(card === 2 ? { backgroundImage: `linear-gradient(to bottom, ${color}40, #1E222B)`, borderColor: `${color}50` } : {}),
                  transitionDelay: `${card * 100}ms`
                }}>
                {card === 2 && <i className="fa-solid fa-star text-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-125 transition-transform duration-700" style={{ color: color }}></i>}
              </div>
            ))}
          </div>
        );

      case 'Multibagger Portfolio':
        return (
          <div className="relative z-10 w-48 h-36 bg-[#1E222B]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl p-4 flex items-end justify-center gap-4 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-out group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-20 pointer-events-none">
               <div className="w-full h-[1px] bg-white border-dashed border-b"></div>
               <div className="w-full h-[1px] bg-white border-dashed border-b"></div>
               <div className="w-full h-[1px] bg-white border-dashed border-b"></div>
            </div>

            {/* 1x Bar */}
            <div className="relative w-8 bg-white/10 rounded-t-sm flex flex-col justify-end group-hover:bg-white/20 transition-colors duration-500 h-[20%]">
               <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] text-white/50 font-bold">1x</div>
               <div className="w-full h-1 bg-white/30 rounded-t-sm"></div>
            </div>

            {/* 3x Bar */}
            <div className="relative w-8 bg-white/10 rounded-t-sm flex flex-col justify-end transition-all duration-700 ease-out h-[20%] group-hover:h-[45%] delay-75 group-hover:bg-white/20">
               <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] text-white/50 font-bold">3x</div>
               <div className="w-full h-1 bg-white/40 rounded-t-sm"></div>
            </div>

            {/* 10x Bar */}
            <div className="relative w-10 flex flex-col justify-end transition-all duration-1000 ease-out h-[20%] group-hover:h-[90%] delay-150 shadow-lg" style={{ backgroundColor: `${color}30` }}>
               <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-bold" style={{ color: color }}>10x</div>
               
               {/* 10x Glowing Top Line */}
               <div className="w-full h-1 rounded-t-sm shadow-[0_0_15px_var(--color)]" style={{ backgroundColor: color, '--color': color }}></div>
               
               {/* "10X!" Pop-up Badge */}
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black font-bold text-[10px] px-2 py-0.5 rounded shadow-[0_0_20px_var(--color)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-700 delay-500 scale-50 group-hover:scale-110" style={{ '--color': color }}>
                 10X!
               </div>
            </div>

          </div>
        );

      case 'Short Trades':
        return (
          <div className="relative z-10 w-48 h-36 bg-[#1E222B]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl p-4 flex flex-col justify-between group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-out group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            
            {/* Header / Ticker */}
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center">
                 <div className="w-2 h-2 rounded-full bg-[#DB3333] group-hover:animate-pulse shadow-[0_0_10px_#DB3333]"></div>
                 <div className="w-12 h-2 rounded-full bg-white/40"></div>
              </div>
              <div className="w-10 h-4 rounded bg-[#DB3333]/20 border border-[#DB3333]/40 flex items-center justify-center">
                 <div className="w-6 h-1 rounded-full bg-[#DB3333]"></div>
              </div>
            </div>

            {/* Trading Levels */}
            <div className="relative h-20 w-full mt-2 border-l-2 border-white/10 pl-3 flex flex-col justify-between py-1">
              
              {/* Stop Loss Level */}
              <div className="flex items-center w-full relative">
                 <div className="w-full h-[1px] bg-white/20 border-dashed border-b border-white/20"></div>
                 <div className="absolute right-0 bg-[#1E222B] px-1 text-[8px] font-bold text-white/50">SL</div>
              </div>

              {/* Entry Level */}
              <div className="flex items-center w-full relative">
                 <div className="w-full h-[1px] bg-white/40"></div>
                 <div className="absolute right-0 bg-[#1E222B] px-1 text-[8px] font-bold text-white/80">ENTRY</div>
              </div>

              {/* Target Level */}
              <div className="flex items-center w-full relative">
                 <div className="w-full h-[1px] bg-[#22A756]/40"></div>
                 <div className="absolute right-0 bg-[#1E222B] px-1 text-[8px] font-bold text-[#22A756]">TARGET</div>
              </div>

              {/* Dynamic Price Action Indicator */}
              <div className="absolute left-[-5px] top-[40%] w-2 h-2 rounded-full bg-[#DB3333] shadow-[0_0_15px_#DB3333] transition-all duration-700 ease-in-out group-hover:top-[90%] z-20 group-hover:scale-125"></div>
              
              {/* Downward Trail */}
              <div className="absolute left-[-2px] top-[40%] w-[2px] bg-gradient-to-b from-[#DB3333]/0 to-[#DB3333] h-0 group-hover:h-[50%] transition-all duration-700 ease-in-out z-10 shadow-[0_0_10px_#DB3333]"></div>
            </div>
          </div>
        );

      case 'MTF Portfolio':
        return (
          <div className="relative z-10 w-full h-full flex items-center justify-center perspective-[1000px] group-hover:scale-105 transition-transform duration-700 ease-out">
            <div className="relative w-32 h-32 transition-transform duration-700 ease-out group-hover:rotateX(50deg) group-hover:rotateZ(-30deg)" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(-45deg)' }}>
              {[1, 2, 3].map((layer) => (
                <div key={layer} className="absolute inset-0 rounded-2xl border border-white/20 backdrop-blur-md transition-all duration-700 ease-out shadow-2xl"
                     style={{ 
                       transform: `translateZ(${layer * 15 - 5}px)`, 
                       backgroundColor: layer === 3 ? `${color}40` : '#1E222B90',
                       borderColor: layer === 3 ? `${color}` : 'rgba(255,255,255,0.1)',
                       transitionDelay: `${layer * 100}ms`
                     }}>
                </div>
              ))}
              <style>{`
                .group:hover .relative.w-32.h-32 > div:nth-child(1) { transform: translateZ(20px) !important; }
                .group:hover .relative.w-32.h-32 > div:nth-child(2) { transform: translateZ(45px) !important; }
                .group:hover .relative.w-32.h-32 > div:nth-child(3) { transform: translateZ(75px) !important; box-shadow: 0 0 30px ${color}80; }
              `}</style>
            </div>
          </div>
        );

      case 'Futures & Options':
        return (
          <div className="relative z-10 w-52 h-36 bg-[#1E222B]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl p-4 flex flex-col justify-center gap-3 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700 ease-out group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
            {/* Header Mockup */}
            <div className="absolute top-3 left-4 right-4 flex justify-between items-center opacity-40 group-hover:opacity-60 transition-opacity duration-500">
               <div className="w-6 h-1.5 rounded-full bg-white"></div>
               <div className="w-8 h-1.5 rounded-full bg-white"></div>
            </div>

            {/* Center strike line */}
            <div className="absolute left-1/2 top-8 bottom-3 w-[1px] bg-white/10 -translate-x-1/2"></div>
            
            {/* Hover Highlight Box */}
            <div className="absolute left-2 right-2 top-[56%] -translate-y-1/2 h-8 border rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 shadow-lg" style={{ borderColor: `${color}40`, backgroundColor: `${color}15` }}>
               {/* Tooltip */}
               <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full bg-white text-black text-[9px] font-bold px-1.5 py-0.5 rounded shadow-[0_5px_10px_rgba(0,0,0,0.5)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                 Strike
               </div>
            </div>

            <div className="mt-4 flex flex-col gap-3.5">
              {/* Row 1 */}
              <div className="flex items-center justify-between w-full h-3 relative z-10">
                 <div className="w-1/2 flex justify-end pr-4">
                    <div className="h-1.5 rounded-l-full bg-gradient-to-l from-white/50 to-transparent w-8 group-hover:w-14 transition-all duration-700 ease-out"></div>
                 </div>
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-500"></div>
                 <div className="w-1/2 flex justify-start pl-4">
                    <div className="h-1.5 rounded-r-full bg-gradient-to-r from-white/50 to-transparent w-6 group-hover:w-10 transition-all duration-700 ease-out"></div>
                 </div>
              </div>

              {/* Row 2 (At-The-Money Highlighted) */}
              <div className="flex items-center justify-between w-full h-3 relative z-10">
                 <div className="w-1/2 flex justify-end pr-4">
                    <div className="h-2 rounded-l-full w-12 group-hover:w-16 transition-all duration-700 ease-out delay-75 shadow-lg" style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}></div>
                 </div>
                 <div className="w-2.5 h-2.5 rounded-full shadow-[0_0_10px_white] scale-100 group-hover:scale-[1.3] transition-all duration-500 delay-200" style={{ backgroundColor: '#fff' }}></div>
                 <div className="w-1/2 flex justify-start pl-4">
                    <div className="h-2 rounded-r-full w-10 group-hover:w-14 transition-all duration-700 ease-out delay-75 shadow-lg" style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}></div>
                 </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between w-full h-3 relative z-10">
                 <div className="w-1/2 flex justify-end pr-4">
                    <div className="h-1.5 rounded-l-full bg-gradient-to-l from-white/50 to-transparent w-6 group-hover:w-10 transition-all duration-700 ease-out delay-150"></div>
                 </div>
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-500 delay-150"></div>
                 <div className="w-1/2 flex justify-start pl-4">
                    <div className="h-1.5 rounded-r-full bg-gradient-to-r from-white/50 to-transparent w-10 group-hover:w-8 transition-all duration-700 ease-out delay-150"></div>
                 </div>
              </div>
            </div>
            
          </div>
        );

      case 'Commodity Calls':
        return (
          <div className="relative z-10 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-125">
            <div className="w-24 h-24 rounded-full border-[6px] absolute opacity-80 backdrop-blur-sm transition-all duration-700 ease-out group-hover:-translate-x-4 group-hover:-translate-y-2 group-hover:rotate-12 shadow-2xl" style={{ borderColor: '#F5A623', transform: 'translateX(-10px)', backgroundColor: 'rgba(245,166,35,0.05)' }}></div>
            <div className="w-24 h-24 rounded-full border-[6px] absolute opacity-80 backdrop-blur-sm transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:translate-y-2 group-hover:-rotate-12 shadow-2xl delay-75" style={{ borderColor: '#E67E22', transform: 'translateX(10px)', backgroundColor: 'rgba(230,126,34,0.05)' }}></div>
          </div>
        );

      case 'Risk Profiling':
        return (
          <div className="relative z-10 flex items-center justify-center group-hover:scale-[1.15] transition-transform duration-700 ease-out">
             <div className="absolute w-36 h-36 rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] group-hover:border-[color:var(--color)] transition-all duration-500" style={{ '--color': color }}></div>
             <div className="absolute w-24 h-24 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-700 group-hover:border-[color:var(--color)]" style={{ '--color': `${color}40` }}></div>
             <div className="w-14 h-16 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-md group-hover:scale-110 transition-transform duration-700 group-hover:shadow-[0_0_40px_var(--color)]" style={{ '--color': `${color}80`, background: `linear-gradient(to bottom right, ${color}90, ${color}20)`, clipPath: 'polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0 70%, 0 20%)' }}>
               <div className="absolute inset-[2px] bg-[#111318]/90 group-hover:bg-[#111318]/70 transition-colors duration-500" style={{ clipPath: 'polygon(50% 0%, 100% 20%, 100% 70%, 50% 100%, 0 70%, 0 20%)' }}></div>
               <i className="fa-solid fa-shield-halved absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg group-hover:scale-125 transition-transform duration-500" style={{ color: color }}></i>
             </div>
          </div>
        );

      case 'Real-Time Alerts':
        return (
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <div className="absolute w-16 h-16 rounded-full border opacity-0 group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ borderColor: color, backgroundColor: `${color}10` }}></div>
            <div className="absolute w-24 h-24 rounded-full border opacity-0 group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" style={{ borderColor: color, backgroundColor: `${color}05` }}></div>
            
            <div className="bg-[#1E222B]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4 z-20 group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700 ease-out w-3/4 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
              <div className="w-10 h-10 rounded-full flex items-center justify-center relative shadow-lg group-hover:rotate-12 transition-transform duration-500" style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}>
                 <i className="fa-solid fa-bell text-sm group-hover:animate-bounce" style={{ color: color }}></i>
                 <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse"></div>
              </div>
              <div className="flex-1">
                 <div className="w-0 group-hover:w-3/4 h-2.5 rounded-full bg-white/60 mb-2.5 transition-all duration-700 ease-out delay-200"></div>
                 <div className="w-0 group-hover:w-1/2 h-2.5 rounded-full bg-white/30 transition-all duration-700 ease-out delay-300"></div>
              </div>
            </div>
          </div>
        );

      case 'Performance Tracking':
        return (
          <div className="relative z-10 w-56 h-36 bg-[#1E222B]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-4 flex flex-col gap-3 group-hover:scale-110 group-hover:-translate-y-3 transition-transform duration-700 ease-out group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
             <div className="flex justify-between items-center mb-1">
               <div className="w-1/3 h-2.5 rounded-full bg-white/30 group-hover:bg-white/50 transition-colors duration-500"></div>
               <div className="w-4 h-4 rounded-full bg-white/10 group-hover:bg-[color:var(--color)] transition-colors duration-500 group-hover:shadow-[0_0_10px_var(--color)]" style={{ '--color': color }}></div>
             </div>
             <div className="flex gap-3 h-full">
                <div className="flex-1 bg-white/5 rounded-lg flex flex-col items-center justify-center relative overflow-hidden gap-2 group-hover:bg-white/10 transition-colors duration-500">
                   <div className="w-10 h-10 rounded-full border-[4px] border-white/10 border-t-transparent border-r-transparent group-hover:-rotate-180 transition-transform duration-1000 ease-out" style={{ borderTopColor: color, borderRightColor: color }}></div>
                   <div className="w-1/2 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-500"></div>
                </div>
                <div className="flex-[1.2] bg-white/5 rounded-lg p-2.5 flex items-end gap-1.5 group-hover:bg-white/10 transition-colors duration-500">
                   <div className="w-full bg-white/10 rounded-t-sm h-1/3 group-hover:bg-white/20 transition-colors duration-500"></div>
                   <div className="w-full bg-white/10 rounded-t-sm h-1/2 group-hover:bg-white/20 transition-colors duration-500 delay-75"></div>
                   <div className="w-full bg-white/10 rounded-t-sm h-2/3 group-hover:bg-white/20 transition-colors duration-500 delay-150"></div>
                   <div className="w-full rounded-t-sm h-1/4 group-hover:h-full transition-all duration-700 ease-out relative delay-200" style={{ backgroundColor: color }}>
                     <div className="absolute top-0 left-0 right-0 h-1 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"></div>
                   </div>
                </div>
             </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full relative bg-[#13161c] flex items-center justify-center overflow-hidden">
      <Glow />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      {renderIllustration()}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/95 via-[#111318]/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

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
          <div key={i} className="group relative bg-[#111318]/80 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px] hover:border-white/10 hover:bg-[#111318]/95 shadow-xl flex flex-col cursor-pointer">
            {/* Gradient Overlay for Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
            
            {/* Top Image Half */}
            <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-[#1a1d24]">
              <FeatureIllustration title={f.title} color={f.color} />
            </div>
             
            {/* Bottom Content Half */}
            <div className="p-6 sm:p-8 pt-0 flex-grow flex flex-col relative z-10 bg-[#111318]/80">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative transition-transform duration-500 group-hover:scale-110 -mt-7 bg-[#111318] shadow-lg" style={{ border: `1px solid ${f.color}30` }}>
                <div className="absolute inset-0 rounded-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500" style={{ backgroundColor: f.color }}></div>
                <i className={`fa-solid ${f.icon} text-2xl relative z-10 group-hover:animate-pulse`} style={{ color: f.color }}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 relative transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">
                {f.title}
              </h3>
              <p className="text-[#ECEDEE]/70 text-[15px] md:text-[16px] leading-relaxed relative font-light group-hover:text-[#ECEDEE]/90 transition-colors duration-300">{f.desc}</p>
            </div>
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

import React, { useEffect, useRef, useState } from 'react';
import SEO from '../SEO';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.laava.app';

const steps = [
  { num: '01', icon: 'fa-download', title: 'Download the App', desc: 'Get Laava free from the Play Store. Takes under a minute.', cta: { href: PLAY_STORE_URL, label: 'Get it on Play Store', icon: 'fa-brands fa-google-play' } },
  { num: '02', icon: 'fa-user-plus', title: 'Quick Signup', desc: 'Sign up with phone OTP or Google. Add your name and verify email.' },
  { num: '03', icon: 'fa-clipboard-check', title: 'Risk Profiling', desc: 'Answer a short questionnaire so we match calls to your risk appetite.' },
  { num: '04', icon: 'fa-id-card', title: 'Complete KYC', desc: 'Submit your PAN number and a PAN photo — verified in minutes.' },
  { num: '05', icon: 'fa-crown', title: 'Choose Your Plan', desc: 'Pick Basic or Premium. Start with a free trial before you pay.' },
  { num: '06', icon: 'fa-bell-concierge', title: 'Receive Expert Calls', desc: 'Get SEBI-registered research with real-time entry, target, and exit alerts.' },
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRefs.current.length) return;
      
      let closestIndex = -1;
      let minDistance = Infinity;
      // Define "center" slightly below the actual middle so elements highlight sooner
      const centerY = window.innerHeight * 0.55; 

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenterY = rect.top + rect.height / 2;
        
        // Artificial offset for the right column to force sequential highlighting
        // Reduced to 60px so it switches smoothly without requiring excessive scrolling
        const isDesktop = window.innerWidth >= 768;
        const artificialOffset = (isDesktop && index % 2 !== 0) ? 60 : 0; 
        
        const distance = Math.abs((cardCenterY + artificialOffset) - centerY);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      // Only highlight if the card is actually reasonably within view
      const closestCard = cardRefs.current[closestIndex];
      if (closestCard) {
        const rect = closestCard.getBoundingClientRect();
        if (rect.top > window.innerHeight - 100 || rect.bottom < 100) {
          setActiveIndex(-1);
        } else {
          setActiveIndex(closestIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Slight delay to ensure layout is complete
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#030911] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="How Laava Works – Simplifying Stock Market Advisory in India"
        description="Learn how Laava empowers Indian investors with step‑by‑step guidance, transparent advisory workflows, and easy‑to‑use tools for confident stock market decisions."
      />
      <style>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-5 opacity-80">How it works</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 text-hover-gradient">
            Start investing in <span className="text-gradient-accent italic">6 simple steps</span>
          </h1>
          <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">
            From download to your first expert call — in under 10 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((s, i) => {
            const isActive = activeIndex === i;
            
            return (
              <div 
                key={i} 
                ref={(el) => (cardRefs.current[i] = el)}
                className={`group relative rounded-[2rem] p-[2px] transition-all duration-700 ease-out ${isActive ? 'scale-[1.03] shadow-[0_20px_40px_rgba(25,125,255,0.15)] z-20' : 'scale-100 opacity-40 hover:opacity-70 z-10'}`}
              >
                {/* Animated Gradient Border Layer */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-r from-[#197DFF] via-[#DB3333] to-[#22A756] animate-gradient-border transition-all duration-700 ease-out ${isActive ? 'opacity-100 blur-[1px]' : 'opacity-0'}`}></div>
                
                {/* Inner Card */}
                <div className="relative w-full h-full bg-[#111318] rounded-[calc(2rem-2px)] p-10 flex flex-col z-10 transition-colors duration-500 overflow-hidden">
                  <div className={`absolute top-6 right-8 text-[80px] font-bold leading-none select-none transition-all duration-700 ${isActive ? 'text-white/[0.08] translate-x-0' : 'text-white/[0.03] translate-x-4'}`}>
                    {s.num}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative transition-all duration-700 ${isActive ? 'bg-[#197DFF]/20 scale-110 shadow-[0_0_20px_rgba(25,125,255,0.4)]' : 'bg-[#197DFF]/10'}`}>
                    <i className={`fa-solid ${s.icon} text-3xl transition-colors duration-700 ${isActive ? 'text-white' : 'text-[#197DFF]'}`}></i>
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 relative transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/60'}`}>
                    {s.title}
                  </h3>
                  
                  <p className={`text-[15px] md:text-[16px] leading-relaxed relative font-light transition-colors duration-500 ${isActive ? 'text-[#ECEDEE]/90' : 'text-[#ECEDEE]/50'}`}>
                    {s.desc}
                  </p>
                  
                  {s.cta && (
                    <a
                      href={s.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative mt-8 inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-2xl font-bold text-[15px] transition-all duration-500 shadow-lg w-fit ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                    >
                      <i className={`${s.cta.icon} text-xl`}></i>
                      {s.cta.label}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-white hover:bg-gray-100 text-black px-12 py-5 rounded-2xl font-bold text-[18px] transition-all shadow-2xl group">
            <i className="fa-brands fa-google-play text-2xl group-hover:scale-110 transition-transform"></i>
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

import React from 'react';
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

const HowItWorks = () => (
  <div className="bg-[#030911] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8">
    <SEO 
      title="How Laava Works – Simplifying Stock Market Advisory in India"
      description="Learn how Laava empowers Indian investors with step‑by‑step guidance, transparent advisory workflows, and easy‑to‑use tools for confident stock market decisions."
    />
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
        {steps.map((s, i) => (
          <div key={i} className="group relative bg-[#111318]/80 border border-white/5 rounded-[2rem] p-10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:border-white/10 hover:bg-[#111318]/95 shadow-xl">
            <div className="absolute top-6 right-8 text-[80px] font-bold text-white/[0.03] leading-none select-none transition-all duration-500 group-hover:text-white/[0.05]">{s.num}</div>
            <div className="w-16 h-16 rounded-2xl bg-[#197DFF]/10 flex items-center justify-center mb-6 relative transition-transform duration-500 group-hover:scale-110">
              <i className={`fa-solid ${s.icon} text-3xl text-[#197DFF]`}></i>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">
              {s.title}
            </h3>
            <p className="text-[#ECEDEE]/70 text-[15px] md:text-[16px] leading-relaxed relative font-light">{s.desc}</p>
            
            {s.cta && (
              <a
                href={s.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-2xl font-bold text-[15px] transition-all shadow-lg"
              >
                <i className={`${s.cta.icon} text-xl`}></i>
                {s.cta.label}
              </a>
            )}
          </div>
        ))}
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

export default HowItWorks;

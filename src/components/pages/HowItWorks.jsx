import React from 'react';

const steps = [
  { num: '01', icon: 'fa-download', title: 'Download the App', desc: 'Get Laava free from the Play Store. Takes under a minute.' },
  { num: '02', icon: 'fa-user-plus', title: 'Quick Signup', desc: 'Sign up with phone OTP or Google. Add your name and verify email.' },
  { num: '03', icon: 'fa-clipboard-check', title: 'Risk Profiling', desc: 'Answer a short questionnaire so we match calls to your risk appetite.' },
  { num: '04', icon: 'fa-id-card', title: 'Complete KYC', desc: 'Submit your PAN number and a PAN photo — verified in minutes.' },
  { num: '05', icon: 'fa-crown', title: 'Choose Your Plan', desc: 'Pick Basic or Premium. Start with a free trial before you pay.' },
  { num: '06', icon: 'fa-bell-concierge', title: 'Receive Expert Calls', desc: 'Get SEBI-registered research with real-time entry, target, and exit alerts.' },
];

const HowItWorks = () => (
  <div className="bg-[#030911] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">How it works</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.1] mb-6">Start investing in <span className="bg-gradient-to-r from-[#E8F2FF] to-[#A4CCFF] bg-clip-text text-transparent">6 simple steps</span></h1>
        <p className="text-[#ECEDEE]/70 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">From download to your first expert call — in under 10 minutes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="card-hover bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-4 right-6 text-[80px] font-bold text-white/5 leading-none">{s.num}</div>
            <div className="w-14 h-14 rounded-xl bg-[#197DFF]/10 flex items-center justify-center mb-4 relative">
              <i className={`fa-solid ${s.icon} text-2xl text-[#197DFF]`}></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 relative">{s.title}</h3>
            <p className="text-[#ECEDEE]/70 relative">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-[0.75rem] font-bold text-[16px] transition-all">
          <i className="fa-brands fa-google-play text-2xl"></i>
          Get Started Now
        </a>
      </div>
    </div>
  </div>
);

export default HowItWorks;

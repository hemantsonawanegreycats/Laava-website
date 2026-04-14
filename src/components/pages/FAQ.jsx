import React, { useState } from 'react';

const faqs = [
  { q: 'Is Laava SEBI registered?', a: 'Yes. Laava is a SEBI-registered Research Analyst — Registration No. INH000023171. All our recommendations comply with SEBI guidelines.' },
  { q: 'What does Laava offer?', a: 'Laava delivers research-backed recommendations across Stocks, Top Picks, Multibagger portfolio, Short Trades, MTF, Futures & Options, and Commodities — all inside the app with real-time notifications.' },
  { q: 'Do I need a demat account to use Laava?', a: 'No — Laava provides research and recommendations. You can execute trades through any broker of your choice.' },
  { q: 'Which subscription plans are available?', a: 'Laava currently offers Basic and Premium plans. Each plan unlocks different segments of research. Exact pricing, duration, and offers are shown live inside the app.' },
  { q: 'Is there a free trial?', a: 'Yes. New users can start with a free trial to experience the platform before subscribing to a paid plan.' },
  { q: 'How are payments processed?', a: 'Payments are processed securely via PayU, a SEBI/RBI-regulated payment gateway supporting UPI, cards, netbanking, and wallets.' },
  { q: 'What is Risk Profiling?', a: 'A short in-app questionnaire that assesses your risk appetite. Your risk score helps us present the most suitable recommendations for your profile.' },
  { q: 'How do I receive the calls?', a: 'All recommendations are delivered inside the Laava app with real-time push notifications for entry, target, and exit alerts.' },
  { q: 'Can I earn by referring friends?', a: 'Yes. Refer friends via your unique code and earn ₹250 for each Basic subscription and ₹1,000 for each Premium subscription. Rewards can be withdrawn to your bank account.' },
  { q: 'Is my data safe?', a: 'Yes. We use industry-standard encryption and follow SEBI and IT Act data-protection norms. Your KYC and personal data are never shared with third parties.' },
  { q: 'Which platforms is Laava available on?', a: 'Laava is currently available on Android via the Google Play Store.' },
  { q: 'How do I raise a complaint?', a: 'Visit our Investor Grievance page or email care@laavafin.com. Complaints are addressed per SEBI’s investor redressal framework.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="bg-[#030911] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">FAQ</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.1] mb-6">Frequently asked <span className="bg-gradient-to-r from-[#E8F2FF] to-[#A4CCFF] bg-clip-text text-transparent">questions</span></h1>
          <p className="text-[#ECEDEE]/70 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">Everything you need to know before you get started.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-[#1E2021]/50 border border-[#313131] rounded-2xl overflow-hidden backdrop-blur-sm">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-[#1E2021]/80 transition-all">
                <span className="text-white font-semibold text-[16px]">{f.q}</span>
                <i className={`fa-solid fa-chevron-down text-[#197DFF] transition-transform ${open === i ? 'rotate-180' : ''}`}></i>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-[#ECEDEE]/70 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#ECEDEE]/60 mb-4">Still have questions?</p>
          <a href="mailto:care@laavafin.com" className="inline-flex items-center gap-2 text-[#197DFF] hover:text-[#4B83D6] font-semibold">
            <i className="fa-solid fa-envelope"></i> care@laavafin.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

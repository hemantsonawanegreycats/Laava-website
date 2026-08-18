import React from 'react';
import SEO from '../SEO';

const Contact = () => (
  <div className="bg-[#030911] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8">
    <SEO title="Contact Us - Laava Fintech" description="Get in touch with Laava Financial Technologies Private Limited support and advisory team." />
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-5 opacity-80">Contact</h2>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 text-hover-gradient">
          Get in <span className="text-gradient-accent italic">Touch</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">
          Have questions about Laava? We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <a href="mailto:care@laavafin.com" className="group bg-[#111318]/80 border border-white/5 rounded-[2rem] p-10 backdrop-blur-sm block transition-all duration-500 hover:translate-y-[-8px] hover:border-white/10 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-[#197DFF]/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
            <i className="fa-solid fa-envelope text-3xl text-[#197DFF]"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">Email</h3>
          <p className="text-[#ECEDEE]/60 font-light text-lg">care@laavafin.com</p>
        </a>
        <div className="group bg-[#111318]/80 border border-white/5 rounded-[2rem] p-10 backdrop-blur-sm block transition-all duration-500 hover:translate-y-[-8px] hover:border-white/10 shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-[#22A756]/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
            <i className="fa-solid fa-location-dot text-3xl text-[#22A756]"></i>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent">Office</h3>
          <p className="text-[#ECEDEE]/60 font-light text-lg">Innov8 Rcity, Rcity Offices, 4th Floor, LBS Marg, Ghatkopar (West), Mumbai, Maharashtra - 400089, India</p>
        </div>
      </div>

      <div className="bg-[#111318]/90 border border-white/5 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-sm max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
        {/* Subtle background glow for the form */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#197DFF]/[0.05] blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        
        <h3 className="text-3xl font-bold text-white text-center mb-10 tracking-tight">Send us a message</h3>
        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-[#030911]/50 border border-white/5 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#197DFF] transition-all hover:border-white/10 font-light"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#030911]/50 border border-white/5 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#197DFF] transition-all hover:border-white/10 font-light"
            />
          </div>
          <input
            type="tel"
            placeholder="+91 Phone number"
            className="w-full bg-[#030911]/50 border border-white/5 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#197DFF] transition-all hover:border-white/10 font-light"
          />
          <textarea
            placeholder="How can we help you?"
            rows="5"
            className="w-full bg-[#030911]/50 border border-white/5 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-[#197DFF] transition-all hover:border-white/10 font-light resize-none"
          />
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-100 text-black py-5 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-[0.98]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;

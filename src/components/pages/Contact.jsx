import React from 'react';

const Contact = () => (
  <div className="bg-[#030911] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Contact</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[-0.025em] leading-[1.1] mb-6">
          Get in <span className="bg-gradient-to-r from-[#E8F2FF] to-[#A4CCFF] bg-clip-text text-transparent">touch</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">
          Have questions about Laava? We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <a href="mailto:care@laavafin.com" className="card-hover bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-8 backdrop-blur-sm block">
          <div className="w-12 h-12 rounded-xl bg-[#197DFF]/10 flex items-center justify-center mb-5">
            <i className="fa-solid fa-envelope text-2xl text-[#197DFF]"></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
          <p className="text-[#ECEDEE]/70">care@laavafin.com</p>
        </a>
        <div className="bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-8 backdrop-blur-sm">
          <div className="w-12 h-12 rounded-xl bg-[#22A756]/10 flex items-center justify-center mb-5">
            <i className="fa-solid fa-location-dot text-2xl text-[#22A756]"></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Office</h3>
          <p className="text-[#ECEDEE]/70">Andheri West, Mumbai - 400053, India</p>
        </div>
      </div>

      <div className="bg-[#1E2021]/50 border border-[#313131] rounded-2xl p-8 md:p-10 backdrop-blur-sm max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white text-center mb-6">Send us a message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-[#030911] border border-[#313131] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#197DFF] transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#030911] border border-[#313131] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#197DFF] transition-colors"
          />
          <input
            type="tel"
            placeholder="+91 Phone number"
            className="w-full bg-[#030911] border border-[#313131] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#197DFF] transition-colors"
          />
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full bg-[#030911] border border-[#313131] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#197DFF] transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-black py-3 rounded-xl font-bold transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;

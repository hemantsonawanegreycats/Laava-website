import React from 'react';

export default function InvestingSection() {
  return (
    <section className="bg-[#FCFBF9] py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: ₹0 Image + Features */}
        <div className="relative text-center md:text-left">
          <img
            src="/assets/zero-offer.png" // Replace with actual ₹0 image if available
            alt="Zero Brokerage"
            className="w-64 mx-auto md:mx-0"
          />
          <div className="mt-4 space-y-3">
            <div className="bg-white shadow rounded-lg px-4 py-2 font-medium text-green-600">
              ZERO Brokerage Charge*
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2 font-medium text-green-600">
              ZERO Account Opening Fee
            </div>
            <div className="bg-white shadow rounded-lg px-4 py-2 font-medium text-green-600">
              ZERO Annual Maintenance Charge**
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 leading-tight">
            *0 Delivery, Intraday, FnO Brokerage - For first 30 Days / Upto ₹500<br />
            **For BSDA A/c | Up to ₹10 lakh Portfolio Value
          </p>
        </div>

        {/* Right: Text + Form */}
        <div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
            Laava Broking
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Investing Made Easy With Laava</h2>

          <ul className="text-gray-700 text-base mb-8 space-y-2">
            <li>📲 One Click Easy Execution</li>
            <li>🧠 Set Targets & Stop-loss Exits</li>
            <li>💳 No Daily TPIN Verification</li>
            <li>📉 Low Slippage*</li>
          </ul>

          {/* Phone input */}
          {/* <form className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md max-w-md border border-gray-300">
            <div className="flex items-center gap-1 pl-2">
              <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-5" />
            </div>
            <input
              type="tel"
              placeholder="Enter Mobile No."
              className="flex-1 px-2 py-2 rounded-full text-black outline-none"
            />
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-full font-semibold">
              Start Investing
            </button>
          </form> */}

          <a href="#" className="btn">View Pricing</a>
        </div>
      </div>
    </section>
  );
}

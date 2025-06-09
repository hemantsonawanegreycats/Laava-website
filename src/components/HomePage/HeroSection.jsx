import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/70 text-white px-4 py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
            Laava Pro
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Trade Ideas <br /> By SEBI Reg RA
          </h1>
          <p className="text-lg mb-6">
            For <strong>Stock</strong> | <strong>Futures</strong> | <strong>Options</strong> | <strong>Commodities</strong>
          </p>

          {/* Highlight Info Box */}
          <div className="flex gap-4 flex-wrap mb-8 text-center text-sm">
            <div className="bg-black px-6 py-4 rounded-xl">
              <strong className="block text-lg">1553+</strong>
              Closed Trades
            </div>
            <div className="bg-black px-6 py-4 rounded-xl">
              <strong className="block text-lg">Instant</strong>
              Buy/sell alert
            </div>
            <div className="bg-black px-6 py-4 rounded-xl">
              <strong className="block text-lg">₹233* / mo</strong>
              Low cost plans
            </div>
          </div>

          {/* Mobile Input Form */}
          {/* <form className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md max-w-md">
            <div className="flex items-center gap-1 pl-2">
              <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-5" />
            </div>
            <input
              type="tel"
              placeholder="Enter Mobile No."
              className="flex-1 px-2 py-2 rounded-full text-black outline-none"
            />
            <button type="submit" className="bg-primary text-white px-5 py-2 rounded-full font-semibold">
              Claim 3 FREE Trades
            </button>
          </form> */}
        </div>

        {/* Right Image Placeholder */}
        <div className="relative flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md text-black">
            <h3 className="font-semibold text-lg mb-3">Hey! Grab your best purchase…</h3>
            <div className="space-y-2 mb-4">
              {/* Example Call Cards */}
              <div className="border rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">BUY</span>
                  <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded">Short term</span>
                </div>
                <p className="mt-2 font-medium">[Stock Name]</p>
                <p className="text-sm text-green-500 mt-1">Potential left: 16.32%</p>
              </div>
              {/* Repeat cards as needed */}
            </div>

            <h4 className="font-bold text-md mb-2">🔴 LIVE Calls</h4>
            <div className="grid grid-cols-2 gap-4 text-center text-sm">
              <div className="bg-gray-100 p-3 rounded-lg">📈 Stocks</div>
              <div className="bg-gray-100 p-3 rounded-lg">📉 Futures</div>
              <div className="bg-gray-100 p-3 rounded-lg">📊 Options</div>
              <div className="bg-gray-100 p-3 rounded-lg">💰 Commodity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

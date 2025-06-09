import React from 'react';

const AdvisoryAbout = () => {
  return (
    <section className="bg-primary text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2">
          {/* Laava Badge */}
          <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
            🔮 Laava
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Trade Ideas <br /> By SEBI Reg RA
          </h1>

          <p className="text-lg text-[#cbd5e1] mb-6">
            For <span className="font-medium text-white">Stock</span> | <span className="font-medium text-white">Futures</span> | <span className="font-medium text-white">Options</span> | <span className="font-medium text-white">Commodities</span>
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap bg-black rounded-lg px-6 py-4 text-center text-sm lg:text-base mb-8 text-white max-w-lg">
            <div className="w-1/3 border-r border-gray-400">
              <p className="font-bold text-lg">1569+</p>
              <p className="text-xs">Closed Trades</p>
            </div>
            <div className="w-1/3 border-r border-gray-400">
              <p className="font-bold text-lg">Instant</p>
              <p className="text-xs">Buy/sell alert</p>
            </div>
            <div className="w-1/3">
              <p className="font-bold text-lg">₹233*/mo</p>
              <p className="text-xs">Low cost plans</p>
            </div>
          </div>

          {/* Mobile Input + CTA */}
          {/* <div className="flex items-center bg-white rounded-full px-3 py-2 max-w-md shadow-lg">
            <span className="text-sm pl-2 pr-2">🇮🇳</span>
            <input
              type="tel"
              placeholder="Enter Mobile No."
              className="flex-grow outline-none px-2 text-black"
            />
            <button className="bg-[#2D6EF7] hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full transition ml-2">
              Claim 3 FREE Trades
            </button>
          </div> */}
        </div>

        {/* Right Column (Mockup or Image Section) */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="/univest-trade-cards.png" // Replace with actual image
            alt="Trade Ideas Cards"
            className="w-[90%] max-w-lg rounded-3xl shadow-2xl"
          />
          {/* Optional pointers or labels can be added with absolute positioning */}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryAbout;

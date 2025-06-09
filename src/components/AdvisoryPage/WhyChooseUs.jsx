import React from 'react';
import { FaBolt } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="text-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Awards Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          <div className="flex flex-col items-center">
            <img src="/google-icon.png" alt="Google" className="h-8 mb-1" />
            <p className="text-sm text-darkgray">For Startup<br />Accelerator 2024</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/et-icon.png" alt="ET" className="h-8 mb-1" />
            <p className="text-sm text-darkgray">Awarded No.1<br />by Economic Times</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/star-icon.png" alt="Trust" className="h-8 mb-1" />
            <p className="text-sm text-darkgray">Trusted by 40 Lakh+<br />Indians</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          ⭐ WHY CHOOSE US ⭐
        </h2>
        <p className="text-lg mb-10">
          Over <span className="text-black font-bold">100+</span> years of experience in capital market
        </p>

        {/* Stats Boxes */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Box 1 */}
          <div className="bg-black text-white rounded-2xl p-6 w-72 shadow-md border-2 border-black">
            <h3 className="text-3xl font-bold text-yellow-400">1569+</h3>
            <p className="mt-2 text-sm font-medium">Trades closed</p>
          </div>

          {/* Box 2 */}
          <div className="bg-black text-white rounded-2xl p-6 w-72 shadow-md border-2 border-black flex flex-col items-center">
            <FaBolt className="text-yellow-400 text-3xl mb-1" />
            <p className="text-sm font-medium">Instant Buy/Sell alerts</p>
          </div>

          {/* Box 3 */}
          <div className="bg-black text-white rounded-2xl p-6 w-72 shadow-md border-2 border-black">
            <h3 className="text-3xl font-bold text-yellow-400">₹233/mo*</h3>
            <p className="mt-2 text-sm font-medium">Low cost plans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

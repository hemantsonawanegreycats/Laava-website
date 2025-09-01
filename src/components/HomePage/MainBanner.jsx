import React from "react";
import { FaStar } from "react-icons/fa";

const MainBanner = () => {
  return (
    <section className="text-white py-16 px-4">
      
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to <br />
          Laava
        </h1>
        <p className="text-lg md:text-xl font-medium mb-6">
          Research • Invest • Grow
        </p>

        {/* Stats Row */}
        <div className="flex justify-center gap-8 flex-wrap text-sm md:text-base mb-8">
          {/* <div>
            <p className="font-bold">40 Lac+</p>
            <p className="text-gray-300">Active users</p>
          </div>
          <div className="border-l border-gray-500 h-6 self-center"></div> */}
          <div className="abyssBlue px-3 py-3 rounded-md">
            <p className="font-bold">SEBI Reg.</p>
            <p className="text-gray-300">Research analysts</p>
          </div>
          {/* <div className="border-l border-gray-500 h-6 self-center"></div>
          <div>
            <p className="font-bold">Instant</p>
            <p className="text-gray-300">Trade execution</p>
          </div> */}
        </div>

        {/* Input Box */}
        {/* <div className="flex justify-center items-center gap-2 bg-white rounded-full py-2 px-4 max-w-md mx-auto shadow-lg mb-10">
          <span className="flex items-center gap-1 text-black text-sm">
            🇮🇳
          </span>
          <input
            type="text"
            placeholder="Enter Mobile No."
            className="flex-1 outline-none border-none bg-transparent text-black text-sm px-2"
          />
          <button className="bg-[#3B86FF] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#2e70d2] transition">
            Claim 3 FREE Trades
          </button>
        </div> */}

        {/* Logos and Awards Row */}
        {/* <div className="flex justify-center flex-wrap gap-6 items-center text-sm text-center text-gray-300">
          <div>
            <p className="font-semibold text-white">Google</p>
            <p>For Startup Accelerator 2024</p>
          </div>
          <div className="border-l border-gray-600 h-8 hidden md:block"></div>
          <div>
            <p className="font-semibold text-white">ET</p>
            <p>Awarded No.1 by Economic Times</p>
          </div>
          <div className="border-l border-gray-600 h-8 hidden md:block"></div>
          <div>
            <div className="flex justify-center text-yellow-400 mb-1">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-yellow-400 opacity-70" />
            </div>
            <p>Trusted by 40 Lakh+ Indians</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MainBanner;

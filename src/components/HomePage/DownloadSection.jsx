import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DownloadSection = () => {
  return (
    <section className="abyssBlue text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Advisory to Execution<br />All on Laava
          </h1>

          {/* Input with Button */}
          {/* <div className="flex items-center bg-white rounded-full px-2 py-2 max-w-md mb-6 shadow-md">
            <span className="text-sm pl-3 pr-2">🇮🇳</span>
            <input
              type="tel"
              placeholder="Enter Mobile No."
              className="flex-grow outline-none px-2 text-black"
            />
            <button className="bg-[#2D6EF7] hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full transition">
              Open Free Demat
            </button>
          </div> */}

          {/* QR + Store Links */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <img
                src="/qr-code.png" // Replace with actual QR image path
                alt="QR Code"
                className="w-16 h-16 object-contain"
              />
              <p className="text-xs mt-1">Scan to Download</p>
            </div>
            <div className="flex gap-2">
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Mobile App Mockup */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src="/mobile-mockup-1.png" // Replace with actual image paths
            alt="Univest App 1"
            className="w-48 md:w-56 lg:w-60 z-10"
          />
          <img
            src="/mobile-mockup-2.png"
            alt="Univest App 2"
            className="w-48 md:w-56 lg:w-60 -ml-16 lg:-ml-20"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

import React from 'react';

const FirstBanner = () => {
  return (
    <section className="relative py-30 flex items-center justify-center bg-black text-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/dot-background.jpg')" }}
      ></div>

      {/* Gradient Overlays */}
      <div className="absolute left-10 top-1/3 w-72 h-72 rounded-full bg-blue-900/40 blur-3xl"></div>
      <div className="absolute right-10 bottom-1/3 w-72 h-72 rounded-full bg-red-900/40 blur-3xl"></div>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        

        <div className="max-w-6xl text-white mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to <br />
          Laava
        </h1>
        <p className="text-lg md:text-xl font-medium mb-6">
          Research • Invest • Grow
        </p>

        <div className="flex justify-center gap-8 flex-wrap text-sm md:text-base mb-8">
          
          <div className="abyssBlue px-3 py-3 rounded-md">
            <p className="font-bold">SEBI Reg.</p>
            <p className="text-gray-300">Research analysts</p>
          </div>
    
        </div>
      </div>

        
      </div>
    </section>
    );
};

export default FirstBanner;
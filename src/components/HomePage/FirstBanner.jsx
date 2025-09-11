

// import React from 'react';

// const FirstBanner = () => {
//   return (
//     <section className="relative py-30 flex items-center justify-center bg-black text-center">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('/assets/images/dot-background.jpg')" }}
//       ></div>
//       <div className="absolute left-10 top-1/3 w-72 h-72 rounded-full bg-blue-900/40 blur-3xl"></div>
//       <div className="absolute right-10 bottom-1/3 w-72 h-72 rounded-full bg-red-900/40 blur-3xl"></div>

//       <div className="absolute inset-0 bg-black/70"></div>

//       <div className="relative z-10 w-full max-w-3xl px-6">
        
//         <div className="max-w-6xl text-white mx-auto text-center">
//         <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
//           Welcome to Laava
//         </h1>
//         <p className="text-lg md:text-xl font-medium mb-6">
//           Research • Invest • Grow
//         </p>

//         <div className="flex justify-center gap-8 flex-wrap text-sm md:text-base mb-8">
//           <div className="abyssBlue px-3 py-3 rounded-md">
//             <p className="font-bold">SEBI Reg.</p>
//             <p className="text-gray-300">Research Analysts</p>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//     );
// };

// export default FirstBanner;

import React from 'react';

const FirstBanner = () => {
  return (
    <section className="h-screen relative py-16 md:py-28 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/Herobanner.png')" }}
      ></div>

      {/* Gradient Overlays */}
      <div className="absolute left-4 md:left-10 top-1/4 w-40 h-40 md:w-72 md:h-72 rounded-full bg-blue-900/40 blur-3xl"></div>
      <div className="absolute right-4 md:right-10 bottom-1/4 w-40 h-40 md:w-72 md:h-72 rounded-full bg-red-900/40 blur-3xl"></div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70"></div> */}

      <div className="relative z-10 w-full max-w-3xl px-4 md:px-6">
        <div className="text-white mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug md:leading-tight">
            Welcome to Laava
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium mb-6">
            Research • Invest • Grow
          </p>

          <div className="flex justify-center gap-4 md:gap-8 flex-wrap text-xs sm:text-sm md:text-base mb-8">
            <div className="abyssBlue px-4 py-3 rounded-md">
              <p className="font-bold">SEBI Reg.</p>
              <p className="text-gray-300">Research Analysts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstBanner;

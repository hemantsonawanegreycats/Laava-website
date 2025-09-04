
// Mypage
import React from 'react';
import HeroSection from '../HomePage/HeroSection';
import InvestingSection from '../HomePage/InvestingSection';
import FaqSection from '../HomePage/FaqSection';
import DownloadSection from '../HomePage/DownloadSection';
import FirstBanner from '../HomePage/FirstBanner';
import Contactmain from './Contactmain';
import { BarChart3, Diamond, Eye, Lightbulb, Target, Users } from 'lucide-react';


const items = [
    {
      icon: <Diamond className="w-6 h-6 text-white" />,
      title: "AI + Human Expertise",
      desc: "We blend machine intelligence with analyst-driven validation.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Transparency First",
      desc: "Every insight is backed by clear data and methodology.",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Innovation at Core",
      desc: "Continuously evolving algorithms that adapt with the markets.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Client-Centric Approach",
      desc: "Your profitability is our ultimate benchmark of success.",
      color: "from-green-500 to-emerald-600",
    },
  ];


export default function Home() {
  return (
    <main className="bg-black">
      
      <FirstBanner />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="order-2 md:order-1">
          <img
            src="../../assets/images/Laava-logo.png"
            alt="About Laava"
            className="rounded-3xl w-full shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="order-1 md:order-2 text-gray-800 px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Laava</h2>
          <p className="text-base leading-relaxed mb-6 text-white">
           At LAAVA, we are reimagining how investors discover, analyze, and act on stock market opportunities. Traditional research is often slow, biased, and limited by human bandwidth. We believe the future of wealth creation lies in AI-powered intelligence that works at the speed of markets.<br /><br />
           Our platform combines the expertise of seasoned research analysts with cutting-edge artificial intelligence, machine learning, and data science to deliver insights that are:
          </p>
          
        </div>
      </div>

        <section className="px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Future-Ready Insights</h2>
        <p className="text-base leading-relaxed mb-6 text-center text-white">
          Our platform combines the expertise of seasoned research analysts with cutting-edge<br /> artificial intelligence, machine learning, and data science to deliver insights that are:
        </p>


        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Faster</h3>
            <p className="text-white">Real-time analysis of market trends, corporate actions, and global events.</p>
          </div>
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Smarter</h3>
            <p className="text-white">AI models trained on years of financial data to identify patterns invisible to the human eye.</p>
          </div>
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Personalized</h3>
            <p className="text-white">Research tailored to individual investor profiles, goals, and risk appetite.</p>
          </div>
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Actionable</h3>
            <p className="text-white">Clear, concise, and timely recommendations designed to maximize returns.</p>
          </div>
        </div>

       <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="flex flex-col items-center">
            <div className="abyssBlue p-6 rounded-full shadow-lg mb-6">
              <Target className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              To democratize access to high-quality research and empower
              investors of all sizes to make informed, profitable, and
              confident investment decisions.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <div className="abyssBlue p-6 rounded-full shadow-lg mb-6">
              <Eye className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              To become the most trusted AI-first research partner for retail
              and institutional investors, transforming data into
              wealth-building insights.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="relative w-full bg-[linear-gradient(135deg,#040A12_0%,#122B44_50%,#197dff_100%)] text-white py-16">
         <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">WHY <br /> CHOOSE US</h2>
          <p className="text-lg text-white">
            We bring the best of artificial intelligence and human insight to deliver results you can trust.
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

     <div className="mt-16">
      <p className="font-semibold text-white">At LAAVA, we don’t just provide research. We provide clarity in complexity, confidence in decisions, and conviction in action.</p>
      <p className="font-semibold text-white">For grievances, please contact us at <a href="mailto:care@laavafin.com" className="text-primary underline">care@laavafin.com</a></p>
        </div>
      <Contactmain />

    <section className="abyssBlue text-white py-16 px-4 text-center mt-10">
  <h2 className="text-3xl font-bold mb-4">Start your financial journey with Laava</h2>
  <p className="mb-6 text-lg">Smart insights, expert advisory, and secure investing — all in one place.</p>

  <a href="#" className="inline-block">
    <img
      src="/assets/images/google.png" 
      alt="Join Now with Laava"
      className="mx-auto w-30 hover:scale-105 transition-transform duration-300"
    />
  </a>

  <a href="#" className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="mx-auto hover:scale-105 transition-transform duration-300 w-30" />
            </a>
</section>

    </section>
    </main>
  );
}




// // import FirstBanner from "../HomePage/FirstBanner";
// // import AboutUs from "./About";
// // import Contactmain from "./Contactmain";

// // export default function Mainhome() {
// //     return (
// //         <div>

// //             <FirstBanner />

// //             <Contactmain />
// //         </div>

// //     );
// // }


// // src/pages/Home.jsx
// import React from 'react';
// import HeroSection from '../HomePage/HeroSection';
// import InvestingSection from '../HomePage/InvestingSection';
// import FaqSection from '../HomePage/FaqSection';
// import DownloadSection from '../HomePage/DownloadSection';
// import FirstBanner from '../HomePage/FirstBanner';
// import Contactmain from './Contactmain';



// export default function Home() {
//   return (
//     <main className="bg-black">
     
//       <FirstBanner />
//       {/* <MainBanner /> */}

//       {/* Features Section */}
//       <section className="py-16 px-4">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
//           <div className="abyssBlue px-3 py-3 rounded-md">
//             <h3 className="text-xl font-semibold mb-2 text-white">Real-Time Insights</h3>
//             <p className="text-white">Stay updated with live data and market trends tailored to your goals.</p>
//           </div>
//           <div className="abyssBlue px-3 py-3 rounded-md">
//             <h3 className="text-xl font-semibold mb-2 text-white">Smart Advisory</h3>
//             <p className="text-white">Expert-curated investment plans and personalized strategies.</p>
//           </div>
//           <div className="abyssBlue px-3 py-3 rounded-md">
//             <h3 className="text-xl font-semibold mb-2 text-white">Secure Transactions</h3>
//             <p className="text-white">Encrypted data handling and secure financial operations.</p>
//           </div>
//         </div>
//       </section>

//         {/* About Section */}
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Image Section */}
//         <div className="order-2 md:order-1">
//           <img
//             src="../../assets/images/Laava-logo.png"
//             alt="About Laava"
//             className="rounded-3xl w-full shadow-xl"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="order-1 md:order-2 text-gray-800 px-2">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Laava</h2>
//           <p className="text-base leading-relaxed mb-6 text-white">
//             At LAAVA, we are reimagining how investors discover, analyze, and act on stock market opportunities. Traditional research is often slow, biased, and limited by human bandwidth. We believe the future of wealth creation lies in AI-powered intelligence that works at the speed of markets.
//           </p>
//           <p className="text-base leading-relaxed mb-6 text-white">
//             With Laava, you gain access to proven stock market advisory, offering expert trade ideas for stocks, futures, options, and commodities. Our one-click trade execution feature eliminates slippage, ensuring instant execution through our advisory-first brokerage. Smart portfolio management allows you to identify underperforming stocks, optimize your investments, and receive real-time alerts.
//           </p>
//           <p className="text-base leading-relaxed mb-6 text-white">
//             Additionally, Laava provides seamless investment opportunities beyond stocks, including mutual funds, bonds, fixed deposits, and insurance (coming soon). Join over 40 lakh active investors who trust Laava to make informed and profitable trading decisions. Start investing smarter today! 🚀
//           </p>
//         </div>
//       </div>

//       <HeroSection />
//       <FaqSection />
//       <InvestingSection />
//       <Contactmain />

//       <h2 className="text-center text-3xl font-bold text-white mb-2">Contact Us</h2>
//             <p className="text-center text-white mb-10">
//               Have questions? Want to know more about how we can help you invest and trade smarter?
//               We’d love to hear from you. 
//             </p>
      
//             <div className="mb-12 pt-10">
//               {/* <h3 className="text-2xl font-semibold text-white mb-6">Global Offices</h3> */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Email */}
//                 <a href="mailto:care@laavafin.com">
//                 <div className="abyssBlue border border-primary p-6 rounded-lg shadow-sm">
//                   <h4 className="text-lg font-semibold text-white mb-2"><MdEmail /> Email</h4>
//                   <p className="text-white">
//                     care@laavafin.com 
//                   </p>
//                 </div>
//                 </a>
      
//                 {/* Address */}
//                 <a href="#">
//                 <div className="abyssBlue border border-primary p-6 rounded-lg shadow-sm">
//                   <h4 className="text-lg font-semibold text-white mb-2"><FaLocationDot /> Address</h4>
//                   <p className="text-white">
//                     India: Laava, Andheri West, Mumbai - 400053.
//                   </p>
//                 </div>
//                 </a>
//               </div>
//             </div>

//     </main>
//   );
// }





// Mypage
import React from 'react';
import FirstBanner from '../HomePage/FirstBanner';
// import Contactmain from './Contactmain';
import { BarChart3, Diamond, Eye, Lightbulb, Target, Users } from 'lucide-react';
import { useEffect, useRef } from "react";
import gsap from 'gsap';
import Documents from '../HomePage/Documents';


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

export default function Mainhome() {


  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    gsap.from(missionRef.current, {
      x: -120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(visionRef.current, {
      x: 120,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  return (

   
    <main className="bg-black">
       
      <FirstBanner />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pt-16 px-10">
        <div className="order-2 md:order-1">
          <img
            src="assets/images/Aboutsection.png"
            alt="About Laava"
            className="rounded-3xl w-full shadow-xl"
          />
        </div>

        <div className="order-1 md:order-2 text-gray-800 px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Laava</h2>
          <p className="text-base leading-relaxed mb-6 text-white">
           At LAAVA, we are redefining the way investors discover, analyse, and act on stock market opportunities. Traditional equity research is often slow, subjective, and constrained by human bandwidth. We believe the future of wealth creation lies in AI-powered intelligence that operates at the speed of markets.<br /><br />
           Our platform seamlessly integrates the expertise of seasoned research analysts with advanced artificial intelligence, machine learning, and data science. This unique combination enables us to deliver insights that are timely, comprehensive, and precise. <br /><br />
           Every research calls on LAAVA is carefully hand-picked by experienced professionals and supported by AI-driven insights, ensuring that investors have access to high-quality, objective, and actionable intelligence.<br />
           By bridging human judgment with data-driven analysis, we are establishing a new standard for equity research—smarter, faster, and more transparent.


          </p>
        </div>
      </div>

        <section className="max-w-7xl mx-auto items-center pt-16 px-10">
          <Documents />
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Future-Ready Insights</h2>
        <p className="text-base leading-relaxed mb-6 text-center text-white">
          Our platform combines the expertise of seasoned research analysts with cutting-edge<br /> artificial intelligence, machine learning, and data science to deliver insights that are:
        </p>

        <div className="max-w-7xl mt-12 grid md:grid-cols-4 gap-10 items-center text-center">

          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-2xl font-bold mb-4 mt-4 text-white">Faster</h3>
            <p className="text-white pb-5 ">Real-time analysis of market trends, corporate actions, and global events. </p>
          </div>

          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-2xl font-bold mb-4 mt-4 text-white">Smarter</h3>
            <p className="text-white pb-5 ">AI models trained on years of financial data to identify patterns invisible to the human eye.</p>
          </div>

          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-2xl font-bold mb-4 mt-4 text-white">Personalized</h3>
            <p className="text-white pb-5 ">Research tailored to individual investor profiles, goals, and risk appetite.</p>
          </div>

          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-2xl font-bold mb-4 mt-4 text-white">Actionable</h3>
            <p className="text-white pb-5 ">Clear, concise, and timely recommendations designed to maximize returns.</p>
          </div>
        </div>

       <section className="py-16 bg-black text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Mission & Vision</h2>

        
      </div>

      <section className="bg-black">
      


    <section className="max-w-5xl mx-auto px-6">
      <div className="space-y-12">
        
        <div className="grid md:grid-cols-[150px_1fr] gap-6 items-center">
          <h3 className="text-lg md:text-xl font-semibold text-white md:text-right">
            Mission
          </h3>

          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="hidden md:block w-16 border-t border-gray-400"></span>
            
            <p className="md:ml-4 text-gray-300 text-sm md:text-base leading-relaxed">
              To democratize access to high-quality research and empower
              investors of all sizes to make informed, profitable, and confident
              investment decisions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-[150px_1fr] gap-6 items-center">
          <h3 className="text-lg md:text-xl font-semibold text-white md:text-right">
            Vision
          </h3>

          <div className="flex flex-col md:flex-row items-start md:items-center">
            <span className="hidden md:block w-16 border-t border-gray-400"></span>
            
            <p className="md:ml-4 text-gray-300 text-sm md:text-base leading-relaxed">
              To become the most trusted AI-first research partner for retail
              and institutional investors, transforming data into wealth-building
              insights.
            </p>
          </div>
        </div>

      </div>
    </section>
    </section>

    </section>

    <section className="relative w-full abyssBlue text-white py-16 rounded-lg">
         <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">WHY <br /> CHOOSE US</h2>
          <p className="text-lg text-white">
            We bring the best of artificial intelligence and human insight to deliver results you can trust.
          </p>
        </div>
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
      <p className="font-semibold text-white text-center">At LAAVA, we don’t just provide research. We provide clarity in complexity, confidence in decisions, and conviction in action.</p>
      <p className="font-semibold text-white text-center">For grievances, please contact us at <a href="mailto:care@laavafin.com" className="text-primary underline">care@laavafin.com</a></p>
        </div>
      {/* <Contactmain /> */}

    {/* <section className="abyssBlue text-white py-16 px-4 text-center mt-10">
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
</section> */}

    </section>
    </main>
  );
}









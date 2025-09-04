import React from 'react';
import { Diamond, BarChart3, Lightbulb, Users, Target, Eye } from "lucide-react";
import TestimonialCarousel from '../HomePage/TestimonialCarousel';

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

const AboutUs = () => {
  return (
    <section className="bg-black px-6">

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
        

        {/* Hero Text */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-snug">
          ABOUT US
        </h1>
        <p className="mt-4 text-lg text-white">
          At LAAVA, we are reimagining how investors discover, analyze, and act on stock market opportunities. Traditional research is often slow, biased, and limited by human bandwidth. We believe the future of wealth creation lies in AI-powered intelligence that works at the speed of markets.
        </p>
      </div>
    </section>
    
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        {/* <div className="order-2 md:order-1">
          <img
            src="../../assets/images/Laava-logo.png"
            alt="About Laava"
            className="rounded-3xl w-full shadow-xl"
          />
        </div> */}

        {/* Text Section */}
        {/* <div className="order-1 md:order-2 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Laava</h2>
          <p className="text-base leading-relaxed mb-6 text-white">
            At LAAVA, we are reimagining how investors discover, analyze, and act on stock market opportunities. Traditional research is often slow, biased, and limited by human bandwidth. We believe the future of wealth creation lies in AI-powered intelligence that works at the speed of markets.
          </p>
          <p className="text-base leading-relaxed mb-6 text-white">
            With Laava, you gain access to proven stock market advisory, offering expert trade ideas for stocks, futures, options, and commodities. Our one-click trade execution feature eliminates slippage, ensuring instant execution through our advisory-first brokerage. Smart portfolio management allows you to identify underperforming stocks, optimize your investments, and receive real-time alerts.
          </p>
          <p className="text-base leading-relaxed mb-6 text-white">
            Additionally, Laava provides seamless investment opportunities beyond stocks, including mutual funds, bonds, fixed deposits, and insurance (coming soon). Join over 40 lakh active investors who trust Laava to make informed and profitable trading decisions. Start investing smarter today! 🚀
          </p>
        </div> */}
      </div>

      {/* Platform Section */}
      <section className="py-16 px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Future-Ready Insights</h2>
        <p className="text-base leading-relaxed mb-6 text-center text-white">
          Our platform combines the expertise of seasoned research analysts with cutting-edge artificial intelligence, machine learning, and data science to deliver insights that are:
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
      </section>

      {/* Mission & Vision */}
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
      {/* <div className="max-w-5xl mx-auto my-16 text-sm text-white">
        <h3 className="text-xl font-semibold mb-4">Our Mission:</h3>
        <p className="mb-3">
          To democratize access to high-quality research and empower investors of all sizes to make informed, profitable, and confident investment decisions.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-white">Our Vision:</h3>
        <p className="mb-3">
          To become the most trusted AI-first research partner for retail and institutional investors, transforming data into wealth-building insights.
        </p>
      </div> */}

      {/* WhyCHooseUs Section */}
      <section className="relative w-full bg-[linear-gradient(135deg,#040A12_0%,#122B44_50%,#197dff_100%)] text-white py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">WHY <br /> CHOOSE US</h2>
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

    
      {/* <section className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Why Choose Us</h2>
        <p className="text-base leading-relaxed mb-6 text-center text-white">
            Our platform combines the expertise of seasoned research analysts with cutting-edge artificial intelligence, machine learning, and data science to deliver insights that are:
            </p> *
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">AI + Human Expertise</h3>
            <p className="text-white">We blend machine intelligence with analyst-driven validation.</p>
          </div>
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Transparency First</h3>
            <p className="text-white">Every insight is backed by clear data and methodology.</p>
          </div>
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Innovation at Core</h3>
            <p className="text-white">Continuously evolving algorithms that adapt with the markets.</p>
          </div>
          <div className="abyssBlue px-2 py-2 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Client-Centric Approach</h3>
            <p className="text-white">Your profitability is our ultimate benchmark of success.</p>
          </div>
        </div>
      </section> */}
      <div className="mt-16">
      <p className="font-semibold text-white">At LAAVA, we don’t just provide research. We provide clarity in complexity, confidence in decisions, and conviction in action.</p>
      <p className="font-semibold text-white">For grievances, please contact us at <a href="mailto:care@laavafin.com" className="text-primary underline">care@laavafin.com</a></p>
        </div>
        <TestimonialCarousel />
    </section>
  );
};

export default AboutUs;

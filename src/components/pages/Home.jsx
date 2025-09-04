// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../HomePage/HeroSection';
import InvestingSection from '../HomePage/InvestingSection';
import FaqSection from '../HomePage/FaqSection';
import MainBanner from '../HomePage/MainBanner';
import DownloadSection from '../HomePage/DownloadSection';
import FirstBanner from '../HomePage/FirstBanner';
import Contactmain from './Contactmain';



export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-primary to-primary/70 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Laava</h1>
          <p className="text-lg md:text-xl mb-8">Your trusted platform for smart investments and financial growth.</p>
          <a
            href="#"
            className="btn"
          >
            Get Started
          </a>
        </div>
      </section> */}
      <FirstBanner />
      {/* <MainBanner /> */}

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="abyssBlue px-3 py-3 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Real-Time Insights</h3>
            <p className="text-white">Stay updated with live data and market trends tailored to your goals.</p>
          </div>
          <div className="abyssBlue px-3 py-3 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Smart Advisory</h3>
            <p className="text-white">Expert-curated investment plans and personalized strategies.</p>
          </div>
          <div className="abyssBlue px-3 py-3 rounded-md">
            <h3 className="text-xl font-semibold mb-2 text-white">Secure Transactions</h3>
            <p className="text-white">Encrypted data handling and secure financial operations.</p>
          </div>
        </div>
      </section>

        {/* About Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            At LAAVA, we are reimagining how investors discover, analyze, and act on stock market opportunities. Traditional research is often slow, biased, and limited by human bandwidth. We believe the future of wealth creation lies in AI-powered intelligence that works at the speed of markets.
          </p>
          <p className="text-base leading-relaxed mb-6 text-white">
            With Laava, you gain access to proven stock market advisory, offering expert trade ideas for stocks, futures, options, and commodities. Our one-click trade execution feature eliminates slippage, ensuring instant execution through our advisory-first brokerage. Smart portfolio management allows you to identify underperforming stocks, optimize your investments, and receive real-time alerts.
          </p>
          <p className="text-base leading-relaxed mb-6 text-white">
            Additionally, Laava provides seamless investment opportunities beyond stocks, including mutual funds, bonds, fixed deposits, and insurance (coming soon). Join over 40 lakh active investors who trust Laava to make informed and profitable trading decisions. Start investing smarter today! 🚀
          </p>
        </div>
      </div>

      <DownloadSection />
      <HeroSection />
      <FaqSection />
      <InvestingSection />
      <Contactmain />

      {/* App Promo Section */}
      {/* <section className="bg-gradient-to-br from-primary to-primary/70 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Download the Laava App</h2>
        <p className="text-gray-600 mb-6">Experience investment on the go with our mobile app.</p>
        <div className="flex justify-center gap-4">
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Play Store" className="w-40" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-40" />
        </div>
      </section> */}

      {/* Testimonials Slider (Example Only) */}
      {/* <section className="py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow text-center animate-fadeIn">
            <p className="text-gray-700 italic">“Laava helped me plan and grow my portfolio with confidence. Highly recommended!”</p>
            <h4 className="mt-4 font-semibold">— A Happy Investor</h4>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="abyssBlue text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start your financial journey with Laava</h2>
        <p className="mb-6 text-lg">Smart insights, expert advisory, and secure investing — all in one place.</p>
        <a href="#" className="btn">
          Join Now
        </a>
      </section>

    </main>
  );
}

// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../HeroSection';
import InvestingSection from '../InvestingSection';
import FaqSection from '../FAQSection';
import MainBanner from '../MainBanner';
import TestimonialCarousel from '../TestimonialCarousel';
import DownloadSection from '../DownloadSection';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
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
      <MainBanner />

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Insights</h3>
            <p className="text-gray-600">Stay updated with live data and market trends tailored to your goals.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Smart Advisory</h3>
            <p className="text-gray-600">Expert-curated investment plans and personalized strategies.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">Encrypted data handling and secure financial operations.</p>
          </div>
        </div>
      </section>

      <HeroSection />
      <InvestingSection />
      <DownloadSection />
      <FaqSection />

      {/* App Promo Section */}
      
      <section className="bg-gradient-to-br from-primary to-primary/70 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Download the Laava App</h2>
        <p className="text-gray-600 mb-6">Experience investment on the go with our mobile app.</p>
        <div className="flex justify-center gap-4">
          <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Play Store" className="w-40" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-40" />
        </div>
      </section>

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
      <section className="bg-gradient-to-br from-primary to-primary/70 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start your financial journey with Laava</h2>
        <p className="mb-6 text-lg">Smart insights, expert advisory, and secure investing — all in one place.</p>
        <a href="#" className="btn">
          Join Now
        </a>
      </section>

      <TestimonialCarousel />
    </main>
  );
}

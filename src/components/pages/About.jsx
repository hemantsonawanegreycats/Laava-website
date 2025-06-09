import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-[#f5f7fa] py-16 px-6">
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
        <div className="order-1 md:order-2 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Laava</h2>
          <p className="text-base leading-relaxed mb-6">
            Laava is a cutting-edge stock market platform designed to help traders and investors maximize their returns with expert-driven advisory services and seamless trading execution. Whether you're a seasoned trader or just starting, Laava simplifies your investment journey with actionable trade recommendations, AI-powered portfolio insights, and a fully integrated brokerage experience.
          </p>
          <p className="text-base leading-relaxed mb-6">
            With Laava, you gain access to proven stock market advisory, offering expert trade ideas for stocks, futures, options, and commodities. Our one-click trade execution feature eliminates slippage, ensuring instant execution through our advisory-first brokerage. Smart portfolio management allows you to identify underperforming stocks, optimize your investments, and receive real-time alerts.
          </p>
          <p className="text-base leading-relaxed mb-6">
            Additionally, Laava provides seamless investment opportunities beyond stocks, including mutual funds, bonds, fixed deposits, and insurance (coming soon). Join over 40 lakh active investors who trust Laava to make informed and profitable trading decisions. Start investing smarter today! 🚀
          </p>
        </div>
      </div>

      {/* Legal & Regulatory Section */}
      <div className="max-w-5xl mx-auto mt-16 text-sm text-gray-600">
        <h3 className="text-xl font-semibold mb-4">Attention Investors</h3>
        <p className="mb-3">
          To ensure a smooth trading experience and prevent unauthorized transactions, investors must update their mobile number and email ID with their stockbroker or depository participant. As per regulatory requirements, investors are required to pay a stipulated amount as an upfront margin for trading in the Cash/FO segment.
        </p>
        <p className="mb-3">
          We encourage all investors to regularly check their securities in the Consolidated Account Statement (CAS) issued by depository to verify their holdings. Always verify alerts and transaction details received directly from the exchange or NSDL before proceeding with any trades. Please do not make payments through unverified email links, WhatsApp, or SMS. Always trade through a registered stockbroker and verify all details before making financial decisions.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Disclaimer</h3>
        <p className="mb-3">
          Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. Brokerage will not exceed the SEBI prescribed limit. For more disclaimer/disclosure, visit <a href="https://laava.in/stock-broker" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://laava.in/stock-broker</a> or the Laava App.
        </p>
        <p className="mb-3">
          We collect and use your contact information for legitimate business purposes, including providing updates on our products and services. We do not sell or rent your contact information to third parties. By submitting your details, you authorize us to contact you via Call/SMS, even if you are registered under DND. This authorization remains valid for 12 months.
        </p>
        <p className="font-semibold">For grievances, please contact us at <a href="mailto:info@laava.com" className="text-blue-600 underline">info@laava.com</a></p>
      </div>
    </section>
  );
};

export default AboutUs;

import React from "react";

const faqs = [
  {
    question: "What is Laava?",
    answer:
      "Laava is an independent advisory platform, licensed by SEBI in India and made to assist first-time investors starting their investment journey and seasoned investors looking to diversify their portfolio. Laava deploys its in-house experts to create portfolios tailored towards proactive goals and investment themes. The platform uses multiple criteria to make decisions across ETFs, Mutual funds, etc. such as Social Equity, Global exposure, Good Governance, and Environmental protection to create an investor's dream called Sustainable Growth.",
  },
  {
    question: "Why invest through Laava?",
    answer:
      "Access diverse portfolios including N100 Index, Factors, Global Trends and Multi-Asset funds. Access curated ETF baskets and mutual funds designed around your goals. Invest via lumpsum investment planning and long-term life-driven portfolio by qualified investment advisors.",
  },
  {
    question: "Are there any hidden charges or commissions?",
    answer:
      "No. We believe in transparency. No hidden charges, no commissions. We offer flat transparent pricing. You pay a fixed fee as per your chosen plan. No commission, so our advice is unbiased and just for you.",
  },
  {
    question: "Does Laava perform risk profiling to understand your investment goals?",
    answer: "YES. Laava performs SEBI risk profiling for all clients.",
  },
  {
    question: "Where can I invest?",
    answer:
      "With Laava, you now have the option to invest in select mutual funds and curated ETF-based portfolios. Based on your profile and risk score, you can select a suitable portfolio. You can also personalize these further.",
  },
  {
    question: "Can you set up a Regular Investment Plan through the Laava app?",
    answer:
      "Yes, you can start a regular investment plan via the Laava app. Monthly, quarterly or custom SIPs can be created with ease.",
  },
  {
    question: "Does Laava offer investment options that consider social responsibility?",
    answer:
      "YES. Curated Equity Portfolio (CEP) can be based on ESG / Social & Sustainable ETFs.",
  },
  {
    question: "How Does It Work?",
    answer:
      "Laava collects your financial data, investment goals and timelines through a guided flow. Based on this, you get a curated advisory plan and recommended portfolios via the app. You can invest, track and withdraw anytime.",
  },
  {
    question: "Are there live events to learn more about Laava’s investment strategies?",
    answer:
      "YES. Laava offers webinars, investor connects and Global Event Participation on our channels.",
  },
  {
    question: "Does Laava have resources to learn about investing for beginners?",
    answer:
      "YES. Laava offers articles, blogs, and a research library on its mobile app.",
  },
  {
    question: "Can you adjust your investment plan based on changing risk tolerance?",
    answer:
      "YES. At any point in your journey, you can re-do your risk profile and dynamically change your portfolio recommendations.",
  },
  {
    question:
      "Does Laava collaborate with international advisors to offer a wider range of investment options?",
    answer:
      "YES. Laava is integrated with multiple platforms to offer access to global investment advisors and options.",
  },
  {
    question:
      "Does Laava leverage its associations to provide access to in-depth research reports?",
    answer:
      "YES. Laava’s association gives access to proprietary research, curated theme and investment insights.",
  },
  {
    question: "Can you track your investment’s performance in the Laava app?",
    answer:
      "YES. The performance dashboard view gives you a 360-degree view of your investments.",
  },
];

const FaqSection = () => {
  return (
    <section className="text-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg md:text-xl font-semibold mb-3 uppercase tracking-wide">
          Frequently Asked Questions <span className="text-primary">(FAQs)</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-primary rounded-2xl border border-primary p-5 text-left shadow-sm"
            >
              <h3 className="text-base font-semibold mb-2 text-white">{faq.question}</h3>
              <p className="text-sm text-gray">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

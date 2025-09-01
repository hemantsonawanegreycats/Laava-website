import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = {
  "Getting Started": [
    {
      question: "What is Laava?",
      answer:
        "Laava is an independent advisory platform, licensed by SEBI in India...",
    },
    {
      question: "Why invest through Laava?",
      answer:
        "Access diverse portfolios including N100 Index, Factors, Global Trends...",
    },
  ],
  Trades: [
    {
      question: "How do I place a trade?",
      answer: "You can place trades directly via the Laava app...",
    },
    {
      question: "Are trades free?",
      answer: "No commissions. Flat transparent pricing.",
    },
  ],
  Academy: [
    {
      question: "Does Laava have resources for beginners?",
      answer: "YES. Articles, blogs, and a research library are available.",
    },
    {
      question: "Are there live training sessions?",
      answer: "Yes, through webinars and investor connects.",
    },
  ],
  "Wealth Baskets": [
    {
      question: "What are Wealth Baskets?",
      answer:
        "Curated ETF and Mutual Fund baskets designed by our experts.",
    },
  ],
  Payments: [
    {
      question: "What payment methods are supported?",
      answer: "UPI, NetBanking, Debit/Credit Cards are supported.",
    },
  ],
};

const FaqSection = () => {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions <span className="text-primary">(FAQs)</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null); // reset accordion
              }}
              className={`btn cursor-pointer px-5 py-2 rounded-lg font-medium transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData[activeTab].map((faq, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="btn cursor-pointer flex justify-between items-center w-full p-4 text-left"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 py-4 text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

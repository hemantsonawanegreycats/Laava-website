import React, { useState } from "react";

const faqData = {
 "Investor Charter": [
    {
      name: "Investor Charter - September 2025",
      link: "/files/investor-charter-sept-2025.pdf",
    },
    {
      name: "Investor Charter - August 2025",
      link: "/files/investor-charter-aug-2025.pdf",
    },
  ],
  "Most Important Terms and Conditions (MITC)": [
    {
      name: "MITC - September 2025",
      link: "/files/mitc-sept-2025.pdf",
    },
  ],
  "Investor Grievance": [
    {
      name: "Investor Grievance - September 2025",
      link: "/files/investor-grievance-sept-2025.pdf",
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
          Information Center <span className="text-primary">(Documents)</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer px-5 py-2 rounded-lg font-medium transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-4">
          {faqData[activeTab].map((file, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-700 rounded-lg p-4"
            >
              <a
                href={file.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline font-medium"
              >
                {file.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;

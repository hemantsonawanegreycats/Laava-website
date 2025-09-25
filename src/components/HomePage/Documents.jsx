import React, { useState } from "react";

const faqData = {
  "Investor Charter": [
    {
      title: "Investor Charter",
      files: [
        { name: "September 2025", link: "assets/pdf/InverstorCharter/Investor_Charter_Sep_2025.pdf" },
      ],
    },
  ],
  "Most Important Terms and Conditions (MITC)": [
    {
      title: "Most Important Terms and Conditions (MITC)",
      files: [
        { name: "September 2025", link: "assets/pdf/MITC/MITC_Sep_2025.pdf" },
      ],
    },
  ],
  "Investor Grievance": [
    {
      title: "Investor Grievance",
      files: [
        { name: "September 2025", link: "#" },
      ],
    },
  ],
};

const Documents = () => {
  const tabs = Object.keys(faqData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const [openIndexes, setOpenIndexes] = useState({}); // for collapsible

  // const toggleAccordion = (idx) => {
  //   setOpenIndexes((prev) => ({
  //     ...prev,
  //     [idx]: !prev[idx],
  //   }));
  // };

  const [openIndex, setOpenIndex] = useState(null); // only one open at a time

const toggleAccordion = (idx) => {
  setOpenIndex(openIndex === idx ? null : idx); // close if same, else open new
};


  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Regulatory Documents
        </h2>

        {/* Tabs (only visible on md and above) */}
        <div className="hidden md:flex justify-center gap-6 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`abyssBlue cursor-pointer px-5 py-2 rounded-lg font-medium transition ${activeTab === tab
                  ? "abyssBlue text-white"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Desktop View (Tabs) */}
        <div className="hidden md:block space-y-4">
          {faqData[activeTab].map((group, index) => (
            <div
              key={index}
              className="bg-[#111] border border-gray-700 rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold mb-2 text-center">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.files.map((file, idx) => (
                  <li key={idx}>
                    <a
                      href={file.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-orange-400 hover:underline font-medium"
                    >
                      {file.name}
                      <span className="ml-2">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile View (Accordion) */}
        <div className="md:hidden space-y-4">
          {tabs.map((tab, tabIndex) => (
            <div
              key={tabIndex}
              className="border border-gray-700 rounded-lg"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(tabIndex)}
                className="abyssBlue rounded-lg w-full flex justify-between items-center px-4 py-3 text-left font-semibold"
              >
                {tab}
                <span className="ml-2">
                  {openIndex === tabIndex ? "−" : "+"}
                </span>
              </button>

              {/* Accordion Content */}
              {openIndex === tabIndex && (
                <div className="px-4 pb-4">
                  {faqData[tab].map((group, index) => (
                    <div key={index}>
                      <ul className="space-y-2">
                        {group.files.map((file, idx) => (
                          <li key={idx}>
                            <a
                              href={file.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center py-2 hover:underline font-medium"
                            >
                              {file.name}
                              <span className="ml-2">→</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Documents;

import React, { useState } from "react";

const docsData = {
  "Investor Grievance": [
    {
      title: "Investor Grievance",
      files: [{ name: "September 2025", link: "assets/pdf/Investor-Grievance-Sept-2025.pdf" }],
    },
  ],
};

const Investordocs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Investor Grievance Data
        </h2>

        <div className="hidden md:block space-y-4">
          {docsData["Investor Grievance"].map((group, index) => (
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

        <div className="md:hidden space-y-4">
          <div className="border border-gray-700 rounded-lg">
            {/* <button
              onClick={() => toggleAccordion(0)}
              className="abyssBlue rounded-lg w-full flex justify-between items-center px-4 py-3 text-left font-semibold"
            >
              Investor Grievance
              <span className="ml-2">{openIndex === 0 ? "−" : "+"}</span>
            </button> */}

            {openIndex === 0 && (
              <div className="px-4 pb-4">
                {docsData["Investor Grievance"].map((group, index) => (
                  <ul key={index} className="space-y-2">
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
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investordocs;

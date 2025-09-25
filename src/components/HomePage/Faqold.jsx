// import React, { useState } from "react"; 
// import { ChevronDown, ChevronUp } from "lucide-react"; 
// const faqData = 
// { "Investor Charter": [
//     { 
//         "<p>September 2025</p>" 
//     },
// ],
//  "Most Important Terms and Conditions (MITC)":[
//     {
//         "<p>September 2025</p>"
//      },
//     ],
// "Investor Grievance": [
//     {
//         "<p>September 2025</p>"
//     },
//     ],
// };
//         const FaqSection = () => { const tabs = Object.keys(faqData); const [activeTab, setActiveTab] = useState(tabs[0]); const [openIndex, setOpenIndex] = useState(null); const toggleAccordion = (index) => { setOpenIndex(openIndex === index ? null : index); }; return (<section className="py-16 bg-black text-white"> <div className="max-w-5xl mx-auto px-6"> <h2 className="text-3xl font-bold text-center mb-10"> Frequently Asked Questions <span className="text-primary">(FAQs)</span> </h2> {/* Tabs */} <div className="flex justify-center gap-6 mb-8 flex-wrap"> {tabs.map((tab) => (<button key={tab} onClick={() => { setActiveTab(tab); setOpenIndex(null); // reset accordion }} className={btn cursor-pointer px-5 py-2 rounded-lg font-medium transition ${ activeTab === tab ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white" : "text-gray-400 hover:text-white" }} > {tab} </button> ))} </div> {/* Accordion */} <div className="space-y-4"> {faqData[activeTab].map((faq, index) => ( <div key={index} className="bg-[#111] border border-gray-700 rounded-lg" > <button onClick={() => toggleAccordion(index)} className="btn cursor-pointer flex justify-between items-center w-full p-4 text-left" > <span className="font-semibold">{faq.question}</span> {openIndex === index ? ( <ChevronUp className="w-5 h-5 text-orange-400" /> ) : ( <ChevronDown className="w-5 h-5 text-orange-400" /> )} </button> {openIndex === index && ( <div className="px-4 py-4 text-gray-300">{faq.answer}</div> )} </div> ))} </div> </div> </section> ); }; export default FaqSection;
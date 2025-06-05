import React from "react";

const FooterLinksSection = () => {
  const sections = [
    {
      title: "Quick Links:",
      links: [
        { text: "SEBI", url: "/sebi" },
        { text: "NSE", url: "/nse" },
        { text: "BSE", url: "/bse" },
        { text: "MCX", url: "/mcx" },
        { text: "Account Opening Process", url: "/account-opening" },
        { text: "Policies and Procedures", url: "/policies" },
        { text: "Register and Track Complaint", url: "/complaints" },
        { text: "SEBI scores", url: "/sebi-scores" },
        { text: "SMART ODR", url: "/smart-odr" },
        { text: "NSDL e-Voting", url: "/nsdl-evoting" },
        { text: "USCNBA", url: "/uscnba" },
        { text: "Account Closure", url: "/account-closure" },
        { text: "ContactUs", url: "/contact" },
      ],
    },
    {
      title: "Market Indices:",
      links: [
        { text: "Nifty 50", url: "/indices/nifty-50" },
        { text: "Nifty 100", url: "/indices/nifty-100" },
        { text: "Sensex", url: "/indices/sensex" },
        { text: "Nifty PSU Bank", url: "/indices/nifty-psu-bank" },
        { text: "Nifty Auto", url: "/indices/nifty-auto" },
      ],
    },
    {
      title: "Trending Stocks:",
      links: [
        { text: "ONGC", url: "/stocks/ongc" },
        { text: "Zomato", url: "/stocks/zomatao" },
        { text: "Adani Enterprises", url: "/stocks/adani-enterprises" },
        { text: "Reliance Industries", url: "/stocks/reliance-industries" },
        { text: "Bajaj Auto", url: "/stocks/bajaj-auto" },
      ],
    },
    {
      title: "Trending Blogs:",
      links: [
        { text: "EPS Formula", url: "/blogs/eps-formula" },
        { text: "DE Ratio", url: "/blogs/de-ratio" },
        { text: "ROE", url: "/blogs/roe" },
        { text: "PB Ratio", url: "/blogs/pb-ratio" },
        { text: "Dividend Yield", url: "/blogs/dividend-yield" },
        { text: "PE Ratio", url: "/blogs/pe-ratio" },
        { text: "Penny Stocks", url: "/blogs/penny-stocks" },
        { text: "Debt Free Penny Stocks Below 1 Rupee", url: "/blogs/debt-free-stocks" },
      ],
    },
  ];

  return (
    <section className="bg-[#111] text-white text-sm pt-10 pb-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            <p className="font-semibold text-white mb-1">
              {section.title}
              <span className="text-white font-normal">
                {" "}
                {section.links.map((link, i) => (
                  <React.Fragment key={i}>
                    <a href={link.url} className="hover:underline text-primary" target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                    {i !== section.links.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </span>
            </p>
            <hr className="border-gray-700 mt-2" />
          </div>
        ))}

        {/* Logos at the bottom */}
        <div className="flex flex-wrap gap-6 items-center justify-center pt-6">
          <img src="/logos/nse.png" alt="NSE" className="h-10" />
          <img src="/logos/bse.png" alt="BSE" className="h-10" />
          <img src="/logos/nsdl.png" alt="NSDL" className="h-10" />
          <img src="/logos/sebi.png" alt="SEBI" className="h-10" />
          <img src="/logos/mcx.png" alt="MCX" className="h-10" />
        </div>
      </div>
    </section>
  );
};

export default FooterLinksSection;

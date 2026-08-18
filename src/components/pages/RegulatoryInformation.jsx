import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../SEO";

// ─── TAB DEFINITIONS ──────────────────────────────────────────────────────────
const TABS = [
  { id: "terms", label: "Terms of Use", icon: "fa-file-contract" },
  { id: "mitc", label: "MITC", icon: "fa-file-alt" },
  { id: "investor-charter", label: "Investor Charter", icon: "fa-shield-halved" },
];

// ─── TERMS OF USE CONTENT ─────────────────────────────────────────────────────
const TermsContent = () => (
  <div className="regulatory-prose">
    <p>
      The domain name <strong>www.laavafin.com</strong> is owned by Laava Financial Technologies
      Private Limited (hereafter referred to as 'LAAVA'). LAAVA is a company incorporated in
      Mumbai, Maharashtra and is a SEBI registered Research Analyst (INH000023171).
    </p>
    <p>
      This section contains the Terms of Use of this Web site and LAAVA Mobile application. By
      accessing this Web site and LAAVA Mobile application and any of its pages, you are agreeing
      to these Terms:
    </p>

    <section>
      <h2>(A) Use of Information and Material</h2>
      <p>
        www.laavafin.com or LAAVA mobile app disclaims any obligation to update or correct or
        provide accuracy in information / content contained in any of the sections under the LAAVA
        website located at www.laavafin.com or LAAVA mobile app (hereafter referred as the website
        or app), whether arising as a result of financial, business or any other developments. The
        information in any or all of the sections of this website is updated by www.laavafin.com or
        LAAVA mobile app on a periodic basis and is uploaded as on a particular date, which may not
        be the current/latest date. Hence this information may not be an accurate representation of
        the actual filings, press releases, earnings releases, financials, industry news, stock
        quotes, etc.
      </p>
      <p>
        Products and Services referred to in this Web site or LAAVA mobile app are offered only in
        countries where they may be lawfully offered by LAAVA or its affiliates. The materials on
        these pages are not intended for use by persons located in, or resident in, countries that
        restrict the distribution of such materials. These pages should not be regarded as an offer
        or solicitation to sell investments or make deposits in any country to any person to whom it
        is unlawful to make such an invitation or solicitation in such country. LAAVA retains the
        absolute right to determine eligibility for subscription to any of the Services.
      </p>
      <p>
        By agreeing the Terms &amp; Conditions, you authorize LAAVA &amp; its representatives &amp;
        agents to provide information about various products, offers and services provided by LAAVA
        through any mode including telephone calls, SMS, letters or through social media channels
        including WhatsApp, Telegram, Instagram, YouTube, Twitter, LinkedIn, etc. You confirm that
        laws in relation to unsolicited communication referred in "National Do Not Call Registry" as
        laid down by "Telecom Regulatory Authority of India" will not be applicable for such
        information/ communication. You hereby authorize representatives and employees of LAAVA and
        its group companies to make calls, SMS, Email and additional forms of communication with
        reference to products and promotions.
      </p>
      <p>
        The information contained in these pages is not intended to provide professional advice.
        Persons accessing these pages should obtain appropriate professional advice when necessary.
      </p>
    </section>

    <section>
      <h2>(B) Trademarks and Copyright</h2>
      <p>
        All trademarks displayed on this Web site are the trademarks of their respective owners.
        All Web site design, text, graphics, the selection and arrangement thereof, and all software
        compilations, underlying source code, software (including applets) and all other material on
        this Web site are copyright of LAAVA or its content suppliers. ALL RIGHTS RESERVED. Any
        reproduction of this Web site or its content is strictly prohibited. Permission is granted
        to electronically copy and print hard copy portions of this site for the sole purpose of
        placing an order with LAAVA, or for personal, non-commercial use only. Any other use of
        materials on this site — including reproduction for purposes other than those noted above,
        modification, distribution, or republication — without the prior written permission of LAAVA
        is strictly prohibited.
      </p>
    </section>

    <section>
      <h2>(C) Disclaimer of Warranties</h2>
      <p>
        Although LAAVA has taken reasonable steps to ensure the accuracy of the information
        contained herein, LAAVA and/or its affiliates make no warranty, express or implied, as to
        the accuracy, reliability, usefulness or completeness of any information on this Web site.
        In particular, LAAVA and/or its affiliates make no warranty that: (i) the information will
        be continuously available; (ii) the information will be free from errors; or (iii) the
        information will meet your requirements.
      </p>
      <p>
        LAAVA may change, delete, add to, or otherwise amend information on this Web site without
        notice. The information provided on this Web site is for informational purposes only. LAAVA
        disclaims any obligation to update or correct or provide accuracy in information / content
        contained in any of the sections of this Web site.
      </p>
    </section>

    <section>
      <h2>(D) Limitation of Liability</h2>
      <p>
        LAAVA and/or its affiliates shall not be liable for any damages of any kind arising out of
        or in connection with the use of this Web site and its information. This is a comprehensive
        limitation of liability that applies to all damages of any kind, including (without
        limitation) compensatory, direct, indirect or consequential damages, loss of data, income or
        profit, loss of or damage to property and claims of third parties.
      </p>
    </section>

    <section>
      <h2>(E) Links to Third Party Websites</h2>
      <p>
        This Web site may contain links to other Web sites operated by parties other than LAAVA.
        Such links are provided for convenience and reference only. LAAVA does not control such Web
        sites and is not responsible for their content. The inclusion of links to such Web sites
        does not imply any endorsement by LAAVA of the material on such Web sites or any association
        with their operators.
      </p>
    </section>

    <section>
      <h2>(F) Privacy Policy</h2>
      <p>
        Use of this Web site is also governed by our Privacy Policy. The Privacy Policy is
        incorporated into these Terms of Use by this reference.
      </p>
    </section>

    <section>
      <h2>(G) Changes to Terms of Use</h2>
      <p>
        LAAVA reserves the right to change these Terms of Use at any time. Updated versions of the
        Terms of Use will appear on this Web site and are effective immediately. You are responsible
        for regularly reviewing the Terms of Use.
      </p>
    </section>

    <section>
      <h2>(H) Governing Law and Dispute Resolution</h2>
      <p>
        These Terms of Use shall be governed by and construed in accordance with the laws of India.
        Any dispute arising out of or relating to these Terms of Use, including any question
        regarding its existence, validity or termination, shall be referred to and finally resolved
        by arbitration under the Arbitration and Conciliation Act, 1996. The seat of arbitration
        shall be Mumbai. The language of the arbitration shall be English.
      </p>
    </section>
  </div>
);

// ─── PDF VIEWER TAB ───────────────────────────────────────────────────────────
const PdfViewer = ({ src, title, fileName }) => (
  <div className="regulatory-pdf-wrapper">
    <div className="regulatory-pdf-actions">
      <a href={src} download={fileName} className="regulatory-pdf-btn download">
        <i className="fa-solid fa-download" />
        Download PDF
      </a>
      <a href={src} target="_blank" rel="noopener noreferrer" className="regulatory-pdf-btn open">
        <i className="fa-solid fa-arrow-up-right-from-square" />
        Open in New Tab
      </a>
    </div>
    <div className="regulatory-pdf-frame-container">
      <iframe
        src={src}
        title={title}
        className="regulatory-pdf-frame"
        loading="lazy"
      />
    </div>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const RegulatoryInformation = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(() => {
    const t = searchParams.get("tab");
    return TABS.find((tab) => tab.id === t) ? t : "terms";
  });

  useEffect(() => {
    const t = searchParams.get("tab");
    if (t && TABS.find((tab) => tab.id === t)) {
      setActiveTab(t);
    }
  }, [searchParams]);

  return (
    <>
      <SEO
        title="Regulatory Information - Laava Fintech"
        description="Laava Financial Technologies regulatory documents including Terms of Use, MITC (Most Important Terms and Conditions), and Investor Charter."
      />

      <style>{`
        .regulatory-page {
          min-height: 100vh;
          background: #030911;
          color: #ECEDEE;
          padding: 40px 16px 80px;
        }

        .regulatory-header {
          max-width: 900px;
          margin: 0 auto 40px;
          text-align: center;
        }
        .regulatory-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(25, 125, 255, 0.1);
          border: 1px solid rgba(25, 125, 255, 0.25);
          color: #197DFF;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .regulatory-header h1 {
          font-size: clamp(28px, 5vw, 46px);
          font-weight: 700;
          margin: 0 0 14px;
          line-height: 1.15;
          background: linear-gradient(135deg, #ECEDEE 40%, #6B7280);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .regulatory-header p {
          color: #9CA3AF;
          font-size: 15px;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .regulatory-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          max-width: 900px;
          margin: 0 auto 32px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 6px;
          flex-wrap: wrap;
        }
        .regulatory-tab-btn {
          flex: 1;
          min-width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          color: #6B7280;
          font-size: 14px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .regulatory-tab-btn:hover {
          color: #ECEDEE;
          background: rgba(255,255,255,0.05);
        }
        .regulatory-tab-btn.active {
          background: linear-gradient(135deg, rgba(25,125,255,0.18) 0%, rgba(25,125,255,0.08) 100%);
          border-color: rgba(25,125,255,0.3);
          color: #ECEDEE;
          font-weight: 600;
        }
        .regulatory-tab-btn i {
          font-size: 13px;
          color: #197DFF;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .regulatory-tab-btn.active i {
          opacity: 1;
        }

        .regulatory-card {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          animation: reg-fade-in 0.3s ease;
        }
        @keyframes reg-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .regulatory-prose {
          padding: 36px 40px;
          line-height: 1.8;
          font-size: 15px;
          color: #D1D5DB;
        }
        @media (max-width: 640px) {
          .regulatory-prose { padding: 24px 20px; }
          .regulatory-tab-btn { font-size: 13px; padding: 10px 12px; }
        }
        .regulatory-prose p { margin: 0 0 18px; }
        .regulatory-prose section { margin-bottom: 32px; }
        .regulatory-prose h2 {
          font-size: 18px;
          font-weight: 700;
          color: #ECEDEE;
          margin: 0 0 12px;
          border-left: 3px solid #197DFF;
          padding-left: 12px;
        }
        .regulatory-prose strong { color: #ECEDEE; }

        .regulatory-pdf-wrapper { padding: 28px 32px; }
        @media (max-width: 640px) { .regulatory-pdf-wrapper { padding: 20px 16px; } }
        .regulatory-pdf-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .regulatory-pdf-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .regulatory-pdf-btn.download {
          background: rgba(25, 125, 255, 0.12);
          border: 1px solid rgba(25, 125, 255, 0.3);
          color: #60A5FA;
        }
        .regulatory-pdf-btn.download:hover {
          background: rgba(25, 125, 255, 0.22);
          color: #fff;
        }
        .regulatory-pdf-btn.open {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #9CA3AF;
        }
        .regulatory-pdf-btn.open:hover {
          background: rgba(255,255,255,0.08);
          color: #ECEDEE;
        }
        .regulatory-pdf-frame-container {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: #111;
        }
        .regulatory-pdf-frame {
          width: 100%;
          height: 75vh;
          min-height: 500px;
          border: none;
          display: block;
        }
      `}</style>

      <div className="regulatory-page">
        {/* Header */}
        <div className="regulatory-header">
          <div className="regulatory-header-badge">
            <i className="fa-solid fa-scale-balanced" />
            Regulatory &amp; Compliance
          </div>
          <h1>Regulatory Information</h1>
          <p>
            Access all our regulatory documents, terms, and compliance materials in one place.
          </p>
        </div>

        {/* Tabs */}
        <div className="regulatory-tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              id={`reg-tab-${tab.id}`}
              className={`regulatory-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`fa-solid ${tab.icon}`} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div key={activeTab} className="regulatory-card" role="tabpanel">
          {activeTab === "terms" && <TermsContent />}

          {activeTab === "mitc" && (
            <PdfViewer
              src="/assets/pdf/MITC/MITC_Sep_2025.pdf"
              title="MITC – Most Important Terms and Conditions"
              fileName="MITC_Sep_2025.pdf"
            />
          )}

          {activeTab === "investor-charter" && (
            <PdfViewer
              src="/assets/pdf/InverstorCharter/Investor_Charter_Sep_2025.pdf"
              title="Investor Charter"
              fileName="Investor_Charter_Sep_2025.pdf"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RegulatoryInformation;

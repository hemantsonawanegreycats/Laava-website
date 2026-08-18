import React, { useState } from "react";
import SEO from "../SEO";
import {
  Document, Packer, Paragraph, Table, TableRow, TableCell,
  TextRun, WidthType, AlignmentType, BorderStyle, HeadingLevel,
  ShadingType,
} from "docx";
import { saveAs } from "file-saver";

const Investordocs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const th = {
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    color: "#f97316",
    padding: "10px 14px",
    textAlign: "center",
    fontWeight: "600",
    fontSize: "0.82rem",
    border: "1px solid #374151",
    letterSpacing: "0.03em",
    whiteSpace: "nowrap",
  };

  const td = {
    padding: "10px 14px",
    textAlign: "center",
    border: "1px solid #374151",
    color: "#d1d5db",
    fontSize: "0.85rem",
  };

  const tdLeft = {
    ...td,
    textAlign: "left",
    color: "#e5e7eb",
  };

  const rowBg = (i) => ({ background: i % 2 === 0 ? "#0d0d0d" : "#111827" });

  const sectionLabel = {
    color: "#f97316",
    fontWeight: "700",
    fontSize: "0.95rem",
    margin: "24px 0 12px",
    borderLeft: "3px solid #f97316",
    paddingLeft: "10px",
    letterSpacing: "0.04em",
  };

  // ─── DOCX generation ────────────────────────────────────────────────────────
  const makeCell = (text, isHeader = false, isLeft = false) =>
    new TableCell({
      shading: isHeader
        ? { type: ShadingType.SOLID, color: "1a1a2e" }
        : { type: ShadingType.SOLID, color: "111827" },
      margins: { top: 80, bottom: 80, left: 100, right: 100 },
      children: [
        new Paragraph({
          alignment: isLeft ? AlignmentType.LEFT : AlignmentType.CENTER,
          children: [
            new TextRun({
              text,
              bold: isHeader,
              color: isHeader ? "f97316" : "d1d5db",
              size: isHeader ? 18 : 17,
              font: "Calibri",
            }),
          ],
        }),
      ],
      borders: {
        top: { style: BorderStyle.SINGLE, size: 1, color: "374151" },
        bottom: { style: BorderStyle.SINGLE, size: 1, color: "374151" },
        left: { style: BorderStyle.SINGLE, size: 1, color: "374151" },
        right: { style: BorderStyle.SINGLE, size: 1, color: "374151" },
      },
    });

  const makeHeaderRow = (headers) =>
    new TableRow({
      tableHeader: true,
      children: headers.map((h) => makeCell(h, true)),
    });

  const makeDataRow = (cells, leftCol = 1) =>
    new TableRow({
      children: cells.map((c, idx) =>
        makeCell(c, false, idx === leftCol)
      ),
    });

  const sectionHeading = (text) =>
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 300, after: 150 },
      children: [
        new TextRun({
          text,
          bold: true,
          color: "f97316",
          size: 22,
          font: "Calibri",
        }),
      ],
    });

  const generateDocx = async () => {
    const tableA = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        makeHeaderRow([
          "Sr No", "Received From",
          "Carried Forward from Previous Month",
          "Received During the Month",
          "Total Pending", "Resolved",
          "Pending at End of Month (<3 months | >3 months)",
          "Avg Resolution Time",
        ]),
        makeDataRow(["1.", "Directly from Investors", "0", "0", "0", "0", "0", "N/A"]),
        makeDataRow(["2.", "SEBI (SCORES)",            "0", "0", "0", "0", "0", "N/A"]),
        makeDataRow(["3.", "Other Sources (If any)",   "0", "0", "0", "0", "0", "N/A"]),
        makeDataRow(["4.", "Grand Total",              "0", "0", "0", "0", "0", "N/A"]),
      ],
    });

    const tableB = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        makeHeaderRow([
          "Sr No", "Month",
          "Carried Forward from Previous Month",
          "Received During the Month",
          "Resolved", "Pending",
        ]),
        makeDataRow(["1.", "April 2026", "0", "0", "0", "0"]),
        makeDataRow(["2.", "May 2026",   "0", "0", "0", "0"]),
        makeDataRow(["3.", "June 2026",  "0", "0", "0", "0"]),
        makeDataRow(["4.", "July 2026",  "0", "0", "0", "0"]),
      ],
    });

    const tableC = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        makeHeaderRow([
          "Sr No", "Year",
          "Carried Forward from Previous Year",
          "Received During the Year",
          "Resolved During the Year",
          "Pending at End of Year",
        ]),
        makeDataRow(["1.", "2025-2026", "0", "0", "0", "0"]),
        makeDataRow(["2.", "2026-2027", "0", "0", "0", "0"]),
      ],
    });

    const doc = new Document({
      background: { color: "000000" },
      sections: [{
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
            children: [new TextRun({ text: "Investor Complaints Data", bold: true, size: 32, color: "f97316", font: "Calibri" })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
            children: [new TextRun({ text: "Name of the Research Analyst: Laava Financial Technologies Private Limited", size: 20, color: "e5e7eb", font: "Calibri" })],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 300 },
            children: [new TextRun({ text: "Research Analyst Registration No: INH000023171", size: 20, color: "e5e7eb", font: "Calibri" })],
          }),
          sectionHeading("A. Data for the month ending — July 2026"),
          tableA,
          new Paragraph({ spacing: { after: 200 } }),
          sectionHeading("B. Trend of Monthly Disposal of Complaints — FY 2026-2027"),
          tableB,
          new Paragraph({ spacing: { after: 200 } }),
          sectionHeading("C. Trend of Annual Disposal of Complaints"),
          tableC,
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "Investor_Complaints_Data_July_2026.docx");
  };

  return (
    <section className="py-16 bg-black text-white">
      <SEO
        title="Investor Grievance - Laava Fintech"
        description="Investor Grievance & Compliance details for Laava Financial Technologies."
      />
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Investor Grievance Data
        </h2>

        <div className="space-y-4">
          <div className="border border-gray-700 rounded-lg">
            <button
              onClick={() => toggleAccordion(0)}
              className="abyssBlue rounded-lg w-full flex justify-between items-center px-4 py-3 text-left font-semibold"
            >
              Investor Complaints Data — July 2026
              <span className="ml-2">{openIndex === 0 ? "−" : "+"}</span>
            </button>

            {openIndex === 0 && (
              <div className="px-4 pb-8 pt-2">
                {/* Meta + Download */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "18px", marginTop: "8px", flexWrap: "wrap", gap: "12px" }}>
                  <div>
                    <p style={{ color: "#9ca3af", fontSize: "0.82rem", marginBottom: "4px" }}>
                      <strong style={{ color: "#e5e7eb" }}>Name of the Research Analyst:</strong>{" "}
                      Laava Financial Technologies Private Limited
                    </p>
                    <p style={{ color: "#9ca3af", fontSize: "0.82rem" }}>
                      <strong style={{ color: "#e5e7eb" }}>Research Analyst Registration No:</strong>{" "}
                      INH000023171
                    </p>
                  </div>
                  <button
                    onClick={generateDocx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 18px",
                      fontSize: "0.82rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      letterSpacing: "0.03em",
                      boxShadow: "0 2px 12px rgba(249,115,22,0.35)",
                      transition: "opacity 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download DOCX
                  </button>
                </div>

                {/* ─── Section A ─── */}
                <p style={sectionLabel}>A. Data for the month ending — July 2026</p>
                <div style={{ overflowX: "auto", marginBottom: "32px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "780px" }}>
                    <thead>
                      <tr>
                        <th style={th}>Sr No</th>
                        <th style={th}>Received From</th>
                        <th style={th}>Carried Forward from Previous Month</th>
                        <th style={th}>Received During the Month</th>
                        <th style={th}>Total Pending</th>
                        <th style={th}>Resolved</th>
                        <th style={{ ...th, whiteSpace: "normal" }}>
                          Pending at End of Month
                          <br />
                          <span style={{ fontWeight: 400, fontSize: "0.72rem", color: "#d1d5db" }}>
                            (&lt;3 months | &gt;3 months)
                          </span>
                        </th>
                        <th style={th}>Avg Resolution Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1.", "Directly from Investors", "0", "0", "0", "0", "0", "N/A"],
                        ["2.", "SEBI (SCORES)", "0", "0", "0", "0", "0", "N/A"],
                        ["3.", "Other Sources (If any)", "0", "0", "0", "0", "0", "N/A"],
                        ["4.", "Grand Total", "0", "0", "0", "0", "0", "N/A"],
                      ].map(([sr, source, cf, recv, total, resolved, pending, avg], i) => (
                        <tr key={i} style={rowBg(i)}>
                          <td style={td}>{sr}</td>
                          <td style={tdLeft}>{i === 3 ? <strong>{source}</strong> : source}</td>
                          <td style={td}>{cf}</td>
                          <td style={td}>{recv}</td>
                          <td style={td}>{total}</td>
                          <td style={td}>{resolved}</td>
                          <td style={td}>{pending}</td>
                          <td style={td}>{avg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ─── Section B ─── */}
                <p style={sectionLabel}>
                  B. Trend of Monthly Disposal of Complaints — FY 2026-2027
                </p>
                <div style={{ overflowX: "auto", marginBottom: "32px" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
                    <thead>
                      <tr>
                        <th style={th}>Sr No</th>
                        <th style={th}>Month</th>
                        <th style={th}>Carried Forward from Previous Month</th>
                        <th style={th}>Received During the Month</th>
                        <th style={th}>Resolved</th>
                        <th style={th}>Pending</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1.", "April 2026", "0", "0", "0", "0"],
                        ["2.", "May 2026", "0", "0", "0", "0"],
                        ["3.", "June 2026", "0", "0", "0", "0"],
                        ["4.", "July 2026", "0", "0", "0", "0"],
                      ].map(([sr, month, cf, recv, resolved, pending], i) => (
                        <tr key={i} style={rowBg(i)}>
                          <td style={td}>{sr}</td>
                          <td style={tdLeft}>{month}</td>
                          <td style={td}>{cf}</td>
                          <td style={td}>{recv}</td>
                          <td style={td}>{resolved}</td>
                          <td style={td}>{pending}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ─── Section C ─── */}
                <p style={sectionLabel}>C. Trend of Annual Disposal of Complaints</p>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
                    <thead>
                      <tr>
                        <th style={th}>Sr No</th>
                        <th style={th}>Year</th>
                        <th style={th}>Carried Forward from Previous Year</th>
                        <th style={th}>Received During the Year</th>
                        <th style={th}>Resolved During the Year</th>
                        <th style={th}>Pending at End of Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["1.", "2025-2026", "0", "0", "0", "0"],
                        ["2.", "2026-2027", "0", "0", "0", "0"],
                      ].map(([sr, year, cf, recv, resolved, pending], i) => (
                        <tr key={i} style={rowBg(i)}>
                          <td style={td}>{sr}</td>
                          <td style={tdLeft}>{year}</td>
                          <td style={td}>{cf}</td>
                          <td style={td}>{recv}</td>
                          <td style={td}>{resolved}</td>
                          <td style={td}>{pending}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investordocs;

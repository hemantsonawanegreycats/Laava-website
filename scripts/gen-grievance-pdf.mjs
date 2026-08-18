import PDFDocument from "pdfkit";
import { createWriteStream } from "fs";

const doc = new PDFDocument({ margin: 40, size: "A4" });
const out = createWriteStream("public/assets/pdf/InvestorGrievance/Investor_Complaints_Data_Jul_2026.pdf");
doc.pipe(out);

// ─── Colors ─────────────────────────────────────────────────────────────────
const ORANGE = "#B45309";
const DARK   = "#111827";
const GRAY   = "#374151";
const WHITE  = "#FFFFFF";
const LIGHT  = "#F3F4F6";

// ─── Title ──────────────────────────────────────────────────────────────────
doc.rect(0, 0, doc.page.width, 70).fill(DARK);
doc.fontSize(18).fillColor(ORANGE).font("Helvetica-Bold")
   .text("Investor Complaints Data", 40, 18, { align: "center" });
doc.fontSize(9).fillColor(WHITE).font("Helvetica")
   .text("Name of the Research Analyst: Laava Financial Technologies Private Limited", 40, 42, { align: "center" })
   .text("Research Analyst Registration No: INH000023171", 40, 55, { align: "center" });

doc.moveDown(3);

// ─── Helper: draw a table ───────────────────────────────────────────────────
function drawTable(headers, rows, colWidths) {
  const startX = 40;
  const rowH   = 22;
  let y = doc.y;

  // header row
  let x = startX;
  doc.rect(startX, y, colWidths.reduce((a,b)=>a+b,0), rowH).fill(DARK);
  headers.forEach((h, i) => {
    doc.fontSize(7).fillColor(ORANGE).font("Helvetica-Bold")
       .text(h, x + 3, y + 5, { width: colWidths[i] - 6, align: "center" });
    x += colWidths[i];
  });
  y += rowH;

  // data rows
  rows.forEach((row, ri) => {
    x = startX;
    const bg = ri % 2 === 0 ? LIGHT : WHITE;
    const rowActualH = rowH;
    doc.rect(startX, y, colWidths.reduce((a,b)=>a+b,0), rowActualH).fill(bg);
    row.forEach((cell, ci) => {
      const align = ci === 1 ? "left" : "center";
      doc.fontSize(7).fillColor(GRAY).font("Helvetica")
         .text(String(cell), x + 3, y + 7, { width: colWidths[ci] - 6, align });
      x += colWidths[ci];
    });
    // grid lines
    x = startX;
    colWidths.forEach(w => {
      doc.rect(x, y, w, rowActualH).stroke("#CBD5E1");
      x += w;
    });
    y += rowActualH;
  });

  // outer border
  doc.rect(startX, doc.y - (rows.length+1)*rowH, colWidths.reduce((a,b)=>a+b,0), (rows.length+1)*rowH).stroke(GRAY);
  doc.y = y + 6;
}

// ─── Section A ──────────────────────────────────────────────────────────────
doc.fontSize(10).fillColor(ORANGE).font("Helvetica-Bold")
   .text("A.  Data for the month ending — July 2026", 40, doc.y, {});
doc.moveDown(0.4);

drawTable(
  ["Sr No","Received From","Carried Fwd\nPrev Month","Rcvd During\nMonth","Total\nPending","Resolved","Pending at\nEnd of Month","Avg\nResolution"],
  [
    ["1.","Directly from Investors","0","0","0","0","0","N/A"],
    ["2.","SEBI (SCORES)","0","0","0","0","0","N/A"],
    ["3.","Other Sources (If any)","0","0","0","0","0","N/A"],
    ["4.","Grand Total","0","0","0","0","0","N/A"],
  ],
  [28, 130, 60, 60, 48, 48, 68, 73]
);

doc.moveDown(1);

// ─── Section B ──────────────────────────────────────────────────────────────
doc.fontSize(10).fillColor(ORANGE).font("Helvetica-Bold")
   .text("B.  Trend of Monthly Disposal of Complaints — FY 2026-2027", 40, doc.y, {});
doc.moveDown(0.4);

drawTable(
  ["Sr No","Month","Carried Fwd from Prev Month","Received During Month","Resolved","Pending"],
  [
    ["1.","April 2026","0","0","0","0"],
    ["2.","May 2026","0","0","0","0"],
    ["3.","June 2026","0","0","0","0"],
    ["4.","July 2026","0","0","0","0"],
  ],
  [28, 100, 120, 120, 80, 67]
);

doc.moveDown(1);

// ─── Section C ──────────────────────────────────────────────────────────────
doc.fontSize(10).fillColor(ORANGE).font("Helvetica-Bold")
   .text("C.  Trend of Annual Disposal of Complaints", 40, doc.y, {});
doc.moveDown(0.4);

drawTable(
  ["Sr No","Year","Carried Fwd from Prev Year","Received During Year","Resolved During Year","Pending at End of Year"],
  [
    ["1.","2025-2026","0","0","0","0"],
    ["2.","2026-2027","0","0","0","0"],
  ],
  [28, 80, 110, 110, 110, 77]
);

// ─── Footer ─────────────────────────────────────────────────────────────────
doc.fontSize(7).fillColor("#9CA3AF").font("Helvetica")
   .text("Laava Financial Technologies Private Limited  |  INH000023171  |  Generated: August 2026",
         40, doc.page.height - 30, { align: "center" });

doc.end();
out.on("finish", () => console.log("Done: Investor_Complaints_Data_Jul_2026.pdf"));

import { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun, WidthType, AlignmentType, BorderStyle, HeadingLevel, ShadingType } from "docx";
import { writeFileSync } from "fs";
const B = { style: BorderStyle.SINGLE, size: 1, color: "374151" };
const borders = { top: B, bottom: B, left: B, right: B };
const cell = (text, hdr=false, left=false) => new TableCell({ shading: { type: ShadingType.SOLID, color: hdr?"1a1a2e":"f9fafb" }, margins:{top:80,bottom:80,left:120,right:120}, borders, children:[new Paragraph({ alignment: left?AlignmentType.LEFT:AlignmentType.CENTER, children:[new TextRun({text, bold:hdr, color:hdr?"B45309":"111827", size:hdr?18:17, font:"Calibri"})] })] });
const hrow = (hs) => new TableRow({ tableHeader:true, children: hs.map(h=>cell(h,true)) });
const drow = (cs,l=1) => new TableRow({ children: cs.map((c,i)=>cell(c,false,i===l)) });
const h2 = (t) => new Paragraph({ heading:HeadingLevel.HEADING_2, spacing:{before:400,after:160}, children:[new TextRun({text:t,bold:true,size:24,font:"Calibri"})] });
const tA = new Table({ width:{size:100,type:WidthType.PERCENTAGE}, rows:[
  hrow(["Sr No","Received From","Carried Forward from Previous Month","Received During the Month","Total Pending","Resolved","Pending at End of Month (<3 months | >3 months)","Avg Resolution Time"]),
  drow(["1.","Directly from Investors","0","0","0","0","0","N/A"]),
  drow(["2.","SEBI (SCORES)","0","0","0","0","0","N/A"]),
  drow(["3.","Other Sources (If any)","0","0","0","0","0","N/A"]),
  drow(["4.","Grand Total","0","0","0","0","0","N/A"]),
]});
const tB = new Table({ width:{size:100,type:WidthType.PERCENTAGE}, rows:[
  hrow(["Sr No","Month","Carried Forward from Previous Month","Received During the Month","Resolved","Pending"]),
  drow(["1.","April 2026","0","0","0","0"]),
  drow(["2.","May 2026","0","0","0","0"]),
  drow(["3.","June 2026","0","0","0","0"]),
  drow(["4.","July 2026","0","0","0","0"]),
]});
const tC = new Table({ width:{size:100,type:WidthType.PERCENTAGE}, rows:[
  hrow(["Sr No","Year","Carried Forward from Previous Year","Received During the Year","Resolved During the Year","Pending at End of Year"]),
  drow(["1.","2025-2026","0","0","0","0"]),
  drow(["2.","2026-2027","0","0","0","0"]),
]});
const doc = new Document({ sections:[{ children:[
  new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:120},children:[new TextRun({text:"Investor Complaints Data",bold:true,size:36,font:"Calibri"})]}),
  new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:80},children:[new TextRun({text:"Name of the Research Analyst: Laava Financial Technologies Private Limited",size:20,font:"Calibri"})]}),
  new Paragraph({alignment:AlignmentType.CENTER,spacing:{after:400},children:[new TextRun({text:"Research Analyst Registration No: INH000023171",size:20,font:"Calibri"})]}),
  h2("A. Data for the month ending - July 2026"), tA,
  new Paragraph({spacing:{after:300}}),
  h2("B. Trend of Monthly Disposal of Complaints - FY 2026-2027"), tB,
  new Paragraph({spacing:{after:300}}),
  h2("C. Trend of Annual Disposal of Complaints"), tC,
]}]});
const buf = await Packer.toBuffer(doc);
writeFileSync("public/assets/pdf/InvestorGrievance/Investor_Complaints_Data_Jul_2026.docx", buf);
console.log("Done");

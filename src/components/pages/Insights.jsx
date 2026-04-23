import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  { slug: 'sensex-surged-672-points', title: 'Sensex Surged 672 Points | Nifty50 Soar 0.87%', image: '/images/sensex.jpg', date: '2025-06-08', tag: 'Markets' },
  { slug: 'rbi-announces-repo-rate-cut', title: 'RBI Cuts Repo Rate By 50 BPS Amid Falling Inflation', image: '/images/rbi.jpg', date: '2025-06-08', tag: 'Economy' },
  { slug: 'weekly-update-june-08', title: 'Weekly Update – 08 June 2025', image: '/images/weekly.jpg', date: '2025-06-08', tag: 'Weekly' },
  { slug: 'ipo-review-jainik-cables', title: 'Jainik Power & Cables IPO GMP & Review: Apply or Avoid?', image: '/images/jainik.jpg', date: '2025-06-09', tag: 'IPO' },
  { slug: 'stocks-to-watch-june-08', title: 'Stocks to Watch Today: 8th June 2025', image: '/images/stocks.jpg', date: '2025-06-08', tag: 'Stocks' },
  { slug: 'ipo-review-sacherrome', title: 'Sacherrome IPO GMP & Review: Apply or Avoid?', image: '/images/sacherrome.jpg', date: '2025-06-07', tag: 'IPO' },
];

const Insights = () => (
  <div className="bg-[#030911] min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-5 opacity-80">Insights</h2>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 text-hover-gradient">
          Market <span className="text-gradient-accent italic">insights & updates</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light">Expert analysis, IPO reviews, and market updates — all in one place.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <Link to={`/blogs/${blog.slug}`} key={i} className="group relative bg-[#111318]/80 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:translate-y-[-8px] hover:border-white/10 hover:bg-[#111318]/95 shadow-xl block">
            <div className="aspect-[16/10] bg-[#0a1220] overflow-hidden relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-4 left-4 bg-[#197DFF] text-white text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full shadow-lg">
                {blog.tag}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-4 leading-tight transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#197DFF] group-hover:bg-clip-text group-hover:text-transparent">
                {blog.title}
              </h3>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-[13px] text-[#ECEDEE]/40 flex items-center gap-2 font-light">
                  <i className="fa-solid fa-calendar-days text-[#197DFF]/60"></i>
                  {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
                <span className="text-[#197DFF] text-[13px] font-bold tracking-tight flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Insights;

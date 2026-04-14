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
  <div className="bg-[#030911] min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Insights</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-[-0.025em] mb-6">
          Market <span className="bg-gradient-to-r from-[#E8F2FF] to-[#A4CCFF] bg-clip-text text-transparent">insights & updates</span>
        </h1>
        <p className="text-[#ECEDEE]/70 text-lg max-w-2xl mx-auto">Expert analysis, IPO reviews, and market updates — all in one place.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <Link to={`/blogs/${blog.slug}`} key={i} className="card-hover bg-[#1E2021]/50 border border-[#313131] rounded-2xl overflow-hidden backdrop-blur-sm group block">
            <div className="aspect-video bg-[#0a1220] overflow-hidden relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute top-3 left-3 bg-[#197DFF] text-white text-[10px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full">
                {blog.tag}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-[#197DFF] transition-colors">{blog.title}</h3>
              <p className="text-[13px] text-[#ECEDEE]/60 flex items-center gap-2">
                <i className="fa-solid fa-calendar-days"></i>
                {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Insights;

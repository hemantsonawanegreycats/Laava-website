import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    slug: 'sensex-surged-672-points',
    title: 'Sensex Surged 672 Points | Nifty50 Soar 0.87%',
    image: '/images/sensex.jpg',
    date: '2025-06-08',
  },
  {
    slug: 'rbi-announces-repo-rate-cut',
    title: 'RBI Cuts Repo Rate By 50 BPS Amid Falling Inflation',
    image: '/images/rbi.jpg',
    date: '2025-06-08',
  },
  {
    slug: 'weekly-update-june-08',
    title: 'Weekly Update – 08 June 2025',
    image: '/images/weekly.jpg',
    date: '2025-06-08',
  },
  {
    slug: 'ipo-review-jainik-cables',
    title: 'Jainik Power & Cables IPO GMP & Review: Apply or Avoid?',
    image: '/images/jainik.jpg',
    date: '2025-06-09',
  },
  {
    slug: 'stocks-to-watch-june-08',
    title: 'Stocks to Watch Today: 8th June 2025',
    image: '/images/stocks.jpg',
    date: '2025-06-08',
  },
  {
    slug: 'ipo-review-sacherrome',
    title: 'Sacherrome IPO GMP & Review: Apply or Avoid?',
    image: '/images/sacherrome.jpg',
    date: '2025-06-07',
  },
];

const Insights = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-4 md:px-20">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <Link to={`/blogs/${blog.slug}`} key={index}>
            <div className="abyssBlue rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{blog.title}</h3>
                <p className="text-sm text-white mt-2">
                  Posted on: {new Date(blog.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Insights;

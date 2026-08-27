import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../SEO';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState('All');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [uniqueTags, setUniqueTags] = useState(['All']);
  const limit = 9;

  const getImageUrl = (imageName) => {
    if (!imageName) return '/images/sensex.jpg';
    if (imageName.startsWith('http')) return imageName;
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.laavafin.com/api';
    const uploadsUrl = baseUrl.endsWith('/') ? `${baseUrl}uploads/` : `${baseUrl}/uploads/`;
    return `${uploadsUrl}${imageName}`;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.laavafin.com/api';
        let url = `${baseUrl}/blog/public?page=${page}&limit=${limit}`;
        if (activeTag !== 'All') {
          url += `&tag=${encodeURIComponent(activeTag)}`;
        }
        const response = await fetch(url);
        const result = await response.json();
        if (result.status && result.data) {
          setBlogs(result.data.blogs || []);
          const total = result.data.total || 0;
          setTotalPages(Math.ceil(total / limit) || 1);
        } else {
          setError(result.mesg || 'Failed to fetch blogs');
        }
      // eslint-disable-next-line no-unused-vars
      } catch (_err) {
        setError('An error occurred while fetching blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, activeTag]);

  // Accumulate unique tags from loaded blogs
  useEffect(() => {
    if (blogs.length > 0) {
      setUniqueTags(prev => {
        const newTags = new Set(prev);
        blogs.flatMap(blog => blog.tags || []).forEach(tag => newTags.add(tag));
        return Array.from(newTags);
      });
    }
  }, [blogs]);

  // No client-side filtering needed since backend handles it
  const filteredBlogs = blogs;

  return (
    <div className="bg-[#030911] min-h-screen pt-40 pb-24 px-4 sm:px-6 lg:px-8">
      <SEO title="Blog - Laava Fintech" description="Expert analysis, market updates, and investment strategies from Laava." />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[11px] font-bold text-[#197DFF] tracking-[0.4em] uppercase mb-5 opacity-80">Blog</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tight leading-[1.1] mb-8">
            Market <span className="text-white italic">insights & updates</span>
          </h1>
          <p className="text-[#A1A1AA] text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Expert analysis, IPO reviews, and market updates — all in one place.
          </p>

          {/* Search & Tag Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {uniqueTags.map(tag => (
              <button
                key={tag}
                onClick={() => { setActiveTag(tag); setPage(1); }}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                  activeTag === tag 
                    ? 'bg-[#197DFF] text-white shadow-[0_0_15px_rgba(25,125,255,0.4)]' 
                    : 'bg-white/5 text-[#A1A1AA] hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#197DFF]"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10 bg-[#111318] rounded-3xl border border-red-500/20">
            <p>{error}</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-[#A1A1AA] py-20 bg-[#0A0D14] border border-white/5 rounded-3xl">
            <p className="text-lg">No blogs published yet. Check back soon!</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center text-[#A1A1AA] py-20 bg-[#0A0D14] border border-white/5 rounded-3xl">
            <p className="text-lg">No articles found for "{activeTag}".</p>
            <button onClick={() => { setActiveTag('All'); setPage(1); }} className="mt-4 text-[#197DFF] hover:underline">View all articles</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <Link to={`/blog/${blog.slug}`} key={blog.id || blog._id} className="group flex flex-col bg-[#0A0D14] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 hover:border-[#197DFF]/30 hover:shadow-[0_10px_30px_rgba(25,125,255,0.1)] hover:-translate-y-1">
                <div className="aspect-[16/10] bg-[#111318] overflow-hidden relative">
                  <img
                    src={getImageUrl(blog.cover_image)}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-80"></div>
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="absolute top-5 left-5 bg-[#197DFF] text-white text-[10px] font-bold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full shadow-lg">
                      {activeTag !== 'All' && blog.tags.includes(activeTag) ? activeTag : blog.tags[0]}
                    </div>
                  )}
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#197DFF] transition-colors line-clamp-3">
                    {blog.title}
                  </h4>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <p className="text-[12.5px] text-[#A1A1AA] flex items-center gap-2">
                      <i className="fa-solid fa-calendar-days text-[#197DFF]/60"></i>
                      {blog.published_at 
                        ? new Date(blog.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                        : 'Recently'}
                    </p>
                    <span className="text-[#197DFF] text-[12.5px] font-bold tracking-tight flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && !error && totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-medium transition-all ${
                    page === p
                      ? 'bg-[#197DFF] text-white shadow-[0_0_15px_rgba(25,125,255,0.4)]'
                      : 'bg-white/5 text-[#A1A1AA] hover:bg-white/10 hover:text-white border border-white/5'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;

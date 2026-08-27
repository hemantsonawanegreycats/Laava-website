import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readTime, setReadTime] = useState('5 min read');
  const [toc, setToc] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const getImageUrl = (imageName) => {
    if (!imageName) return '';
    if (imageName.startsWith('http')) return imageName;
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.laavafin.com/api';
    const uploadsUrl = baseUrl.endsWith('/') ? `${baseUrl}uploads/` : `${baseUrl}/uploads/`;
    return `${uploadsUrl}${imageName}`;
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://api.laavafin.com/api';
        const response = await fetch(`${baseUrl}/blog/public/${slug}`);
        const result = await response.json();
        if (result.status && result.data) {
          const article = result.data;
          setBlog(article);
          
          // Calculate read time
          if (article.content) {
            const textContent = article.content.replace(/<[^>]+>/g, ' ');
            const wordCount = textContent.trim().split(/\s+/).length;
            setReadTime(`${Math.max(1, Math.ceil(wordCount / 200))} min read`);
            
            // Generate TOC from headings
            const headingRegex = /<(h[23])>(.*?)<\/\1>/gi;
            let match;
            const extractedToc = [];
            while ((match = headingRegex.exec(article.content)) !== null) {
              const tag = match[1].toLowerCase();
              const text = match[2].replace(/<[^>]+>/g, '').trim();
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              extractedToc.push({ id, text, level: tag === 'h2' ? 2 : 3 });
            }
            setToc(extractedToc);
            
            // Add IDs to headings in content
            article.content = article.content.replace(/<(h[23])>(.*?)<\/\1>/gi, (fullMatch, tag, innerHtml) => {
              const text = innerHtml.replace(/<[^>]+>/g, '').trim();
              const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return `<${tag} id="${id}">${innerHtml}</${tag}>`;
            });
          }
          
          // Fetch related articles
          try {
            const relRes = await fetch(`${baseUrl}/blog/public`);
            const relResult = await relRes.json();
            if (relResult.status && relResult.data && relResult.data.blogs) {
              setRelatedBlogs(relResult.data.blogs.filter(b => b.slug !== slug).slice(0, 3));
            }
          // eslint-disable-next-line no-unused-vars, no-empty
          } catch(_e) {}
          
        } else {
          setError(result.mesg || 'Failed to fetch blog post');
        }
      // eslint-disable-next-line no-unused-vars
      } catch (_err) {
        setError('An error occurred while fetching the blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#030911] min-h-screen pt-40 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#197DFF]"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="bg-[#030911] min-h-screen pt-40 pb-20 px-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-white mb-4">Blog Post Not Found</h1>
        <p className="text-red-500 mb-8">{error || 'The requested blog post could not be found.'}</p>
        <Link to="/blog" className="text-[#197DFF] hover:underline flex items-center gap-2">
          <i className="fa-solid fa-arrow-left"></i> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#030911] min-h-screen pb-24">
      <SEO 
        title={blog.meta_title || blog.title} 
        description={blog.meta_description || blog.custom_summary || blog.title} 
        keywords={blog.meta_keywords}
        schema={blog.schema_markup}
        image={blog.cover_image ? getImageUrl(blog.cover_image) : null}
      />
      
      {/* Cinematic Hero Section */}
      <div className="relative w-full min-h-[60vh] lg:min-h-[500px] flex items-end pt-32 lg:pt-40">
        {blog.cover_image ? (
          <img 
            src={getImageUrl(blog.cover_image)} 
            alt={blog.title} 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-[#0A1220]"></div>
        )}
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030911] via-[#030911]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content (Title & Meta) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24 flex flex-col lg:flex-row gap-12">
          {/* Spacer to align with TOC sidebar on desktop */}
          <div className="hidden lg:block w-72 shrink-0"></div>
          
          <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full items-center text-center lg:items-start lg:text-left">
            <div className="w-full flex justify-center lg:justify-start">
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-[14px] font-medium uppercase tracking-widest">
                <i className="fa-solid fa-arrow-left text-[12px]"></i> Back to all articles
              </Link>
            </div>
            
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 lg:gap-3 mb-6 w-full">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#197DFF] text-white text-[9px] lg:text-[11px] font-bold tracking-[1px] lg:tracking-[2px] uppercase px-2.5 py-1 lg:px-4 lg:py-1.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8 w-full">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[14px] text-white/80 font-light border-t border-white/10 pt-6 w-full">
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-calendar-days text-[#197DFF]"></i>
                {blog.published_at 
                  ? new Date(blog.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
                  : 'Recently'}
              </span>
              <span className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-[#197DFF]"></i>
                {readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Reading Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 -mt-10 flex flex-col lg:flex-row gap-12">
        {/* Sticky Sidebar (TOC) */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-32 bg-[#0A0D14]/80 border border-white/5 p-6 rounded-3xl shadow-xl backdrop-blur-md">
            <h4 className="text-white font-bold text-[15px] tracking-wide mb-6 flex items-center gap-2 uppercase">
              <i className="fa-solid fa-list-ul text-[#197DFF]"></i> In this article
            </h4>
            <div className="space-y-3">
              {toc.length === 0 ? (
                <p className="text-[#A1A1AA] text-[13px] italic">No sections found.</p>
              ) : (
                toc.map((item, i) => (
                  <a 
                    key={i} 
                    href={`#${item.id}`}
                    className={`block text-[14px] leading-snug transition-all ${item.level === 3 ? 'ml-4 text-[#A1A1AA] hover:text-white' : 'font-medium text-[#ECEDEE]/80 hover:text-[#197DFF]'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {item.text}
                  </a>
                ))
              )}
            </div>
            
            {/* Share Widget inside TOC Sidebar */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <h5 className="text-[#A1A1AA] text-[12px] uppercase tracking-widest font-bold mb-4">Share</h5>
              <div className="flex gap-3">
                <a href={`https://t.me/share/url?url=${window.location.href}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0088cc] hover:border-[#0088cc] transition-all">
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#197DFF] hover:border-[#197DFF] transition-all">
                  <i className="fa-solid fa-link"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1 bg-[#030911] shadow-[0_-20px_40px_rgba(3,9,17,1)] rounded-t-[3rem] -mx-6 lg:mx-0 px-6 lg:px-0">
          {/* Custom Styles for HTML Content since Tailwind Typography plugin is not installed */}
          <style dangerouslySetInnerHTML={{__html: `
            .blog-content h1 {
              display: none;
            }
            .blog-content h2 {
              font-size: clamp(1.75rem, 4vw, 2.25rem);
              font-weight: 700;
              color: white;
              margin-top: clamp(2.5rem, 6vw, 4rem);
              margin-bottom: clamp(1rem, 3vw, 1.5rem);
              letter-spacing: -0.02em;
              line-height: 1.3;
            }
            .blog-content h3 {
              font-size: clamp(1.25rem, 3vw, 1.5rem);
              font-weight: 700;
              color: white;
              margin-top: clamp(2rem, 5vw, 3rem);
              margin-bottom: clamp(0.75rem, 2vw, 1.25rem);
              line-height: 1.4;
            }
            .blog-content p {
              color: #D1D5DB;
              line-height: 1.8;
              font-size: clamp(1.0625rem, 2vw, 1.125rem);
              margin-bottom: clamp(1.25rem, 3vw, 1.75rem);
              font-weight: 300;
            }
            .blog-content ul {
              list-style-type: disc;
              margin-left: clamp(1rem, 3vw, 1.5rem);
              margin-bottom: clamp(1.5rem, 4vw, 2rem);
            }
            .blog-content ol {
              list-style-type: decimal;
              margin-left: clamp(1rem, 3vw, 1.5rem);
              margin-bottom: clamp(1.5rem, 4vw, 2rem);
            }
            .blog-content li {
              color: #D1D5DB;
              line-height: 1.8;
              font-size: clamp(1.0625rem, 2vw, 1.125rem);
              margin-bottom: 0.75rem;
              font-weight: 300;
            }
            .blog-content li::marker {
              color: #197DFF;
              font-weight: bold;
            }
            .blog-content strong {
              color: white;
              font-weight: 600;
            }
            .blog-content a {
              color: #197DFF;
              text-decoration: underline;
              text-underline-offset: 4px;
            }
            .blog-content img {
              border-radius: 1rem;
              margin: 3rem 0;
              width: 100%;
              box-shadow: 0 20px 40px rgba(0,0,0,0.4);
              border: 1px solid rgba(255,255,255,0.05);
            }
            .blog-content blockquote {
              border-left: 4px solid #197DFF;
              background-color: #111318;
              padding: 1.5rem 2rem;
              border-radius: 0 1rem 1rem 0;
              color: #E4E4E7;
              font-style: italic;
              margin: 2rem 0;
            }
          `}} />

          {/* HTML Content */}
          <div 
            className="blog-content max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          {/* Footer Divider */}
          <div className="mt-20 pt-8 border-t border-white/10 flex justify-center items-center">
            <p className="text-[#A1A1AA] text-[16px] italic">Thank you for reading.</p>
          </div>
          
          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="mt-24 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map(rb => (
                  <Link to={`/blog/${rb.slug}`} key={rb.id} className="group block bg-[#0A0D14] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                    <div className="aspect-[16/9] overflow-hidden bg-[#111318]">
                      <img src={getImageUrl(rb.cover_image)} alt={rb.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e)=>{e.target.style.display='none'}} />
                    </div>
                    <div className="p-5">
                      <h4 className="text-white font-bold text-[15px] leading-snug group-hover:text-[#197DFF] transition-colors line-clamp-2">{rb.title}</h4>
                      <p className="text-[#A1A1AA] text-[12px] mt-3 flex items-center gap-2">
                        <i className="fa-regular fa-clock"></i> 
                        {new Date(rb.published_at || rb.createdAt).toLocaleDateString('en-IN', {day:'numeric', month:'short'})}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

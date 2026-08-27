import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image = '/assets/images/Herobanner.png', schema }) => {
  const { pathname } = useLocation();
  // Normalize pathname: remove trailing slash for subpages so canonical URLs remain clean and consistent
  const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const url = `https://laavafin.com${cleanPath}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Favicon & Branding */}
      <link rel="icon" type="image/png" href="/assets/images/Lavaa icon white.png" />
      <link rel="apple-touch-icon" href="/assets/images/Lavaa icon white.png" />

      {/* Open Graph / Facebook */}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      {title && <meta property="twitter:title" content={title} />}
      {description && <meta property="twitter:description" content={description} />}
      <meta property="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: typeof schema === 'string' ? schema : JSON.stringify(schema) }} />
      )}
    </Helmet>
  );
};

export default SEO;





import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="w-48 sm:w-56 md:w-64 lg:w-64">
          <img 
            src="/assets/images/Laava-logo.png" 
            alt="Laava Logo" 
            className="w-full h-auto"
          />
        </Link>

        {/* Button */}
        <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" className="btn">
          Download App
        </a>
      </div>
    </header>
  );
}

   {/* <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="text-white hover:text-indigo-600">Home</Link>
          <Link to="/insights" className="text-white hover:text-indigo-600">Insights</Link>
          <Link to="/about" className="text-white hover:text-indigo-600">About</Link>
          <Link to="/contact" className="text-white hover:text-indigo-600">Contact</Link>
        </nav> */}
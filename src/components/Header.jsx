import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className='w-1/12'>
          <img src='/assets/images/Laava-logo.png'></img>
        </Link>
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/advisory" className="text-gray-700 hover:text-indigo-600">Advisory</Link>
          <Link to="/insights" className="text-gray-700 hover:text-indigo-600">Insights</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        </nav>
        <a
          href="#"
          className="btn"
        >
          Download App
        </a>
      </div>
    </header>
  );
}

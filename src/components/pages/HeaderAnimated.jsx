import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HeaderAnimated() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // run once on load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black shadow-md sticky"  // solid black on scroll
          : "bg-transparent w-full absolute" // translucent + blur initially
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="w-1/12">
          <img src="/assets/images/Laava-logo.png" alt="Laava Logo" />
        </Link>
        <a href="#" className="btn">
          Download App
        </a>
      </div>
    </header>

  );
}

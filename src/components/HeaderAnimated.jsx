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
       <Link to="/" className="w-32 sm:w-34 md:w-32 lg:w-32">
          <img 
            src="/assets/images/Laava-logo.png" 
            alt="Laava Logo" 
            className="w-full h-auto"
          />
        </Link>

        {/* Button */}
        <Link href="https://play.google.com/store/apps/details?id=com.laava.app" className="btn">
          Download App
        </Link>
      </div>
    </header>

  );
}

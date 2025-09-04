import FooterLinksSection from "./FooterLinkSection";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black border-t-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src='/assets/images/Laava-logo.png' className='w-1/2'></img>
          <p className="text-gray text-sm">Invest wisely. Grow confidently.</p>
          <br></br>
          <div className="flex justify-between gap-4">
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:scale-110 transition-transform" aria-label="X (formerly Twitter)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
              >
                <path d="M21.5 2h-3.73L12 9.5 6.23 2H2l7.95 10.36L2 22h3.73L12 14.5 17.77 22H22l-7.95-10.36L21.5 2z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform">
              <i className="fab fa-telegram-plane text-2xl"></i>
            </a>
          </div>
        </div>
        <div>
          <h5 className="text-md font-semibold text-white mb-2">Company</h5>
          <ul className="space-y-1 text-sm text-gray">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            {/* <li><a href="/advisory">Advisory</a></li> */}
            <li><a href="/insights">Insights</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* <div>
          <h5 className="text-md font-semibold text-white mb-2">Support</h5>
          <ul className="space-y-1 text-sm text-gray">
            {/* <li><a href="#">FAQ's</a></li> */}
            {/* <li><a href="/disclaimer">Disclaimer</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/cookies">Cookies Policy</a></li>
          </ul>
        </div> */} 

        <div>
          <h5 className="text-md font-semibold text-white mb-2">Support</h5>
          <ul className="space-y-1 text-sm text-gray">
            {/* <li><Link to="#">FAQ's</Link></li> */}
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cookies">Cookies Policy</Link></li>
          </ul>
        </div>


        <div>
          <h5 className="text-md font-semibold text-white mb-2">Download App</h5>
          <div className="flex flex-col space-y-2">
            <a href="#">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Play Store" className="w-32" />
            </a>
            <a href="#">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-32" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-white py-4 border-t mt-4">
        Copyright © {new Date().getFullYear()} <a href="/">Laava</a>. <a href="https://greycats.tech/" target="_blank">Powered By Greycats</a>.
      </div>
      <FooterLinksSection />
    </footer>

  );
}



import FooterLinksSection from "./FooterLinkSection";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-black border-t-white">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:justify-space-between md:items-start gap-10 text-center md:text-left">

        <div className="flex-1">
          <Link to="/" ><img src='/assets/images/Laava-logo.png' className='w-1/2 mx-auto md:mx-0' /></Link>
          <p className="text-gray text-sm mt-2">Smarter Decisions, Profitable Research</p>
          <div className="flex justify-center md:justify-start gap-6 mt-6 flex-wrap">
            <a href="https://www.facebook.com/share/1At6RJDhK6/" target="_blank" className="text-white hover:scale-110 transition-transform"><i className="fab fa-facebook-f text-2xl"></i></a>
            {/* <a href="#" target="_blank" className="text-white hover:scale-110 transition-transform"><i className="fab fa-linkedin-in text-2xl"></i></a> */}
            <a href="https://www.instagram.com/laava_fintech?igsh=MXVyaXphdXZhOXV4ZA==" target="_blank" className="text-white hover:scale-110 transition-transform"><i className="fab fa-instagram text-2xl"></i></a>
            {/* <a href="#" className="hover:scale-110 transition-transform" aria-label="X (formerly Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path d="M21.5 2h-3.73L12 9.5 6.23 2H2l7.95 10.36L2 22h3.73L12 14.5 17.77 22H22l-7.95-10.36L21.5 2z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:scale-110 transition-transform"><i className="fab fa-youtube text-2xl"></i></a>
            <a href="#" className="text-white hover:scale-110 transition-transform"><i className="fab fa-telegram-plane text-2xl"></i></a> */}
          </div>
        </div>

        <div className="flex-1 justify-items-center">
          <h5 className="text-md align-middle font-semibold text-white mb-5">Policy Links</h5>
          <ul className="space-y-5 text-sm text-gray">
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cookies">Cookies Policy</Link></li>
          </ul>
        </div>

        <div className="flex-1 justify-items-center">
          <h5 className="text-md align-middle font-semibold text-white mb-5">Regulatory Documents</h5>
          <ul className="space-y-5 text-sm text-gray">

            <li>
              <a
                href="/assets/pdf/InverstorCharter/Investor_Charter_Sep_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Investor Charter
              </a>
            </li>
            <li>
              <a
                href="assets/pdf/MITC/MITC_Sep_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                MITC
              </a>
            </li>
            <li><Link to="/investorgrievance">Investor Grievance</Link></li>
          </ul>
        </div>

        <div className=" flex-1 justify-items-center">
          <h5 className="text-md  font-semibold text-white mb-2">Download App</h5>
          <div className="flex flex-col space-y-5  md:items-center">
            <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Play Store" className="w-30" /></a>
            <a href="#" target="_blank"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-30" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-white py-4 border-t mt-4">
        Copyright © {new Date().getFullYear()} <a href="/">Laava</a>.
        <a href="https://greycats.tech/" target="_blank"> Powered By Greycats</a>.
      </div>
    </footer>
  );
}






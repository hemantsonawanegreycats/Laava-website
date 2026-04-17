import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Disclaimer from './components/pages/Disclaimer';
import TermsOfUse from './components/pages/TermsOfUse';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import CookiesPolicy from './components/pages/CookiesPolicy';
import Investordocs from './components/pages/Investor-grievance';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Insights from './components/pages/Insights';
import Features from './components/pages/Features';
import HowItWorks from './components/pages/HowItWorks';
import Pricing from './components/pages/Pricing';
import FAQ from './components/pages/FAQ';
import TestimonialCarousel from './components/HomePage/TestimonialCarousel';

// --- SECTION 1: GLOBAL STYLES & DEPENDENCIES ---
// This component injects the necessary fonts, icons, and custom CSS required for the exact look.
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

    body {
        font-family: 'Rubik', sans-serif;
        font-feature-settings: "cv02", "cv03", "cv04", "cv11";
        -webkit-font-smoothing: antialiased;
        background-color: #030911;
        color: #ECEDEE;
        margin: 0;
        overflow-x: hidden;
    }

    .smooth-container {
        will-change: transform;
    }
    
    .glass-nav {
        background: rgba(3, 9, 17, 0.75);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        will-change: transform, backdrop-filter;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #313131;
        border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #197DFF;
    }

    .card-hover {
        transition: all 0.3s ease;
    }
    .card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 6px rgba(0,0,0,.04), 0 10px 24px rgba(0,0,0,.08);
    }

    .text-glow {
        text-shadow: 0 0 40px rgba(25, 125, 255, 0.4);
    }

    @keyframes orb-drift {
        0% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(2%, 4%) scale(1.1); }
        66% { transform: translate(-3%, -2%) scale(0.9); }
        100% { transform: translate(0, 0) scale(1); }
    }

    .animate-orb {
        animation: orb-drift 30s ease-in-out infinite;
    }
  `}} />
);

// --- SECTION 2: NAVBAR COMPONENT ---
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full top-0 z-[100] glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24 md:h-28">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer z-[110]" onClick={() => setIsMenuOpen(false)}>
                        <img src="/assets/images/Lavaa logo white.png" alt="Laava Logo" className="h-[80px] md:h-[100px] object-contain" />
                    </Link>
                    
                    {/* Desktop Nav & CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="hidden xl:flex items-center gap-5 text-[14px] text-[#ECEDEE]/70 font-medium">
                            <Link to="/features" className="hover:text-white transition-colors">Features</Link>
                            <Link to="/how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
                            <Link to="/about" className="hover:text-white transition-colors">About</Link>
                            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
                            {/* <Link to="/contact" className="hover:text-white transition-colors">Contact</Link> */}
                        </div>
                        <div className="hidden lg:flex xl:hidden items-center gap-2 px-3 py-1.5 bg-[#151718] rounded-full text-[12px] font-medium text-[#ECEDEE]/70 border border-[#313131]">
                            <i className="fa-solid fa-shield-halved text-[#22A756]"></i>
                            SEBI Reg: <span className="tabular-nums font-medium text-[#ECEDEE]">INH000023171</span>
                        </div>
                        <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-[0.75rem] font-medium text-[14px] tracking-[0.5px] transition-all flex items-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)]">
                            Download App
                        </a>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="md:hidden flex items-center z-[110]">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 focus:outline-none"
                        >
                            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl transition-all duration-300`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Slide-down */}
            <div className={`md:hidden absolute top-24 left-0 w-full bg-[#030911]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-500 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'}`}>
                <div className="px-6 py-8 space-y-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 px-4 py-3 bg-[#1E2021] rounded-xl border border-white/5">
                            <i className="fa-solid fa-shield-halved text-[#22A756]"></i>
                            <span className="text-[13px] text-[#ECEDEE]/70">SEBI Reg: <span className="text-white font-semibold">INH000023171</span></span>
                        </div>
                        <a 
                            href="https://play.google.com/store/apps/details?id=com.laava.app" 
                            target="_blank" rel="noopener noreferrer"
                            className="w-full bg-white text-black py-4 rounded-xl font-bold text-center shadow-lg active:scale-[0.98] transition-all"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Download App
                        </a>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                        <Link to="/features" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">Features</Link>
                        <Link to="/how-it-works" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">How it Works</Link>
                        <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">Pricing</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">About</Link>
                        <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">FAQ</Link>
                        {/* <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">Contact</Link> */}
                        <Link to="/disclaimer" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">Disclaimer</Link>
                        <Link to="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="text-[14px] text-white/70 hover:text-white py-2">Privacy</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// --- SECTION 3: HERO COMPONENT (Includes 3D Canvas) ---
const HeroSection = ({ canvasRef }) => (
    <section id="hero-section" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#030911] border-b border-[#313131] pt-24 md:pt-28">

        {/* Smooth 3D Wave Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-100"></canvas>

        {/* Deep Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(25,125,255,0.05)_0%,_rgba(3,9,17,0.4)_60%,_rgba(3,9,17,1)_100%)] z-0 pointer-events-none"></div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-5 md:py-2.5 rounded-full bg-[#1E2021]/50 border border-white/10 text-[11px] md:text-[12px] text-[#ECEDEE]/90 mb-8 md:mb-8 backdrop-blur-lg shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)]">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22A756] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22A756]"></span>
                </span>
                <span className="hidden sm:inline">SEBI Registered Research Analyst</span>
                <span className="sm:hidden font-semibold tracking-[0.3px]">SEBI INH000023171</span>
                <span className="hidden sm:inline text-white/30 mx-1">|</span>
                <span className="hidden sm:inline tabular-nums font-bold text-white">INH000023171</span>
            </div>

            <h1 className="font-bold text-white tracking-[-0.04em] leading-[1.05] md:leading-[1] mb-6 md:mb-8 text-glow relative z-10 flex flex-col items-center">
                <span className="text-[24px] sm:text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] text-white/90">Welcome to</span>
                <span className="text-[58px] sm:text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] bg-gradient-to-r from-[#B0D4FF] via-[#E8F2FF] to-[#B0D4FF] bg-clip-text text-transparent block md:inline leading-none">Laava</span>
            </h1>

            <p className="mt-0 md:mt-4 text-[14px] sm:text-[18px] md:text-[22px] lg:text-[28px] text-[#ECEDEE]/60 font-normal sm:font-medium tracking-tight leading-[1.5] mb-10 md:mb-12 max-w-xs sm:max-w-3xl mx-auto relative z-10">
                <span className="block sm:inline whitespace-nowrap">Smarter Decisions</span>
                <span className="text-[#197DFF] mx-3 opacity-40 hidden sm:inline">•</span>
                <span className="block sm:inline whitespace-nowrap">Profitable Research</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center items-center w-full sm:w-auto relative z-20">
                <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white hover:bg-gray-200 text-black px-10 py-3.5 md:py-4 rounded-[1rem] font-bold text-[16px] tracking-[0.5px] transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group">
                    <i className="fa-brands fa-google-play text-2xl group-hover:scale-110 transition-transform"></i>
                    Get the App
                </a>
                <a href="#discover" onClick={(e) => {
                    e.preventDefault();
                    if (window.lenis) {
                        window.lenis.scrollTo('#discover', { offset: -80, duration: 1.2 });
                    } else {
                        const el = document.getElementById('discover');
                        if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                    }
                }} className="w-auto bg-transparent sm:bg-[#1E2021]/50 hover:bg-[#1E2021] text-white/70 hover:text-white sm:text-white border-0 sm:border sm:border-white/10 px-6 sm:px-10 py-2 sm:py-4 rounded-[0.75rem] font-medium sm:font-bold text-[14px] sm:text-[16px] tracking-[0.5px] transition-all sm:backdrop-blur-md flex items-center justify-center gap-2">
                    Discover More <i className="fa-solid fa-arrow-down text-[12px] opacity-70"></i>
                </a>
            </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-[#ECEDEE]/40">
            <i className="fa-solid fa-chevron-down"></i>
        </div>
    </section>
);

// --- SECTION 4: TRUST BANNER COMPONENT ---
const TrustBanner = () => (
    <div id="discover" className="bg-[#1E2021]/30 border-b border-[#313131] py-8 md:py-10 relative z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#313131]/50 text-center">
                <div className="py-4 sm:py-0 sm:px-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-microchip text-[#0B6CF4] text-[24px]"></i>
                    </div>
                    <div className="text-[18px] font-bold text-white tracking-[-0.015em] mb-1">AI-Powered</div>
                    <div className="text-[12px] text-[#ECEDEE]/60 uppercase tracking-[1px] font-semibold">Data-Driven Precision</div>
                </div>
                <div className="pt-4 md:pt-0 px-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-user-check text-[#22A756] text-[24px]"></i>
                    </div>
                    <div className="text-[18px] font-bold text-white tracking-[-0.015em] mb-1">Expert Validated</div>
                    <div className="text-[12px] text-[#ECEDEE]/60 uppercase tracking-[1px] font-semibold">Human Insight Backed</div>
                </div>
                <div className="pt-4 md:pt-0 px-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-magnifying-glass-chart text-[#4B83D6] text-[24px]"></i>
                    </div>
                    <div className="text-[18px] font-bold text-white tracking-[-0.015em] mb-1">100% Transparent</div>
                    <div className="text-[12px] text-[#ECEDEE]/60 uppercase tracking-[1px] font-semibold">Unbiased Methodology</div>
                </div>
                <div className="pt-4 md:pt-0 px-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-shield-halved text-[#0B6CF4] text-[24px]"></i>
                    </div>
                    <div className="text-[18px] font-bold text-white tracking-[-0.015em] mb-1">SEBI Registered</div>
                    <div className="text-[12px] text-[#ECEDEE]/60 uppercase tracking-[1px] font-semibold">Reg: INH000023171</div>
                </div>
            </div>
        </div>
    </div>
);

// --- SECTION 5: ABOUT COMPONENT ---
const AboutSection = () => (
    <section id="about" className="py-20 md:py-32 bg-[#030911] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative group order-2 md:order-1 px-4 md:px-0">
                    <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">About Laava</h2>
                    <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#ECEDEE] leading-[1.25] tracking-[-0.025em] mb-6">Redefining how you discover, analyse, and act on stock market opportunities.</h3>
                    
                    <div className="space-y-6 text-[16px] text-[#ECEDEE]/70 leading-[1.5] tracking-[-0.011em]">
                        <p>Traditional equity research is often slow, subjective, and constrained by human bandwidth. We believe the future of wealth creation lies in <strong className="text-[#ECEDEE] font-medium">AI-powered intelligence</strong> that operates at the speed of markets.</p>
                        
                        <p>Our platform seamlessly integrates the expertise of seasoned research analysts with advanced artificial intelligence, machine learning, and data science. This unique combination enables us to deliver insights that are timely, comprehensive, and precise.</p>
                        
                        <div className="bg-[#1E2021] border-l-[4px] border-[#197DFF] rounded-r-[0.75rem] shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)] p-6">
                            <p className="text-[#ECEDEE] font-medium">Every research call on LAAVA is carefully hand-picked by experienced professionals and supported by AI-driven insights, ensuring that investors have access to high-quality, objective, and actionable intelligence.</p>
                        </div>
                        
                        <p>By bridging human judgment with data-driven analysis, we are establishing a new standard for equity research—smarter, faster, and more transparent.</p>
                    </div>
                </div>
                
                <div className="relative h-full flex flex-col justify-center order-1 md:order-2">
                    <div className="bg-[#151718]/50 rounded-[2rem] p-6 md:p-8 border border-[#313131] shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)] relative overflow-hidden">
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#197DFF]/20 rounded-full blur-[80px]"></div>
                        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#22A756]/10 rounded-full blur-[80px]"></div>

                        <div className="relative z-10 w-full">
                            
                            {/* Step 1 */}
                            <div className="bg-[#1E2021] border border-[#313131] rounded-xl p-5 backdrop-blur-md relative z-20 shadow-lg transform transition-transform hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#4B83D6]/10 flex items-center justify-center text-[#4B83D6] border border-[#4B83D6]/20">
                                            <i className="fa-solid fa-network-wired text-xl"></i>
                                        </div>
                                        <div>
                                            <div className="text-[14px] font-semibold text-[#ECEDEE]">AI Data Engine</div>
                                            <div className="text-[12px] text-[#ECEDEE]/50">Analyzing millions of data points</div>
                                        </div>
                                    </div>
                                    <div className="w-5 h-5 border-2 border-[#4B83D6]/30 border-t-[#4B83D6] rounded-full animate-spin"></div>
                                </div>
                                <div className="flex gap-1.5 items-end h-10 opacity-70 mt-2">
                                    <div className="w-full bg-[#4B83D6]/30 rounded-t-sm h-[30%]"></div>
                                    <div className="w-full bg-[#4B83D6]/40 rounded-t-sm h-[50%]"></div>
                                    <div className="w-full bg-[#4B83D6]/30 rounded-t-sm h-[40%]"></div>
                                    <div className="w-full bg-[#4B83D6]/60 rounded-t-sm h-[80%]"></div>
                                    <div className="w-full bg-[#4B83D6]/40 rounded-t-sm h-[60%]"></div>
                                    <div className="w-full bg-[#4B83D6]/80 rounded-t-sm h-[100%] animate-pulse"></div>
                                </div>
                            </div>

                            <div className="flex justify-center -my-1 relative z-10">
                                <div className="h-8 w-[2px] bg-gradient-to-b from-[#4B83D6]/50 to-[#E8930C]/50"></div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-[#1E2021] border border-[#313131] rounded-xl p-5 backdrop-blur-md relative z-20 shadow-lg ml-6 transform transition-transform hover:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8930C]/10 flex items-center justify-center text-[#E8930C] border border-[#E8930C]/20">
                                        <i className="fa-solid fa-user-tie text-xl"></i>
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-semibold text-[#ECEDEE]">Analyst Validation</div>
                                        <div className="text-[12px] text-[#22A756] flex items-center gap-1.5 mt-0.5">
                                            <i className="fa-solid fa-circle-check"></i> Human expertise applied
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center -my-1 relative z-10">
                                <div className="h-8 w-[2px] bg-gradient-to-b from-[#E8930C]/50 to-[#22A756]/50"></div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-gradient-to-r from-[#22A756]/10 to-[#1E2021] border border-[#22A756]/30 rounded-xl p-5 backdrop-blur-md relative z-20 shadow-lg transform transition-transform hover:-translate-y-1">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] text-[#ECEDEE]/50 uppercase tracking-[1px] font-bold mb-1">Actionable Insight</div>
                                        <div className="text-[18px] font-bold text-[#22A756] tracking-[-0.015em]">High-Conviction Call</div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#22A756]/20 flex items-center justify-center text-[#22A756] shadow-[0_0_15px_rgba(34,167,86,0.2)]">
                                        <i className="fa-solid fa-arrow-trend-up text-xl animate-pulse"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- SECTION 6: FEATURES COMPONENT ---
const FeaturesSection = () => (
    <section className="py-24 bg-[#151718]/30 border-y border-[#313131]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Future-Ready Insights</h2>
                <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-[#ECEDEE] leading-[1.25] tracking-[-0.025em] mb-6">Our platform combines the expertise of seasoned analysts with cutting-edge tech.</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#1E2021] p-8 rounded-[0.75rem] border border-[#313131] shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)] card-hover">
                    <div className="w-12 h-12 bg-[#4B83D6]/10 text-[#4B83D6] rounded-[0.75rem] flex items-center justify-center text-xl mb-6">
                        <i className="fa-solid fa-bolt-lightning"></i>
                    </div>
                    <h4 className="text-[20px] font-semibold text-[#ECEDEE] leading-[1.4] tracking-[-0.015em] mb-3">Faster</h4>
                    <p className="text-[14px] text-[#ECEDEE]/70 leading-[1.5] tracking-[-0.011em]">Real-time analysis of market trends, corporate actions, and global events.</p>
                </div>
                <div className="bg-[#1E2021] p-8 rounded-[0.75rem] border border-[#313131] shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)] card-hover">
                    <div className="w-12 h-12 bg-[#E8930C]/10 text-[#E8930C] rounded-[0.75rem] flex items-center justify-center text-xl mb-6">
                        <i className="fa-solid fa-brain"></i>
                    </div>
                    <h4 className="text-[20px] font-semibold text-[#ECEDEE] leading-[1.4] tracking-[-0.015em] mb-3">Smarter</h4>
                    <p className="text-[14px] text-[#ECEDEE]/70 leading-[1.5] tracking-[-0.011em]">AI models trained on years of financial data to identify patterns invisible to the human eye.</p>
                </div>
                <div className="bg-[#1E2021] p-8 rounded-[0.75rem] border border-[#313131] shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)] card-hover">
                    <div className="w-12 h-12 bg-[#22A756]/10 text-[#22A756] rounded-[0.75rem] flex items-center justify-center text-xl mb-6">
                        <i className="fa-solid fa-user-astronaut"></i>
                    </div>
                    <h4 className="text-[20px] font-semibold text-[#ECEDEE] leading-[1.4] tracking-[-0.015em] mb-3">Personalized</h4>
                    <p className="text-[14px] text-[#ECEDEE]/70 leading-[1.5] tracking-[-0.011em]">Research tailored to individual investor profiles, goals, and risk appetite.</p>
                </div>
                <div className="bg-[#1E2021] p-8 rounded-[0.75rem] border border-[#313131] shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)] card-hover">
                    <div className="w-12 h-12 bg-[#D93636]/10 text-[#D93636] rounded-[0.75rem] flex items-center justify-center text-xl mb-6">
                        <i className="fa-solid fa-crosshairs"></i>
                    </div>
                    <h4 className="text-[20px] font-semibold text-[#ECEDEE] leading-[1.4] tracking-[-0.015em] mb-3">Actionable</h4>
                    <p className="text-[14px] text-[#ECEDEE]/70 leading-[1.5] tracking-[-0.011em]">Clear, concise, and timely recommendations designed to maximize returns.</p>
                </div>
            </div>
        </div>
    </section>
);

// --- SECTION 7: MISSION & VISION COMPONENT ---
const MissionVisionSection = () => (
    <section className="py-20 bg-[#030911] relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#197DFF]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Mission Card */}
                <div className="group relative bg-[#151718] border border-white/5 rounded-[1.5rem] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-[#197DFF]/30 shadow-2xl">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#197DFF]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-[#197DFF]/10 rounded-xl flex items-center justify-center text-[#197DFF] mb-6 border border-[#197DFF]/20 group-hover:scale-110 transition-transform duration-500">
                            <i className="fa-solid fa-rocket text-xl"></i>
                        </div>
                        
                        <div className="inline-block px-3 py-1 rounded-full bg-[#197DFF]/5 border border-[#197DFF]/10 text-[9px] font-bold text-[#197DFF] uppercase tracking-[1.5px] mb-3">
                            Our Purpose
                        </div>
                        
                        <h3 className="text-[28px] font-bold text-white mb-4 tracking-[-0.03em] leading-tight">
                            Mission
                        </h3>
                        
                        <p className="text-[16px] text-[#ECEDEE]/70 leading-[1.6] tracking-[-0.01em]">
                            To democratize access to high-quality research and empower investors of all sizes to make informed, profitable, and confident investment decisions.
                        </p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#197DFF]/5 rounded-full blur-2xl group-hover:bg-[#197DFF]/10 transition-colors duration-500"></div>
                </div>

                {/* Vision Card */}
                <div className="group relative bg-[#151718] border border-white/5 rounded-[1.5rem] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-[#22A756]/30 shadow-2xl">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#22A756]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-[#22A756]/10 rounded-xl flex items-center justify-center text-[#22A756] mb-6 border border-[#22A756]/20 group-hover:scale-110 transition-transform duration-500">
                            <i className="fa-solid fa-eye text-xl"></i>
                        </div>
                        
                        <div className="inline-block px-3 py-1 rounded-full bg-[#22A756]/5 border border-[#22A756]/10 text-[9px] font-bold text-[#22A756] uppercase tracking-[1.5px] mb-3">
                            The Future
                        </div>
                        
                        <h3 className="text-[28px] font-bold text-white mb-4 tracking-[-0.03em] leading-tight">
                            Vision
                        </h3>
                        
                        <p className="text-[16px] text-[#ECEDEE]/70 leading-[1.6] tracking-[-0.01em]">
                            To become the most trusted AI-first research partner for retail and institutional investors, transforming data into wealth-building insights.
                        </p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#22A756]/5 rounded-full blur-2xl group-hover:bg-[#22A756]/10 transition-colors duration-500"></div>
                </div>

            </div>
        </div>
    </section>
);

// --- SECTION 8: WHY CHOOSE US COMPONENT ---
const WhyChooseUsSection = () => (
    <section className="py-24 bg-[#151718]/30 border-t border-[#313131]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/3">
                    <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Why Choose Us</h2>
                    <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-[#ECEDEE] leading-[1.25] tracking-[-0.025em] mb-6">We bring the best of AI & human insight.</h3>
                    <p className="text-[16px] text-[#ECEDEE]/70 leading-[1.5] tracking-[-0.011em]">Deliver results you can trust. At LAAVA, we don’t just provide research. We provide clarity in complexity, confidence in decisions, and conviction in action.</p>
                </div>
                
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-[#1E2021] p-6 rounded-[0.75rem] border border-[#313131] flex gap-4">
                        <div className="mt-1 text-[#197DFF]"><i className="fa-solid fa-circle-check text-xl"></i></div>
                        <div>
                            <h4 className="text-[16px] font-semibold text-[#ECEDEE] mb-1">AI + Human Expertise</h4>
                            <p className="text-[14px] text-[#ECEDEE]/70 tracking-[-0.011em]">We blend machine intelligence with analyst-driven validation.</p>
                        </div>
                    </div>
                    <div className="bg-[#1E2021] p-6 rounded-[0.75rem] border border-[#313131] flex gap-4">
                        <div className="mt-1 text-[#197DFF]"><i className="fa-solid fa-shield-halved text-xl"></i></div>
                        <div>
                            <h4 className="text-[16px] font-semibold text-[#ECEDEE] mb-1">Transparency First</h4>
                            <p className="text-[14px] text-[#ECEDEE]/70 tracking-[-0.011em]">Every insight is backed by clear data and methodology.</p>
                        </div>
                    </div>
                    <div className="bg-[#1E2021] p-6 rounded-[0.75rem] border border-[#313131] flex gap-4">
                        <div className="mt-1 text-[#197DFF]"><i className="fa-solid fa-lightbulb text-xl"></i></div>
                        <div>
                            <h4 className="text-[16px] font-semibold text-[#ECEDEE] mb-1">Innovation at Core</h4>
                            <p className="text-[14px] text-[#ECEDEE]/70 tracking-[-0.011em]">Continuously evolving algorithms that adapt with the markets.</p>
                        </div>
                    </div>
                    <div className="bg-[#1E2021] p-6 rounded-[0.75rem] border border-[#313131] flex gap-4">
                        <div className="mt-1 text-[#197DFF]"><i className="fa-solid fa-hand-holding-heart text-xl"></i></div>
                        <div>
                            <h4 className="text-[16px] font-semibold text-[#ECEDEE] mb-1">Client-Centric</h4>
                            <p className="text-[14px] text-[#ECEDEE]/70 tracking-[-0.011em]">Your profitability is our ultimate benchmark of success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- WHY LAAVA — CLEAN VERTICAL TIMELINE WITH SCROLL HIGHLIGHT ---
const WhyLaava = () => {
    const pillars = [
        { icon: 'fa-shield-halved', title: 'SEBI Registered', desc: 'Research Analyst INH000023171 — every call complies with SEBI guidelines.', color: '#22A756' },
        { icon: 'fa-user-tie', title: 'Expert-Led Research', desc: 'Calls curated by seasoned analysts, not auto-generated signals.', color: '#197DFF' },
        { icon: 'fa-eye', title: 'Full Transparency', desc: 'Every recommendation comes with rationale, target, and exit — no black box.', color: '#E8930C' },
        { icon: 'fa-lock', title: 'Secure & Private', desc: 'Bank-grade encryption. Your data is never shared with third parties.', color: '#4B83D6' },
    ];
    const [activeIdx, setActiveIdx] = useState(0);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observers = itemRefs.current.map((el, i) => {
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveIdx(i); },
                { threshold: 0.6, rootMargin: '-20% 0px -30% 0px' }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach((o) => o && o.disconnect());
    }, []);

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#030911] to-[#0a1220] border-y border-[#313131] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
                <div className="text-center mb-20">
                    <h2 className="text-[12px] font-semibold text-[#22A756] tracking-[1px] uppercase mb-3">Why Laava</h2>
                    <h3 className="text-[32px] md:text-[48px] font-semibold text-white tracking-[-0.025em]">Built on trust, <span className="text-[#ECEDEE]/40">not hype</span></h3>
                </div>

                <div className="relative">
                    {/* Mobile vertical line (left) */}
                    <div className="md:hidden absolute left-[23px] top-2 bottom-2 w-px bg-[#313131]"></div>
                    <div
                        className="md:hidden absolute left-[23px] top-2 w-px bg-gradient-to-b from-[#197DFF] to-[#22A756] transition-all duration-500 ease-out"
                        style={{ height: `${((activeIdx + 1) / pillars.length) * 100}%` }}
                    ></div>

                    {/* Desktop center line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-[#313131]"></div>
                    <div
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-px bg-gradient-to-b from-[#197DFF] to-[#22A756] transition-all duration-500 ease-out"
                        style={{ height: `${((activeIdx + 1) / pillars.length) * 100}%` }}
                    ></div>

                    <div className="space-y-16 md:space-y-28">
                        {pillars.map((p, i) => {
                            const active = i <= activeIdx;
                            const isLeft = i % 2 === 0;
                            return (
                                <div
                                    key={i}
                                    ref={(el) => (itemRefs.current[i] = el)}
                                    className="relative transition-all duration-500 md:flex md:items-center"
                                    style={{ opacity: active ? 1 : 0.4 }}
                                >
                                    {/* Mobile icon (left-aligned) */}
                                    <div
                                        className="md:hidden absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
                                        style={{
                                            backgroundColor: active ? p.color : '#1E2021',
                                            boxShadow: active ? `0 0 32px ${p.color}60` : 'none',
                                            border: active ? 'none' : '1px solid #313131',
                                        }}
                                    >
                                        <i className={`fa-solid ${p.icon} text-[18px] transition-colors duration-500`} style={{ color: active ? '#fff' : '#ECEDEE80' }}></i>
                                    </div>

                                    {/* Desktop center icon */}
                                    <div
                                        className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full items-center justify-center transition-all duration-500 z-10"
                                        style={{
                                            backgroundColor: active ? p.color : '#1E2021',
                                            boxShadow: active ? `0 0 32px ${p.color}60` : 'none',
                                            border: active ? 'none' : '1px solid #313131',
                                        }}
                                    >
                                        <i className={`fa-solid ${p.icon} text-[20px] transition-colors duration-500`} style={{ color: active ? '#fff' : '#ECEDEE80' }}></i>
                                    </div>

                                    {/* Content — mobile: left-pad, desktop: alternating halves */}
                                    <div className={`pl-16 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:ml-auto md:pl-16 md:text-left'}`}>
                                        <h4 className="text-[24px] md:text-[30px] font-semibold text-white mb-3 tracking-[-0.02em]">{p.title}</h4>
                                        <p className="text-[15px] md:text-[16px] text-[#ECEDEE]/70 leading-relaxed">{p.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- HOW IT WORKS — CONNECTED HORIZONTAL TIMELINE ---
const HowItWorksTeaser = () => {
    const steps = [
        { num: '1', icon: 'fa-download', title: 'Download', desc: 'Get the app free on Play Store' },
        { num: '2', icon: 'fa-clipboard-check', title: 'Risk Profile', desc: 'Quick setup in under 5 mins' },
        { num: '3', icon: 'fa-bell-concierge', title: 'Get Calls', desc: 'Expert recommendations in real-time' },
    ];
    return (
        <section className="py-24 bg-[#151718]/30 border-y border-[#313131]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Get Started</h2>
                    <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-semibold text-[#ECEDEE] leading-[1.25] tracking-[-0.025em] mb-6">Three steps to smarter investing.</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((s, i) => (
                        <div key={i} className="bg-[#1E2021] p-8 rounded-[0.75rem] border border-[#313131] shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)] card-hover relative">
                            <div className="w-12 h-12 bg-[#197DFF]/10 text-[#197DFF] rounded-[0.75rem] flex items-center justify-center text-xl mb-6">
                                <i className={`fa-solid ${s.icon}`}></i>
                            </div>
                            <span className="absolute top-6 right-6 text-[14px] font-bold text-[#197DFF]/40">0{s.num}</span>
                            <h4 className="text-[20px] font-semibold text-[#ECEDEE] leading-[1.4] tracking-[-0.015em] mb-3">{s.title}</h4>
                            <p className="text-[14px] text-[#ECEDEE]/70 leading-[1.5] tracking-[-0.011em]">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#197DFF] hover:text-[#4B83D6] font-semibold transition-colors">
                        See full onboarding flow <i className="fa-solid fa-arrow-right text-[12px]"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

// --- TESTIMONIALS SECTION ---
const TestimonialsSection = () => (
    <section className="py-20 bg-[#0a1220] border-y border-[#313131]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Testimonials</h2>
                <h3 className="text-[26px] md:text-[36px] font-semibold text-white tracking-[-0.025em]">Loved by thousands of investors</h3>
            </div>
            <TestimonialCarousel />
        </div>
    </section>
);

// --- PRICING TEASER ---
const PricingTeaser = () => (
    <section className="py-20 bg-[#0a1220] border-y border-[#313131]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">Pricing</h2>
            <h3 className="text-[26px] md:text-[36px] font-semibold text-white tracking-[-0.025em] mb-4">Basic & Premium plans. <span className="text-[#22A756]">Free trial</span> available.</h3>
            <p className="text-[#ECEDEE]/70 text-[16px] md:text-[18px] mb-10 max-w-2xl mx-auto">Current pricing and offers are shown live inside the app.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {['Free Trial', 'Secure PayU Payments', 'Refer & Earn', 'SEBI Compliant'].map((t, i) => (
                    <span key={i} className="px-5 py-2 bg-[#1E2021] border border-[#313131] rounded-full text-[13px] text-[#ECEDEE]/90 flex items-center gap-2">
                        <i className="fa-solid fa-check text-[#22A756]"></i>{t}
                    </span>
                ))}
            </div>
            <Link to="/pricing" className="inline-flex items-center gap-3 bg-white hover:bg-gray-200 text-black px-10 py-4 rounded-[0.75rem] font-bold text-[16px] transition-all">
                View All Plans <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </div>
    </section>
);

// --- FAQ TEASER ---
const FAQTeaser = () => {
    const [open, setOpen] = useState(-1);
    const items = [
        { q: 'Is Laava SEBI registered?', a: 'Yes — Laava is a SEBI-registered Research Analyst (INH000023171). All our research complies with SEBI guidelines.' },
        { q: 'Is there a free trial?', a: 'Yes. New users get a free trial to experience the platform before subscribing.' },
        { q: 'How do I get the calls?', a: 'All calls are delivered inside the Laava app with real-time push notifications for entry, target, and exit alerts.' },
    ];
    return (
        <section className="py-20 bg-[#030911]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-[12px] font-semibold text-[#197DFF] tracking-[1px] uppercase mb-3">FAQ</h2>
                    <h3 className="text-[26px] md:text-[36px] font-semibold text-white tracking-[-0.025em]">Common questions</h3>
                </div>
                <div className="space-y-3">
                    {items.map((f, i) => (
                        <div key={i} className="bg-[#1E2021]/50 border border-[#313131] rounded-2xl overflow-hidden backdrop-blur-sm">
                            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-[#1E2021]/80 transition-all">
                                <span className="text-white font-semibold text-[16px]">{f.q}</span>
                                <i className={`fa-solid fa-chevron-down text-[#197DFF] transition-transform ${open === i ? 'rotate-180' : ''}`}></i>
                            </button>
                            {open === i && <div className="px-6 pb-5 text-[#ECEDEE]/70 leading-relaxed">{f.a}</div>}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link to="/faq" className="inline-flex items-center gap-2 text-[#197DFF] hover:text-[#4B83D6] font-semibold transition-colors">
                        Read all FAQs <i className="fa-solid fa-arrow-right text-[12px]"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

// --- SECTION 9: DOWNLOAD CTA COMPONENT ---
const DownloadCTA = () => (
    <section id="download" className="py-16 md:py-24 bg-[#0A2233] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#121417] to-[#194375] opacity-80"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-[28px] md:text-[42px] lg:text-[56px] font-bold text-white mb-6 tracking-[-0.035em] leading-[1.1]">Join the Future of Trading</h2>
            <p className="text-[16px] md:text-[18px] text-white/80 leading-[1.6] tracking-[-0.011em] mb-10">Download the LAAVA app today for smarter decisions and profitable research.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.laava.app" target="_blank" rel="noopener noreferrer" className="bg-[#1E2021] hover:bg-[#151718] border border-[#313131] text-[#ECEDEE] px-8 py-3.5 rounded-[0.75rem] flex items-center justify-center gap-4 transition-all shadow-[0_1px_2px_rgba(0,0,0,.04),_0_4px_16px_rgba(0,0,0,.06)]">
                    <i className="fa-brands fa-google-play text-[28px] text-[#197DFF]"></i>
                    <div className="text-left">
                        <div className="text-[10px] font-medium text-[#ECEDEE]/60 uppercase tracking-[1px]">Get it on</div>
                        <div className="text-[16px] font-semibold leading-none mt-1">Google Play</div>
                    </div>
                </a>
            </div>
        </div>
    </section>
);

// --- SECTION 10: FOOTER COMPONENT ---
const Footer = () => (
    <footer className="bg-[#030911] border-t border-[#313131] pt-16 md:pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 mb-16 md:mb-12">
                <div className="md:col-span-12 lg:col-span-5 mb-8 lg:mb-0">
                    <Link to="/" className="block mb-6">
                        <img src="/assets/images/Lavaa logo white.png" alt="Laava Logo" className="h-[60px] md:h-[80px] object-contain" />
                    </Link>
                    <p className="text-[14px] text-[#ECEDEE]/70 tracking-[-0.011em] mb-6">Smarter Decisions, Profitable Research</p>
                    
                    <div className="bg-[#1E2021] border border-[#313131] p-4 rounded-[0.75rem] inline-block shadow-sm">
                        <p className="text-[12px] text-[#ECEDEE]/50 font-medium uppercase tracking-[1px] mb-1">SEBI Registered Research Analyst</p>
                        <p className="text-[14px] text-[#ECEDEE] font-medium tabular-nums">INH000023171</p>
                    </div>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-[12px] font-semibold text-[#ECEDEE] mb-6 uppercase tracking-[1px]">Policy Links</h4>
                    <ul className="space-y-3">
                        <li><a href="/disclaimer" className="text-[14px] text-[#ECEDEE]/70 hover:text-[#197DFF] transition-colors tracking-[-0.011em]">Disclaimer</a></li>
                        <li><a href="/terms-of-use" className="text-[14px] text-[#ECEDEE]/70 hover:text-[#197DFF] transition-colors tracking-[-0.011em]">Terms of Use</a></li>
                        <li><a href="/privacy-policy" className="text-[14px] text-[#ECEDEE]/70 hover:text-[#197DFF] transition-colors tracking-[-0.011em]">Privacy Policy</a></li>
                        <li><a href="/cookies" className="text-[14px] text-[#ECEDEE]/70 hover:text-[#197DFF] transition-colors tracking-[-0.011em]">Cookies Policy</a></li>
                    </ul>
                </div>

                <div className="md:col-span-4">
                    <h4 className="text-[12px] font-semibold text-[#ECEDEE] mb-6 uppercase tracking-[1px]">Regulatory Documents</h4>
                    <ul className="space-y-3 mb-8">
                        <li><a href="/assets/pdf/InverstorCharter/Investor_Charter_Sep_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#ECEDEE]/70 hover:text-[#197DFF] transition-colors tracking-[-0.011em]">Investor Charter</a></li>
                        <li><a href="/assets/pdf/MITC/MITC_Sep_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[#ECEDEE]/70 hover:text-[#197DFF] transition-colors tracking-[-0.011em]">MITC</a></li>
                        <li><a href="/investorgrievance" className="text-[14px] text-[#ECEDEE]/70 hover:text-[#197DFF] transition-colors tracking-[-0.011em]">Investor Grievance</a></li>
                    </ul>


                </div>
            </div>
            
            <div className="border-t border-[#313131] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[12px] text-[#ECEDEE]/50 tracking-[-0.011em]">
                    Copyright © {new Date().getFullYear()} <Link to="/" className="hover:text-[#197DFF] transition-colors">Laava</Link>. 
                    <a href="https://greycats.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-[#197DFF] transition-colors ml-1">Powered By Greycats Tech</a>.
                </p>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/share/1At6RJDhK6/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E2021] border border-[#313131] flex items-center justify-center text-[#ECEDEE]/70 hover:bg-[#197DFF] hover:text-white hover:border-[#197DFF] transition-all"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/laava_fintech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E2021] border border-[#313131] flex items-center justify-center text-[#ECEDEE]/70 hover:bg-[#197DFF] hover:text-white hover:border-[#197DFF] transition-all"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </footer>
);

// --- LANDING PAGE COMPONENT ---
const LandingPage = () => {
    const canvasRef = useRef(null);

    // 3D Canvas Background Animation Hook with Performance Optimization
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height, animationId;
        let isVisible = true;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            width = canvas.width;
            height = canvas.height;
        };

        // Pause animation when section is out of view
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0.1 }
        );
        
        const heroSection = document.getElementById('hero-section');
        if (heroSection) observer.observe(heroSection);

        window.addEventListener('resize', resize);
        resize();

        let time = 0;
        const waves = [
            {
                color: 'rgba(25, 125, 255, 0.4)', fillTop: 'rgba(25, 125, 255, 0.25)', fillBottom: 'rgba(3, 9, 17, 1)',
                baseY: 0.65, amplitude: 180, frequency: 0.001, speed: 0.0006, offset: 0
            },
            {
                color: 'rgba(34, 167, 86, 0.7)', fillTop: 'rgba(34, 167, 86, 0.2)', fillBottom: 'rgba(3, 9, 17, 1)',
                baseY: 0.78, amplitude: 140, frequency: 0.0015, speed: 0.0009, offset: 2000
            },
            {
                color: 'rgba(11, 108, 244, 1)', fillTop: 'rgba(11, 108, 244, 0.35)', fillBottom: 'rgba(3, 9, 17, 1)',
                baseY: 0.90, amplitude: 120, frequency: 0.002, speed: 0.0012, offset: 5000
            }
        ];

        const getY = (x, wave, t) => {
            let y = height * wave.baseY;
            y += Math.sin(x * wave.frequency + t * wave.speed + wave.offset) * wave.amplitude;
            y += Math.sin(x * wave.frequency * 2.2 + t * wave.speed * 1.3 + wave.offset) * (wave.amplitude * 0.35);
            return y;
        };

        const animate = () => {
            if (!isVisible) {
                animationId = requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, width, height);
            time += 2;

            waves.forEach(wave => {
                let firstY = getY(0, wave, time);

                // Fill
                ctx.beginPath();
                ctx.moveTo(0, height);
                ctx.lineTo(0, firstY);
                for(let x = 0; x <= width; x += 5) { ctx.lineTo(x, getY(x, wave, time)); }
                ctx.lineTo(width, height);
                ctx.closePath();

                let gradient = ctx.createLinearGradient(0, (height * wave.baseY) - wave.amplitude, 0, height);
                gradient.addColorStop(0, wave.fillTop);
                gradient.addColorStop(1, wave.fillBottom);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Glow Edge
                ctx.beginPath();
                ctx.moveTo(0, firstY);
                for(let x = 0; x <= width; x += 5) { ctx.lineTo(x, getY(x, wave, time)); }
                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 4;
                ctx.shadowBlur = 25;
                ctx.shadowColor = wave.color;
                ctx.stroke();

                ctx.lineWidth = 1;
                ctx.shadowBlur = 10;
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.stroke();
                ctx.shadowBlur = 0; 

                // Pointer
                let pointerX = (time * 1.5 + wave.offset * 0.2) % (width + 200) - 100;
                if (pointerX > -20 && pointerX < width + 20) {
                    let pointerY = getY(pointerX, wave, time);
                    ctx.beginPath();
                    ctx.arc(pointerX, pointerY, 8, 0, Math.PI * 2);
                    ctx.strokeStyle = wave.color;
                    ctx.lineWidth = 2;
                    ctx.shadowBlur = 25;
                    ctx.shadowColor = wave.color;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(pointerX, pointerY, 4, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffffff';
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = '#ffffff';
                    ctx.fill();
                    ctx.shadowBlur = 0; 
                }
            });

            animationId = requestAnimationFrame(animate);
        };
        
        // Start loop
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <HeroSection canvasRef={canvasRef} />
            <TrustBanner />
            <FeaturesSection />
            <WhyLaava />
            <HowItWorksTeaser />
            <PricingTeaser />
            <FAQTeaser />
            <DownloadCTA />
        </>
    );
};

// --- ATMOSPHERIC BACKGROUND COMPONENT ---
const AtmosphericBackground = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Ambient Glows - Ultra Subtle */}
        <div className="absolute top-[10%] left-[-10%] w-[70%] h-[70%] bg-[#197DFF]/[0.03] rounded-full blur-[180px] animate-orb"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#22A756]/[0.02] rounded-full blur-[180px] animate-orb" style={{ animationDelay: '-5s' }}></div>
    </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Dynamic Script Loading for Smooth Scrolling
    useEffect(() => {
        let lenisInstance = null;
        let rafId = null;

        const initLenis = () => {
            if (window.Lenis && !lenisInstance) {
                lenisInstance = new window.Lenis({
                    lerp: 0.1, // Gold standard for smoothness
                    smoothWheel: true,
                    direction: 'vertical',
                    gestureDirection: 'vertical',
                    smooth: true,
                    mouseMultiplier: 1,
                    smoothTouch: false,
                    touchMultiplier: 2,
                    infinite: false,
                });
                
                window.lenis = lenisInstance;

                const raf = (time) => {
                    lenisInstance.raf(time);
                    rafId = requestAnimationFrame(raf);
                };
                rafId = requestAnimationFrame(raf);

                // Handle anchor clicks for smooth scrolling via Lenis
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) lenisInstance.scrollTo(target);
                    });
                });
            }
        };

        if (!window.Lenis && !document.getElementById('lenis-script')) {
            const script = document.createElement("script");
            script.id = "lenis-script";
            script.src = "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js";
            script.onload = initLenis;
            document.body.appendChild(script);
        } else {
            initLenis();
        }

        return () => {
            if (lenisInstance) {
                lenisInstance.destroy();
                lenisInstance = null;
            }
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return (
        <div className="font-['Inter',_sans-serif] text-[#ECEDEE] bg-[#030911] text-[14px] leading-[1.5] tracking-[-0.011em] min-h-screen flex flex-col smooth-container relative">
            <GlobalStyles />
            <AtmosphericBackground />
            <Navbar />
            <div className="flex-grow relative z-10">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/disclaimer" element={<div className="pt-24"><Disclaimer /></div>} />
                    <Route path="/terms-of-use" element={<div className="pt-24"><TermsOfUse /></div>} />
                    <Route path="/privacy-policy" element={<div className="pt-24"><PrivacyPolicy /></div>} />
                    <Route path="/cookies" element={<div className="pt-24"><CookiesPolicy /></div>} />
                    <Route path="/investorgrievance" element={<div className="pt-24"><Investordocs /></div>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/insights" element={<Insights />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

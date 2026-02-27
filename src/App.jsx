import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutFestival from "./components/aboutUs"
import RegisterModal from "./components/register"
import Sponsor from "./components/sponsor"
import WhyCome from "./components/whycome"
import Gallery from "./components/Gallery"
import TechTalks from "./components/TechTalks"
import Social from "./components/Social"
import { FaArrowUp } from "react-icons/fa";

export default function App() {
  const navItems = [
    { label: "Festival", links: [ { label: "Schedule", href: "#" }, { label: "Speakers", href: "#" }, { label: "Workshops", href: "#" } ] },
    { label: "Experience", links: [ { label: "Innovation Hub", href: "#" }, { label: "Gaming Zone", href: "#" }, { label: "VR Alley", href: "#" } ] },
    { label: "Join Us", links: [ { label: "Register", href: "#" }, { label: "Sponsorship", href: "#" }, { label: "Volunteer", href: "#" } ] }
  ];

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRegisterOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] overflow-x-hidden selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <div className="noise-bg" />
      
      <Navbar 
        items={navItems} 
        onCtaClick={() => setIsRegisterOpen(true)}
      />

      <main>
        <Routes>
          <Route path="/" element={<Hero onRegisterClick={() => setIsRegisterOpen(true)} />} />
        </Routes>
        
        <AboutFestival />
        <WhyCome onRegisterClick={() => setIsRegisterOpen(true)} />
        <Gallery />
        <TechTalks />
        <Social />
        <Sponsor />
      </main>

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[var(--bg-main)] border border-[var(--stat-card-border)] shadow-xl text-[var(--text-muted)] hover:text-primary hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 ${showScroll ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </button>

    
      <footer className="py-12 px-6 bg-[var(--section-alt-bg)] border-t border-[var(--stat-card-border)] text-center transition-colors duration-500">
        <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-widest transition-colors duration-500">
          © 2026 Young Techies Festival • Built for the next generation.
        </p>
      </footer>
    </div>
  )
}
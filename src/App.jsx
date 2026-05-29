import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
const AboutFestival = lazy(() => import("./components/aboutUs"));
import RegisterModal from "./components/register"
import { FaArrowUp } from "react-icons/fa";

const WhyCome = lazy(() => import("./components/whycome"));
const Gallery = lazy(() => import("./components/Gallery"));
const TechTalks = lazy(() => import("./components/TechTalks"));
const Social = lazy(() => import("./components/Social"));
const Sponsor = lazy(() => import("./components/sponsor"));
const NewsletterSection = lazy(() => import("./components/NewsletterSection"));

const Volunteer = lazy(() => import("./pages/Volunteer"));
const Register = lazy(() => import("./pages/Register"));
const Sponsorship = lazy(() => import("./pages/Sponsorship"));
const Newsletter = lazy(() => import("./pages/newsletter"));
const Hackathon = lazy(() => import("./pages/hackathon"));

const Home = ({ onRegisterClick }) => (
  <>
    <Hero onRegisterClick={onRegisterClick} />
    <Suspense fallback={<div className="py-24" />}>
      <AboutFestival />
      <WhyCome onRegisterClick={onRegisterClick} />
      <Gallery />
      <TechTalks />
      <Social />
      <Sponsor />
      <NewsletterSection />
    </Suspense>
  </>
);

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const navItems = [
    { 
      label: "Festival", 
      links: [ 
        { label: "Schedule", href: "/#schedule" }, 
        { label: "Speakers", href: "/#speakers" }, 
        { label: "Hackathon", href: "/hackathon" }, 
        { label: "Workshops", href: "/#workshops" } 
      ] 
    },
    { 
      label: "Experience", 
      links: [ 
        { label: "3D Printing", href: "/#3d-printing" }, 
        { label: "Robotics", href: "/#robotics" }, 
        { label: "AI", href: "/#ai" } 
      ] 
    },
    { 
      label: "Join Us", 
      links: [ 
        { label: "Register", href: "/" }, 
        { label: "Sponsorship", href: "/sponsor" }, 
        { label: "Volunteer", href: "/volunteer" },
        { label: "Newsletter", href: "/newsletter" }
      ] 
    }
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
      // setShowing modal only if on home page and not volunteered yet? 
      // For now keeping original logic
      if (pathname === "/") {
        setIsRegisterOpen(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [pathname]);

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
        <Suspense fallback={<div className="min-h-screen grid place-items-center text-sm text-slate-500">Loading content…</div>}>
          <Routes>
            <Route path="/" element={<Home onRegisterClick={() => setIsRegisterOpen(true)} />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/volunteers" element={<Volunteer />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sponsor" element={<Sponsorship />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/hackathon" element={<Hackathon />} />
          </Routes>
        </Suspense>
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
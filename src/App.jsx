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

export default function App() {
  const navItems = [
    {
      label: "Festival",
      bgColor: "",
      textColor: "#000",
      links: [
        { label: "Schedule", href: "/schedule" },
        { label: "Speakers", href: "/speakers" },
        { label: "Workshops", href: "/workshops" }
      ]
    },
    {
      label: "Experience",
      bgColor: "",
      textColor: "#fff",
      links: [
        { label: "Innovation Hub", href: "/hub" },
        { label: "Gaming Zone", href: "/gaming" },
        { label: "VR Alley", href: "/vr" }
      ]
    },
    {
      label: "Join Us",
      bgColor: "",
      textColor: "#000",
      links: [
        { label: "Register", href: "/register" },
        { label: "Sponsorship", href: "/sponsor" },
        { label: "Volunteer", href: "/volunteer" }
      ]
    }
  ];

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    // Small delay to make it feel more natural and let the landing page load first
    const timer = setTimeout(() => {
      setIsRegisterOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-tech-dark overflow-x-hidden bg-mesh">
      <div className="noise-bg" />
      <Navbar 
        items={navItems} 
        buttonBgColor="" 
        buttonTextColor="#000" 
        baseColor="rgba(255, 255, 255, 0.05)"
        onCtaClick={() => setIsRegisterOpen(true)}
      />
      <Routes>
        <Route path="/" element={<Hero onRegisterClick={() => setIsRegisterOpen(true)} />} />
      </Routes>
      <AboutFestival/>
      <WhyCome onRegisterClick={() => setIsRegisterOpen(true)} />
      <Gallery />
      <TechTalks />
      <Social />
      <Sponsor/>
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </div>
  )
}
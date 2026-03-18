import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLaptopCode, FaRocket, FaTrophy, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hackathon = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.stagger-anim', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
      
      gsap.fromTo('.feature-card',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '.features-grid', start: 'top 85%' } }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: <FaLaptopCode size={32}/>, title: '48 Hours to Build', desc: 'Transform your idea into a working prototype alongside Africa\'s brightest young minds.' },
    { icon: <FaUsers size={32}/>, title: 'Expert Mentorship', desc: 'Get guidance from seasoned engineers from top tech companies throughout the event.' },
    { icon: <FaTrophy size={32}/>, title: 'Win Big', desc: 'Compete for cash prizes, internship opportunities, and continuous support for your project.' },
    { icon: <FaRocket size={32}/>, title: 'Launch Your Career', desc: 'The perfect stage to showcase your talent to recruiters and fast-track your journey.' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-(--bg-main)">
      {/* Background blobs */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-accent-pink/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center mb-20 mt-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 stagger-anim shadow-[0_0_20px_rgba(0,119,255,0.2)]">
            <FaLaptopCode size={28} />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight stagger-anim text-(--text-main)">
            The Ultimate <span className="bg-linear-to-r from-primary to-accent-pink bg-clip-text text-transparent">Hackathon</span>
          </h1>
          <p className="text-xl text-(--text-muted) max-w-2xl mx-auto mb-10 stagger-anim font-light leading-relaxed">
            Join innovative builders for a sleepless weekend of code, creativity, and career-changing opportunities. Do you have what it takes?
          </p>
          <div className="stagger-anim">
            <Link to="/register" className="inline-block px-10 py-5 rounded-full bg-primary hover:bg-secondary text-white font-bold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,119,255,0.4)] hover:shadow-[0_0_30px_rgba(0,119,255,0.6)] hover:-translate-y-1">
              Apply to Hack
            </Link>
          </div>
        </div>

        <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {features.map((item, idx) => (
            <div key={idx} className="feature-card glass-card p-10 rounded-[2rem] shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-(--bg-main) text-primary flex items-center justify-center mb-6 shadow-sm border border-(--stat-card-border)">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-(--text-main) mb-3">{item.title}</h3>
              <p className="text-(--text-muted) leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathon;

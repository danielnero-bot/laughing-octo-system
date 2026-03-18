import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            gsap.fromTo('.news-anim', 
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
            );
            observer.disconnect();
          }
        });
      }, { threshold: 0.2 });
      
      if (sectionRef.current) observer.observe(sectionRef.current);
      
      return () => observer.disconnect();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-[var(--section-alt-bg)] transition-colors duration-500">
      {/* Decorative elements */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-primary opacity-5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-pink opacity-5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-10 md:p-14 border-t border-(--glass-border) shadow-xl text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 news-anim opacity-0 shadow-[0_0_20px_rgba(0,119,255,0.1)]">
            <FaPaperPlane size={24} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 news-anim opacity-0 text-glow">
            Don't Miss Out
          </h2>
          
          <p className="text-lg text-(--text-muted) mb-8 max-w-2xl mx-auto news-anim opacity-0">
            Get the latest updates on speakers, workshops, and exclusive festival experiences straight to your inbox.
          </p>
          
          <Link 
            to="/newsletter" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-secondary text-white font-medium transition-all hover:shadow-[0_0_20px_rgba(0,119,255,0.4)] hover:-translate-y-1 news-anim opacity-0"
          >
            Subscribe to Our Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

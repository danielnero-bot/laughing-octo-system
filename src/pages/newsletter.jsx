import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaStar } from 'react-icons/fa';
import { supabase } from '../lib/supabase';

const Newsletter = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const successRef = useRef(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stagger-anim',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power3.out',
          delay: 0.2
        }
      );
      
      gsap.fromTo(
        '.bg-blob',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.5, duration: 2, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (status === 'success') {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        tl.to(formRef.current, { 
          opacity: 0, 
          scale: 0.95,
          duration: 0.4, 
          ease: 'power2.inOut',
          display: 'none' 
        });
        
        tl.set(successRef.current, { display: 'flex' });
        
        tl.fromTo('.success-icon', 
          { scale: 0, rotation: -90, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' }
        );
        
        tl.fromTo('.success-text', 
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
          "-=0.3"
        );
        
        tl.fromTo('.success-star',
          { scale: 0, opacity: 0, rotation: -180 },
          { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(2)' },
          "-=0.4"
        );
      }, containerRef);
      return () => ctx.revert();
    } else if (status === 'idle') {
      gsap.set(formRef.current, { opacity: 1, scale: 1, display: 'block' });
      gsap.set(successRef.current, { display: 'none', opacity: 0 });
    }
  }, [status]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!email) return;

  setStatus('loading');

  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) {
      if (error.code === '23505') {
        alert('This email is already subscribed.');
      } else {
        console.error(error);
        alert('Something went wrong. Try again.');
      }
      setStatus('idle');
      return;
    }

    setStatus('success');
    setEmail('');

    setTimeout(() => setStatus('idle'), 5000);

  } catch (err) {
    console.error(err);
    alert('Network error. Try again.');
    setStatus('idle');
  }
};

  return (
    <div ref={containerRef} className="min-h-[80vh] pt-32 pb-20 relative flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary opacity-20 rounded-full blur-[100px] bg-blob pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent-pink opacity-20 rounded-full blur-[120px] bg-blob pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Subtle noise pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] mix-blend-overlay pointer-events-none"></div>
          
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_30px_rgba(0,119,255,0.2)] mb-8 stagger-anim">
              <FaEnvelope size={32} />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl tracking-tight font-bold mb-6 stagger-anim text-glow">
              Stay in the Loop
            </h1>
            
            <p className="text-lg md:text-xl text-(--text-muted) mb-10 max-w-2xl mx-auto stagger-anim">
              Join thousands of tech enthusiasts. Get the latest festival updates, speaker announcements, and exclusive offers delivered straight to your inbox.
            </p>
            
            <div className="relative min-h-[160px]">
              <div ref={formRef} className="w-full">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto stagger-anim w-full relative">
                  <div className="relative group w-full">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-(--text-muted) group-focus-within:text-primary transition-colors">
                      <FaEnvelope size={18} />
                    </div>
                    
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-14 pr-[140px] md:pr-[150px] py-4 rounded-full bg-(--bg-main) border border-(--glass-border) text-(--text-main) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-inner"
                      disabled={status === 'loading'}
                    />
                    
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-5 md:px-7 rounded-full bg-primary hover:bg-secondary text-white font-medium transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,119,255,0.4)] active:scale-95 disabled:opacity-70 disabled:pointer-events-none disabled:active:scale-100 min-w-[120px]"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                    >
                      {status !== 'loading' ? (
                        <>
                          <span>Subscribe</span>
                          <FaPaperPlane className="text-xs hidden md:block" />
                        </>
                      ) : (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-sm text-(--text-muted) mt-5 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </div>

              {/* Success State */}
              <div 
                ref={successRef} 
                className="absolute inset-0 hidden flex-col items-center justify-center w-full pb-4"
              >
                <div className="relative">
                  <div className="success-icon w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)] mb-6">
                    <FaCheckCircle size={40} />
                  </div>
                  <FaStar className="success-star absolute -top-2 -right-4 text-accent-pink text-xl drop-shadow-[0_0_8px_rgba(212,0,255,0.6)]" />
                  <FaStar className="success-star absolute bottom-4 -left-6 text-primary text-2xl drop-shadow-[0_0_8px_rgba(0,119,255,0.6)]" />
                  <FaStar className="success-star absolute -top-4 -left-2 text-accent-yellow text-sm drop-shadow-[0_0_8px_rgba(255,184,0,0.6)]" />
                </div>
                
                <h3 className="success-text text-2xl md:text-3xl font-bold mb-2 text-glow text-green-500">
                  Welcome to the Club!
                </h3>
                <p className="success-text text-(--text-muted)">
                  You're officially on the list. Keep an eye on your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
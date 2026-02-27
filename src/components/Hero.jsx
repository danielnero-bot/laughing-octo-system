import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Countdown from './countdown';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onRegisterClick }) {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const countdownRef = useRef(null);
  const shapesRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── ENTRANCE TIMELINE ──
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo(title1Ref.current,
        { y: 80, opacity: 0, filter: 'blur(12px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.4 },
        0.2
      );
      tl.fromTo(title2Ref.current,
        { y: 60, opacity: 0, filter: 'blur(8px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2 },
        0.5
      );
      tl.fromTo(descRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        0.8
      );
      tl.fromTo(buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' },
        1.0
      );
      tl.fromTo(countdownRef.current,
        { y: 40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.4)' },
        0.6
      );

      // ── PARALLAX BACKGROUND on scroll ──
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── HERO CONTENT FADE OUT on scroll ──
      gsap.to('.hero-content', {
        y: -60,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── FLOATING BLOBS ──
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return;
        gsap.to(shape, {
          y: 'random(-50, 50)',
          x: 'random(-30, 30)',
          duration: 'random(5, 10)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.8,
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 pb-16 overflow-hidden bg-[var(--bg-main)] transition-colors duration-500"
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110 opacity-40 dark:opacity-60 transition-opacity duration-1000"
        style={{
          backgroundImage: "url('https://youngtechies.africa/wp-content/uploads/2025/11/IMG_9972.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          willChange: 'transform',
        }}
      />
      
      {/* Overlay to handle theme contrast better */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-main)] via-transparent to-[var(--bg-main)] opacity-80 transition-colors duration-500" />

      {/* Floating colour blobs */}
      <div
        ref={el => shapesRef.current[0] = el}
        className="absolute top-1/4 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none"
      />
      <div
        ref={el => shapesRef.current[1] = el}
        className="absolute bottom-1/4 -right-20 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent-pink/15 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none"
      />

      {/* Main content */}
      <div className="hero-content relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">

          {/* Left — text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-500/5 dark:bg-white/5 border border-slate-500/10 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              July 11· 2026
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-5 leading-tight tracking-tighter">
              <div ref={title1Ref} className="text-[var(--text-main)] transition-colors duration-500">YOUNG TECHIES<br className="hidden sm:block" /> FESTIVAL</div>
              <div ref={title2Ref} className="text-primary italic text-base sm:text-lg md:text-xl mt-2 font-medium">
                A bold celebration where young innovators shape the future.
              </div>
            </h1>

            <p
              ref={descRef}
              className="text-sm sm:text-base md:text-lg text-[var(--text-muted)] max-w-xl mx-auto md:mx-0 mb-8 font-light leading-relaxed transition-colors duration-500"
            >
              Join thousands of creators at the intersection of{' '}
              <span className="text-[var(--text-main)] font-medium">Code</span>,{' '}
              <span className="text-[var(--text-main)] font-medium">Design</span>, and{' '}
              <span className="text-[var(--text-main)] font-medium">Future Tech</span>.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                onClick={onRegisterClick}
                className="group relative px-7 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Get Your Ticket</span>
              </button>
              <button className="px-6 py-3.5 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white rounded-2xl text-sm sm:text-base bg-white dark:bg-white/5 shadow-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right — countdown */}
          <div ref={countdownRef} className="flex flex-col items-center md:items-end gap-4">
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold transition-colors duration-500">
              Festival Starts In
            </p>
            <Countdown targetDate="2026-07-11T09:00:00" />
          </div>
        </div>
      </div>
    </section>
  );
}
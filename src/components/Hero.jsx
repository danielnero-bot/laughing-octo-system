import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Countdown from './countdown';


export default function Hero() {
  const containerRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const shapesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.fromTo(title1Ref.current, 
        { y: 100, opacity: 0, rotateX: -45, filter: 'blur(10px)' }, 
        { y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)', duration: 1.5 }, 
        0.2
      );

      tl.fromTo(title2Ref.current, 
        { y: 100, opacity: 0, rotateX: -45, filter: 'blur(10px)' }, 
        { y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)', duration: 1.5 }, 
        0.4
      );

      tl.fromTo(descRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, 
        0.8
      );

      tl.fromTo(buttonsRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'back.out(1.7)' }, 
        1
      );

      // Float animation for background shapes
      shapesRef.current.forEach((shape, i) => {
        gsap.to(shape, {
          y: 'random(-40, 40)',
          x: 'random(-40, 40)',
          rotation: 'random(-20, 20)',
          duration: 'random(3, 10)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.5
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(6,6,23,0.45), rgba(6,6,23,0.5)), url('https://youngtechies.africa/wp-content/uploads/2025/11/IMG_9972.jpg')",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      {/* Background Decorative Elements */}
      <div 
        ref={el => shapesRef.current[0] = el}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none"
      />
      <div 
        ref={el => shapesRef.current[1] = el}
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accent-pink/15 rounded-full blur-[160px] pointer-events-none"
      />
      <div 
        ref={el => shapesRef.current[2] = el}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tighter">
              <div ref={title1Ref} className="text-white">YOUNG TECHIES FESTIVAL</div>
              <div ref={title2Ref} className="text-primary italic text-lg md:text-xl mt-1">A bold celebration where young innovators shape the future together.</div>
            </h1>

            <p
              ref={descRef}
              className="text-base md:text-lg text-slate-300 max-w-xl mx-auto md:mx-0 mb-8 font-light leading-relaxed"
            >
              Join thousands of creators at the intersection of <span className="text-white font-medium">Code</span>, <span className="text-white font-medium">Design</span>, and <span className="text-white font-medium">Future Tech</span>.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-2xl text-base shadow-lg hover:scale-105 active:scale-95 transition-transform">
                Get Your Ticket
              </button>
              <button className="px-6 py-3 border border-white/20 text-white rounded-lg text-base bg-white/3 hover:bg-white/6 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Countdown targetDate="2026-08-15T09:00:00" />
          </div>
        </div>
      </div>
      
     
    </section>
  );
}
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

export default function RegisterModal({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(false);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && !shouldRender) setShouldRender(true);
  }, [isOpen, shouldRender]);

  useEffect(() => {
    if (shouldRender) {
      if (isOpen) {
        const tl = gsap.timeline();
        gsap.set(overlayRef.current, { display: "flex", opacity: 0 });
        tl.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" }).fromTo(
          contentRef.current,
          { scale: 0.92, opacity: 0, y: 24 },
          { scale: 1, opacity: 1, y: 0, duration: 0.55, ease: "expo.out" },
          "-=0.2"
        );
      } else {
        const tl = gsap.timeline({ onComplete: () => setShouldRender(false) });
        tl.to(contentRef.current, { scale: 0.92, opacity: 0, y: 16, duration: 0.35, ease: "power2.in" }).to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" }, "-=0.15");
      }
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/40 dark:bg-black/70 backdrop-blur-sm p-0 sm:p-4 transition-colors duration-500"
      style={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={contentRef}
        className="relative w-full sm:max-w-lg md:max-w-xl bg-(--bg-main) border border-(--stat-card-border) rounded-t-[28px] sm:rounded-[32px] shadow-(--shadow-main) overflow-y-auto no-scrollbar sm:overflow-hidden max-h-[92dvh] sm:max-h-none transition-all duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-64 sm:h-64 bg-accent-pink/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="flex justify-center pt-3 pb-1 sm:hidden"><div className="w-10 h-1 rounded-full bg-slate-200 dark:bg-white/10" /></div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-(--text-muted) hover:text-(--text-main) hover:bg-slate-500/5 dark:hover:bg-white/5 rounded-full transition-all duration-300 z-10"
        >
          <IoClose size={22} />
        </button>
        <div className="relative px-6 py-8 sm:p-10 md:p-12">
          <div className="mb-7 sm:mb-10 text-center sm:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20 transition-colors duration-500">
              Open Selection • Edition 5.0
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-(--text-main) mb-3 leading-tight tracking-tight transition-colors duration-500">
              Become the <br />
              <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
                Face of the Festival
              </span>
            </h2>
            <p className="text-(--text-muted) text-base sm:text-lg font-light leading-relaxed transition-colors duration-500 max-w-md">
              We're looking for the next generation of tech leaders to represent our biggest edition yet. Ready to inspire?
            </p>
          </div>
          
          <div className="space-y-4">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqh3rovwfmaSu1iZlmiwyqFZyW7inyYkgDEOk_7tDMt8PBRg/viewform?fbzx=-2992123522595296044" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full py-4 px-6 bg-primary hover:bg-secondary text-white font-black text-sm sm:text-base uppercase tracking-widest rounded-2xl transition-all duration-300 transform active:scale-95 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/40"
            >
              Apply Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            
            <button 
              onClick={onClose}
              className="w-full py-4 px-6 border border-(--stat-card-border) text-(--text-main) font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-500/5 dark:hover:bg-white/5 transition-all duration-300"
            >
              Maybe later
            </button>
          </div>

          <p className="mt-8 text-center text-[10px] sm:text-xs text-(--text-muted) uppercase tracking-widest font-semibold transition-colors duration-500">
            Join the elite circle of African innovators.
          </p>
        </div>
      </div>
    </div>
  );
}


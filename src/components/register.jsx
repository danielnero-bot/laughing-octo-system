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
    <div ref={overlayRef} className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-slate-900/40 dark:bg-black/70 backdrop-blur-sm p-0 sm:p-4 transition-colors duration-500" style={{ opacity: 0 }} onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}>
      <div ref={contentRef} className="relative w-full sm:max-w-lg md:max-w-2xl bg-[var(--bg-main)] border border-[var(--stat-card-border)] rounded-t-[28px] sm:rounded-[32px] shadow-[var(--shadow-main)] overflow-y-auto sm:overflow-hidden max-h-[92dvh] sm:max-h-none transition-all duration-500" onClick={(e) => e.stopPropagation()}>
        <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-64 sm:h-64 bg-accent-pink/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="flex justify-center pt-3 pb-1 sm:hidden"><div className="w-10 h-1 rounded-full bg-slate-200 dark:bg-white/10" /></div>
        <button onClick={onClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-slate-500/5 dark:hover:bg-white/5 rounded-full transition-all duration-300 z-10">
          <IoClose size={22} />
        </button>
        <div className="relative px-6 py-8 sm:p-10 md:p-14">
          <div className="mb-7 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-main)] mb-3 leading-tight tracking-tight transition-colors duration-500">
              Ready for the <br /><span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">Next Wave?</span>
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg font-light leading-relaxed transition-colors duration-500">
              Join 500+ tech visionaries at the <span className="text-[var(--text-main)] font-bold transition-colors">Young Techies Festival 2026</span>.
            </p>
          </div>
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1 transition-colors">Full Name</label>
              <input type="text" placeholder="Ex: John Doe" className="w-full bg-[var(--section-alt-bg)] border border-[var(--stat-card-border)] rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-[var(--text-main)] text-sm sm:text-base placeholder:text-slate-400/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-[var(--bg-main)] transition-all duration-500" />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] ml-1 transition-colors">Email Address</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-[var(--section-alt-bg)] border border-[var(--stat-card-border)] rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-[var(--text-main)] text-sm sm:text-base placeholder:text-slate-400/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-[var(--bg-main)] transition-all duration-500" />
            </div>
            <button type="submit" className="group relative w-full mt-2 bg-gradient-to-r from-primary to-secondary text-white font-black py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.97] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-base sm:text-lg uppercase tracking-wider">Secure My Spot</span>
            </button>
          </form>
          <p className="mt-6 text-center text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-widest font-semibold transition-colors duration-500">Join the elite circle of African innovators.</p>
        </div>
      </div>
    </div>
  );
}

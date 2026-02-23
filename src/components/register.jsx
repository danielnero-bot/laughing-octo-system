import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

export default function RegisterModal({ isOpen, onClose }) {
  // Use a ref to track mount/unmount so we don't call setState inside an effect
  const [shouldRender, setShouldRender] = useState(false);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // Mount when isOpen flips true; unmount is handled by the animation onComplete
  useEffect(() => {
    if (isOpen && !shouldRender) {
      setShouldRender(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

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
        tl.to(contentRef.current, {
          scale: 0.92,
          opacity: 0,
          y: 16,
          duration: 0.35,
          ease: "power2.in",
        }).to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" }, "-=0.15");
      }
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md p-0 sm:p-4"
      style={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={contentRef}
        className="relative w-full sm:max-w-lg md:max-w-2xl bg-tech-dark/95 backdrop-blur-2xl border border-white/10 rounded-t-[28px] sm:rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)] overflow-y-auto sm:overflow-hidden max-h-[92dvh] sm:max-h-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative glows */}
        <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-64 sm:h-64 bg-accent-pink/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Drag handle — visible only on mobile */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-10"
        >
          <IoClose size={22} />
        </button>

        <div className="relative px-6 py-8 sm:p-10 md:p-14">
          {/* Header */}
          <div className="mb-7 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent mb-3 leading-tight">
              Ready for the{" "}
              <span className="bg-gradient-to-r from-primary via-accent-pink to-accent-yellow bg-clip-text">
                Next Wave?
              </span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg">
              Join 500+ tech visionaries at the Young Techies Festival 2026.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all duration-500"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all duration-500"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full mt-2 bg-gradient-to-r from-primary to-secondary text-white font-black py-4 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.97] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-base sm:text-lg uppercase tracking-wider">
                Register Now
              </span>
            </button>
          </form>

          <p className="mt-5 text-center text-[10px] sm:text-xs text-white/30 uppercase tracking-tight">
            Exclusive access to workshops, talks & networking zones.
          </p>
        </div>
      </div>
    </div>
  );
}

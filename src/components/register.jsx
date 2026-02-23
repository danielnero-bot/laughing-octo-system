import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

export default function RegisterModal({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (shouldRender) {
      if (isOpen) {
        // Animation In
        const tl = gsap.timeline();
        gsap.set(overlayRef.current, { display: "flex", opacity: 0 });
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        })
        .fromTo(contentRef.current, 
          { scale: 0.9, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "expo.out" },
          "-=0.2"
        );
      } else {
        // Animation Out
        const tl = gsap.timeline({
          onComplete: () => setShouldRender(false)
        });
        tl.to(contentRef.current, {
          scale: 0.9,
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.in"
        })
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        }, "-=0.2");
      }
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      style={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={contentRef}
        className="relative w-3xl max-w-3xl bg-tech-dark/90 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent-pink/20 rounded-full blur-[100px] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 z-10"
        >
          <IoClose size={24} />
        </button>

        <div className="relative p-10 md:p-14">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent mb-4 leading-tight">
              Ready for the <br/>
              <span className="bg-gradient-to-r from-primary via-accent-pink to-accent-yellow bg-clip-text">Next Wave?</span>
            </h2>
            <p className="text-white/60 text-lg">
              Join 500+ tech visionaries at the Young Techies Festival 2026.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all duration-500"
              />
            </div>

            <div className="space-y-2 group">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all duration-500"
              />
            </div>

            

            <button
              className="group relative w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white font-black py-5 rounded-2xl shadow-2xl overflow-hidden shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-lg uppercase tracking-wider">Register Now</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

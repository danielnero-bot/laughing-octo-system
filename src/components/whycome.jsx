import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: "🚀",
    title: "Launch Your Tech Journey",
    body: "Whether you're a total beginner or already coding, the festival meets you where you are and propels you further than you imagined.",
    color: "#0077FF",
    glow: "rgba(0,119,255,0.08)",
  },
  {
    icon: "🤝",
    title: "Network With Innovators",
    body: "Rub shoulders with founders, developers, designers, and students who share your passion. Your next co-founder might be in the room.",
    color: "#D400FF",
    glow: "rgba(212,0,255,0.08)",
  },
  {
    icon: "🏆",
    title: "Win Real Prizes",
    body: "Compete in live hackathons and robotics challenges for cash prizes, mentorship packages, and opportunities that follow you home.",
    color: "#FFB000",
    glow: "rgba(255,176,0,0.08)",
  },
  {
    icon: "🛠️",
    title: "Build Something Real",
    body: "Leave with a project you actually built — not a certificate. Every workshop ends with a working prototype in your hands.",
    color: "#00FF94",
    glow: "rgba(0,255,148,0.08)",
  },
  {
    icon: "🥽",
    title: "Experience Tomorrow Today",
    body: "Fly drones. Enter VR worlds. Talk to AI. Test AR prototypes. The innovations of 2035 are on the festival floor right now.",
    color: "#0045FF",
    glow: "rgba(0,69,255,0.08)",
  },
  {
    icon: "🌍",
    title: "Be Part of Africa's Story",
    body: "Young Techies Festival is proving that the next wave of world-changing technology is being built by African youth — and you're one of them.",
    color: "#FF6B35",
    glow: "rgba(255,107,53,0.08)",
  },
];

export default function WhyCome({ onRegisterClick }) {
  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const headingRef  = useRef(null);
  const subRef      = useRef(null);
  const quoteRef    = useRef(null);
  const ctaRef      = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ST = (trigger, extraStart = "top 90%") => ({ trigger, start: extraStart, once: true });
      gsap.fromTo(badgeRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: ST(badgeRef.current) });
      gsap.fromTo(headingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", scrollTrigger: ST(headingRef.current) });
      gsap.fromTo(subRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: ST(subRef.current) });
      gsap.fromTo(".wc-card", { y: 70, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: ".wc-grid", start: "top 92%", once: true } });
      gsap.fromTo(quoteRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", scrollTrigger: ST(quoteRef.current) });
      gsap.fromTo(ctaRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "back.out(1.4)", scrollTrigger: ST(ctaRef.current) });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-main)] text-[var(--text-main)] overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-500/5 dark:bg-white/5 border border-slate-500/10 dark:border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4 sm:mb-5 shadow-sm transition-colors">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            Why Attend
          </div>
          <h2 ref={headingRef} className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 text-[var(--text-main)] transition-colors duration-500">
            Don't Just Watch the Future. <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">Shape It.</span>
          </h2>
          <p ref={subRef} className="text-[var(--text-muted)] text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-500">
            One day. Six reasons you can't afford to miss the Young Techies Festival 2026.
          </p>
        </div>

        <div className="wc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20">
          {reasons.map((r) => (
            <div key={r.title} className="wc-card group relative flex flex-col gap-5 p-8 rounded-[2.5rem] bg-[var(--bg-main)] border border-[var(--stat-card-border)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 overflow-hidden" 
                 onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 24px 48px -12px ${r.glow}`} onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-slate-500/5 dark:bg-white/5" style={{ borderColor: `${r.color}20`, borderWidth: '1px' }}>{r.icon}</div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-primary transition-colors duration-300">{r.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light transition-colors duration-500">{r.body}</p>
              </div>
              <div className="mt-auto h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full" style={{ background: `linear-gradient(to right, ${r.color}, transparent)` }} />
            </div>
          ))}
        </div>

        <div ref={quoteRef} className="relative mb-20 sm:mb-28 mx-auto max-w-4xl text-center px-4">
          <span className="text-6xl sm:text-8xl text-slate-500/10 font-black leading-none select-none">"</span>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-[var(--text-main)] leading-snug -mt-8 mb-4 transition-colors duration-500">
            Every kid who walks through those doors walks out thinking differently about what they can build with technology.
          </p>
          <span className="text-sm text-[var(--text-muted)] uppercase tracking-widest font-semibold transition-colors duration-500">— Miss Chidinma Umumna</span>
        </div>

        <div ref={ctaRef} className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14 rounded-[3rem] bg-[var(--color-tech-dark)] dark:bg-white/5 text-white shadow-2xl overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-pink/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="relative text-center lg:text-left">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3">Limited Spots Available</p>
            <h3 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">Ready to build the future?<br className="hidden sm:block" /> Secure your spot today.</h3>
            <p className="text-slate-400 text-lg font-light max-w-xl">Join West Africa's boldest gathering of young builders and thinkers.</p>
          </div>
          <button onClick={onRegisterClick} className="group relative flex-shrink-0 px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl shadow-xl shadow-primary/25 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden text-sm uppercase tracking-wider">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Register Now — It's Free</span>
          </button>
        </div>
      </div>
    </section>
  );
}
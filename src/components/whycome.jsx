import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: "🚀",
    title: "Launch Your Tech Journey",
    body: "Whether you're a total beginner or already coding, the festival meets you where you are and propels you further than you imagined.",
    color: "#00D2FF",
    glow: "rgba(0,210,255,0.18)",
  },
  {
    icon: "🤝",
    title: "Network With Innovators",
    body: "Rub shoulders with founders, developers, designers, and students who share your passion. Your next co-founder might be in the room.",
    color: "#FF00E5",
    glow: "rgba(255,0,229,0.18)",
  },
  {
    icon: "🏆",
    title: "Win Real Prizes",
    body: "Compete in live hackathons and robotics challenges for cash prizes, mentorship packages, and opportunities that follow you home.",
    color: "#FFFB00",
    glow: "rgba(255,251,0,0.18)",
  },
  {
    icon: "🛠️",
    title: "Build Something Real",
    body: "Leave with a project you actually built — not a certificate. Every workshop ends with a working prototype in your hands.",
    color: "#00FF94",
    glow: "rgba(0,255,148,0.18)",
  },
  {
    icon: "🥽",
    title: "Experience Tomorrow Today",
    body: "Fly drones. Enter VR worlds. Talk to AI. Test AR prototypes. The innovations of 2035 are on the festival floor right now.",
    color: "#0045FF",
    glow: "rgba(0,69,255,0.18)",
  },
  {
    icon: "🌍",
    title: "Be Part of Africa's Story",
    body: "Young Techies Festival is proving that the next wave of world-changing technology is being built by African youth — and you're one of them.",
    color: "#FF6B35",
    glow: "rgba(255,107,53,0.18)",
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

      const ST = (trigger, extraStart = "top 90%") => ({
        trigger,
        start: extraStart,
        once: true,
      });

      // Badge
      gsap.fromTo(badgeRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: ST(badgeRef.current) }
      );

      // Heading
      gsap.fromTo(headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", scrollTrigger: ST(headingRef.current) }
      );

      // Sub-text
      gsap.fromTo(subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: ST(subRef.current) }
      );

      // Reason cards — use refs target on the section itself so trigger is reliable
      gsap.fromTo(".wc-card",
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: "expo.out",
          scrollTrigger: { trigger: ".wc-grid", start: "top 92%", once: true },
        }
      );

      // Pull-quote fade (removed clipPath — not needed, fade+slide is more reliable)
      gsap.fromTo(quoteRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", scrollTrigger: ST(quoteRef.current) }
      );

      // CTA strip
      gsap.fromTo(ctaRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "back.out(1.4)", scrollTrigger: ST(ctaRef.current) }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-tech-dark text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/6 rounded-full blur-[180px]" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center mb-14 sm:mb-20">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-yellow mb-4 sm:mb-5"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-yellow animate-pulse" />
            Why Attend
          </div>

          <h2
            ref={headingRef}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4"
          >
            Don't Just Watch the Future.{" "}
            <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
              Shape It.
            </span>
          </h2>

          <p
            ref={subRef}
            className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto"
          >
            One day. Six reasons you can't afford to miss the Young Techies Festival 2026.
          </p>
        </div>

        {/* ── REASONS GRID ── */}
        <div className="wc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-28">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="wc-card group relative flex flex-col gap-4 p-6 sm:p-7 rounded-3xl border border-white/8 bg-white/3 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 24px 48px -12px ${r.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-70 transition-opacity duration-700"
                style={{ background: r.glow }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl text-2xl sm:text-3xl flex-shrink-0"
                style={{ background: `${r.color}18`, border: `1px solid ${r.color}30` }}
              >
                {r.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                  {r.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {r.body}
                </p>
              </div>

              {/* Accent line */}
              <div
                className="mt-auto h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                style={{ background: `linear-gradient(to right, ${r.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* ── PULL QUOTE ── */}
        <div
          ref={quoteRef}
          className="relative mb-20 sm:mb-28 mx-auto max-w-4xl text-center px-4"
        >
          <span className="text-6xl sm:text-8xl text-white/5 font-black leading-none select-none">"</span>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-white/90 leading-snug -mt-8 mb-4">
            Every kid who walks through those doors walks out thinking differently about what they can build with technology.
          </p>
          <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
            — Miss Chidinma Umuna
          </span>
        </div>

        {/* ── CTA STRIP ── */}
        <div
          ref={ctaRef}
          className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-8 sm:py-10 rounded-3xl border border-white/10 bg-white/3 overflow-hidden backdrop-blur-sm"
        >
          {/* Strip glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent-pink/10 pointer-events-none" />

          <div className="relative text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Limited Spots Available</p>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Secure your place at<br className="hidden sm:block" /> Africa's boldest tech event.
            </h3>
          </div>

          <button
            onClick={onRegisterClick}
            className="group relative flex-shrink-0 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-black rounded-2xl shadow-2xl shadow-primary/25 hover:shadow-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden text-sm sm:text-base uppercase tracking-wide"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-pink to-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Register Now — It's Free</span>
          </button>
        </div>

      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
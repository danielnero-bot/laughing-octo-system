import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: "⚡",
    tag: "WORKSHOPS",
    title: "Hands-On Labs",
    description:
      "Get your hands dirty with real tools — build robots, wire circuits, code apps, and create with AI under guidance from industry experts.",
    items: ["Robotics & IoT", "AI Prototyping", "Web & App Dev", "3D Printing"],
    color: "#00D2FF",
    glow: "rgba(0, 210, 255, 0.2)",
  },
  {
    icon: "🎤",
    tag: "TECH TALKS",
    title: "Inspiring Speakers",
    description:
      "Hear from Africa's brightest tech minds, founders, and innovators who started exactly where you are — and built something extraordinary.",
    items: ["Keynote Sessions", "Startup Stories", "Career Pathways", "Future Tech"],
    color: "#FF00E5",
    glow: "rgba(255, 0, 229, 0.2)",
  },
  {
    icon: "🏆",
    tag: "CHALLENGES",
    title: "Competitions",
    description:
      "Put your skills to the test in live challenges. Compete, collaborate, and showcase your creativity to win amazing prizes and recognition.",
    items: ["Hackathon", "Robotics Race" ],
    color: "#FFFB00",
    glow: "rgba(255, 251, 0, 0.2)",
  },
  {
    icon: "🥽",
    tag: "EXPERIENCES",
    title: "Immersive Zones",
    description:
      "Step into the future with VR worlds, AR demos, drone flights, and cutting-edge technology experiences you won't find anywhere else.",
    items: ["VR / AR Alley" , "Gaming Arena", "Innovation Hub"],
    color: "#0045FF",
    glow: "rgba(0, 69, 255, 0.2)",
  },
];

export default function AboutFestival() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const catHeadRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── ABOUT: badge + heading reveal ──
      gsap.from(".about-badge", {
        y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
      });

      gsap.from(".about-heading", {
        y: 60, opacity: 0, duration: 1.1, ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.from(".about-body", {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".about-body", start: "top 85%" },
      });

      // ── STAT CARDS staggered slide-up ──
      gsap.from(".stat-card", {
        y: 50, opacity: 0, scale: 0.95, duration: 0.7,
        stagger: 0.1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".stat-card", start: "top 88%" },
      });

      // ── VIDEO embed slide in from right ──
      gsap.fromTo(videoRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: videoRef.current, start: "top 82%" },
        }
      );

      // ── CATEGORIES heading ──
      gsap.fromTo(catHeadRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: catHeadRef.current, start: "top 85%" },
        }
      );

      // ── CATEGORY CARDS staggered from bottom ──
      gsap.from(".cat-card", {
        y: 90, opacity: 0, duration: 0.85, stagger: 0.1, ease: "expo.out",
        scrollTrigger: { trigger: ".categories-grid", start: "top 85%" },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ─── ABOUT SECTION ─── */}
      <section
        ref={sectionRef}
        className="relative py-28 px-6 bg-tech-dark text-white overflow-hidden"
      >
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="about-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About the Festival
            </div>

            <h2 className="about-heading text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              Empowering The{" "}
              <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
                Next Generation
              </span>{" "}
              of Innovators
            </h2>

            <p className="about-body text-lg text-slate-400 mb-6 leading-relaxed">
              Young Techies Festival is an annual one-day experience designed to expose,
              inspire and equip young minds{" "}
              <span className="text-white font-medium">(ages 8–17)</span> with future-ready
              technology skills.
            </p>

            <p className="about-body text-lg text-slate-400 mb-10 leading-relaxed">
              From hands-on Robotics and IoT to immersive Virtual & Augmented Reality,
              participants gain first-hand experience with real tools shaping the future
              workforce.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Young Innovators" },
                { value: "1 Day", label: "Immersive Experience" },
                { value: "20+", label: "Expert Speakers" },
                { value: "10+", label: "Tech Zones" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card glass-card rounded-2xl p-5"
                >
                  <h3 className="text-3xl font-black text-primary mb-1">{stat.value}</h3>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL — YouTube Embed */}
          <div ref={videoRef} className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/kUT6PHYWsrk?si=53VO4DdYJQFVMC8F"
              title="Young Techies Festival"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES SECTION ─── */}
      <section className="relative py-28 px-6 bg-tech-dark text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-secondary/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <div ref={catHeadRef} className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-yellow mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
              What's Inside
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
              Built for{" "}
              <span className="bg-gradient-to-r from-accent-yellow via-accent-pink to-primary bg-clip-text text-transparent">
                Every Explorer
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Four worlds of discovery — pick your passion and dive in.
            </p>
          </div>

          {/* Cards grid */}
          <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.tag}
                className="cat-card group relative flex flex-col gap-5 p-7 rounded-3xl border border-white/8 bg-white/3 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ boxShadow: `0 0 0 0 ${cat.glow}` }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 24px 48px -12px ${cat.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 0 ${cat.glow}`;
                }}
              >
                {/* Glow blob */}
                <div
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                  style={{ background: cat.glow }}
                />

                {/* Icon + tag */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{cat.icon}</span>
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      background: `${cat.color}22`,
                      color: cat.color,
                      border: `1px solid ${cat.color}44`,
                    }}
                  >
                    {cat.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white leading-tight">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {cat.description}
                </p>

                {/* Item pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-semibold px-3 py-1.5 rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
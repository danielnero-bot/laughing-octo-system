import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const talks = [
  {
    tag: "Keynote",
    tagColor: "#00D2FF",
    title: "AI & The African Child: Building the Next Billion-Dollar Idea",
    excerpt: "How young Africans are uniquely positioned to lead the global AI revolution — and the mindset shifts needed to get there.",
    speaker: "Opening Keynote",
    icon: "🤖",
  },
  {
    tag: "Workshop",
    tagColor: "#00FF94",
    title: "Your First App in 60 Minutes",
    excerpt: "A live, guided session where every attendee builds and ships a real mobile app — no prior code experience required.",
    speaker: "Hands-On Lab",
    icon: "📱",
  },
  {
    tag: "Panel",
    tagColor: "#FFFB00",
    title: "From School Desk to Startup Founder: Real Stories",
    excerpt: "Four founders who started exactly where you are share the defining moments, failures, and breakthroughs that shaped their path.",
    speaker: "Founder Panel",
    icon: "🎤",
  },
  {
    tag: "Trend",
    tagColor: "#FF6B35",
    title: "Drones, Robotics & the Hardware Revolution",
    excerpt: "Physical tech is back — an exploration of how robotics and drone technology are creating new industries across Africa.",
    speaker: "Innovation Stage",
    icon: "🚁",
  },
  {
    tag: "Workshop",
    tagColor: "#0045FF",
    title: "Cybersecurity: Protect Yourself & Build a Career",
    excerpt: "Learn how hackers think, basic defence skills, and why cybersecurity is one of the fastest-growing career paths on the continent.",
    speaker: "Skills Lab",
    icon: "🛡️",
  },
];

const trends = [
  { label: "Artificial Intelligence", icon: "🤖", color: "#00D2FF" },
  { label: "Robotics & IoT", icon: "⚙️", color: "#00FF94" },
  { label: "Cybersecurity", icon: "🛡️", color: "#FFFB00" },
  { label: "AR & VR", icon: "🥽", color: "#FF6B35" },
  { label: "App Development", icon: "📱", color: "#0045FF" },
  { label: "Cloud Computing", icon: "☁️", color: "#00D2FF" },
  { label: "Data Science", icon: "📊", color: "#FF00E5" },
];

export default function TechTalks() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const trendsRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: headRef.current, start: "top 88%", once: true } }
      );

      gsap.fromTo(".talk-card",
        { y: 60, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.09, ease: "expo.out",
          scrollTrigger: { trigger: ".talks-grid", start: "top 90%", once: true } }
      );

      gsap.fromTo(trendsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: trendsRef.current, start: "top 88%", once: true } }
      );

      gsap.fromTo(".trend-pill",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.4)",
          scrollTrigger: { trigger: trendsRef.current, start: "top 85%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-tech-dark text-white overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-pink/6 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[160px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-pink mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-pink animate-pulse" />
            Talks & Trends
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            Sessions That{" "}
            <span className="bg-gradient-to-r from-accent-pink to-primary bg-clip-text text-transparent">
              Change Minds
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-xl mx-auto">
            A curated programme of keynotes, workshops, and trend-setter panels designed to spark your next big idea.
          </p>
        </div>

        {/* Talk cards */}
        <div className="talks-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-20">
          {talks.map((talk) => (
            <div
              key={talk.title}
              className="talk-card group relative flex flex-col gap-4 p-6 rounded-3xl border border-white/8 bg-white/3 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              {/* Tag */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    background: `${talk.tagColor}18`,
                    color: talk.tagColor,
                    border: `1px solid ${talk.tagColor}35`,
                  }}
                >
                  {talk.tag}
                </span>
                <span className="text-2xl">{talk.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-black text-white leading-snug group-hover:text-primary transition-colors duration-300">
                {talk.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {talk.excerpt}
              </p>

              {/* Speaker/Type */}
              <div className="flex items-center gap-2 mt-auto pt-3 border-t border-white/6">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: talk.tagColor }} />
                <span className="text-[11px] uppercase tracking-widest font-semibold text-white/40">
                  {talk.speaker}
                </span>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(to right, ${talk.tagColor}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Trending Topics */}
        <div ref={trendsRef} className="text-center">
          <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-6">
            Topics Covered at the Festival
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trends.map((t) => (
              <div
                key={t.label}
                className="trend-pill group flex items-center gap-2 px-4 py-2 rounded-full border bg-white/3 hover:bg-white/8 transition-all duration-300 cursor-default"
                style={{ borderColor: `${t.color}30` }}
              >
                <span className="text-base">{t.icon}</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: t.color }}
                >
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

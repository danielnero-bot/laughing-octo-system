import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const talks = [
  { tag: "Keynote", tagColor: "#0077FF", title: "AI & The African Child: Building the Next Billion-Dollar Idea", excerpt: "How young Africans are uniquely positioned to lead the global AI revolution — and the mindset shifts needed to get there.", speaker: "Opening Keynote", icon: "🤖" },
  { tag: "Workshop", tagColor: "#00FF94", title: "Your First App in 60 Minutes", excerpt: "A live, guided session where every attendee builds and ships a real mobile app — no prior code experience required.", speaker: "Hands-On Lab", icon: "📱" },
  { tag: "Panel", tagColor: "#D400FF", title: "From School Desk to Startup Founder: Real Stories", excerpt: "Four founders who started exactly where you are share the defining moments, failures, and breakthroughs that shaped their path.", speaker: "Founder Panel", icon: "🎤" },
  { tag: "Trend", tagColor: "#FF6B35", title: "Drones, Robotics & the Hardware Revolution", excerpt: "Physical tech is back — an exploration of how robotics and drone technology are creating new industries across Africa.", speaker: "Innovation Stage", icon: "🚁" },
  { tag: "Workshop", tagColor: "#0045FF", title: "Cybersecurity: Protect Yourself & Build a Career", excerpt: "Learn how hackers think, basic defence skills, and why cybersecurity is one of the fastest-growing career paths on the continent.", speaker: "Skills Lab", icon: "🛡️" },
];

const trends = [
  { label: "Artificial Intelligence", icon: "🤖", color: "#0077FF" },
  { label: "Robotics & IoT", icon: "⚙️", color: "#00B2FF" },
  { label: "Cybersecurity", icon: "🛡️", color: "#0045FF" },
  { label: "AR & VR", icon: "🥽", color: "#D400FF" },
  { label: "App Development", icon: "📱", color: "#00FF94" },
  { label: "Cloud Computing", icon: "☁️", color: "#0077FF" },
  { label: "Data Science", icon: "📊", color: "#FF6B35" },
];

export default function TechTalks() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const trendsRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: headRef.current, start: "top 88%", once: true } });
      gsap.fromTo(".talk-card", { y: 60, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.09, ease: "expo.out", scrollTrigger: { trigger: ".talks-grid", start: "top 90%", once: true } });
      gsap.fromTo(trendsRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: trendsRef.current, start: "top 88%", once: true } });
      gsap.fromTo(".trend-pill", { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.4)", scrollTrigger: { trigger: trendsRef.current, start: "top 85%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[var(--section-alt-bg)] overflow-hidden border-y border-[var(--stat-card-border)] transition-colors duration-500">
      <div className="relative max-w-7xl mx-auto">
        <div ref={headRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--bg-main)] border border-[var(--stat-card-border)] text-[10px] sm:text-xs font-bold uppercase tracking-widest text-secondary mb-4 shadow-sm transition-colors">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-pulse" />
            Talks & Trends
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 text-[var(--text-main)] transition-colors duration-500">
            Sessions That <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Change Minds</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto font-light leading-relaxed transition-colors duration-500">
            A curated programme of keynotes, workshops, and trend-setter panels designed to spark your next big idea.
          </p>
        </div>

        <div className="talks-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {talks.map((talk) => (
            <div key={talk.title} className="talk-card group relative flex flex-col gap-5 p-8 rounded-[2.5rem] bg-[var(--bg-main)] border border-[var(--stat-card-border)] shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${talk.tagColor}10`, color: talk.tagColor, border: `1px solid ${talk.tagColor}25` }}>{talk.tag}</span>
                <span className="text-3xl">{talk.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-primary transition-colors duration-500 leading-tight">{talk.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light flex-1 transition-colors duration-500">{talk.excerpt}</p>
              <div className="flex items-center gap-2 mt-auto pt-4 border-t border-[var(--stat-card-border)] transition-colors duration-500">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: talk.tagColor }} />
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[var(--text-muted)] transition-colors duration-500">{talk.speaker}</span>
              </div>
            </div>
          ))}
        </div>

        <div ref={trendsRef} className="text-center">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-8 transition-colors duration-500">Topics Covered at the Festival</p>
          <div className="flex flex-wrap justify-center gap-3">
            {trends.map((t) => (
              <div key={t.label} className="trend-pill group flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--stat-card-border)] bg-[var(--bg-main)] shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-default" style={{ borderColor: `${t.color}20` }}>
                <span className="text-lg">{t.icon}</span>
                <span className="text-sm font-semibold text-[var(--text-main)] group-hover:text-primary transition-colors duration-500">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

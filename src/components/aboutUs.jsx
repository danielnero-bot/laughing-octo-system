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
    color: "#0077FF",
    glow: "rgba(0, 119, 255, 0.1)",
  },
  {
    icon: "🎤",
    tag: "TECH TALKS",
    title: "Inspiring Speakers",
    description:
      "Hear from Africa's brightest tech minds, founders, and innovators who started exactly where you are — and built something extraordinary.",
    items: ["Keynote Sessions", "Startup Stories", "Career Pathways", "Future Tech"],
    color: "#D400FF",
    glow: "rgba(212, 0, 255, 0.1)",
  },
  {
    icon: "🏆",
    tag: "CHALLENGES",
    title: "Competitions",
    description:
      "Put your skills to the test in live challenges. Compete, collaborate, and showcase your creativity to win amazing prizes and recognition.",
    items: ["Hackathon", "Robotics Race" ],
    color: "#FFB000",
    glow: "rgba(255, 176, 0, 0.1)",
  },
  {
    icon: "🥽",
    tag: "EXPERIENCES",
    title: "Immersive Zones",
    description:
      "Step into the future with VR worlds, AR demos, drone flights, and cutting-edge technology experiences you won't find anywhere else.",
    items: ["VR / AR Alley" , "Gaming Arena", "Innovation Hub"],
    color: "#0045FF",
    glow: "rgba(0, 69, 255, 0.1)",
  },
];

export default function AboutFestival() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const catHeadRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // reveal animations...
      gsap.from(".about-badge", {
        y: 20, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
      });
      gsap.from(".about-heading", {
        y: 60, opacity: 0, duration: 1.1, ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      gsap.from(".about-body", {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".about-body", start: "top 85%", once: true },
      });
      gsap.from(".stat-card", {
        y: 50, opacity: 0, scale: 0.95, duration: 0.7,
        stagger: 0.1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".stat-card", start: "top 88%", once: true },
      });
      gsap.fromTo(videoRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: videoRef.current, start: "top 82%", once: true },
        }
      );
      gsap.fromTo(catHeadRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: catHeadRef.current, start: "top 85%", once: true },
        }
      );
      gsap.from(".cat-card", {
        y: 70, opacity: 0, duration: 0.85, stagger: 0.1, ease: "expo.out",
        scrollTrigger: { trigger: ".categories-grid", start: "top 85%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[var(--bg-main)] transition-colors duration-500">
      <section ref={sectionRef} className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="about-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              About the Festival
            </div>
            <h2 className="about-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-[var(--text-main)] transition-colors duration-500">
              The Hub of <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Young Innovation.
              </span>
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <p className="about-body text-lg text-[var(--text-muted)] leading-relaxed font-light transition-colors duration-500">
                Now in its 4th year, the <span className="text-[var(--text-main)] font-bold transition-colors">Young Techies Festival</span> is West Africa’s premier stage for the next generation of builders.
              </p>
              <p className="about-body text-lg text-[var(--text-muted)] leading-relaxed font-light transition-colors duration-500">
                From <span className="text-secondary font-semibold">Web3 to Robotics</span>, we bring the world’s most exciting tech directly to the curious minds of today.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-12">
              {[
                { label: "Attendees", val: "5,000+" },
                { label: "Workshops", val: "24+" },
                { label: "Speakers", val: "15+" },
                { label: "Prizes", val: "₦2.5M" },
              ].map((s, i) => (
                <div key={i} className="stat-card p-5 sm:p-6 rounded-3xl bg-[var(--stat-card-bg)] border border-[var(--stat-card-border)] shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="text-2xl sm:text-3xl font-black text-primary mb-1">{s.val}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold transition-colors duration-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div ref={videoRef} className="flex-1 w-full lg:w-auto relative px-2">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-[var(--stat-card-border)] transition-all duration-500">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/kUT6PHYWsrk" title="YTF Highlights" frameBorder="0" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[var(--section-alt-bg)] overflow-hidden border-t border-[var(--stat-card-border)] transition-colors duration-500">
        <div className="relative max-w-7xl mx-auto">
          <div ref={catHeadRef} className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--stat-card-border)] text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-5 shadow-sm transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              What's Inside
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-[var(--text-main)] transition-colors duration-500">
              Built for <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">Every Explorer</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto font-light leading-relaxed transition-colors duration-500">
              Four worlds of discovery — pick your passion and dive into the future.
            </p>
          </div>
          <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((cat) => (
              <div key={cat.tag} className="cat-card group relative flex flex-col gap-6 p-8 rounded-[2.5rem] bg-[var(--bg-main)] border border-[var(--stat-card-border)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-slate-500/5 dark:bg-white/5" style={{ borderColor: `${cat.color}20`, borderWidth: '1px' }}>{cat.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${cat.color}15`, color: cat.color, border: `1px solid ${cat.color}30` }}>{cat.tag}</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-primary transition-colors duration-500">{cat.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed font-light transition-colors duration-500">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map((item) => (
                    <span key={item} className="text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-[var(--section-alt-bg)] border border-[var(--stat-card-border)] text-[var(--text-muted)] transition-colors duration-500">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
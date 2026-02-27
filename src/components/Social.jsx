import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { platform: "Instagram", handle: "@youngtechiesafrica", href: "https://www.instagram.com/youngtechiesafrica", Icon: FaInstagram, color: "#E1306C", glow: "rgba(225,48,108,0.12)", desc: "Behind-the-scenes, highlights & reels from every festival.", followers: "1K+" },
  { platform: "TikTok", handle: "@codeambassadors", href: "https://www.tiktok.com/@codeambassadors", Icon: FaTiktok, color: "#000000", glow: "rgba(0,0,0,0.08)", desc: "Short-form tech content, clips & trending moments.", followers: "1K+" },
  { platform: "X / Twitter", handle: "@codeambassadors", href: "https://x.com/codeambassadors", Icon: FaXTwitter, color: "#0F1419", glow: "rgba(15,20,25,0.08)", desc: "Live updates, tech threads & festival announcements.", followers: "100+" },
  { platform: "Facebook", handle: "Young Techies Africa", href: "https://www.facebook.com/youngtechiesafrica", Icon: FaFacebook, color: "#1877F2", glow: "rgba(24,119,242,0.12)", desc: "Community posts, event details & parent updates.", followers: "100+" },
  { platform: "LinkedIn", handle: "Code Ambassadors", href: "https://www.linkedin.com/company/codeambassadors", Icon: FaLinkedin, color: "#0A66C2", glow: "rgba(10,102,194,0.12)", desc: "Professional updates, partnership & impact stories.", followers: "600+" },
  { platform: "YouTube", handle: "Code Ambassadors", href: "https://www.youtube.com/@codeambassadors", Icon: FaYoutube, color: "#FF0000", glow: "rgba(255,0,0,0.12)", desc: "Full talk recordings, tutorials & festival replays.", followers: "300+" },
];

const hashtags = ["#YoungTechiesFestival", "#YTF2026", "#AfricaTech", "#FutureBuilders"];

export default function Social() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const hashRef    = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: headRef.current, start: "top 88%", once: true } });
      gsap.fromTo(".social-card", { y: 60, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: ".social-grid", start: "top 90%", once: true } });
      gsap.fromTo(".hashtag-pill", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.07, ease: "back.out(1.6)", scrollTrigger: { trigger: hashRef.current, start: "top 88%", once: true } });
      gsap.fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: ctaRef.current, start: "top 90%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-main)] overflow-hidden transition-colors duration-500">
      <div className="relative max-w-7xl mx-auto">
        <div ref={headRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-500/5 dark:bg-white/5 border border-slate-500/10 dark:border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-4 shadow-sm transition-colors">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            Join the Movement
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 text-[var(--text-main)] transition-colors duration-500">
            Connect With the <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto font-light leading-relaxed transition-colors duration-500">
            Stay plugged in, share your journey, and see what others are building in real-time.
          </p>
        </div>

        <div className="social-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socials.map((s) => (
            <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className="social-card group relative flex flex-col gap-6 p-8 rounded-[2.5rem] bg-[var(--bg-main)] border border-[var(--stat-card-border)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/20 overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl shadow-sm bg-slate-500/5 dark:bg-white/5" style={{ background: `${s.color}10`, border: `1px solid ${s.color}20` }}>
                  <s.Icon size={24} style={{ color: s.color }} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--section-alt-bg)] text-[var(--text-muted)] border border-[var(--stat-card-border)] transition-colors duration-500">{s.followers}</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: s.color }}>{s.platform}</p>
                <p className="text-[var(--text-main)] font-black text-xl leading-tight transition-colors duration-500">{s.handle}</p>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light transition-colors duration-500">{s.desc}</p>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 group-hover:gap-3" style={{ color: s.color }}>
                Follow Now <span className="text-lg">→</span>
              </div>
            </a>
          ))}
        </div>

        <div ref={hashRef} className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold mb-6 transition-colors duration-500">Use the official hashtags</p>
          <div className="flex flex-wrap justify-center gap-3">
            {hashtags.map((tag) => (
              <span key={tag} className="hashtag-pill px-5 py-2.5 rounded-full bg-[var(--section-alt-bg)] border border-[var(--stat-card-border)] text-[var(--text-main)] font-bold text-sm hover:bg-[var(--bg-main)] hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default shadow-sm">{tag}</span>
            ))}
          </div>
        </div>

        <div ref={ctaRef} className="relative text-center p-12 lg:p-16 rounded-[3rem] bg-[var(--color-tech-dark)] text-white overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent-pink/10 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">One Community.<br /> Infinite Possibilities.</h3>
            <p className="text-slate-400 text-lg font-light mb-10 max-w-xl mx-auto">Follow us across all platforms — get early access to speaker reveals and ticket drops.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {socials.slice(0, 4).map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 hover:bg-white/5" style={{ borderColor: `${s.color}40`, color: s.color }}>
                  <s.Icon size={18} />
                  <span className="text-sm font-bold">{s.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
  {
    platform: "Instagram",
    handle: "@youngtechiesafrica",
    href: "https://www.instagram.com/youngtechiesafrica",
    Icon: FaInstagram,
    color: "#E1306C",
    glow: "rgba(225,48,108,0.18)",
    desc: "Behind-the-scenes, highlights & reels from every festival.",
    followers: "1K+",
  },
  {
    platform: "TikTok",
    handle: "@youngtechiesafrica",
    href: "https://www.tiktok.com/@codeambassadors",
    Icon: FaTiktok,
    color: "#69C9D0",
    glow: "rgba(105,201,208,0.18)",
    desc: "Short-form tech content, clips & trending moments.",
    followers: "1K+",
  },
  {
    platform: "X / Twitter",
    handle: "@YoungTechiesAfrica",
    href: "https://x.com/codeambassadors",
    Icon: FaXTwitter,
    color: "#fff",
    glow: "rgba(255,255,255,0.12)",
    desc: "Live updates, tech threads & festival announcements.",
    followers: "100+",
  },
  {
    platform: "Facebook",
    handle: "Young Techies Africa",
    href: "https://www.facebook.com/youngtechiesafrica",
    Icon: FaFacebook,
    color: "#1877F2",
    glow: "rgba(24,119,242,0.18)",
    desc: "Community posts, event details & parent updates.",
    followers: "100+",
  },
  {
    platform: "LinkedIn",
    handle: "Young Techies Africa",
    href: "https://www.linkedin.com/company/codeambassadors",
    Icon: FaLinkedin,
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.18)",
    desc: "Professional updates, partnership & impact stories.",
    followers: "600+",
  },
  {
    platform: "YouTube",
    handle: "Young Techies Africa",
    href: "https://www.youtube.com/@codeambassadors",
    Icon: FaYoutube,
    color: "#FF0000",
    glow: "rgba(255,0,0,0.18)",
    desc: "Full talk recordings, tutorials & festival replays.",
    followers: "300+",
  },
];

const hashtags = ["#YoungTechiesFestival", "#YTF2026", "#AfricaTech", "#FutureBuilders", "#TechYouth"];

export default function Social() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const hashRef    = useRef(null);
  const ctaRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: headRef.current, start: "top 88%", once: true } }
      );

      gsap.fromTo(".social-card",
        { y: 60, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.08, ease: "expo.out",
          scrollTrigger: { trigger: ".social-grid", start: "top 90%", once: true } }
      );

      gsap.fromTo(".hashtag-pill",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.07, ease: "back.out(1.6)",
          scrollTrigger: { trigger: hashRef.current, start: "top 88%", once: true } }
      );

      gsap.fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "expo.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%", once: true } }
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/6 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[160px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-pink mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-pink animate-pulse" />
            Follow the Movement
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            Join the{" "}
            <span className="bg-gradient-to-r from-accent-pink to-primary bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-xl mx-auto">
            Stay connected, share your story, and be part of Africa's fastest-growing tech youth movement.
          </p>
        </div>

        {/* Social cards */}
        <div className="social-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card group relative flex flex-col gap-4 p-6 rounded-3xl border border-white/8 bg-white/3 hover:border-white/20 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px -12px ${s.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-[50px] opacity-0 group-hover:opacity-60 transition-opacity duration-600"
                style={{ background: s.glow }}
              />

              {/* Icon row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-2xl"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                >
                  <s.Icon size={22} style={{ color: s.color }} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-white/40">
                  {s.followers} followers
                </span>
              </div>

              {/* Platform + handle */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: s.color }}>
                  {s.platform}
                </p>
                <p className="text-white font-black text-base">{s.handle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{s.desc}</p>

              {/* Follow CTA */}
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-3" style={{ color: s.color }}>
                Follow Now
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Bottom line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: `linear-gradient(to right, ${s.color}, transparent)` }}
              />
            </a>
          ))}
        </div>

        {/* Hashtag wall */}
        <div ref={hashRef} className="text-center mb-14 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-5">
            Use the hashtag & be featured
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="hashtag-pill px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-black text-sm hover:bg-white/10 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Big CTA */}
        <div
          ref={ctaRef}
          className="relative text-center px-6 py-12 sm:py-16 rounded-3xl border border-white/10 bg-white/3 overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/8 via-transparent to-primary/8 pointer-events-none" />
          <div className="relative">
            <p className="text-xs uppercase tracking-widest text-accent-pink font-bold mb-3">
              The Movement is Live
            </p>
            <h3 className="text-2xl sm:text-4xl font-black text-white mb-3 leading-tight">
              50,000+ Young Techies.<br className="hidden sm:block" /> One Community.
            </h3>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Follow us across all platforms — get first access to announcements, speaker reveals, and ticket drops.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {socials.slice(0, 4).map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: `${s.color}40`,
                    background: `${s.color}10`,
                    color: s.color,
                  }}
                >
                  <s.Icon size={16} />
                  <span className="text-xs font-bold">{s.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

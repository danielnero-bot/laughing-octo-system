import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import KeepingItRealFoundation from "../assets/Keeping-It-Real-Foundation-scaled-e1684861858536-1024x471-removebg-preview.png";
import CESA from "../assets/CESA-LOGO-removebg-preview.png";
import Ntel from "../assets/Ntel_logo-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const sponsors = [
  { name: "Brain Friend", src: "https://www.brainfriendonline.com/assets/images/logo-326x113.png" },
  { name: "Code Ambassadors", src: "https://youngtechies.africa/wp-content/uploads/2023/05/CA-logo.png" },
  { name: "Keeping It Real Foundation", src: KeepingItRealFoundation },
  { name: "Techrity", src: "https://cdn.prod.website-files.com/66914dea96fe01e4984af914/66914dea96fe01e4984af99c_Techrity.png" },
  { name: "Ntel ", src: Ntel },
  { name: "CESA", src: CESA },
  { name: "Market Square", src: "https://www.marketsquareng.com/img/MSlogowhite.e9a4d282.png" },
  { name: "Rio Foundation", src: "https://riofoundation.org/wp-content/uploads/2023/10/logo-rio-trans.webp" },
];

const track = [...sponsors, ...sponsors];

export default function Sponsor() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const trackRef = useRef(null);
  const dividerTopRef = useRef(null);
  const dividerBotRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([dividerTopRef.current, dividerBotRef.current], { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 1.2, ease: 'expo.out', stagger: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true } });
      gsap.fromTo(headerRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true } });
      gsap.fromTo(trackRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: trackRef.current, start: 'top 90%', once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[var(--section-alt-bg)] text-[var(--text-main)] overflow-hidden border-y border-[var(--stat-card-border)] transition-colors duration-500">
      <div ref={dividerTopRef} className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--stat-card-border)] to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[800px] h-[200px] sm:h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--bg-main)] border border-[var(--stat-card-border)] text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-4 sm:mb-5 shadow-sm transition-colors">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            Our Partners
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 sm:mb-3 text-[var(--text-main)] transition-colors duration-500">
            Backed by <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">Incredible Sponsors</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm sm:text-lg max-w-xl mx-auto px-4 font-light transition-colors duration-500">
            Empowering the next generation with the help of visionaries from across the globe.
          </p>
        </div>

        <div ref={trackRef} className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-r from-[var(--section-alt-bg)] to-transparent pointer-events-none transition-colors duration-500" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 z-10 bg-gradient-to-l from-[var(--section-alt-bg)] to-transparent pointer-events-none transition-colors duration-500" />

          <div className="flex gap-4 sm:gap-10 w-max" style={{ animation: "marquee 28s linear infinite" }}>
            {track.map((sponsor, i) => (
              <div key={i} className="group flex-shrink-0 flex items-center justify-center w-28 h-16 sm:w-44 sm:h-24 rounded-xl sm:rounded-3xl bg-[var(--bg-main)] border border-[var(--stat-card-border)] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-500 px-3 sm:px-5 overflow-hidden">
                <img src={sponsor.src} alt={sponsor.name} className="max-w-full max-h-full object-contain brightness-[0.8] dark:brightness-100 dark:hover:brightness-110 group-hover:brightness-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={dividerBotRef} className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--stat-card-border)] to-transparent" />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
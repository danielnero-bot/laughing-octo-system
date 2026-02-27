import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src: "https://youngtechies.africa/wp-content/uploads/2025/11/IMG_9972.jpg", alt: "Festival atmosphere", span: "col-span-2 row-span-2" },
  { src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png", alt: "Hands-on workshop", span: "" },
  { src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png", alt: "Robotics session", span: "" },
  { src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png", alt: "Tech demo", span: "col-span-2" },
  { src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png", alt: "Innovators at work", span: "" },
  { src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png", alt: "Collaboration", span: "" },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: headRef.current, start: "top 88%", once: true } });
      gsap.fromTo(".gallery-item", { y: 60, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.85, stagger: 0.1, ease: "expo.out", scrollTrigger: { trigger: ".gallery-grid", start: "top 90%", once: true } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[var(--bg-main)] overflow-hidden transition-colors duration-500">
      <div className="relative max-w-7xl mx-auto">
        <div ref={headRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-500/5 dark:bg-white/5 border border-slate-500/10 dark:border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-4 shadow-sm transition-colors">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            The Festival In Pictures
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 text-[var(--text-main)] transition-colors duration-500">
            See the <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">Magic</span> We Create
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors duration-500">
            A glimpse into the energy, creativity, and innovation from previous festivals.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[250px] gap-4 sm:gap-6">
          {photos.map((photo, i) => (
            <div key={i} className={`gallery-item group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[var(--section-alt-bg)] border border-[var(--stat-card-border)] shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${photo.span}`}>
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onError={(e) => { e.target.parentNode.style.background = "var(--stat-card-bg)"; e.target.style.display = "none"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold uppercase tracking-widest text-white shadow-xl">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <a href="https://www.instagram.com/youngtechiesafrica" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-[var(--stat-card-border)] text-[var(--text-muted)] hover:text-primary hover:border-primary/30 text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-md bg-[var(--bg-main)]">
            Explore More on Instagram
            <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

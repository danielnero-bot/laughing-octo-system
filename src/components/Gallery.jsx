import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  {
    src: "https://youngtechies.africa/wp-content/uploads/2025/11/IMG_9972.jpg",
    alt: "Festival atmosphere",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png",
    alt: "Hands-on workshop",
    span: "",
  },
  {
    src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png",
    alt: "Robotics session",
    span: "",
  },
  {
    src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png",
    alt: "Tech demo",
    span: "col-span-2",
  },
  {
    src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png",
    alt: "Innovators at work",
    span: "",
  },
  {
    src: "https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png",
    alt: "Collaboration",
    span: "",
  },
];

export default function Gallery() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "expo.out",
          scrollTrigger: { trigger: headRef.current, start: "top 88%", once: true } }
      );

      gsap.fromTo(".gallery-item",
        { y: 60, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85, stagger: 0.1, ease: "expo.out",
          scrollTrigger: { trigger: ".gallery-grid", start: "top 90%", once: true } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-tech-dark text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
            The Festival In Pictures
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            See the{" "}
            <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
              Magic
            </span>{" "}
            We Create
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg max-w-xl mx-auto">
            A glimpse into the energy, creativity, and innovation from previous festivals.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`gallery-item group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/8 hover:border-white/25 transition-all duration-500 ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.parentNode.style.background = "rgba(255,255,255,0.04)";
                  e.target.style.display = "none";
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <a
            href="https://www.instagram.com/youngtechiesafrica"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 text-sm font-semibold transition-all duration-300"
          >
            View full gallery on Instagram
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}

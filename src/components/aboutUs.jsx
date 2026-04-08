import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechFest from "../assets/techfest.jpeg"
import Hackathon from "../assets/hackathon.jpeg"
import Exhibition from "../assets/exhibition.jpeg"

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Workshops",
    backgroundImage: 'https://youngtechies.africa/wp-content/uploads/2023/04/ARM_4723-1.png',
    color: "#0077FF",
    glow: "rgba(0, 119, 255, 0.1)",
  },
  {
    title: "Tech Talks",
    backgroundImage: TechFest,
    color: "#D400FF",
    glow: "rgba(212, 0, 255, 0.1)",
  },
  {
    title: "Hackathon",
    backgroundImage: Hackathon,
    color: "#FFB000",
    glow: "rgba(255, 176, 0, 0.1)",
  },
  {
    title: "Exhibitions",
    backgroundImage: Exhibition,
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
    <div className="bg-(--bg-main) transition-colors duration-500">
      <section id="workshops" ref={sectionRef} className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="about-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest text-primary mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              About the Festival
            </div>
            <h2 className="about-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-(--text-main) transition-colors duration-500">
              The Hub of <br />
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Young Innovation.
              </span>
            </h2>
            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <p className="about-body text-lg text-(--text-muted) leading-relaxed font-light transition-colors duration-500">
                <span className="text-(--text-main) font-bold transition-colors">Young Techies Festival</span> is an annual festival to provide a platform for young minds (age 8-17 years) to be exposed, inspired and equipped with tech skills that will mobilize them for the future workforce. 
              </p>
              <p className="about-body text-lg text-(--text-muted) leading-relaxed font-light transition-colors duration-500">
                From <span className="text-secondary font-semibold">Robotics and AI to Virtual Reality and IOT</span>, we put  the world’s most exciting technologiesin the hands of the curiousminds of today.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-12">
              {[
                { label: "Attendees", val: "5,000+" },
                { label: "Workshops", val: "24+" },
                { label: "Speakers", val: "15+" },
                { label: "Prizes", val: "₦2.5M" },
              ].map((s, i) => (
                <div key={i} className="stat-card p-5 sm:p-6 rounded-3xl bg-(--stat-card-bg) border border-(--stat-card-border) shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
                  <div className="text-2xl sm:text-3xl font-black text-primary mb-1">{s.val}</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-(--text-muted) font-bold transition-colors duration-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div ref={videoRef} className="flex-1 w-full lg:w-auto relative px-2">
            <div className="relative aspect-video rounded-4xl overflow-hidden shadow-2xl ring-8 ring-(--stat-card-border) transition-all duration-500">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6mWJ-HDuFXg?si=Mh8eIOTneTt1hyHG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-(--section-alt-bg) overflow-hidden border-t border-(--stat-card-border) transition-colors duration-500">
        <div className="relative max-w-7xl mx-auto">
          <div ref={catHeadRef} className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--bg-main) border border-(--stat-card-border) text-[10px] font-bold uppercase tracking-widest text-(--text-muted) mb-5 shadow-sm transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              What's Inside
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-(--text-main) transition-colors duration-500">
              Built for <br className="sm:hidden" />
              <span className="bg-linear-to-r from-primary to-accent-pink bg-clip-text text-transparent">Every Explorer</span>
            </h2>
            <p className="text-(--text-muted) text-lg max-w-xl mx-auto font-light leading-relaxed transition-colors duration-500">
              Four worlds of discovery — pick your passion and dive into the future.
            </p>
          </div>
          <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((cat) => (
              <div 
                key={cat.title} 
                className="cat-card group relative flex flex-col justify-end p-8 min-h-[300px] rounded-[2.5rem] border border-(--stat-card-border) transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 overflow-hidden"
              >
                {/* Background Image with Dark Overlay for readability */}
                <div 
                  className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${cat.backgroundImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }}
                />
                <div className="absolute inset-0 z-1 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <h3 className="relative z-10 text-xl font-bold text-white group-hover:text-primary transition-colors duration-500">
                  {cat.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
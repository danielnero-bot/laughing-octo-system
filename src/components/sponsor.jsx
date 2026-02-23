const sponsors = [
  {
    name: "Brain Friend",
    src: "https://www.brainfriendonline.com/assets/images/logo-326x113.png",
  },
  {
    name: "Code Ambassadors",
    src: "https://youngtechies.africa/wp-content/uploads/2023/05/CA-logo.png",
  },
  {
    name: "Keeping It Real Foundation",
    src: "https://youngtechies.africa/wp-content/uploads/2023/05/Keeping-It-Real-Foundation-scaled-e1684861858536-1024x471.jpg",
  },
  {
    name: "Techrity",
    src: "https://cdn.prod.website-files.com/66914dea96fe01e4984af914/66914dea96fe01e4984af99c_Techrity.png",
  },
  {
    name: "Partner",
    src: "https://youngtechies.africa/wp-content/uploads/2023/05/download-1.png",
  },
  {
    name: "CESA",
    src: "https://youngtechies.africa/wp-content/uploads/2023/07/CESA-LOGO.jpg",
  },
  {
    name: "Market Square",
    src: "https://www.marketsquareng.com/img/MSlogowhite.e9a4d282.png",
  },
  {
    name: "Rio Foundation",
    src: "https://riofoundation.org/wp-content/uploads/2023/10/logo-rio-trans.webp",
  }
];

// Duplicate the list for seamless infinite scroll
const track = [...sponsors, ...sponsors];

export default function Sponsor() {
  return (
    <section className="relative py-24 px-6 bg-tech-dark text-white overflow-hidden">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
            Backed by{" "}
            <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
              Incredible Sponsors
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Without our partners, this event would not be possible. We are grateful for their support.
          </p>
        </div>

        {/* Marquee track */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-tech-dark to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-tech-dark to-transparent pointer-events-none" />

          <div
            className="flex gap-10 w-max"
            style={{
              animation: "marquee 30s linear infinite",
            }}
          >
            {track.map((sponsor, i) => (
              <div
                key={i}
                className="group flex-shrink-0 flex items-center justify-center w-44 h-24 rounded-2xl bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 px-5 overflow-hidden"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
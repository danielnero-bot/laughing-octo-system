import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TimeBox({ value, label, onRef }) {
  return (
    <div className="flex flex-col items-center bg-[var(--bg-main)] border border-[var(--stat-card-border)] rounded-xl px-3 py-3 sm:px-5 sm:py-4 min-w-[58px] sm:min-w-[78px] shadow-sm transition-colors duration-500">
      <span ref={onRef} className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--text-main)] leading-none tabular-nums transition-colors duration-500">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] sm:text-[10px] tracking-widest text-[var(--text-muted)] uppercase mt-1 font-bold transition-colors duration-500">
        {label}
      </span>
    </div>
  );
}

export default function Countdown({ targetDate }) {
  const defaultTarget = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString();
  })();

  const effectiveTarget = targetDate || defaultTarget;
  const wrapperRef = useRef(null);
  const numberRefs = useRef({});

  const calculateTimeLeft = useCallback(() => {
    const diff = new Date(effectiveTarget) - new Date();
    if (diff <= 0) return null;
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [effectiveTarget]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  useEffect(() => {
    if (!timeLeft) return;
    Object.values(numberRefs.current).forEach((el) => {
      if (!el) return;
      gsap.fromTo(el, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" });
    });
  }, [timeLeft]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wrapperRef.current, { y: 40, opacity: 0, scale: 0.96, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: wrapperRef.current, start: "top 90%", once: true } });
    });
    return () => ctx.revert();
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center text-[var(--text-main)] font-bold text-base sm:text-lg transition-colors duration-500">
        🎉 The Festival Has Started!
      </div>
    );
  }

  return (
    <div ref={wrapperRef} role="timer" aria-live="polite" aria-label="Festival countdown" className="flex gap-1.5 sm:gap-3 justify-center items-center flex-wrap">
      <TimeBox value={timeLeft.days}    label="Days"  onRef={(el) => { numberRefs.current["Days"]    = el; }} />
      <div className="w-px h-6 sm:h-8 bg-[var(--stat-card-border)] transition-colors duration-500" />
      <TimeBox value={timeLeft.hours}   label="Hours" onRef={(el) => { numberRefs.current["Hours"]   = el; }} />
      <div className="w-px h-6 sm:h-8 bg-[var(--stat-card-border)] transition-colors duration-500" />
      <TimeBox value={timeLeft.minutes} label="Mins"  onRef={(el) => { numberRefs.current["Mins"]    = el; }} />
      <div className="w-px h-6 sm:h-8 bg-[var(--stat-card-border)] transition-colors duration-500" />
      <TimeBox value={timeLeft.seconds} label="Secs"  onRef={(el) => { numberRefs.current["Secs"]    = el; }} />
    </div>
  );
}
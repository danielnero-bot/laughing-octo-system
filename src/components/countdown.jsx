import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Countdown({ targetDate }) {
  // Default: 30 days from now if no date provided
  const defaultTarget = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString();
  })();

  const effectiveTarget = targetDate || defaultTarget;

  const calculateTimeLeft = () => {
    const difference = new Date(effectiveTarget) - new Date();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const numberRefs = useRef({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [effectiveTarget]);

  // subtle pop animation on change
  useEffect(() => {
    if (!timeLeft) return;

    Object.values(numberRefs.current).forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    });
  }, [timeLeft]);

  if (!timeLeft) {
    return (
      <div className="text-center text-white font-bold text-lg">🎉 The Festival Has Started!</div>
    );
  }

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/6 backdrop-blur-md border border-white/8 rounded-xl px-5 py-4 min-w-[78px]">
      <span
        ref={(el) => (numberRefs.current[label] = el)}
        className="text-2xl md:text-3xl font-extrabold text-white leading-none"
        aria-hidden
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] tracking-widest text-slate-300 uppercase mt-1">{label}</span>
    </div>
  );

  return (
    <div role="timer" aria-live="polite" className="flex gap-3 justify-center items-center">
      <TimeBox value={timeLeft.days} label="Days" />
      <div className="w-px h-8 bg-white/10" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <div className="w-px h-8 bg-white/10" />
      <TimeBox value={timeLeft.minutes} label="Minutes" />
      <div className="w-px h-8 bg-white/10" />
      <TimeBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
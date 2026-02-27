import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



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

  const prevTimeLeft = useRef(timeLeft);

  useEffect(() => {
    if (!timeLeft) return;
    
    const changes = {
      Days:  timeLeft.days    !== prevTimeLeft.current?.days,
      Hours: timeLeft.hours   !== prevTimeLeft.current?.hours,
      Mins:  timeLeft.minutes !== prevTimeLeft.current?.minutes,
      Secs:  timeLeft.seconds !== prevTimeLeft.current?.seconds,
    };

    Object.entries(numberRefs.current).forEach(([key, el]) => {
      if (!el || !changes[key]) return;
      // Small animation for the changing number
      gsap.fromTo(el, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" });
    });

    prevTimeLeft.current = timeLeft;
  }, [timeLeft]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wrapperRef.current, { y: 40, opacity: 0, scale: 0.96, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: wrapperRef.current, start: "top 90%", once: true } });
    });
    return () => ctx.revert();
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center text-(--text-main) font-bold text-base sm:text-lg transition-colors duration-500">
        🎉 The Festival Has Started!
      </div>
    );
  }

  return (
    <div ref={wrapperRef} role="timer" aria-live="polite" aria-label="Festival Countdown" className="grid grid-flow-col gap-3 sm:gap-5 text-center auto-cols-max justify-center">
      <div className="flex flex-col items-center justify-center p-3 sm:p-5 glass-card rounded-2xl sm:rounded-3xl shadow-sm min-w-[70px] sm:min-w-[90px]">
        <span className="countdown font-mono text-3xl sm:text-5xl">
          <span ref={(el) => { numberRefs.current["Days"] = el; }} style={{ "--value": timeLeft.days }} aria-live="polite" aria-label={`${timeLeft.days} days`}>{timeLeft.days}</span>
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-(--text-muted) mt-1.5 sm:mt-2">days</span>
      </div>
      <div className="flex flex-col items-center justify-center p-3 sm:p-5 glass-card rounded-2xl sm:rounded-3xl shadow-sm min-w-[70px] sm:min-w-[90px]">
        <span className="countdown font-mono text-3xl sm:text-5xl">
          <span ref={(el) => { numberRefs.current["Hours"] = el; }} style={{ "--value": timeLeft.hours }} aria-live="polite" aria-label={`${timeLeft.hours} hours`}>{timeLeft.hours}</span>
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-(--text-muted) mt-1.5 sm:mt-2">hours</span>
      </div>
      <div className="flex flex-col items-center justify-center p-3 sm:p-5 glass-card rounded-2xl sm:rounded-3xl shadow-sm min-w-[70px] sm:min-w-[90px]">
        <span className="countdown font-mono text-3xl sm:text-5xl">
          <span ref={(el) => { numberRefs.current["Mins"] = el; }} style={{ "--value": timeLeft.minutes }} aria-live="polite" aria-label={`${timeLeft.minutes} minutes`}>{timeLeft.minutes}</span>
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-(--text-muted) mt-1.5 sm:mt-2">min</span>
      </div>
      <div className="flex flex-col items-center justify-center p-3 sm:p-5 glass-card rounded-2xl sm:rounded-3xl shadow-sm min-w-[70px] sm:min-w-[90px]">
        <span className="countdown font-mono text-3xl sm:text-5xl">
          <span ref={(el) => { numberRefs.current["Secs"] = el; }} style={{ "--value": timeLeft.seconds }} aria-live="polite" aria-label={`${timeLeft.seconds} seconds`}>{timeLeft.seconds}</span>
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-(--text-muted) mt-1.5 sm:mt-2">sec</span>
      </div>
    </div>
  );
}
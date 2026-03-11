import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHandshake, FaMedal, FaUsers, FaLaptopCode, FaRocket, FaClock, FaCheckCircle } from "react-icons/fa";
import { GoArrowRight, GoVerified } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const Volunteer = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const cardsRef = useRef([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        houseAddress: "",
        email: "",
        whatsapp: "",
        tshirtSize: "L"
    });

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(heroRef.current.querySelector("h1"), {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.2
            });
            gsap.from(heroRef.current.querySelector("p"), {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.4
            });
            gsap.from(heroRef.current.querySelector(".hero-buttons"), {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                delay: 0.6
            });

            // Cards Animation
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        },
                        y: 60,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: index * 0.1
                    });
                }
            });

            // Form Animation
            gsap.from(".volunteer-form", {
                scrollTrigger: {
                    trigger: ".volunteer-form",
                    start: "top 80%"
                },
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Volunteer Data Submitted:", formData);
        setIsSubmitted(true);
        window.scrollTo({ top: document.getElementById('apply-form').offsetTop - 100, behavior: 'smooth' });
    };

    const benefits = [
        { icon: <FaMedal />, title: "Exclusive Swag", desc: "Get your hands on limited edition festival gear and tech goodies." },
        { icon: <FaUsers />, title: "Networking", desc: "Connect with industry leaders, tech founders, and like-minded peers." },
        { icon: <FaRocket />, title: "Experience", desc: "Gain hands-on experience in organizing one of the largest tech festivals." },
    ];

    const roles = [
        { icon: <FaLaptopCode />, title: "Tech Assistant", desc: "Help with workshop setups, live demos, and technical troubleshooting." },
        { icon: <FaHandshake />, title: "Guest Support", desc: "Assisting speakers, VIPs, and ensuring an amazing experience for all attendees." },
        { icon: <FaClock />, title: "Operations", desc: "Manage event flow, registration desks, and logistical coordination." },
    ];

    return (
        <div ref={containerRef} className="pt-32 pb-20 selection:bg-primary/20 selection:text-primary transition-colors duration-500">
            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[40%] bg-accent-pink/10 rounded-full blur-[120px]" />
            </div>

            {/* Hero Section */}
            <section ref={heroRef} className="container mx-auto px-6 text-center mb-24 mt-12">
                <span className="inline-block py-1 px-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                    Join the Movement
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-[var(--text-main)] to-[var(--text-muted)]">
                    Shape the Future <br /> <span className="text-primary italic">Together.</span>
                </h1>
                <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed">
                    Be the engine behind the Young Techies Festival. Join our dream team and help us build an unforgettable experience for thousands of tech enthusiasts.
                </p>
                <div className="hero-buttons flex flex-wrap justify-center gap-4">
                    <button onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-secondary transition-all flex items-center gap-2 group shadow-xl shadow-primary/20">
                        Apply Now
                        <GoArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, idx) => (
                        <div 
                            key={idx} 
                            ref={el => cardsRef.current[idx] = el}
                            className="glass-card p-8 rounded-2xl border border-slate-200/50 dark:border-white/10 group hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

           

            {/* Application Form */}
            <section id="apply-form" className="container mx-auto px-6 max-w-4xl scroll-mt-32">
                <div className="volunteer-form glass-card p-10 md:p-16 rounded-[2.5rem] border border-slate-200/50 dark:border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                    
                    {!isSubmitted ? (
                        <>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-4">Volunteer Application</h2>
                                <p className="text-[var(--text-muted)]">Tell us about yourself.</p>
                            </div>
                            <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe" 
                                        className="w-full p-4 rounded-xl bg-slate-500/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 focus:border-primary/50 outline-none transition-all placeholder:opacity-30" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com" 
                                        className="w-full p-4 rounded-xl bg-slate-500/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 focus:border-primary/50 outline-none transition-all placeholder:opacity-30" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">House Address</label>
                                    <input 
                                        type="email" 
                                        name="houseAddress"
                                        required
                                        value={formData.houseAddress}
                                        onChange={handleChange}
                                        placeholder="123 Main Street, Lagos, Nigeria  " 
                                        className="w-full p-4 rounded-xl bg-slate-500/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 focus:border-primary/50 outline-none transition-all placeholder:opacity-30" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">WhatsApp Number</label>
                                    <input 
                                        type="tel" 
                                        name="whatsapp"
                                        required
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        placeholder="+234 800 000 0000" 
                                        className="w-full p-4 rounded-xl bg-slate-500/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 focus:border-primary/50 outline-none transition-all placeholder:opacity-30" 
                                    />
                                </div>
                               
                                
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">T-Shirt Size</label>
                                    <select 
                                        name="tshirtSize"
                                        value={formData.tshirtSize}
                                        onChange={handleChange}
                                        className="w-full p-4 appearance-none rounded-xl bg-slate-500/5 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 focus:border-primary/50 outline-none transition-all text-white
                                        "
                                    >
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                </div>
                                
                                <div className="md:col-span-2 flex justify-end mt-4">
                                    <button type="submit" className="px-10 py-4 rounded-xl bg-primary text-white font-bold hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group">
                                        Submit Application
                                        <GoVerified className="group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-5xl mx-auto mb-8">
                                <FaCheckCircle />
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Application Received!</h2>
                            <p className="text-[var(--text-muted)] text-lg mb-10 max-w-md mx-auto">
                                Thank you for applying, <span className="text-primary font-bold">{formData.fullName.split(' ')[0]}</span>. Our team will review your application and contact you via email or WhatsApp soon.
                            </p>
                            <button 
                                onClick={() => setIsSubmitted(false)}
                                className="px-8 py-3 rounded-xl border border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all"
                            >
                                Back to Roles
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Volunteer;
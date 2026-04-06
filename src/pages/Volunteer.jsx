import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHandshake, FaMedal, FaUsers, FaLaptopCode, FaRocket, FaClock, FaCheckCircle } from "react-icons/fa";
import { GoArrowRight, GoVerified } from "react-icons/go";
import { supabase } from "../lib/supabase";

gsap.registerPlugin(ScrollTrigger);

const Volunteer = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    houseAddress: "",
    email: "",
    whatsapp: "",
    gender: "",
    socialMedia: "",
    unit: "",
    tshirtSize: ""
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

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

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%"
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1
          });
        }
      });

      gsap.from(".volunteer-form", {
        scrollTrigger: {
          trigger: ".volunteer-form",
          start: "top 80%"
        },
        scale: 0.95,
        opacity: 0,
        duration: 1
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("volunteers")
      .insert([
        {
          full_name: formData.fullName,
          house_address: formData.houseAddress,
          email: formData.email,
          whatsapp: formData.whatsapp,
          gender: formData.gender,
          social_media: formData.socialMedia,
          unit: formData.unit,
          tshirt_size: formData.tshirtSize
        }
      ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      return;
    }

    setIsSubmitted(true);

    window.scrollTo({
      top: document.getElementById("apply-form").offsetTop - 100,
      behavior: "smooth"
    });
  };

  const benefits = [
    { icon: <FaMedal />, title: "Exclusive Swag", desc: "Get limited festival gear and tech goodies." },
    { icon: <FaUsers />, title: "Networking", desc: "Connect with founders and tech professionals." },
    { icon: <FaRocket />, title: "Experience", desc: "Gain real event organization experience." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20">

      {/* HERO */}
      <section ref={heroRef} className="container mx-auto px-6 text-center mb-24 mt-12">

        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Shape the Future <br />
          <span className="text-primary italic">Together.</span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-12">
          Join the Young Techies Festival volunteer team and help us create an amazing experience.
        </p>

        <div className="hero-buttons flex items-center justify-center gap-6">
          <button
            onClick={() =>
              document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-primary text-white rounded-xl flex items-center gap-2"
          >
            Apply Now
            <GoArrowRight />
          </button>
        </div>

      </section>

      {/* BENEFITS */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="text-primary text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="apply-form" className="container mx-auto px-6 max-w-4xl">

        <div className="volunteer-form p-10 rounded-3xl border">

          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Volunteer Application
              </h2>

              <form
                className="grid md:grid-cols-2 gap-8"
                onSubmit={handleSubmit}
              >

                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="p-4 rounded-xl border"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-4 rounded-xl border"
                />

                <input
                  type="text"
                  name="houseAddress"
                  required
                  placeholder="House Address"
                  value={formData.houseAddress}
                  onChange={handleChange}
                  className="p-4 rounded-xl border"
                />

                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="p-4 rounded-xl border bg-transparent"
                />
                
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="p-4 pr-10 rounded-xl border bg-transparent text-(--text-main) appearance-auto"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other / Prefer not to say</option>
                </select>

                <input
                  type="text"
                  name="socialMedia"
                  required
                  placeholder="Social Media (IG/X Handle)"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="p-4 rounded-xl border bg-transparent"
                />

                <select
                  name="unit"
                  required
                  value={formData.unit}
                  onChange={handleChange}
                  className="p-4 pr-10 rounded-xl border bg-transparent text-(--text-main) appearance-auto"
                >
                  <option value="">Preferred Volunteer Unit</option>
                  <option value="Media">Media</option>
                  <option value="Security">Security</option>
                  <option value="Registration">Registration</option>
                  <option value="Crowd Control">Crowd Control</option>
                  <option value="Protocol">Protocol</option>
                  <option value="Anywhere">I can fit anywhere</option>
                </select>

                <select
                  name="tshirtSize"
                  value={formData.tshirtSize}
                  onChange={handleChange}
                  className="p-4 pr-10 rounded-xl border bg-transparent text-(--text-main) appearance-auto"
                >
                  <option value="">T-Shirt Size</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>

                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-10 py-4 bg-primary text-white rounded-xl flex items-center gap-2"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                    <GoVerified />
                  </button>
                </div>

              </form>
            </>
          ) : (
            <div className="text-center py-20">
              <FaCheckCircle className="text-5xl text-primary mx-auto mb-6" />

              <h2 className="text-4xl font-bold mb-4">
                Application Received!
              </h2>

              <p>
                Thank you {formData.fullName.split(" ")[0]}.  
                Our team will contact you soon.
              </p>
            </div>
          )}

        </div>

      </section>

    </div>
  );
};

export default Volunteer;
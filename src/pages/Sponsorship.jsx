import React from "react";

const Sponsorship = () => {
  const email = "partnerships@youngtechies.africa";
  const phone = "+234-8165516117";
  const subject = "Young Techies Festival Sponsorship";
  const body =
    "Hello,\n\nI am interested in sponsoring the Young Techies Festival. Please share the sponsorship package and further details.\n\nThank you.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sponsor the Young Techies Festival
        </h1>

        <p className="text-lg text-gray-500 mb-10">
          Partner with us to inspire the next generation of innovators.
          Sponsoring the festival gives your brand visibility while supporting
          young tech talents across Africa.
        </p>

        <a
          href={mailtoLink}
          className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
        >
          Mail Us
        </a>
        <a
          href={whatsappLink}
          className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:opacity-90 transition"
        >
        Message Us on WhatsApp 
        </a>

      </div>
    </section>
  );
};

export default Sponsorship;
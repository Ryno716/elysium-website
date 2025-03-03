import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import trainers from "../components/data/trainersData.jsx";
import testimonials from "../components/data/testimonialsData";

const timelineData = [
  {
    year: "2015",
    title: "Founded in 2015",
    description:
      "Our journey began with a vision to create a sanctuary for show horses.",
    image: "/icons/founded.png",
  },
  {
    year: "2018",
    title: "Expanded in 2018",
    description:
      "We introduced advanced training programs and expanded our facilities.",
    image: "/icons/expansion.png",
  },
  {
    year: "Today",
    title: "Present Day",
    description:
      "We continue to provide top-tier boarding and training services for equestrians.",
    image: "/icons/today.png",
  },
];

function About() {
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (testimonials.length > 0) {
        const randomTestimonial =
          testimonials[Math.floor(Math.random() * testimonials.length)];

        setVisibleTestimonials((prev) => [
          ...prev,
          { ...randomTestimonial, id: Date.now() },
        ]);

        setTimeout(() => {
          setVisibleTestimonials((prev) => prev.slice(1)); // Remove the oldest after some time
        }, 5000);
      }
    }, 3000); // New testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center py-12 px-6"
      style={{
        backgroundImage: "url('/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(18, 18, 18, 0.95)", // Dark overlay
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-4xl w-full bg-[#1e1e1e] border-2 border-[#c79b53] shadow-xl rounded-xl p-8 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold text-[#c79b53] mb-6">
          About Elysium Equine
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Elysium Equine Ltd. is a premier equestrian boarding and training
          facility located in Langley, British Columbia. We provide top-tier
          care for show horses and offer specialized training programs tailored
          to each rider’s and horse’s needs.
        </p>

        {/* Interactive Timeline Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold text-[#c79b53] mb-6">
            Our Journey
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-5xl mx-auto"
          >
            {timelineData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#292929] border-2 border-[#c79b53] shadow-lg rounded-lg p-6 text-center mx-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-[#c79b53]">
                    {item.year}
                  </h3>
                  <p className="text-lg text-gray-300">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Meet Our Trainers Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#c79b53] mb-6">
            Meet Our Trainers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                className="bg-[#292929] border-2 border-[#c79b53] shadow-lg rounded-lg p-6 text-center w-full max-w-[250px] mx-auto hover:scale-105 transition transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer-img border-2 border-[#c79b53] mx-auto"
                />
                <h3 className="text-2xl font-semibold text-[#c79b53]">
                  {trainer.name}
                </h3>
                <p className="text-lg text-gray-300">{trainer.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Testimonials Section */}
        <div className="relative w-full h-60 mt-16 overflow-hidden">
          {visibleTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="absolute bg-[#292929] text-white border-2 border-[#c79b53] shadow-md rounded-xl px-6 py-4 text-center w-64"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              style={{
                left: `${Math.random() * 60 + 20}%`,
                top: `${Math.random() * 40 + 10}%`,
              }}
            >
              <p className="text-lg text-gray-300 italic">
                "{testimonial.feedback}"
              </p>
              <h3 className="text-xl font-semibold text-[#c79b53] mt-3">
                - {testimonial.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex flex-wrap justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-lg shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-lg shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;

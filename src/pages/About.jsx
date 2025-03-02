import { motion } from "framer-motion";
import trainers from "../components/data/trainersData.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import testimonials from "../components/data/testimonialsData";

function About() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center py-12 px-6"
      style={{
        backgroundImage: "url('/about-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(248, 241, 229, 0.85)", // Subtle tint
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold text-[#8b5e3b] mb-6 gold-outline">
          About Elysium Equine
        </h1>

        <motion.p
          className="text-xl text-[#5c3d2e] mb-6 leading-relaxed text-shadow"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Elysium Equine Ltd. is a premier equestrian boarding and training
          facility located in Langley, British Columbia. We provide top-tier
          care for show horses and offer specialized training programs tailored
          to each rider’s and horse’s needs.
        </motion.p>

        <motion.img
          src="/about-stable.jpg"
          alt="Elysium Equine Stable"
          className="rounded-lg shadow-lg border-4 border-[#8b5e3b] w-full max-w-lg lg:max-w-3xl mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Interactive Timeline Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#8b5e3b] mb-4">
            Our Journey
          </h2>
          <div className="timeline">
            <motion.div className="timeline-item" whileHover={{ scale: 1.05 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-2xl font-semibold">Founded in 2015</h3>
                <p>
                  Our journey began with a vision to create a sanctuary for show
                  horses.
                </p>
              </div>
            </motion.div>

            <motion.div className="timeline-item" whileHover={{ scale: 1.05 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-2xl font-semibold">Expanded in 2018</h3>
                <p>
                  We introduced advanced training programs and expanded our
                  facilities.
                </p>
              </div>
            </motion.div>

            <motion.div className="timeline-item" whileHover={{ scale: 1.05 }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-2xl font-semibold">Today</h3>
                <p>
                  We continue to provide top-tier boarding and training services
                  for equestrians.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-16 fade-in"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#8b5e3b] mb-6 text-center">
            Meet Our Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                className="bg-[#fffaf0] shadow-xl rounded-lg p-6 text-center hover:scale-105 transition transform duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-[#c79b53]"
                />
                <h3 className="text-2xl font-semibold">{trainer.name}</h3>
                <p className="text-lg text-[#5c3d2e]">{trainer.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-16 fade-in text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#8b5e3b] mb-6">
            What Our Riders Say
          </h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-4xl"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#fffaf0] shadow-lg rounded-lg p-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#c79b53]"
                  />
                  <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 italic">
                    {testimonial.role}
                  </p>
                  <p className="mt-4 text-lg text-[#5c3d2e]">
                    "{testimonial.feedback}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex flex-wrap justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Home
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;

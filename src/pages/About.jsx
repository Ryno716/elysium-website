import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useFetchTrainers from "../components/data/trainersData.jsx";
import testimonials from "../components/data/testimonialsData";
import FloatingNav from "../components/FloatingNav";

// ✅ Full-Page Carousel Background Images
const carouselImages = [
  {
    src: "/images/carousel-stableview.jpg",
    caption: "Luxury Stables",
  },
  {
    src: "/images/carousel-farmview.jpg",
    caption: "Scenic Riding Trails",
  },
  {
    src: "/images/carousel-training.jpg",
    caption: "Professional-Grade Arenas",
  },
];

function About() {
  const trainers = useFetchTrainers();
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  // ✅ Floating Testimonials Effect
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
          setVisibleTestimonials((prev) => prev.slice(1));
        }, 5000);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen w-full flex flex-col items-center text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ Full-Screen Background Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full h-full"
        >
          {carouselImages.map((item, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Floating Testimonials */}
      <div className="absolute top-1/4 w-full flex justify-center space-x-8 z-20">
        {visibleTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-[#292929] text-white border-2 border-[#c79b53] shadow-md rounded-xl px-6 py-4 text-center w-64 opacity-90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
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

      {/* ✅ Content Wrapper (Ensures Readability) */}
      <div className="relative z-10 w-full max-w-6xl mt-[70vh] px-8 py-16 bg-black bg-opacity-70 rounded-lg text-center">
        <h1 className="text-5xl font-extrabold text-[#c79b53] mb-6">
          About Elysium Equine
        </h1>
        <p className="text-lg text-gray-300">
          Elysium Equine Ltd. is a premier equestrian boarding and training
          facility located in Langley, BC.
        </p>
      </div>

      {/* ✅ Floating Navigation */}
      <FloatingNav />
    </motion.div>
  );
}

export default About;

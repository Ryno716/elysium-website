import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingNav from "../components/FloatingNav";

const trainingOptions = [
  {
    title: "Beginner Training",
    description: "Perfect for riders just starting their journey.",
    image: "/images/training-beginner.jpg",
  },
  {
    title: "Competitive Show Training",
    description:
      "For riders looking to compete at higher levels with structured coaching.",
    image: "/images/training-competitive.jpg",
  },
  {
    title: "Jumping & Dressage",
    description:
      "Specialized training for performance improvement in jumping and dressage.",
    image: "/images/training-jumping.jpg",
  },
  {
    title: "Private Coaching",
    description:
      "One-on-one sessions tailored to your goals for all experience levels.",
    image: "/images/training-private.jpg",
  },
];

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollPos = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScroll((scrollPos / docHeight) * 100);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[#c79b53] transition-all duration-300 z-50"
      style={{ width: `${scroll}%` }}
    ></div>
  );
}

function Training() {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 pb-24">
      <ScrollProgress />

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center pt-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#c79b53] drop-shadow-lg">
          Training Programs
        </h1>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          At Elysium Equine, we offer world-class training programs tailored to
          riders of all levels.
        </p>
      </motion.div>

      {/* Training Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
        {trainingOptions.map((item, idx) => (
          <motion.div
            key={idx}
            className="group relative overflow-hidden rounded-xl shadow-lg border-2 border-[#c79b53]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-6">
              <h2 className="text-2xl font-bold text-[#c79b53] mb-2">
                {item.title}
              </h2>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <a
                href="mailto:contact@elysiumequine.ca"
                className="px-4 py-2 border-2 border-[#c79b53] text-white hover:bg-[#c79b53] hover:text-black font-semibold rounded-lg transition duration-300"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Nav */}
      <FloatingNav />
    </div>
  );
}

export default Training;

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const heroSections = [
  { title: "Facility", path: "/facility", image: "/images/facility.jpg" },
  { title: "Training", path: "/training", image: "/images/training.jpg" },
  { title: "About", path: "/about", image: "/images/about.jpg" },
  { title: "Socials", path: "/socials", image: "/images/socials.jpg" },
];

function Home() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="relative min-h-screen grid grid-cols-2 grid-rows-2">
      {/* Clickable Logo for FAQ */}
      <motion.img
        src="/images/logo-placeholder.png"
        alt="Elysium Equine Logo"
        className="absolute w-28 cursor-pointer opacity-90 z-50"
        style={{
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -115%)",
          transformOrigin: "center", // Ensures scaling happens from the center
        }}
        onClick={() => setIsFAQOpen(true)}
        whileHover={{ scale: 1.1, transform: "translate(-50%, -115%)" }} // Keeps it centered
      />

      {/* Hero Section Grid */}
      {heroSections.map((section, index) => (
        <Link
          key={index}
          to={section.path}
          className="relative flex items-center justify-center group h-full w-full overflow-hidden"
          style={{
            backgroundImage: `url(${section.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>

          {/* Title */}
          <motion.h1
            className="text-white text-4xl font-bold z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {section.title}
          </motion.h1>
        </Link>
      ))}

      {/* FAQ Modal */}
      {isFAQOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
            <h2 className="text-2xl font-bold mb-4">About Elysium Equine</h2>
            <p className="text-gray-700">
              Elysium Equine is a premier equestrian facility providing top-tier
              training, boarding, and care for horses and riders. Our focus is
              on excellence, safety, and a strong community.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
              onClick={() => setIsFAQOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

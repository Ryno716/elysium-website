import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingNav from "../components/FloatingNav";

// ✅ Scroll Progress Indicator Component
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
    <div className="min-h-screen flex flex-col items-center py-16 px-6 bg-[#121212] text-white">
      {/* ✅ Scroll Indicator */}
      <ScrollProgress />

      {/* ✅ Title Section with Smooth Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold text-[#c79b53] drop-shadow-lg">
          Training Programs
        </h1>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          At Elysium Equine, we offer world-class training programs tailored to
          riders of all levels. Learn, compete, and grow with our expert
          trainers.
        </p>
      </motion.div>

      {/* ✅ Training Options Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Beginner Training */}
        <Link to="/beginner-training">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative text-white shadow-lg rounded-lg p-8 border-2 border-[#c79b53] hover:shadow-xl hover:border-[#d9a868] transition-all"
            style={{
              backgroundImage: "url('/images/training-beginner.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-[#c79b53]">
                Beginner Training
              </h2>
              <p className="mt-3 text-gray-300">
                Perfect for riders just starting their journey.
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Competitive Show Training */}
        <Link to="/competitive-training">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative text-white shadow-lg rounded-lg p-8 border-2 border-[#c79b53] hover:shadow-xl hover:border-[#d9a868] transition-all"
            style={{
              backgroundImage: "url('/images/training-competitive.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-[#c79b53]">
                Competitive Show Training
              </h2>
              <p className="mt-3 text-gray-300">
                For riders looking to compete at higher levels with structured
                coaching.
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Jumping & Dressage */}
        <Link to="/jumping-dressage">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative text-white shadow-lg rounded-lg p-8 border-2 border-[#c79b53] hover:shadow-xl hover:border-[#d9a868] transition-all"
            style={{
              backgroundImage: "url('/images/training-jumping.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-[#c79b53]">
                Jumping & Dressage
              </h2>
              <p className="mt-3 text-gray-300">
                Specialized training for performance improvement in jumping and
                dressage.
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Private Coaching */}
        <Link to="/private-coaching">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative text-white shadow-lg rounded-lg p-8 border-2 border-[#c79b53] hover:shadow-xl hover:border-[#d9a868] transition-all"
            style={{
              backgroundImage: "url('/images/training-private.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-[#c79b53]">
                Private Coaching
              </h2>
              <p className="mt-3 text-gray-300">
                One-on-one sessions tailored to your goals for all experience
                levels.
              </p>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      {/* ✅ Booking Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="px-6 py-3 border-2 border-[#c79b53] bg-[#2a2214] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition duration-300"
        >
          Book a Training Session
        </Link>
        <motion.div className="relative min-h-screen">
          {/* Existing content */}
          <FloatingNav />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Training;

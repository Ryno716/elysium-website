import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import FloatingNav from "../components/FloatingNav";

const facilityImages = [
  {
    src: "/images/facility-stable.jpg",
    alt: "Luxury Stables",
    text: "Our Facility",
    subtext:
      "Explore our world-class equestrian facility, designed for excellence.",
  },
  {
    src: "/images/facility-fields.jpg",
    alt: "Scenic Riding Trails",
    text: "Scenic Riding Trails.",
    subtext: "Experience the finest equestrian facilities at Elysium Equine.",
  },
  {
    src: "/images/facility-arena.jpg",
    alt: "Indoor Arena",
    text: "Top-Tier Training",
    subtext: "Train in professional-grade arenas with experienced coaches.",
  },
];

function Facility() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-white overflow-hidden">
      {/* ✅ Hero Carousel using all images */}
      <Carousel images={facilityImages} />

      {/* ✅ Facility Details Section */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-[#c79b53] mb-6 text-center">
          Why Choose Our Facility?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
          Elysium Equine offers state-of-the-art boarding, top-tier riding
          arenas, and expansive pastures to ensure the best care for your
          horses.
        </p>
        <ul className="mt-8 space-y-4 text-lg text-gray-300 max-w-xl mx-auto">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            🏇 <strong>Spacious & ventilated stables for comfort</strong>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            🌿 <strong>Premium riding fields and scenic trails</strong>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            🏅 <strong>Professional-grade indoor & outdoor arenas</strong>
          </motion.li>
        </ul>
      </motion.div>

      {/* ✅ Back Button */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition duration-300"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => {
              window.location.href = "/";
            }, 300);
          }}
        >
          Back to Home
        </Link>
      </motion.div>

      <FloatingNav />
    </div>
  );
}

export default Facility;

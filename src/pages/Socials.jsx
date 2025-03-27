import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import FloatingNav from "../components/FloatingNav";

function Socials() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#121212] text-white relative"
      style={{
        backgroundImage: "url('/images/socials-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.85)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-3xl rounded-xl border border-[#c79b53] bg-[#1e1e1ecc] backdrop-blur-md shadow-xl px-8 py-12 text-center"
      >
        <h1 className="text-5xl font-extrabold text-[#c79b53] mb-4 drop-shadow-md">
          Connect With Us
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Follow Elysium Equine on your favorite platforms for training reels,
          farm updates, and behind-the-scenes content.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-2 flex-wrap">
          {/* Facebook */}
          <motion.a
            href="https://facebook.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-[#1877F2] text-4xl hover:drop-shadow-[0_0_8px_#1877F2] transition"
          >
            <i className="fab fa-facebook-square"></i>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-pink-500 text-4xl hover:drop-shadow-[0_0_8px_#E1306C] transition"
          >
            <i className="fab fa-instagram"></i>
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="https://www.tiktok.com/@elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-white text-4xl hover:drop-shadow-[0_0_8px_white] transition"
          >
            <i className="fab fa-tiktok"></i>
          </motion.a>
        </div>
        {/* Contact Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Email */}
          <a
            href="mailto:contact@elysiumequine.ca"
            className="px-6 py-2 border-2 border-[#c79b53] text-[#c79b53] bg-black font-medium rounded-full hover:bg-[#c79b53] hover:text-black transition duration-300"
          >
            Email Us
          </a>

          {/* Phone */}
          <a
            href="tel:+16045551234"
            className="px-6 py-2 border-2 border-[#c79b53] text-[#c79b53] bg-black font-medium rounded-full hover:bg-[#c79b53] hover:text-black transition duration-300"
          >
            Call Us
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          📲 Tag us @elysiumequine — we’d love to feature your moments!
        </p>
      </motion.div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
}

export default Socials;

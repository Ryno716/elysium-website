import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingNav from "../components/FloatingNav";

function Contact() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 bg-[#121212] text-white"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ✅ Contact Title */}
      <motion.div
        className="max-w-3xl w-full bg-[#1e1e1e] border-2 border-[#c79b53] shadow-xl rounded-xl p-8 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-[#c79b53] mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-300">
          Have questions? We'd love to hear from you!
        </p>

        {/* ✅ Contact Form */}
        <form className="mt-8 space-y-4">
          <input
            className="w-full p-3 border rounded-lg bg-black text-white placeholder-gray-400"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 border rounded-lg bg-black text-white placeholder-gray-400"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 border rounded-lg bg-black text-white placeholder-gray-400"
            rows="4"
            placeholder="Your Message"
          ></textarea>
          <button className="px-6 py-3 border-2 border-[#c79b53] bg-[#c79b53] text-black font-semibold rounded-lg shadow-md hover:bg-[#d9a868] transition duration-300">
            Send Message
          </button>
        </form>
      </motion.div>

      {/* ✅ Navigation Buttons */}
      <div className="mt-12 flex flex-wrap justify-center space-x-4">
        <Link
          to="/"
          className="px-6 py-3 border-2 border-[#c79b53] bg-[#1e1e1e] text-[#c79b53] font-semibold rounded-lg shadow-md hover:bg-[#c79b53] hover:text-black transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 border-2 border-[#c79b53] bg-[#1e1e1e] text-[#c79b53] font-semibold rounded-lg shadow-md hover:bg-[#c79b53] hover:text-black transition duration-300"
        >
          About
        </Link>
      </div>

      {/* ✅ Floating Navigation (Correct Placement) */}
      <FloatingNav />
    </motion.div>
  );
}

export default Contact;

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center py-12 px-6"
      style={{
        backgroundImage: "url('src/images/contact-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(245, 245, 245, 0.17)", // Subtle overlay tint
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-[#827628fb] mb-6 text-center">
        Get in Touch
      </h1>

      {/* Contact Form */}
      <div className="bg-[#ffffff00] shadow-lg rounded-lg p-8 w-full max-w-lg">
        <form className="space-y-6">
          <div>
            <label className="block text-[#0c0908] font-semibold">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-lg border border-[#c79b53] bg-[#292929] text-white focus:ring focus:ring-[#6a0dad] outline-none"
              placeholder="name"
            />
          </div>

          <div>
            <label className="block text-[#090909] font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 rounded-lg border border-[#c79b53] bg-[#292929] text-white focus:ring focus:ring-[#6a0dad] outline-none"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-[#0b0a0a] font-semibold">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full mt-2 p-3 rounded-lg border border-[#c79b53] bg-[#292929] text-white focus:ring focus:ring-[#dac448] outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#a99235] to-[#000000] text-white font-semibold py-3 rounded-lg shadow-lg hover:from-[#b2844c] hover:to-[#dcd137] transition-all duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </div>
      {/* Refined Navigation Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        <a
          href="/"
          className="px-6 py-3 border-2 border-[#020202] bg-[#aa9136] text-white font-semibold rounded-full shadow-md hover:bg-[#e6be3b] hover:border-[#8b5e3b] transition-all duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="px-6 py-3 border-2 border-[#020202] bg-[#97802f] text-white font-semibold rounded-full shadow-md hover:bg-[#e6be3b] hover:border-[#4a2f1f] transition-all duration-300"
        >
          About Us
        </a>
        <a
          href="/training"
          className="px-6 py-3 border-2 border-[#020202] bg-[#715e1a] text-white font-semibold rounded-full shadow-md hover:bg-[#e6be3b] hover:border-[#8b5e3b] transition-all duration-300"
        >
          Training
        </a>
        <a
          href="/socials"
          className="px-6 py-3 border-2 border-[#020202] bg-[#41350c] text-white font-semibold rounded-full shadow-md hover:bg-[#e6be3b] hover:border-[#4a2f1f] transition-all duration-300"
        >
          Socials
        </a>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center space-y-3">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Contact Details
        </h2>
        <p className="flex items-center justify-center gap-2 text-rgb">
          📍 Langley, British Columbia
        </p>
        <p className="flex items-center justify-center gap-2 text-black">
          📞 (123) 456-7890
        </p>
        <p className="flex items-center justify-center gap-2 text-black">
          ✉ info@elysiumequine.com
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;

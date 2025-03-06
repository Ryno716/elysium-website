import "@fortawesome/fontawesome-free/css/all.min.css";

function Socials() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-6"
      style={{
        backgroundImage: "url('/images/socials-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(18, 18, 18, 0.95)", // Black with subtle overlay
      }}
    >
      <div className="max-w-3xl w-full bg-[#1e1e1e] border-2 border-[#c79b53] shadow-xl rounded-xl p-8 text-white text-center">
        <h1 className="text-5xl font-extrabold text-[#8b5e3b] mb-6">
          Follow Us on Social Media
        </h1>
        <p className="text-lg mb-6">
          Stay updated with the latest news, events, and training sessions at
          Elysium Equine Ltd. Follow us on social media!
        </p>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Facebook */}
          <a
            href="https://facebook.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-[#1877F2] text-white font-semibold rounded-full shadow-md hover:bg-[#145dbf] transition-all duration-300"
          >
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#E1306C] to-[#F56040] text-white font-semibold rounded-full shadow-md hover:from-[#C32AA3] hover:to-[#F77737] transition-all duration-300"
          >
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>

          {/* Twitter (X) */}
          <a
            href="https://twitter.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-black text-white font-semibold rounded-full shadow-md hover:bg-[#1d1d1d] transition-all duration-300"
          >
            <i className="fab fa-x-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="flex items-center space-x-2 px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="flex items-center space-x-2 px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            About
          </a>
          <a
            href="/training"
            className="flex items-center space-x-2 px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Training
          </a>
          <a
            href="/contact"
            className="flex items-center space-x-2 px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;

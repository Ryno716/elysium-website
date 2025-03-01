function Socials() {
  return (
    <div className="min-h-screen bg-[#f8f1e5] flex flex-col items-center py-12 px-6">
      <div className="max-w-3xl w-full bg-[#fffaf0] shadow-xl rounded-lg p-8 text-[#5c3d2e] border border-[#c79b53] text-center">
        <h1 className="text-5xl font-extrabold text-[#8b5e3b] mb-6">
          Follow Us on Social Media
        </h1>
        <p className="text-lg mb-6">
          Stay updated with the latest news, events, and training sessions at
          Elysium Equine Ltd. Follow us on social media!
        </p>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://facebook.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>

          <a
            href="https://instagram.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>

          <a
            href="https://twitter.com/elysiumequine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>

        <p className="mt-8 font-semibold text-lg">
          📧 Contact us via email:{" "}
          <span className="text-[#8b5e3b]">socials@elysiumequine.com</span>
        </p>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            About
          </a>
          <a
            href="/training"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Training
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;

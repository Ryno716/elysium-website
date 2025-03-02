import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Correct import, no <BrowserRouter>

function FloatingNav() {
  const [isVisible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < lastScrollY); // Show when scrolling up, hide when scrolling down
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white rounded-full shadow-lg px-6 py-2 flex space-x-6 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link
        to="/"
        className="text-lg font-semibold hover:text-gray-300 transition"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-lg font-semibold hover:text-gray-300 transition"
      >
        About
      </Link>
      <Link
        to="/training"
        className="text-lg font-semibold hover:text-gray-300 transition"
      >
        Training
      </Link>
      <Link
        to="/socials"
        className="text-lg font-semibold hover:text-gray-300 transition"
      >
        Socials
      </Link>
      <Link
        to="/contact"
        className="text-lg font-semibold hover:text-gray-300 transition"
      >
        Contact
      </Link>
    </div>
  );
}

export default FloatingNav;

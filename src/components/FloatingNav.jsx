import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBookOpen,
  FiPhone,
  FiMapPin,
  FiCompass,
} from "react-icons/fi"; // ✅ Updated icon set

const menuItems = [
  { name: "Home", path: "/", icon: <FiHome /> },
  { name: "About", path: "/about", icon: <FiUser /> },
  { name: "Training", path: "/training", icon: <FiBookOpen /> },
  { name: "Contact", path: "/contact", icon: <FiPhone /> },
  { name: "Facility", path: "/facility", icon: <FiMapPin /> },
];

function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0); // ✅ Track rotation state
  const menuRef = useRef(null);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Toggle Menu & Rotate Compass
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setRotation((prev) => prev + 180); // ✅ Rotate on every click
  };

  return (
    <div
      ref={menuRef}
      className="fixed bottom-28 right-12 transform -translate-x-1/2 z-50"
    >
      {/* ✅ Navigation Button - COMPASS ICON 🧭 */}
      <motion.button
        onClick={toggleMenu} // ✅ Toggles menu
        className="w-16 h-16 bg-gradient-to-r from-[#c79b53] to-[#a57f42] text-white rounded-full shadow-2xl flex items-center justify-center text-3xl relative border-2 border-[#c79b53] transition-transform duration-300 ease-in-out"
        animate={{ rotate: rotation }} // ✅ Instant rotation on click
        whileHover={{ rotate: 45 }} // ✅ Rotate slightly on hover
        whileTap={{ scale: 0.9 }}
      >
        <FiCompass />
      </motion.button>

      {/* ✅ Radial Popout Menu with Icons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-8 left-8 transform -translate-x-1/2 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => {
              const angle = index * (360 / menuItems.length) * (Math.PI / 180);
              const radius = 80; // ✅ Adjust for perfect spacing
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="absolute"
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)} // ✅ Closes menu when clicking a link
                    className="w-14 h-14 bg-[#1e1e1e] text-[#c79b53] flex items-center justify-center rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition text-2xl border border-[#c79b53] hover:scale-110"
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FloatingNav;

import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import FloatingNav from "../components/FloatingNav";

const facilityImages = [
  {
    src: "/images/facility-stable.jpg",
    alt: "Luxury Stables",
    text: "State-of-the-Art Stables",
  },
  {
    src: "/images/facility-arena.jpg",
    alt: "Indoor Arena",
    text: "Top-Class Training Arenas",
  },
  {
    src: "/images/facility-fields.jpg",
    alt: "Equestrian Fields",
    text: "Expansive Riding Fields",
  },
];

function Facility() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* ✅ Improved Title Section */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-extrabold text-[#c79b53] drop-shadow-lg">
          Our Facility
        </h1>
        <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore our world-class equestrian facility, designed for excellence.
        </p>
      </div>

      {/* ✅ Carousel for Facility Images */}
      <Carousel images={facilityImages} />

      {/* ✅ Facility Details Section */}
      <div className="max-w-5xl mx-auto p-12">
        <h2 className="text-5xl font-semibold text-[#c79b53] mb-6">
          Why Choose Our Facility?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Elysium Equine offers state-of-the-art boarding, top-tier riding
          arenas, and expansive pastures to ensure the best care for your
          horses.
        </p>
        <ul className="mt-8 space-y-4 text-lg text-gray-300">
          <li>
            🏇 <strong>Spacious & ventilated stables for comfort</strong>
          </li>
          <li>
            🌿 <strong>Premium riding fields and scenic trails</strong>
          </li>
          <li>
            🏅 <strong>Professional-grade indoor & outdoor arenas</strong>
          </li>
        </ul>
      </div>

      {/* ✅ Smooth Scroll Back to Home */}
      <div className="text-center mt-10">
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
      </div>

      {/* ✅ Floating Navigation (Corrected Placement) */}
      <FloatingNav />
    </div>
  );
}

export default Facility;

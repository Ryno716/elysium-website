import { Link } from "react-router-dom";

function Training() {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-6"
      style={{
        backgroundImage: "url('/images/training-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(18, 18, 18, 0.95)", // Dark overlay to match Socials
      }}
    >
      <div className="max-w-4xl w-full bg-[#1e1e1e00] border-2 border-[#c79b53] shadow-xl rounded-xl p-8 text-white text-center">
        <h1 className="text-5xl font-extrabold text-[#c79b53] mb-6">
          Training Programs
        </h1>
        <p className="text-lg mb-6">
          At Elysium Equine, we offer top-tier training for both riders and
          horses. Our experienced trainers provide customized programs to help
          you reach your competitive goals.
        </p>

        {/* Training Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Beginner Training */}
          <Link to="/beginner-training" className="block">
            <div className="bg-[#060504] text-white shadow-lg rounded-lg p-6 hover:scale-105 transition border-2 border-[#c79b53]">
              <h2 className="text-2xl font-semibold">Beginner Training</h2>
              <p className="mt-2">
                Perfect for riders just starting their journey. Learn the
                fundamentals of horse care and riding.
              </p>
            </div>
          </Link>

          {/* Competitive Show Training */}
          <Link to="/competitive-training" className="block">
            <div className="bg-[#090706] text-white shadow-lg rounded-lg p-6 hover:scale-105 transition border-2 border-[#c79b53]">
              <h2 className="text-2xl font-semibold">
                Competitive Show Training
              </h2>
              <p className="mt-2">
                Designed for riders looking to compete at local and national
                levels with structured coaching.
              </p>
            </div>
          </Link>

          {/* Jumping & Dressage */}
          <Link to="/jumping-dressage" className="block">
            <div className="bg-[#090807] text-white shadow-lg rounded-lg p-6 hover:scale-105 transition border-2 border-[#c79b53]">
              <h2 className="text-2xl font-semibold">Jumping & Dressage</h2>
              <p className="mt-2">
                Specialized training to improve performance in jumping,
                dressage, and equestrian sports.
              </p>
            </div>
          </Link>

          {/* Private Coaching */}
          <Link to="/private-coaching" className="block">
            <div className="bg-[#040303] text-white shadow-lg rounded-lg p-6 hover:scale-105 transition border-2 border-[#c79b53]">
              <h2 className="text-2xl font-semibold">Private Coaching</h2>
              <p className="mt-2">
                One-on-one training sessions tailored to your goals, available
                for all experience levels.
              </p>
            </div>
          </Link>
        </div>

        <img
          src="/images/training-session.jpg"
          alt="Training session at Elysium Equine"
        />

        {/* Booking Button */}
        <div className="mt-10">
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-[#20190d] bg-[#2a2214] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Book a Training Session
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/socials"
            className="px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Socials
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-[#c79b53] bg-black text-[#c79b53] font-semibold rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Training;

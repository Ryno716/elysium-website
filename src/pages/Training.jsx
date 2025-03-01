function Training() {
  return (
    <div className="min-h-screen bg-[#f8f1e5] flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl w-full bg-[#fffaf0] shadow-xl rounded-lg p-8 text-[#5c3d2e] border border-[#c79b53] text-center">
        <h1 className="text-5xl font-extrabold text-[#8b5e3b] mb-6">
          Training Programs
        </h1>
        <p className="text-lg mb-6">
          At Elysium Equine, we offer top-tier training for both riders and
          horses. Our experienced trainers provide customized programs to help
          you reach your competitive goals.
        </p>

        {/* Training Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#c79b53] text-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold">Beginner Training</h2>
            <p className="mt-2">
              Perfect for riders just starting their journey. Learn the
              fundamentals of horse care and riding.
            </p>
          </div>

          <div className="bg-[#5c3d2e] text-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold">
              Competitive Show Training
            </h2>
            <p className="mt-2">
              Designed for riders looking to compete at local and national
              levels with structured coaching.
            </p>
          </div>

          <div className="bg-[#c79b53] text-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold">Jumping & Dressage</h2>
            <p className="mt-2">
              Specialized training to improve performance in jumping, dressage,
              and equestrian sports.
            </p>
          </div>

          <div className="bg-[#5c3d2e] text-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold">Private Coaching</h2>
            <p className="mt-2">
              One-on-one training sessions tailored to your goals, available for
              all experience levels.
            </p>
          </div>
        </div>

        <img
          src="/training-session.jpg"
          alt="Training session at Elysium Equine"
          className="rounded-lg shadow-lg mt-10 w-full md:w-2/3 mx-auto"
        />

        {/* Booking Button */}
        <div className="mt-10">
          <a
            href="/contact"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Book a Training Session
          </a>
        </div>

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
            href="/socials"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Socials
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

export default Training;

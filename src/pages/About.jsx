function About() {
  return (
    <div className="min-h-screen bg-[#f8f1e5] text-[#5c3d2e] flex flex-col items-center py-12 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-[#8b5e3b] mb-6">
          About Elysium Equine
        </h1>
        <p className="text-lg mb-4">
          Elysium Equine Ltd. is a premier equestrian boarding and training
          facility located in Langley, British Columbia. We specialize in
          providing top-tier care for show horses and offer comprehensive
          training programs tailored to each rider’s and horse’s unique needs.
        </p>
        <p className="text-lg mb-4">
          Our facility is equipped with state-of-the-art stables, spacious
          paddocks, and professional training arenas designed to support riders
          of all levels, from beginners to competitive professionals.
        </p>
        <p className="text-lg mb-6">
          Whether you're looking to improve your riding skills, prepare for
          competitions, or provide your horse with exceptional care, our
          dedicated team is here to support you.
        </p>

        {/* Bigger About Page Image */}
        <img
          src="/about-stable.jpg"
          alt="Elysium Equine Stable"
          className="rounded-lg shadow-xl w-full md:w-3/4 lg:w-2/3 mb-8"
        />

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Home
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            Contact
          </a>
          <a
            href="/training"
            className="px-6 py-3 bg-[#c79b53] text-white font-semibold rounded-lg shadow-md hover:bg-[#b2844c] transition"
          >
            Training
          </a>
          <a
            href="/socials"
            className="px-6 py-3 bg-[#5c3d2e] text-white font-semibold rounded-lg shadow-md hover:bg-[#472e22] transition"
          >
            Socials
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

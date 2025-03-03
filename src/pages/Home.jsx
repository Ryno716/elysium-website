import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/Carousel";
import texture from "../assets/texture-overlay.png";

function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Full-Width Carousel */}
      <Carousel />

      {/* Content Below the Carousel */}
      <div
        className="p-10"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col items-center justify-center text-center py-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-shadow gold-outline">
            Welcome to Elysium Equine
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mt-4">
            Providing exceptional boarding and training services for show horses
            in Langley, British Columbia.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-center space-x-6">
          <a
            href="/about"
            className="px-6 py-3 text-lg font-semibold text-white border-2 border-[#c79b53] bg-black rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Learn More
          </a>
          <a
            href="/training"
            className="px-6 py-3 text-lg font-semibold text-white border-2 border-[#c79b53] bg-black rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Training
          </a>
          <a
            href="/socials"
            className="px-6 py-3 text-lg font-semibold text-white border-2 border-[#c79b53] bg-black rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Socials
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-lg font-semibold text-white border-2 border-[#c79b53] bg-black rounded-full shadow-md hover:bg-[#c79b53] hover:text-black transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

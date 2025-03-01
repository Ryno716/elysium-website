import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../components/Carousel";
import texture from "../assets/texture-overlay.png";

function Home() {
  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-shadow gold-outline">
            Welcome to Elysium Equine
          </h1>

          <p className="text-lg text-gray-100 mb-4 max-w-2xl">
            Providing exceptional boarding and training services for show horses
            in Langley, British Columbia.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-center space-x-8 px-6 py-3 rounded-full shadow-md border border-gray-300 max-w-lg mx-auto backdrop-blur-lg">
          <a
            href="/about"
            className="px-4 py-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition"
          >
            Learn More
          </a>
          <a
            href="/training"
            className="px-4 py-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition"
          >
            Training
          </a>
          <a
            href="/socials"
            className="px-4 py-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition"
          >
            Socials
          </a>
          <a
            href="/contact"
            className="px-4 py-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

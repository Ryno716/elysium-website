import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/placeholder-video.mp4" type="video/mp4" />
        </video>

        {/* Fallback Image with Ken Burns Effect */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center scale-110 animate-zoom-in"
          style={{ backgroundImage: "url('/home-placeholder.jpg')" }}
        ></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-5">
          <h1 className="text-5xl font-bold mb-4">Welcome to Elysium Equine</h1>
          <p className="text-lg mb-6 max-w-2xl">
            Providing exceptional boarding and training services for show horses
            in Langley, British Columbia.
          </p>
          <div className="flex space-x-4">
            <a
              href="/about"
              className="px-6 py-3 bg-gold-600 text-white font-semibold rounded-lg shadow-md hover:bg-gold-500 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-brown-700 text-white font-semibold rounded-lg shadow-md hover:bg-brown-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="max-w-5xl mx-auto my-10 p-5">
        <Slider {...sliderSettings}>
          <div>
            <img
              src="/carousel-placeholder1.jpg"
              alt="Farm View"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="/carousel-placeholder2.jpg"
              alt="Stable View"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <img
              src="/carousel-placeholder3.jpg"
              alt="Training Session"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;

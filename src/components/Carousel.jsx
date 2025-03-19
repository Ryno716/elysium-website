import { useState, useEffect } from "react";

// ✅ Fix: Use absolute URLs for public assets
const images = [
  {
    src: "/images/carousel-stableview.jpg",
    alt: "Stable Interior",
    text: "Luxury Stables.",
  },
  {
    src: "/images/carousel-training.jpg",
    alt: "Training Arena",
    text: "Top-Tier Training",
  },
  {
    src: "/images/carousel-farmview.jpg",
    alt: "Equestrian Fields",
    text: "Scenic Riding Trails.",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* ✅ Image Container with Optimized Background */}
      <div className="absolute inset-0 transition-transform duration-1000">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy" // ✅ Lazy loading for better performance
              className="w-full h-full object-cover transition-transform duration-[8s] ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* ✅ Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-30 p-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {images[currentIndex].text}
        </h2>
        <p className="text-lg md:text-xl drop-shadow-md">
          Experience the finest equestrian facilities at Elysium Equine.
        </p>
      </div>

      {/* ✅ Interactive Thumbnail Navigation with Better UX */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-5 h-5 rounded-full border border-white transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-transparent hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

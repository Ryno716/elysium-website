import { useState, useEffect } from "react";

const images = [
  {
    src: "/assets/carousel-stableview.jpg",
    alt: "Stable Interior",
    text: "Luxury Stables.",
  },
  {
    src: "/assets/carousel-training.jpg",
    alt: "Training Arena",
    text: "Top-Tier Training",
  },
  {
    src: "/assets/carousel-farmview.jpg",
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
      {/* Parallax Background Effect */}
      <div
        className="absolute inset-0 transition-transform duration-1000"
        style={{ transform: `translateY(${currentIndex * -5}px)` }} // Subtle parallax scroll effect
      >
        {/* Ken Burns Effect - Slow Zoom */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 8s ease-in-out, opacity 1s ease-in-out",
            }}
          ></div>
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-30 p-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          {images[currentIndex].text}
        </h2>
        <p className="text-lg md:text-xl drop-shadow-md">
          Experience the finest equestrian facilities at Elysium Equine.
        </p>
      </div>

      {/* Interactive Thumbnail Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border border-white transition-all ${
              index === currentIndex ? "bg-white scale-110" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;

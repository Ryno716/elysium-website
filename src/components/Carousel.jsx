import { useState, useEffect } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* ✅ Images */}
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* ✅ Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40 px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#c79b53] drop-shadow-lg">
          {images[currentIndex].text}
        </h2>
        <p className="text-lg md:text-xl text-white mt-4 max-w-2xl leading-relaxed drop-shadow-md">
          {images[currentIndex].subtext}
        </p>
      </div>

      {/* ✅ Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border border-white transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-110 shadow-md"
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

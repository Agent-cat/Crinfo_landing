"use client";

import { useState, useEffect } from "react";
import CarouselConstants from "@/constants/CarouselConstants";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === CarouselConstants.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? CarouselConstants.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  return (
    <div
      className="relative w-full max-w-360 sm:pt-20 pt-10 mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-black group rounded-lg"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {CarouselConstants.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Image */}
            <div className="relative w-full h-full bg-black">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 hover:bg-[#800020] text-amber-50 rounded-full transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 backdrop-blur-sm border border-amber-50/20"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/50 hover:bg-[#800020] text-amber-50 rounded-full transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 backdrop-blur-sm border border-amber-50/20"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {CarouselConstants.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 sm:w-12 sm:h-3 bg-[#800020]"
                : "w-2 h-2 sm:w-3 sm:h-3 bg-amber-50/30 hover:bg-amber-50/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black/50 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-50/20">
        <span className="text-amber-50 text-xs sm:text-sm font-medium">
          {currentSlide + 1} / {CarouselConstants.length}
        </span>
      </div>
    </div>
  );
};

export default Carousel;

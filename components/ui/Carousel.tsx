"use client";

import { useState, useEffect } from "react";
import { BannerImages } from "@/constants/BannerImages";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === BannerImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? BannerImages.length - 1 : prev - 1
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
      className="relative w-full max-w-7xl sm:pt-20 pt-10 mx-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-white group rounded-lg"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {BannerImages.map((slide, index) => {
          const slideContent = (
            <div className="relative w-full h-full bg-white">
              <Image
                src={slide.image}
                alt={`Banner ${slide.id}`}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          );

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
            >
              {slide.link ? (
                <Link href={slide.link} target="_blank" rel="noopener noreferrer">
                  {slideContent}
                </Link>
              ) : (
                slideContent
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 hover:bg-blue-600 text-black rounded-full transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 backdrop-blur-sm border border-gray-300 z-10"
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
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/90 hover:bg-blue-600 text-black rounded-full transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 backdrop-blur-sm border border-gray-300 z-10"
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
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {BannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? "w-8 h-2 sm:w-12 sm:h-3 bg-blue-600"
                : "w-2 h-2 sm:w-3 sm:h-3 bg-gray-400 hover:bg-gray-600"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/90 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-300 z-10">
        <span className="text-black text-xs sm:text-sm font-medium">
          {currentSlide + 1} / {BannerImages.length}
        </span>
      </div>
    </div>
  );
};

export default Carousel;

"use client";

import React, { useState, useEffect } from 'react';
import Text from '../typography/Text';
import Image from 'next/image';

type CarouselItem = {
  title: string;
  description: string;
  icon?: string;
};

type CarouselProps = {
  heading: string;
  items: CarouselItem[];
};

export default function Carousel({ heading, items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current === items.length - slidesToShow ? 0 : current + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current === 0 ? items.length - slidesToShow : current - 1));
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div className="max-w-3xl">
            <Text 
              variant="heading" 
              as="h2" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-left mb-4"
            >
              <span className="text-[#0F172A]">EFFORTLESSLY TOKENIZE YOUR
                <br className="hidden sm:block" />INFLUENCE WITH </span>
                <span className="text-[#2563EB]">FANS.PUMP</span>
            </Text>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2 justify-end items-end">
            <button 
              onClick={prevSlide}
              className={`bg-white hover:bg-gray-100 rounded-full p-2 shadow-md border border-gray-200 transition-opacity ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Previous slide"
              disabled={isTransitioning}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className={`bg-white hover:bg-gray-100 rounded-full p-2 shadow-md border border-gray-200 transition-opacity ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              aria-label="Next slide"
              disabled={isTransitioning}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-[#0F172A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out items-stretch" 
              style={{ transform: `translateX(-${(activeIndex * 100) / slidesToShow}%)` }}
            >
              {items.map((item, index) => (
                <div 
                  key={index}
                  className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2`}
                >
                  <div className="bg-blue-50 rounded-lg overflow-hidden flex flex-col h-full">
                    <div className="h-[200px] sm:h-[250px] bg-gradient-to-r from-blue-100 to-indigo-100 relative overflow-hidden flex-shrink-0">
                      {item.icon && (
                        <Image 
                          src={item.icon} 
                          alt={item.title} 
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                      )}
                    </div>
                    <div className="p-4 sm:p-6 flex flex-col flex-grow">
                      <Text 
                        variant="heading" 
                        as="h3" 
                        className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight mb-2 sm:mb-3 uppercase text-[#0F172A]"
                      >
                        {item.title}
                      </Text>
                      <Text 
                        variant="body" 
                        className="text-sm sm:text-base text-[#334155] flex-grow"
                      >
                        {item.description}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: items.length - slidesToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                disabled={isTransitioning}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
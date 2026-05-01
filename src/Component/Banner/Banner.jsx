"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// Images
import bannerImg1 from "../../../public/Image/banner1.png";
import bannerImg2 from "../../../public/Image/banner2.png";

const Banner = () => {
  const bannerSlides = [
    {
      id: 1,
      image: bannerImg1,
      title: "Discover Your Perfect Aesthetic",
      subtitle:
        "Explore premium ceramic, marble, mosaic, and geometric tiles crafted to transform your living spaces beautifully.",
    },
    {
      id: 2,
      image: bannerImg2,
      title: "Transform Spaces with Elegant Tiles",
      subtitle:
        "Modern luxury, timeless patterns, and sophisticated tile collections for every design vision.",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ["-100%", 0, -500],
            opacity: 0.4,
          },
          next: {
            translate: ["100%", 0, -500],
            opacity: 0.4,
          },
        }}
        loop={true}
        speed={1800}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}     // only first slide LCP optimized
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] z-10"></div>

              {/* Content */}
              <div className="relative z-20 flex items-center h-full px-6 sm:px-8 md:px-14 lg:px-24">
                <div className="w-full max-w-4xl text-center lg:text-left">
                  <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-gray-200 mt-5 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    {slide.subtitle}
                  </p>

                  <Link href="/allTiles">
                    <button className="mt-8 px-8 py-4 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold rounded-full border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all duration-500 shadow-2xl">
                      Browse Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-30 backdrop-blur-xl bg-white/10 border-t border-white/20 shadow-2xl">
        <div className="overflow-hidden py-4">
          <div className="animate-marquee whitespace-nowrap text-white text-sm sm:text-base md:text-lg font-medium tracking-wide">
            ✦ New Arrivals: Luxury Marble Collection &nbsp;&nbsp;&nbsp;
            ✦ Weekly Feature: Modern Geometric Patterns &nbsp;&nbsp;&nbsp;
            ✦ Exclusive Designer Tiles Available Now &nbsp;&nbsp;&nbsp;
            ✦ Join the Community for Premium Interior Inspiration &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          min-width: 100%;
          animation: marquee 22s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        :global(.swiper-pagination-bullet) {
          background: white;
          opacity: 0.7;
          width: 12px;
          height: 12px;
        }

        :global(.swiper-pagination-bullet-active) {
          background: white;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Banner;
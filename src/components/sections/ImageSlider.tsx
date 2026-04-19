import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Swiper from "swiper";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

export default function ImageSlider(): JSX.Element {
  useEffect(() => {
    new Swiper(".tranding-slider", {
      modules: [Navigation, Pagination, EffectCoverflow],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",

      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 2.5,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <section className="py-16 bg-gray-100 font-[Montserrat]">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-lg text-gray-500">- popular Delivery -</h3>
        <h1 className="text-3xl font-bold text-[#ec994b] py-4">
          Trending food
        </h1>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="swiper tranding-slider h-[520px] py-8">

          <div className="swiper-wrapper">

            {/* 1 */}
            <div className="swiper-slide w-[370px] h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1601924582971-9c0a8f2c0c1a"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 text-white">
                <h2 className="absolute top-4 right-4">$20</h2>
                <h3 className="absolute bottom-4 left-4 font-semibold">
                  Special Pizza
                </h3>
              </div>
            </div>

            {/* 2 */}
            <div className="swiper-slide w-[370px] h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc500f"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 text-white">
                <h3 className="absolute bottom-4 left-4 font-semibold">
                  Meat Ball
                </h3>
              </div>
            </div>

            {/* 3 */}
            <div className="swiper-slide w-[370px] h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 text-white">
                <h3 className="absolute bottom-4 left-4 font-semibold">
                  Burger
                </h3>
              </div>
            </div>

            {/* 4 */}
            <div className="swiper-slide w-[370px] h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1604908177522-40f7c7d7c4a0"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 text-white">
                <h3 className="absolute bottom-4 left-4 font-semibold">
                  Chicken Curry
                </h3>
              </div>
            </div>

            {/* 5 */}
            <div className="swiper-slide w-[370px] h-[420px] relative">
              <img
                src="https://images.unsplash.com/photo-1551024601-bec78aea704b"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 text-white">
                <h3 className="absolute bottom-4 left-4 font-semibold">
                  Cake
                </h3>
              </div>
            </div>

          </div>

          {/* controls */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <div className="swiper-button-prev w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"></div>
            <div className="swiper-button-next w-10 h-10 bg-white rounded-full flex items-center justify-center shadow"></div>
          </div>

          <div className="swiper-pagination mt-4"></div>

        </div>
      </div>
    </section>
  );
}

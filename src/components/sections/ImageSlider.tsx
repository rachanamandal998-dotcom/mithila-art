import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const TrendingFoodSlider = () => {
  const swiperRef = useRef(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) return; // prevent duplicate init

    swiperRef.current = new Swiper(".tranding-slider", {
      modules: [Navigation, Pagination, EffectCoverflow],

      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,

      slidesPerView: 3,
      spaceBetween: 0,

      breakpoints: {
        0: {
          slidesPerView: 1.3,
          centeredSlides: true,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },

      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 180,
        modifier: 1.2,
      },

      // ✅ FIX: proper navigation binding
      navigation: {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      },

      pagination: {
        el: paginationRef.current,
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="py-16 bg-gray-100">

      {/* TITLE */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h3 className="text-gray-500 tracking-widest">- Mithila Heritage -</h3>
        <h1 className="text-3xl font-bold text-orange-500 mt-2">
          Arts for SDGs Gallery
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10">

        <div className="swiper tranding-slider h-[520px] py-6">

          <div className="swiper-wrapper">

            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="swiper-slide h-[420px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-full object-cover"
                  src={[
                    "https://tse2.mm.bing.net/th/id/OIP.sH0TxROEHSmRrXDWRFKLfgHaFj?pid=Api&h=220&P=0",
                    "https://i.pinimg.com/736x/ab/90/70/ab90701fb11ccc9d2bf8fd4ecda838d4.jpg",
                    "https://sarmaya.in/museum/wp-content/uploads/2019/03/Sarmaya-Arts-Foundation-Baua-Devi-Madhubani.jpg",
                    "https://cdn.magicdecor.in/com/2024/01/22171435/Mithila-Art-Style-Wallpaper-of-Surya-Devta-Sun-God-for-Wall-M-1024x1024.jpg",
                    "https://i.pinimg.com/736x/2b/74/26/2b7426c98a862f061cda472f8a5612fb.jpg",
                    "https://m.media-amazon.com/images/I/A1aEnqbU-4L.jpg",
                    "https://tse3.mm.bing.net/th/id/OIP.RHwAevnbqiB6o-W6vuMkGwHaFV?pid=Api&h=220&P=0"
                  ][i]}
                  alt={`Art ${i + 1}`}
                />
              </div>
            ))}

          </div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-8 mt-8">

            {/* 👇 LEFT BUTTON (improved performance) */}
            <button
              ref={prevRef}
              className="swiper-button-prev w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition"
            >
              ❮
            </button>

            {/* 👇 RIGHT BUTTON */}
            <button
              ref={nextRef}
              className="swiper-button-next w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition"
            >
              ❯
            </button>

            <div ref={paginationRef} className="swiper-pagination"></div>

          </div>

        </div>
      </div>

      {/* MOBILE FIX */}
      <style>{`
        .swiper-wrapper {
          align-items: center;
        }

        @media (max-width: 640px) {
          .swiper-slide {
            transform: scale(0.85);
            transition: transform 0.3s ease;
          }

          .swiper-slide-active {
            transform: scale(0.95) !important;
          }
        }
      `}</style>

    </section>
  );
};

export default TrendingFoodSlider;

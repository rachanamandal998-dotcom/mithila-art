import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const TrendingFoodSlider = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      new Swiper(".tranding-slider", {
        modules: [Navigation, Pagination, EffectCoverflow],

        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,

        // ✅ IMPORTANT FIX FOR CENTER BIG + SIDES SMALL EFFECT
        slidesPerView: 3,
        spaceBetween: 0,

        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
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
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="tranding" className="py-16 bg-gray-100">

      {/* TITLE */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h3 className="text-gray-500 tracking-widest">
          - Mithila Heritage -
        </h3>
        <h1 className="text-3xl font-bold text-orange-500 mt-2">
          Arts for SDGs Gallery
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10">

        {/* SWIPER */}
        <div className="swiper tranding-slider h-[520px] py-6">

          <div className="swiper-wrapper">

            {/* Slide 1 */}
            <div className="swiper-slide w-[240px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="https://tse2.mm.bing.net/th/id/OIP.sH0TxROEHSmRrXDWRFKLfgHaFj?pid=Api&h=220&P=0" alt="Mithila Art 1" />
            </div>

            {/* Slide 2 */}
            <div className="swiper-slide w-[240px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/ab/90/70/ab90701fb11ccc9d2bf8fd4ecda838d4.jpg" alt="Mithila Art 2" />
            </div>

            {/* Slide 3 */}
            <div className="swiper-slide w-[240px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="https://sarmaya.in/museum/wp-content/uploads/2019/03/Sarmaya-Arts-Foundation-Baua-Devi-Madhubani.jpg" alt="Mithila Art 3" />
            </div>

            {/* Slide 4 */}
            <div className="swiper-slide w-[240px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="https://cdn.magicdecor.in/com/2024/01/22171435/Mithila-Art-Style-Wallpaper-of-Surya-Devta-Sun-God-for-Wall-M-1024x1024.jpg" alt="Mithila Art 4" />
            </div>

            {/* Slide 5 */}
            <div className="swiper-slide w-[240px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="https://i.pinimg.com/736x/2b/74/26/2b7426c98a862f061cda472f8a5612fb.jpg" alt="Mithila Art 5" />
            </div>

            {/* Slide 6 */}
            <div className="swiper-slide w-[240px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="https://m.media-amazon.com/images/I/A1aEnqbU-4L.jpg" alt="Mithila Art 6" />
            </div>

            {/* Slide7 */}
            <div className="swiper-slide w-[240px] sm:w-[300px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" src="https://tse3.mm.bing.net/th/id/OIP.RHwAevnbqiB6o-W6vuMkGwHaFV?pid=Api&h=220&P=0" alt="Mithila Art 7" />
            </div>

          </div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-8 mt-8">

            <div className="swiper-button-prev w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition text-xl">
              ❮
            </div>

            <div className="swiper-button-next w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition text-xl">
              ❯
            </div>

            <div className="swiper-pagination"></div>

          </div>

        </div>
      </div>

      {/* MOBILE FIX */}
      <style>{`
        @media (max-width: 640px) {
          .tranding-slider {
            height: 420px !important;
          }

          .swiper-slide {
            width: 220px !important;
          }
        }
      `}</style>

    </section>
  );
};

export default TrendingFoodSlider;

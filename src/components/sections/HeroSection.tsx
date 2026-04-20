import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroArtwork from "@/assets/first1.png";


import heroArtwork4 from "@/assets/four.png";
import heroArtwork5 from "@/assets/five.png";
import heroArtwork6 from "@/assets/six.png";
import heroArtwork7 from "@/assets/seven.png";
import ImageSlider from "../sections/ImageSlider"
import { Mandala3D } from "./Mandala3D";
import { LotusFrame3D } from "./LotusFrame3D";
import { GarlandMala3D } from "./GarlandMala3D";
import { LakshmiBloom3D } from "./LakshmiBloom3D";
import { MithilaCD3D } from "./MithilaCD3D";
import { PeacockMandala3D } from "./PeacockMandala3D";
import { RamaSitaCD3D } from "./RamaSitaCD3D";
import { SunDeity3D } from "./SunDeity3D";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // =========================
  // SLIDES (FIXED)
  // =========================
  const slides = [
    heroArtwork,
   
  
    heroArtwork4,
    heroArtwork5,
    heroArtwork6,
    heroArtwork7,
    
  ];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // VISIBILITY
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
    <section className="relative w-full h-screen overflow-hidden">

      {/* =========================
          BACKGROUND SLIDER
      ========================= */}
      <div className="absolute inset-0">
        {slides.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-center bg-cover transition-opacity duration-700"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === current ? 1 : 0,
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "opacity 0.8s ease, transform 6s ease",
            }}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* =========================
          ARROWS
      ========================= */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
        bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
        bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur"
      >
        ❯
      </button>

      {/* =========================
          CONTENT
      ========================= */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div
          className={`text-center text-white max-w-2xl space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            The Living Art of
            <span className="block text-yellow-300">Mithila Heritage</span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            Bridging ancient Nepali artistry with global sustainability goals.
            Experience the timeless beauty of Janakpur's cultural treasures.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-yellow-400 text-black hover:bg-yellow-300"
              size="lg"
              onClick={() => navigate("/programs")}
            >
              Explore Our Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              className="border-white text-black hover:bg-white/10"
              size="lg"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Story
            </Button>
          </div>
        </div>
      </div>

      {/* =========================
          THUMBNAILS
      ========================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">

        {slides.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-300
              ${
                index === current
                  ? "border-yellow-400 scale-110"
                  : "border-white/30 opacity-60 hover:opacity-100"
              }`}
          >
            <img
              src={img}
              alt="slide"
              className="w-16 h-12 object-cover"
            />
          </div>

        ))}
          
    
      </div>
  
    </section>
   
   
  
    <GarlandMala3D />
    <LakshmiBloom3D />
    <MithilaCD3D />
    <PeacockMandala3D />
    <RamaSitaCD3D />
    <SunDeity3D />
    </>     
  );
};

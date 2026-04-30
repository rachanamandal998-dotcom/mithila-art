import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Building,
  Image,
  BookOpen,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import museumConcept from "@/assets/museum-concept.jpg";

const museumFeatures = [
  {
    icon: Image,
    title: "Permanent Collection",
    description: "Over 500 authentic Mithila artworks spanning 5 centuries",
  },
  {
    icon: BookOpen,
    title: "Research Center",
    description: "Academic resources for scholars and students",
  },
  {
    icon: Users,
    title: "Artist Residency",
    description: "Programs for traditional artists to create and teach",
  },
  {
    icon: Building,
    title: "Cultural Events",
    description: "Year-round exhibitions, lectures, and performances",
  },
];

export const MuseumSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="museum"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-earth overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 mithila-pattern" />
      </div>

      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-haldi via-sindoor to-peacock" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-haldi/20 text-haldi text-sm font-medium mb-4">
            Coming Soon
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-ricepaper leading-tight mb-6">
            Museum of Mithila Heritage
          </h2>
          <p className="text-lg text-ricepaper/70 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-haldi" />
            New York City
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Museum Image */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={museumConcept}
                alt="Museum of Mithila Heritage concept design showing modern gallery space with traditional artworks"
                className="w-full aspect-[4/3] object-cover"
              />

              {/* Overlay badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-haldi text-ink font-semibold text-sm">
                MoM NYC
              </div>
            </div>

            {/* Floating info card */}
            <div className="absolute -bottom-8 -right-8 px-8 py-6 rounded-2xl bg-ricepaper shadow-elevated">
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-sindoor mb-2">
                  2026
                </div>
                <div className="text-sm text-earth font-medium">
                  Target Opening
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-ricepaper mb-4">
                A World-Class Institution for{" "}
                <span className="text-haldi">Living Heritage</span>
              </h3>
              <p className="text-lg text-ricepaper/70 leading-relaxed">
                The Museum of Mithila Heritage will be the first dedicated
                institution in North America celebrating the artistic traditions
                of the Mithila region. Our vision is to create a space where
                ancient wisdom meets contemporary dialogue.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {museumFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-ricepaper/10 border border-ricepaper/20 hover:bg-ricepaper/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-haldi flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-ink" />
                  </div>
                  <h4 className="font-playfair font-semibold text-ricepaper mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-ricepaper/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button
                  variant="accent"
                  size="lg"
                  className="group flex items-center gap-2"
                >
                  Support the Museum
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="museum" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

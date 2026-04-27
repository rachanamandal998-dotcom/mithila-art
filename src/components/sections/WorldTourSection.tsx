import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import masterArtist from "@/assets/master-artist.jpg";

const tourCities = [
  { city: "New York", country: "USA", date: "March 2025", status: "confirmed" },
  {
    city: "Washington D.C.",
    country: "USA",
    date: "April 2025",
    status: "confirmed",
  },
  {
    city: "Los Angeles",
    country: "USA",
    date: "May 2025",
    status: "confirmed",
  },
  { city: "London", country: "UK", date: "June 2025", status: "upcoming" },
  { city: "Paris", country: "France", date: "July 2025", status: "upcoming" },
  {
    city: "Geneva",
    country: "Switzerland",
    date: "August 2025",
    status: "upcoming",
  },
];

export const WorldTourSection = () => {
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
      id="world-tour"
      ref={sectionRef}
      className="relative py-24 lg:py-32 rice-paper-texture overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sindoor/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-peacock/5 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta/10 text-terracotta text-sm font-medium mb-4">
            World Tour 2025
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Mithila Art Goes{" "}
            <span className="gradient-text-primary">Global</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join us as Master Artist S.C. Suman takes Mithila heritage to world
            stages, showcasing the beauty and significance of Janakpur's
            artistic traditions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Master Artist Feature */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative">
              {/* Artist Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={masterArtist}
                  alt="Master Artist S.C. Suman working on intricate Mithila painting"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-overlay" />

                {/* Artist Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-haldi text-ink text-sm font-semibold">
                      ✦ Master Artist
                    </div>
                    <h3 className="font-playfair text-3xl font-bold text-ricepaper">
                      S.C. Suman
                    </h3>
                    <p className="text-ricepaper/80 text-sm max-w-sm">
                      Renowned Mithila artist with over 40 years of experience,
                      carrying forward the ancient traditions of Janakpur
                      painting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -top-4 -right-4 px-6 py-4 rounded-xl bg-card shadow-elevated border border-haldi/30">
                <div className="text-center">
                  <span className="text-3xl">🏆</span>
                  <p className="font-semibold text-foreground text-sm mt-2">
                    National Award
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2023 Recipient
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tour Cities */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-sindoor flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Tour Destinations
                </h3>
                <p className="text-muted-foreground">
                  6 cities across 4 countries
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {tourCities.map((tour, index) => (
                <div
                  key={index}
                  className={`group p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    tour.status === "confirmed"
                      ? "bg-card border-leaf/30 hover:shadow-card hover:border-leaf/50"
                      : "bg-muted/50 border-border/50 hover:shadow-soft"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          tour.status === "confirmed"
                            ? "bg-leaf"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                      <div>
                        <h4 className="font-playfair font-semibold text-lg text-foreground">
                          {tour.city}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {tour.country}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {tour.date}
                      </div>
                      <span
                        className={`text-xs font-medium ${
                          tour.status === "confirmed"
                            ? "text-leaf"
                            : "text-muted-foreground"
                        }`}
                      >
                        {tour.status === "confirmed"
                          ? "Confirmed"
                          : "Coming Soon"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
            <Link to="/world-tour">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto group"
              >
                View Full Tour Schedule
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

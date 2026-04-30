import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Image, Award, Music, ArrowRight } from 'lucide-react';
import festivalImage from '@/assets/festival-celebration.jpg';
import { Link } from 'react-router-dom';

const festivalHighlights = [
  {
    icon: Image,
    title: 'Art Exhibition',
    description: 'Curated displays of traditional and contemporary Mithila paintings',
  },
  {
    icon: Music,
    title: 'Live Performances',
    description: 'Traditional Maithili music, dance, and theatrical performances',
  },
  {
    icon: Award,
    title: 'Artist Awards',
    description: 'Recognition ceremony for outstanding Mithila artists',
  },
  {
    icon: Calendar,
    title: 'Workshops',
    description: 'Hands-on sessions to learn Mithila painting techniques',
  },
];

export const FestivalSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="festival" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={festivalImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/70" />
      </div>

      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-maithilpink via-haldi to-sindoor" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-maithilpink/20 text-maithilpink text-sm font-medium mb-4">
                Annual Celebration
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-ricepaper leading-tight mb-6">
                Mithila Festival{' '}
                <span className="text-haldi">USA</span>
              </h2>
              <p className="text-lg text-ricepaper/70 leading-relaxed">
                Experience the vibrant celebration of Mithila culture through art, music, 
                dance, and cuisine. Our annual festival brings together artists, scholars, 
                and culture enthusiasts from around the world.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {festivalHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-ricepaper/10 border border-ricepaper/20 hover:bg-ricepaper/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-haldi flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <highlight.icon className="w-5 h-5 text-ink" />
                  </div>
                  <h3 className="font-playfair font-semibold text-ricepaper mb-1">{highlight.title}</h3>
                  <p className="text-sm text-ricepaper/60">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Event Details */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-t border-ricepaper/20">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-haldi" />
                <div>
                  <p className="text-sm text-ricepaper/60">Date</p>
                  <p className="font-semibold text-ricepaper">October 2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-haldi">📍</div>
                <div>
                  <p className="text-sm text-ricepaper/60">Location</p>
                  <p className="font-semibold text-ricepaper">New York City</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/register-festival">
              <Button variant="hero" size="lg" className="group">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              <Link to="festival">
              <Button variant="heroOutline" size="lg">
                View Past Festivals
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
          </div>

          {/* Right: Gallery Preview */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Main Stats Card */}
              <div className="relative rounded-3xl overflow-hidden bg-ricepaper/10 backdrop-blur-md border border-ricepaper/20 p-8 shadow-elevated">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { value: '5000+', label: 'Attendees' },
                    { value: '50+', label: 'Artists' },
                    { value: '20+', label: 'Workshops' },
                    { value: '8', label: 'Years Running' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="font-playfair text-4xl font-bold text-haldi mb-2">{stat.value}</div>
                      <div className="text-sm text-ricepaper/70">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-haldi/30 rounded-tr-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-sindoor/30 rounded-bl-xl" />
              </div>

              {/* Floating testimonial */}
              <div className="absolute -bottom-8 -left-8 max-w-xs px-6 py-5 rounded-xl bg-card shadow-elevated border border-border/50">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-haldi">★</span>
                  ))}
                </div>
                <p className="text-sm text-foreground italic mb-3">
                  "An incredible celebration of culture. The festival brought Janakpur to New York!"
                </p>
                <p className="text-xs text-muted-foreground">— Festival Attendee, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

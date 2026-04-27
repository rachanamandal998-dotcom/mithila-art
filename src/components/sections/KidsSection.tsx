import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import kidsWorkshop from '@/assets/kids-workshop-illustration.jpg';
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Palette,
    title: 'Art Classes',
    description: 'Weekly painting sessions teaching traditional Mithila techniques with natural colors.',
    color: 'bg-maithilpink',
  },
  {
    icon: BookOpen,
    title: 'Story Time',
    description: 'Explore ancient Maithili tales and legends that inspire our unique art forms.',
    color: 'bg-haldi',
  },
  {
    icon: Users,
    title: 'Family Days',
    description: 'Special weekend programs for the whole family to create art together.',
    color: 'bg-peacock',
  },
  {
    icon: Star,
    title: 'Summer Camp',
    description: 'Immersive week-long programs exploring all aspects of Mithila culture.',
    color: 'bg-leaf',
  },
];

export const KidsSection = () => {
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
    <section id="programs" ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-to-br from-maithilpink/10 via-background to-haldi/10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20">🪷</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20">🦚</div>
      <div className="absolute top-1/2 right-1/4 text-4xl opacity-10">🐟</div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Illustration */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-maithilpink/30">
                <img
                  src={kidsWorkshop}
                  alt="Children enjoying Mithila art workshop with colorful paintings"
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 px-6 py-4 rounded-2xl bg-haldi shadow-elevated animate-float">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎨</span>
                  <div>
                    <p className="font-playfair font-bold text-ink">Creative Fun</p>
                    <p className="text-sm text-ink/70">Ages 5-15</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl bg-peacock shadow-elevated animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌟</span>
                  <div>
                    <p className="font-playfair font-bold text-secondary-foreground">100+ Kids</p>
                    <p className="text-sm text-secondary-foreground/70">Enrolled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-maithilpink/30 text-foreground text-sm font-medium mb-4">
                Kids & Youth Programs
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Inspiring the Next Generation of{' '}
                <span className="gradient-text-primary">Mithila Artists</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our youth programs introduce children to the magical world of Mithila art 
                through fun, engaging activities that develop creativity while preserving 
                cultural heritage.
              </p>
            </div>

            {/* Programs Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-xl bg-card border border-border/50 hover:shadow-card hover:border-maithilpink/30 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <program.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </div>
              ))}
            </div>
<Link to="/enroll-child" className="w-full sm:w-auto">
  <Button
    variant="hero"
    size="lg"
    className="group w-full sm:w-auto flex items-center gap-2"
  >
    Enroll Your Child
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Button>
</Link>

          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import borderPattern from '@/assets/mithila-border-pattern.png';

const pressItems = [
  {
    title: 'NYC Mayor\'s Recognition',
    description: 'Mithila Center honored at City Hall for cultural contributions',
    year: '2024',
    type: 'Recognition',
  },
  {
    title: 'Congressional Citation',
    description: 'U.S. Congress acknowledges Mithila art preservation efforts',
    year: '2023',
    type: 'Award',
  },
  {
    title: 'UN Headquarters Exhibition',
    description: 'Mithila art showcased at United Nations General Assembly',
    year: '2023',
    type: 'Event',
  },
  {
    title: 'Smithsonian Collaboration',
    description: 'Partnership with Smithsonian for cultural documentation',
    year: '2022',
    type: 'Partnership',
  },
  {
    title: 'UNESCO Cultural Dialogue',
    description: 'Featured in UNESCO\'s intangible heritage discussions',
    year: '2022',
    type: 'Recognition',
  },
  {
    title: 'New York Times Feature',
    description: 'In-depth coverage of Mithila art movement in America',
    year: '2021',
    type: 'Media',
  },
];

const partners = [
  'United Nations',
  'NYC Mayor\'s Office',
  'U.S. Congress',
  'Smithsonian',
  'UNESCO',
  'Nepal Embassy',
];

export const PressSection = () => {
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
    <section id="press" ref={sectionRef} className="relative py-24 lg:py-32 rice-paper-texture overflow-hidden">
      {/* Decorative Border Image */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden opacity-30">
        <img src={borderPattern} alt="" className="w-full h-full object-cover object-top" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-sindoor/10 text-sindoor text-sm font-medium mb-4">
            Recognition & Press
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Global Recognition for{' '}
            <span className="gradient-text-primary">Mithila Heritage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our work has been recognized by governments, international organizations, 
            and media outlets worldwide.
          </p>
        </div>

        {/* Press Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {pressItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card hover:border-haldi/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {item.type}
                </span>
                <span className="text-sm font-medium text-primary">{item.year}</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read More
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Award className="w-5 h-5 text-haldi" />
              <h3 className="font-playfair font-semibold text-xl text-foreground">
                Trusted By
              </h3>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-card border border-border/50 text-muted-foreground font-medium hover:border-primary/30 hover:text-foreground transition-all duration-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

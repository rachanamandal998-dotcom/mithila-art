import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Leaf,
  TreePine,
  ExternalLink,
  
} from "lucide-react";
import sdgArt from "@/assets/sdg-mithila-art.jpg";
import { Link } from "react-router-dom";

const sdgGoals = [
  {
    number: 4,
    title: "Quality Education",
    description:
      "Empowering communities through art education, workshops, and cultural literacy programs.",
    icon: BookOpen,
    color: "bg-sindoor",
    textColor: "text-sindoor",
  },
  {
    number: 5,
    title: "Gender Equality",
    description:
      "Supporting women artists and preserving the matrilineal traditions of Mithila art.",
    icon: Users,
    color: "bg-orchid",
    textColor: "text-orchid",
  },
  {
    number: 13,
    title: "Climate Action",
    description:
      "Using art to raise awareness about environmental stewardship and sustainable practices.",
    icon: Leaf,
    color: "bg-leaf",
    textColor: "text-leaf",
  },
  {
    number: 15,
    title: "Life on Land",
    description:
      "Celebrating biodiversity through traditional motifs depicting flora and fauna of Mithila.",
    icon: TreePine,
    color: "bg-peacock",
    textColor: "text-peacock",
  },
];

export const SDGSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeGoal, setActiveGoal] = useState(0);

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
      id="sdg"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-ink overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src={sdgArt} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-transparent" />
      </div>

      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sindoor via-haldi to-peacock" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-haldi/20 text-haldi text-sm font-medium mb-4">
                Art for Sustainable Development
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-ricepaper leading-tight mb-6">
                Mithila Art Meets <span className="text-haldi">UN SDGs</span>
              </h2>
              <p className="text-lg text-ricepaper/70 leading-relaxed">
                We harness the power of traditional Mithila art to advance the
                United Nations Sustainable Development Goals, creating a unique
                bridge between cultural preservation and global progress.
              </p>
            </div>

            {/* SDG Cards */}
            <div className="space-y-4">
              {sdgGoals.map((goal, index) => (
                <button
                  key={goal.number}
                  onClick={() => setActiveGoal(index)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
                    activeGoal === index
                      ? "bg-ricepaper/10 border-haldi/50 shadow-glow-accent"
                      : "bg-ricepaper/5 border-ricepaper/10 hover:border-ricepaper/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl ${goal.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-primary-foreground font-bold text-xl">
                        {goal.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <goal.icon className={`w-5 h-5 ${goal.textColor}`} />
                        <h3 className="font-playfair font-semibold text-lg text-ricepaper">
                          {goal.title}
                        </h3>
                      </div>
                      <p
                        className={`text-sm transition-all duration-300 ${
                          activeGoal === index
                            ? "text-ricepaper/70 max-h-20"
                            : "text-ricepaper/50 max-h-0 overflow-hidden"
                        }`}
                      >
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <Link to="/art-for-sdgs">
              <Button
                variant="accent"
                size="lg"
                className="group flex items-center gap-2"
              >
                Explore Our SDG Initiatives
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right: Visual Display */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src={sdgArt}
                alt="SDG-themed Mithila artwork combining traditional motifs with sustainability symbols"
                className="w-full h-full object-cover"
              />

              {/* Overlay with active goal info */}
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <div className="space-y-4">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${sdgGoals[activeGoal].color}`}
                  >
                    <span className="text-primary-foreground font-bold">
                      SDG {sdgGoals[activeGoal].number}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-ricepaper">
                    {sdgGoals[activeGoal].title}
                  </h3>
                  <p className="text-ricepaper/80 text-sm max-w-sm">
                    {sdgGoals[activeGoal].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating UN Logo Card */}
            <div className="absolute -top-6 -right-6 px-6 py-4 rounded-xl bg-ricepaper shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-peacock flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-sm">
                    UN
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-ink text-sm">
                    United Nations
                  </p>
                  <p className="text-xs text-muted-foreground">SDG Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

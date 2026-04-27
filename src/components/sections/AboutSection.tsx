import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Award, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "Janakpur Origins",
    description:
      "Rooted in the sacred city of Janakpur, birthplace of Goddess Sita and center of Mithila civilization.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Empowering local artists, especially women, to preserve and share their ancestral art traditions.",
  },
  {
    icon: Award,
    title: "UNESCO Recognition",
    description:
      "Advocating for Mithila art to receive UNESCO Intangible Cultural Heritage status.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description:
      "Connecting Mithila heritage with UN Sustainable Development Goals for worldwide change.",
  },
];

// Motion variants
const floatIcon: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
  },
};

const floatCard: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  },
};

export const AboutSection = () => {
  const missionRef = useRef<HTMLDivElement>(null);

  const scrollToMission = () => {
    missionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 mithila-pattern opacity-20" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[90vh] md:h-[80vh] rounded-3xl overflow-hidden shadow-elevated"
            style={{
              backgroundImage: "url('https://i.imgur.com/vNZ7G1d.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(1.1) saturate(1.3)",
            }}
          >
            {/* Yellow overlay with slow floating */}
            <motion.div
              animate={{ scale: [1, 1.02, 1], rotate: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute inset-0 bg-yellow-400/30 mix-blend-multiply"
            />

            <div className="absolute inset-0 flex items-center justify-center p-6">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="text-center space-y-6 relative z-10"
              >
                {/* Lotus Icon */}
                <motion.div
                  variants={floatIcon}
                  animate="animate"
                  className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-300 flex items-center justify-center shadow-glow-primary"
                >
                  <span className="text-5xl">🪷</span>
                </motion.div>

                {/* Text Card */}
                <motion.div
                  variants={floatCard}
                  animate="animate"
                  className="inline-block bg-yellow-50/80 px-8 py-4 rounded-md"
                >
                  <h3 className="font-playfair text-4xl md:text-5xl font-bold text-amber-900 drop-shadow-lg">
                    मिथिला
                  </h3>
                  <p className="font-mukta text-2xl md:text-3xl text-amber-800 drop-shadow-sm">
                    जनकपुर की विरासत
                  </p>
                  <p className="text-lg md:text-xl text-amber-700 drop-shadow-sm">
                    The Heritage of Janakpur
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-200/30 text-amber-900 text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Bridging Ancient Art with{" "}
                <span className="gradient-text-cultural">Modern Purpose</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Mithila Center USA is a 501(c)(3) nonprofit organization
                dedicated to preserving, promoting, and celebrating the rich
                cultural heritage of Mithila.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.2,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80,
                  }}
                  className="group p-6 rounded-xl bg-card/50 border border-border/50 shadow-lg hover:shadow-card transition-all duration-300 relative overflow-hidden"
                >
                  {/* Floating icon */}
                  <motion.div
                    variants={floatIcon}
                    animate="animate"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-300 via-amber-200 to-orange-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  >
                    <feature.icon className="w-6 h-6 text-ink" />
                  </motion.div>

                  <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/mission">
                <Button
                  variant="cultural"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  Learn More About Our Mission
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div ref={missionRef} id="mission" className="mt-20" />
      </div>
    </section>
  );
};

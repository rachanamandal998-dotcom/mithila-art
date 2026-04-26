import { Link } from "react-router-dom";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Award, Star, FileText, Building, Trophy, Scroll, Crown, Users,
  Sparkles, Globe2, Landmark, Newspaper, Medal, BookOpen, Flag, Heart, Handshake,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ---------------- ANIMATIONS ----------------
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9 } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// ---------------- ANIMATED 3D MANDALA ----------------
function Mithila3DMandala() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);

  useAnimationFrame((_, delta) => {
    angleRef.current += delta * 0.04;
    const a = angleRef.current;

    if (outerRef.current) {
      outerRef.current.style.transform = `rotateX(15deg) rotateY(${a * 0.7}deg) rotateZ(${a * 0.3}deg)`;
    }

    if (innerRef.current) {
      innerRef.current.style.transform = `rotateX(-10deg) rotateY(${-a * 1.1}deg) rotateZ(${a * 0.5}deg)`;
    }

    if (orbitRef.current) {
      orbitRef.current.style.transform = `rotateX(30deg) rotateY(${a * 0.4}deg) rotateZ(${-a * 0.2}deg)`;
    }

    if (coreRef.current) {
      const scale = 1 + 0.04 * Math.sin((a * Math.PI) / 180 * 2);
      coreRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }
  });

  const petals = Array.from({ length: 12 });
  const innerPetals = Array.from({ length: 8 });

  return (
    <div
      className="relative h-80 w-80"
      style={{ perspective: "900px", perspectiveOrigin: "50% 50%" }}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "260px",
          height: "260px",
          background: "radial-gradient(circle, color-mix(in oklab, var(--lotus) 30%, transparent) 0%, transparent 70%)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />

      <div
        ref={outerRef}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {petals.map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: "36px",
              height: "160px",
              marginLeft: "-18px",
              marginTop: "-80px",
              transform: `rotateZ(${i * 30}deg) translateY(-90px) rotateY(30deg)`,
              background:
                i % 4 === 0
               ? "linear-gradient(180deg, var(--heritage), var(--lotus))"
                  : i % 4 === 1
               ? "linear-gradient(180deg, var(--indigo), var(--heritage))"
                  : i % 4 === 2
               ? "linear-gradient(180deg, var(--leaf), var(--indigo))"
                  : "linear-gradient(180deg, var(--lotus), var(--leaf))",
              boxShadow: "0 8px 24px -6px rgba(0,0,0,0.5)",
              opacity: 0.92,
            }}
          />
        ))}
      </div>

      <div
        ref={innerRef}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {innerPetals.map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: "22px",
              height: "88px",
              marginLeft: "-11px",
              marginTop: "-44px",
              transform: `rotateZ(${i * 45}deg) translateY(-50px) rotateX(45deg)`,
              background: "linear-gradient(180deg, var(--lotus), var(--heritage))",
              boxShadow: "0 6px 18px -5px rgba(0,0,0,0.4)",
            }}
          />
        ))}
      </div>

      <div
        ref={orbitRef}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: "10px",
              height: "10px",
              marginLeft: "-5px",
              marginTop: "-5px",
              transform: `rotateZ(${i * 45}deg) translateY(-145px)`,
              background: i % 2 === 0? "var(--leaf)" : "var(--lotus)",
              boxShadow: `0 0 12px 3px ${i % 2 === 0? "var(--leaf)" : "var(--lotus)"}`,
            }}
          />
        ))}
      </div>

      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: "6px",
            height: "6px",
            marginLeft: "-3px",
            marginTop: "-3px",
            transform: `rotateZ(${i * 60}deg) translateY(-175px)`,
            background: "var(--heritage)",
            position: "absolute",
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            delay: i * 0.33,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div
        ref={coreRef}
        className="absolute left-1/2 top-1/2"
        style={{ transformOrigin: "center", willChange: "transform" }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full text-4xl font-bold text-white"
          style={{
            width: "112px",
            height: "112px",
            background: "radial-gradient(circle at 35% 30%, var(--lotus), var(--heritage) 55%, var(--indigo))",
            boxShadow: "0 0 50px 12px color-mix(in oklab, var(--lotus) 40%, transparent), 0 0 100px 30px color-mix(in oklab, var(--heritage) 20%, transparent), inset 0 0 20px rgba(255,255,255,0.2)",
            fontFamily: "var(--font-display)",
          }}
          animate={{ rotateZ: [0, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ॐ
        </motion.div>
      </div>
    </div>
  );
}
const MITHILA_IMAGES = {
  hero: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OyRtG82n7P3WVyEF53OSZPxpyNr-SJZcpg&s",
  art1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8OyRtG82n7P3WVyEF53OSZPxpyNr-SJZcpg&s",
  art2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsRGIpxqSCsbhHPRUiPtEgJvv4ApSbAHD0_A&s",
  art3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxKonFiwbFeUkdaXFMfIYPaowWccevo_7yg&s",
  art4: "https://indigoarts.com/sites/default/files/styles/medium_sidespace/public/mthl-2113_crp.jpg?itok=Q7zeA2fr",
  art5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGXmliUpssVxhfQvaC5ABvW6X_tDpB7cjNw&s",
  art6:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Wu34MLf5LU_bY0vUlfQRn2mB0MpgI9Tutw&s",
  un: "https://unmissionny.orderofmalta.int/wp-content/uploads/sites/23/2026/03/Picture3.jpg",
   cityhall: "https://static01.nyt.com/images/2026/02/14/multimedia/14ST-MAMDANI-WEDDING-handout-222222/14ST-MAMDANI-WEDDING-handout-222222-facebookJumbo.jpg",
  consulate: "https://images.firstpost.com/uploads/2023/07/Indian-consulate-in-New-York-US-India-New-York.png?im=FitAndFill=(596,336)",
  library: "https://images.axios.com/u3xgB7F092abGAV-ZeGO7761qag=/0x0:6192x3483/1920x1080/2025/07/09/1752073733893.jpg",
  cta: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Madhubani_Durga.jpg",
};


// ---------------- DATA - UNCHANGED ----------------
const proclamations = [
  {
    entity: "NYC Mayor's Office",
    type: "Mayoral Proclamation",
    title: "Mithila Culture & Festival Day",
    year: "2024",
    icon: Crown,
    significance: 5,
    detail: "Officially declared by the Office of the Mayor of New York City, recognizing the Mithila community's contributions to NYC's cultural mosaic.",
    image: MITHILA_IMAGES.art1,
  },
  {
    entity: "U.S. Congress",
    type: "Congressional Recognition",
    title: "Cultural Heritage Preservation Award",
    year: "2024",
    icon: Landmark,
    significance: 5,
    detail: "Recognized in the Congressional Record for sustained efforts in preserving Mithila art, language, and intangible heritage in the diaspora.",
    image: MITHILA_IMAGES.art2,
  },
  {
    entity: "New York State Senate",
    type: "Senate Citation",
    title: "Excellence in Community Service",
    year: "2023",
    icon: Scroll,
    significance: 4,
    detail: "Senate citation honoring community programs that uplift South Asian artists and women practitioners of Madhubani painting.",
    image: MITHILA_IMAGES.art3,
  },
  {
    entity: "NYC Council",
    type: "Council Resolution",
    title: "Cultural Diversity Champion",
    year: "2023",
    icon: FileText,
    significance: 4,
    detail: "Resolution acknowledging the Center's role in fostering cross-cultural dialogue across the five boroughs.",
    image: MITHILA_IMAGES.art4,
  },
  {
    entity: "New Jersey State Assembly",
    type: "Assembly Resolution",
    title: "Heritage Arts Advocacy",
    year: "2024",
    icon: Flag,
    significance: 4,
    detail: "Resolution highlighting Mithila arts education programs serving NJ schools and cultural institutions.",
    image: MITHILA_IMAGES.art5,
  },
  {
    entity: "Smithsonian Folklife",
    type: "Institutional Honor",
    title: "Living Heritage Partner",
    year: "2025",
    icon: Medal,
    significance: 5,
    detail: "Recognized as a Living Heritage partner for documenting Mithila folk traditions and ritual arts.",
    image: MITHILA_IMAGES.art6,
  },
];

const officialEvents = [
  {
    title: "United Nations Reception",
    venue: "UN Headquarters, New York",
    year: "2024",
    icon: Globe2,
    description: "Hosted a Mithila cultural reception aligned with UN Sustainable Development Goals — featuring live Madhubani painting, Maithili poetry, and a panel on women-led heritage economies.",
    image: MITHILA_IMAGES.un,
  },
  {
    title: "NYC City Hall Ceremony",
    venue: "City Hall, Manhattan",
    year: "2024",
    icon: Building,
    description: "Official proclamation ceremony with elected officials, community leaders, and master artists from Madhubani and Darbhanga.",
    image: MITHILA_IMAGES.cityhall,
  },
  {
    title: "Consulate General of India",
    venue: "New York",
    year: "2023",
    icon: Landmark,
    description: "Diplomatic reception celebrating 75 years of India–US cultural ties with a curated Mithila exhibition.",
    image: MITHILA_IMAGES.consulate,
  },
  {
    title: "Library of Congress Showcase",
    venue: "Washington D.C.",
    year: "2025",
    icon: BookOpen,
    description: "Featured presentation on Maithili manuscripts, palm-leaf traditions, and contemporary Mithila visual storytelling.",
    image: MITHILA_IMAGES.library,
  },
];

const partnerships = [
  { name: "Consulate General of India, NY", icon: Landmark },
  { name: "Permanent Mission of Nepal to the UN", icon: Globe2 },
  { name: "Asia Society", icon: Building },
  { name: "Rubin Museum of Art", icon: Award },
  { name: "Queens Museum", icon: Building },
  { name: "Brooklyn Arts Council", icon: Heart },
  { name: "NYU Center for Religion & Media", icon: BookOpen },
  { name: "Columbia South Asia Institute", icon: BookOpen },
];

const mediaFeatures = [
  { outlet: "The New York Times", topic: "Mithila Art Renaissance in Diaspora", year: "2024", image: MITHILA_IMAGES.art1 },
  { outlet: "BBC World", topic: "Women Painters of Madhubani in NYC", year: "2024", image: MITHILA_IMAGES.art2 },
  { outlet: "NPR", topic: "Maithili Language Revival in America", year: "2023", image: MITHILA_IMAGES.art3 },
  { outlet: "The Hindu", topic: "Mithila Center's UN Recognition", year: "2024", image: MITHILA_IMAGES.art4 },
  { outlet: "Hyperallergic", topic: "Sacred Geometry of Kohbar Paintings", year: "2025", image: MITHILA_IMAGES.art5 },
  { outlet: "Kathmandu Post", topic: "Cross-Border Heritage Diplomacy", year: "2024", image: MITHILA_IMAGES.art6 },
];

const milestones = [
  { number: "12+", label: "Government Proclamations" },
  { number: "40+", label: "Institutional Partners" },
  { number: "150+", label: "Featured Artists" },
  { number: "25", label: "Countries Reached" },
];

const galleryImages = [
  { src: MITHILA_IMAGES.art1, alt: "Madhubani painting — lotus and fish motif" },
  { src: MITHILA_IMAGES.art2, alt: "Traditional Mithila wall art" },
  { src: MITHILA_IMAGES.art3, alt: "Mithila folk painting — peacock" },
  { src: MITHILA_IMAGES.art4, alt: "Kohbar ritual Mithila painting" },
  { src: MITHILA_IMAGES.art5, alt: "Mithila art — goddess Durga" },
];

// ---------------- PAGE ----------------
export default function Recognition() {
  return (
    <>
      <style>{`
        :root {
          --heritage: #E85D04;
          --lotus: #D00000;
          --indigo: #3A0CA3;
          --leaf: #2A9D8F;
          --font-display: 'Poppins', sans-serif;
          --gradient-hero: linear-gradient(135deg, #E85D04, #3A0CA3);
          --gradient-page: linear-gradient(180deg, #FFF8F0, #FFE8D6);
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }
     .mithila-border {
          background: linear-gradient(90deg, var(--heritage), var(--lotus), var(--heritage));
        }
      `}</style>

      <Header />
      <main className="min-h-screen overflow-hidden text-foreground" style={{ background: "var(--gradient-page)" }}>

        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <img
              src={MITHILA_IMAGES.hero}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.22) saturate(1.4)" }}
            />
          </div>
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)", opacity: 0.82 }} />
          <div className="absolute inset-x-0 top-0 h-2 mithila-border" />
          <div className="absolute inset-x-0 bottom-0 h-2 mithila-border" />

          <div className="container mx-auto grid items-center gap-8 px-10 py-16 sm:gap-12 sm:py-20 md:py-24 lg:grid-cols-2 lg:py-32">
            <motion.div initial="hidden" animate="show" variants={stagger} className="text-center text-paper md:text-left">
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
              >
                <Sparkles className="h-4 w-4 text-[var(--lotus)]" />
                <span className="tracking-wide text-paper/90">Honored Globally · Rooted in Mithila</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-playfair px-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
              >
                Global Recognition of{" "}
                <span
  className="bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(135deg, hsl(var(--peacock-blue)) 0%, hsl(var(--orchid-purple)) 100%)",
  }}
>
  Mithila Art
</span>

              </motion.h1>

              <motion.p variants={fadeUp} className="mx-auto md:mx-0 mt-6 px-10 max-w-xl text-base sm:text-lg md:text-xl text-paper/85 leading-relaxed">
               Mithila art is a sacred tradition passed through generations of women.
This platform showcases its global recognition, cultural impact, and artistic legacy..

              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                <Button variant="heritage" size="xl" className="gap-2 bg-red-400" asChild>
                  <Link to="/partner">
                    <Trophy className="h-5 w-5" />
                    <span>Explore Partnership</span>
                  </Link>
                </Button>
                <Button variant="art" size="xl" className="gap-2 bg-red-400" asChild>
                  <Link to="/about">
                    <BookOpen className="h-5 w-5" />
                    <span >Learn About Us</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" animate="show" className="flex items-center justify-center">
              <Mithila3DMandala />
            </motion.div>
          </div>
        </section>

        {/* GALLERY STRIP */}
        <section className="overflow-hidden border-y border-border">
          <motion.div
            className="flex"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative flex-1 overflow-hidden"
                style={{ height: "160px" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-10"
                  style={{
                    background:
                      i % 3 === 0
                     ? "var(--heritage)"
                        : i % 3 === 1
                     ? "var(--indigo)"
                        : "var(--lotus)",
                    mixBlendMode: "multiply",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 px-3 py-2 text-xs text-white transition-transform duration-300 group-hover:translate-y-0">
                  {img.alt}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* MILESTONES */}
        <section className="border-b border-border bg-paper/60 backdrop-blur">
          <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 sm:gap-8 sm:py-12 md:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <div
                  className="font-playfair text-4xl font-extrabold sm:text-5xl"
                  style={{
                    backgroundImage: "linear-gradient(135deg, var(--heritage), var(--lotus))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {m.number}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROCLAMATIONS */}
        <section className="px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
            >
              <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full bg-heritage/10 px-4 py-1.5 text-sm font-semibold text-heritage">
                <Award className="h-4 w-4" /> Government Proclamations
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-playfair text- font-extrabold tracking-tight leading-tight">
               Global Government Recognition
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-muted-foreground">
               Governments across the world have officially recognized Mithila art
for its cultural, social, and artistic contributions.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {proclamations.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.article
                    key={p.title}
                    variants={fadeUp}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-art-card"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={p.image}
                        alt={`Mithila art — ${p.title}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <div
                        className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl text-paper shadow-lg"
                        style={{ background: "linear-gradient(135deg, var(--heritage), var(--indigo))" }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-bold tracking-wider text-white backdrop-blur-sm">
                        {p.year}
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-heritage">{p.type}</p>
                      <h3 className="mt-2 font-playfair text-xl font-bold leading-snug text-foreground">{p.title}</h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">{p.entity}</p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.detail}</p>
                      <div className="mt-4 flex gap-1">
                        {Array.from({ length: p.significance }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[var(--lotus)] text-[var(--lotus)]" />
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FEATURED ART BANNER */}
        <section className="relative overflow-hidden py-10 sm:py-16 md:py-20">
          <div className="absolute inset-0 -z-10">
            <img
              src={MITHILA_IMAGES.art2}
              alt="Mithila art — detailed Madhubani painting"
              className="h-full w-full object-cover"
              style={{ filter: "brightness(0.35) saturate(1.6)" }}
            />
          </div>
          <div className="container mx-auto px-4 text-center text-paper">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--lotus)" }}>
                The Living Art of Mithila
              </p>
              <h2 className="font-playfair text- font-extrabold leading-tight">
               The Story Behind Every Stroke
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-paper/80">
               Mithila painting reflects deep cultural roots, mythology,
and the everyday life of communities. Each artwork carries meaning and tradition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* OFFICIAL EVENTS */}
        <section className="relative overflow-hidden px-4 py-10 sm:py-16 md:py-24">
          <div className="absolute inset-0 -z-10 art-paper opacity-60" />
          <div className="container mx-auto">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
            >
              <motion.div
                variants={fadeUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
                style={{ color: "var(--indigo)", background: "color-mix(in oklab, var(--indigo) 12%, transparent)" }}
              >
                <Globe2 className="h-4 w-4" /> Official Events
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-playfair text- font-extrabold tracking-tight leading-tight">
               International Cultural Events
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-muted-foreground">
               Mithila art has been showcased at global events, exhibitions,
and cultural gatherings worldwide.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="grid gap-6 grid-cols-1 md:grid-cols-2"
            >
              {officialEvents.map((e) => {
                const Icon = e.icon;
                return (
  <motion.div
    key={e.title}
    variants={fadeUp}
    whileHover={{ y: -6, scale: 1.01 }}
    className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-art-card"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={e.image}
        alt={e.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl text-paper">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-playfair text-xl font-bold text-white">{e.title}</h3>
            <p className="text-sm text-white/75">
              {e.venue} · <span>{e.year}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* ✅ These should be INSIDE motion.div */}
    <div className="mithila-border h-1 w-full" />
    <p className="p-6 text-base leading-relaxed text-foreground/80">
      {e.description}
    </p>
  </motion.div>
);

              })}
            </motion.div>
          </div>
        </section>
        {/* PARTNERSHIPS */}
        <section className="px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
            >
              <motion.div
                variants={fadeUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
                style={{ color: "var(--leaf)", background: "color-mix(in oklab, var(--leaf) 14%, transparent)" }}
              >
                <Users className="h-4 w-4" /> Partnerships
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-playfair text- font-extrabold tracking-tight leading-tight">
                Our Global Partners
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-muted-foreground">
                Diplomatic missions, museums, universities, and grassroots collectives
                collaborating to keep Mithila's Madhubani tradition alive across continents.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            >
              {partnerships.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.name}
                    variants={fadeUp}
                    whileHover={{ y: -4, rotateZ: -1 }}
                    className="flex flex-col items-center gap-3 rounded-xl border border-border bg-paper p-6 text-center shadow-sm transition-shadow hover:shadow-art-card"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ background: "color-mix(in oklab, var(--heritage) 12%, transparent)" }}
                    >
                      <Icon className="h-6 w-6 text-heritage" />
                    </div>
                    <p className="text-sm font-semibold leading-snug text-foreground">{p.name}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* MEDIA */}
        <section className="relative overflow-hidden px-4 py-10 sm:py-16 md:py-24">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-page)" }} />
          <div className="container mx-auto">
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
            >
              <motion.div
                variants={fadeUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
                style={{ color: "var(--lotus)", background: "color-mix(in oklab, var(--lotus) 14%, transparent)" }}
              >
                <Newspaper className="h-4 w-4" /> Media Coverage
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-playfair text- font-extrabold tracking-tight leading-tight">
               Media Recognition
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-base sm:text-lg text-muted-foreground">
                Global media celebrating the revival and recognition of Mithila's Madhubani art.
              </motion.p>
            </motion.div>

            <motion.ul
              initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
              className="mx-auto max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card shadow-art-card"
            >
              {mediaFeatures.map((m) => (
                <motion.li
                  key={m.outlet + m.topic}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex items-center justify-between gap-4 p-5 transition-colors hover:bg-secondary/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-border">
                      <img
                        src={m.image}
                        alt={`Mithila art — ${m.outlet}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-playfair text-lg font-bold text-foreground">{m.outlet}</p>
                      <p className="text-sm text-muted-foreground">{m.topic}</p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 text-sm font-semibold text-heritage">{m.year}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 pb-24 pt-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl px-6 py-16 text-center text-paper shadow-heritage sm:px-8 sm:py-20 md:px-16"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
                <img
                  src={MITHILA_IMAGES.cta}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  style={{ filter: "brightness(0.2) saturate(1.5)", mixBlendMode: "luminosity" }}
                />
              </div>
              <div className="absolute inset-x-0 top-0 h-1.5 mithila-border" />
              <div className="absolute inset-x-0 bottom-0 h-1.5 mithila-border" />

              <motion.div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20"
                style={{ border: "2px solid var(--lotus)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full opacity-15"
                style={{ border: "2px dashed var(--lotus)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              <Sparkles className="mx-auto h-10 w-10 text-[var(--lotus)]" />
              <h2 className="mt-6 font-playfair text- font-extrabold leading-tight">
                Support and Promote Mithila Art
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-paper/85">
              Join us in preserving and promoting Mithila art across the world.
              Collaborate, support artists, and spread this cultural heritage.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Button variant="heritage" size="xl" className="gap-2" asChild>
                  <Link to="/partner">
                    <Handshake className="h-5 w-5" />
                    <span>Explore Partnership</span>
                  </Link>
                </Button>
                <Button variant="art" size="xl" className="gap-2" asChild>
                  <Link to="/about">
                    <BookOpen className="h-5 w-5" />
                    <span>Learn About Us</span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
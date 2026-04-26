import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Heart,
  Lightbulb,
  Users,
  Globe,
  Shield,
  Leaf,
  GraduationCap,
  Handshake,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mithila from "../assets/mithila-heritage-mural.jpg"
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import CardSlider from "@/components/sections/CardSlider";

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

const missionPillars = [
  { icon: Shield, title: "Preserve Heritage", description: "Preserve and promote Mithila heritage—art, literature, language, festivals, cuisine, and living traditions—within the United States and worldwide." },
  { icon: Target, title: "Art for Social Good", description: "Leverage art for social good by aligning programs with the United Nations SDGs, using visual storytelling to highlight issues such as gender equality, quality education, climate action, and life on land." },
  { icon: Users, title: "Empower Artists", description: "Empower artists, especially women and youth, by providing platforms, workshops, recognition, and economic opportunities for their creative contributions." },
  { icon: Globe, title: "Cross-Cultural Dialogue", description: "Foster cross-cultural dialogue among Nepali, Indian, and global communities, promoting harmony, inclusion, and shared understanding." },
];

const values = [
  { icon: Heart, title: "Cultural Authenticity", description: "Preserving the genuine traditions, techniques, and spiritual essence of Mithila art while respecting its origins in the Mithila region of Nepal and India." },
  { icon: Lightbulb, title: "Innovation", description: "Adapting ancient wisdom to address contemporary challenges including climate change, gender equality, and sustainable development through SDG-aligned programming." },
  { icon: Users, title: "Community Empowerment", description: "Supporting Maithil artists, especially women who have been the primary custodians of this tradition for millennia, through fair practices and skill development." },
  { icon: Handshake, title: "Partnership", description: "Building bridges with UN agencies, diplomatic missions, cultural institutions, and diaspora communities for collective impact." },
];

const visionGoals = [
  "Mithila heritage recognized as a global cultural asset",
  "Museum of Mithila Heritage (MoM) in New York",
  "Self-sustaining artist cooperatives worldwide",
  "Digital archive accessible to researchers globally",
  "SDG-aligned programming reaching every continent",
  "Youth leadership programs for cultural ambassadors",
];

const servedCommunities = [
  "Maithil Women Artists",
  "Youth & Students",
  "Diaspora Communities",
  "Rural Artisans (Nepal & India)",
  "Global Researchers",
];

const flagshipPrograms = [
  { icon: "🎨", title: "Art for SDGs Program" },
  { icon: "🏛", title: "Mithila Festival USA" },
  { icon: "🧑‍🎓", title: "Youth Cultural Leadership" },
  { icon: "🌍", title: "UN Cultural Exhibitions" },
  { icon: "📚", title: "Art Education Workshops" },
];

const workLocations = [
  "Mithila Region (Nepal & India)",
  "New York, USA (Headquarters)",
  "Global Diaspora Communities",
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-heritage/10 px-4 py-1.5 text-sm font-semibold text-heritage">
        {eyebrow}
      </div>
      <h2 className="font-playfair text- font-extrabold tracking-tight leading-tight">{title}</h2>
    </div>
  );
}

function Mithila3DOrb() {
  const petals = Array.from({ length: 12 });
  return (
    <div className="pointer-events-none absolute -bottom-10 -right-4 hidden h-56 w-56 [transform-style:preserve-3d] md:block" aria-hidden="true">
      <div className="relative h-full w-full animate-[spin_18s_linear_infinite]">
        {petals.map((_, index) => (
          <div
            key={index}
            className="absolute left-1/2 top-1/2 h-24 w-10 origin-[50%_112px] rounded-full border border-foreground/30 bg-secondary/80 shadow-lg"
            style={{ transform: `translate(-50%, -100%) rotateZ(${index * 30}deg) translateZ(${index % 2? 26 : -26}px)` }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/30 bg-secondary shadow-lg" />
        <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
      </div>
    </div>
  );
}

export default function Mission() {
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
      .mithila-border {
          background: linear-gradient(90deg, var(--heritage), var(--lotus), var(--heritage));
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <Header />
      <main className="min-h-screen overflow-hidden text-foreground" style={{ background: "var(--gradient-page)" }}>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)", opacity: 0.82 }} />
          <div className="absolute inset-x-0 top-0 h-2 mithila-border" />
          <div className="absolute inset-x-0 bottom-0 h-2 mithila-border" />

          <div className="container mx-auto grid items-center gap-8 px-12 py-16 sm:gap-12 sm:py-20 md:py-24 lg:grid-cols-2 lg:py-32">
            {/* LEFT CONTENT */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="text-center text-paper md:text-left"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur"
              >
                <Eye className="h-4 w-4 text-[var(--lotus)]" />
                <span className="tracking-wide text-paper/90">Mission & Vision</span>
              </motion.div>

         <motion.h1
  variants={fadeUp}
  className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
>
  Mission &{" "}
  <span
    className="bg-clip-text text-transparent"
    style={{
      backgroundImage:
        "linear-gradient(135deg, hsl(var(--peacock-blue)) 0%, hsl(var(--orchid-purple)) 100%)",
    }}
  >
    Vision
  </span>
</motion.h1>


              <motion.p
                variants={fadeUp}
                className="mx-auto md:mx-0 mt-6 max-w-xl text-base sm:text-lg md:text-xl text-paper/85 leading-relaxed"
              >
                Guided by ancient wisdom, driven by modern purpose—using art as a force
                for creativity, sustainability, and community resilience.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button className="bg-red-400" variant="heritage" size="xl" asChild>
                  <a href="#mission-content">Explore Mission</a>
                </Button>
                <Button className="bg-red-400" variant="art" size="xl" asChild>
                  <a href="#join-movement">Join Movement</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-2xl [transform-style:preserve-3d]"
            >
              <div className="absolute inset-6 rounded-full bg-accent/20 blur-3xl" />
              <img
                src={mithila}
                alt="Mithila Art"
                className="relative aspect-[11/8] w-full rounded-md border border-border object-cover shadow-xl animate-[float_6s_ease-in-out_infinite]"
              />
              <Mithila3DOrb />
            </motion.div>
          </div>
        </section>

        {/* WHO WE SERVE */}
        <section id="mission-content" className="bg-paper/60 backdrop-blur px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading eyebrow="Who We Serve" title="Our mission is centered around the communities who preserve and carry forward Mithila heritage." />
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {servedCommunities.map((item) => (
                <motion.div variants={fadeUp} key={item} className="group rounded-2xl border border-border bg-card p-5 text-center shadow-art-card transition-transform hover:-translate-y-1">
                  <GraduationCap className="mx-auto mb-4 h-7 w-7 text-heritage transition-transform group-hover:scale-110" />
                  <p className="text-sm font-semibold leading-snug text-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <CardSlider />

        {/* MISSION PILLARS */}
        <section className="px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading eyebrow="Mission Pillars" title="Four commitments guide every exhibition, workshop, and partnership." />
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {missionPillars.map((pillar) => (
                <motion.article variants={fadeUp} key={pillar.title} className="rounded-2xl border border-border bg-card p-6 shadow-art-card transition-transform hover:-translate-y-1">
                  <pillar.icon className="mb-5 h-9 w-9 text-heritage" />
                  <h3 className="font-playfair text-xl font-bold leading-snug text-foreground">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">{pillar.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FLAGSHIP PROGRAMS */}
        <section className="bg-paper/60 backdrop-blur px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading eyebrow="Our Flagship Initiatives" title="Programs turning cultural preservation into practical community impact." />
            <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {flagshipPrograms.map((program) => (
                <div key={program.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-art-card transition-transform hover:-translate-y-1">
                  <div className="text-4xl" aria-hidden="true">{program.icon}</div>
                  <h3 className="mt-5 font-playfair text-xl font-bold text-foreground">{program.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-heritage">Our Values</p>
                <h2 className="mt-4 font-playfair text- font-extrabold tracking-tight leading-tight">Rooted in authenticity. Built for impact.</h2>
              </div>
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                {values.map((value) => (
                  <article key={value.title} className="rounded-2xl border border-border bg-card p-6 shadow-art-card">
                    <value.icon className="mb-4 h-8 w-8 text-heritage" />
                    <h3 className="font-playfair text-2xl font-bold text-foreground">{value.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{value.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THEORY OF CHANGE */}
        <section className="px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <div className="relative mx-auto max-w-7xl rounded-3xl px-6 py-16 sm:px-8 sm:py-20 text-center text-paper shadow-heritage md:px-16" style={{ background: "var(--gradient-hero)" }}>
              <div className="absolute inset-x-0 top-0 h-1.5 mithila-border rounded-t-3xl" />
              <div className="absolute inset-x-0 bottom-0 h-1.5 mithila-border rounded-b-3xl" />

              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] text-left">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--lotus)]">Our Theory of Change</p>
                  <h2 className="mt-4 font-playfair text- font-extrabold leading-tight">
                    Traditional Mithila Art → Empowerment of Artists → Economic Opportunity → Cultural Preservation → Global Awareness of SDGs
                  </h2>
                </div>
                <div className="grid gap-3">
                  {visionGoals.map((goal) => (
                    <div key={goal} className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4 font-medium backdrop-blur">
                      <Leaf className="mt-0.5 h-5 w-5 shrink-0 text-[var(--lotus)]" />
                      <span className="text-paper/90">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE WE WORK */}
        <section className="bg-paper/60 backdrop-blur px-4 py-10 sm:py-16 md:py-24">
          <div className="container mx-auto">
            <SectionHeading eyebrow="Where We Work" title="From the Mithila region to New York and communities across the world." />
            <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-3">
              {workLocations.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-card p-7 shadow-art-card">
                  <MapPin className="mb-5 h-8 w-8 text-heritage" />
                  <h3 className="font-playfair text-2xl font-bold text-foreground">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="join-movement" className="px-4 pb-24 pt-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl px-6 py-16 text-center text-paper shadow-heritage sm:px-8 sm:py-20 md:px-16"
              style={{ background: "var(--gradient-hero)" }}
            >
              <div className="absolute inset-x-0 top-0 h-1.5 mithila-border" />
              <div className="absolute inset-x-0 bottom-0 h-1.5 mithila-border" />

              <Heart className="mx-auto mb-5 h-10 w-10 text-[var(--lotus)]" />
              <h2 className="font-playfair text- font-extrabold leading-tight">Be Part of the Movement</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-paper/85">
                Join us in preserving Mithila heritage and empowering communities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Button variant="heritage" size="xl" className="gap-2 bg-white text-foreground hover:bg-white/90" asChild>
                  <Link to="/partner">
                    <Handshake className="h-5 w-5" />
                    <span>Partner</span>
                  </Link>
                </Button>

                <Button  className="gap-2 bg-white text-foreground hover:bg-white/90" variant="art" size="xl" asChild>
                  <Link to="/artists">
                    <Sparkles className="h-5 w-5" />
                    <span>Artists</span>
                  </Link>
                </Button>

                <Button
                  size="xl"
                  className="gap-2 bg-white text-foreground hover:bg-white/90"
                  asChild
                >
                  <Link to="/contact">
                    <Heart className="h-5 w-5" />
                    <span>Donate</span>
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
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import mithila from "../../assets/mithila-heritage-mural.jpg"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
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
    <div className="max-w-4xl">
      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">{title}</h2>
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
            style={{ transform: `translate(-50%, -100%) rotateZ(${index * 30}deg) translateZ(${index % 2 ? 26 : -26}px)` }}
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
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* HERO */}
<section className="relative px-5 py-16 md:px-8 md:py-24">
  <div className="h-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />

  <div className="container mx-auto grid items-center gap-12 pt-16 md:grid-cols-2">

    {/* LEFT CONTENT */}
    <motion.div
      initial="hidden"
      animate="show"
      variants={stagger}
      className="text-center md:text-left"
    >
      <motion.h1
        variants={fadeUp}
        className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
      >
        Mission &{" "}
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Vision
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mx-auto md:mx-0 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
      >
        Guided by ancient wisdom, driven by modern purpose—using art as a force
        for creativity, sustainability, and community resilience.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4 justify-center md:justify-start">
        <Button asChild size="lg">
          <a href="#mission-content">Explore Mission</a>
        </Button>
        <Button asChild size="lg" variant="outline">
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
      <section id="mission-content" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading  eyebrow="Who We Serve" title="Our mission is centered around the communities who preserve and carry forward Mithila heritage." />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mt-10 grid gap-4 md:grid-cols-5">
            {servedCommunities.map((item) => (
              <motion.div variants={fadeUp} key={item} className="group rounded-md border border-border bg-card p-5 text-center font-bold shadow transition-transform hover:-translate-y-1">
                <GraduationCap className="mx-auto mb-4 h-7 w-7 text-primary transition-transform group-hover:scale-110" />
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Mission Pillars" title="Four commitments guide every exhibition, workshop, and partnership." />
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {missionPillars.map((pillar) => (
              <motion.article variants={fadeUp} key={pillar.title} className="rounded-md border border-border bg-card p-6 shadow transition-transform hover:-translate-y-1">
                <pillar.icon className="mb-5 h-9 w-9 text-primary" />
                <h3 className="text-2xl font-bold">{pillar.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-muted-foreground">{pillar.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FLAGSHIP PROGRAMS */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Flagship Initiatives" title="Programs turning cultural preservation into practical community impact." />
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {flagshipPrograms.map((program) => (
              <div key={program.title} className="rounded-md border border-border bg-card p-6 text-center shadow transition-transform hover:-translate-y-1">
                <div className="text-4xl" aria-hidden="true">{program.icon}</div>
                <h3 className="mt-5 text-xl font-bold">{program.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-primary">Our Values</p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">Rooted in authenticity. Built for impact.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-md border border-border bg-card p-6 shadow">
                <value.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-muted-foreground">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl rounded-md bg-primary p-6 text-primary-foreground shadow-xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-secondary">Our Theory of Change</p>
              <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
                Traditional Mithila Art → Empowerment of Artists → Economic Opportunity → Cultural Preservation → Global Awareness of SDGs
              </h2>
            </div>
            <div className="grid gap-3">
              {visionGoals.map((goal) => (
                <div key={goal} className="flex items-start gap-3 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 p-4 font-bold">
                  <Leaf className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Where We Work" title="From the Mithila region to New York and communities across the world." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {workLocations.map((item) => (
              <div key={item} className="rounded-md border border-border bg-card p-7 shadow">
                <MapPin className="mb-5 h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join-movement" className="px-5 pb-24 pt-16 md:px-8">
        <div className="mx-auto max-w-5xl rounded-md border border-border bg-card p-8 text-center shadow-xl md:p-14">
          <Heart className="mx-auto mb-5 h-10 w-10 text-primary" />
          <h2 className="text-4xl font-extrabold md:text-6xl">Be Part of the Movement</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">
            Join us in preserving Mithila heritage and empowering communities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">🤝 Partner</Button>
            <Button size="lg" variant="outline">🎨 Artists</Button>
            <Button size="lg" variant="secondary">💛 Donate</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

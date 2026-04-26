import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  Target,
  Globe,
  Heart,
  Building,
  Sparkles
} from 'lucide-react';
import { motion } from "framer-motion";

// ✅ FIX: SectionHeading was missing (added without changing your content)
const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="text-center mb-10">
    <p className="text-sm uppercase tracking-widest text-muted-foreground">
      {eyebrow}
    </p>
    <h2 className="font-playfair text-4xl font-bold text-foreground">
      {title}
    </h2>
  </div>
);

const About = () => {

  const images = {
    hero: "https://i.imgur.com/6slZWn8.jpeg",
    story: "https://i.imgur.com/jZZWeF9.jpeg",
    gallery: [
      "https://i.imgur.com/1JUU91a.jpeg",
      "https://i.imgur.com/lVogGfQ.jpeg",
      "https://i.imgur.com/WrYZKrh.jpeg",
      "https://i.imgur.com/fXsmjdt.jpeg",
      "https://i.imgur.com/31AWGD0.jpeg",
      "https://i.imgur.com/aR2ZDoe.jpeg",
    ]
  };

  const timeline = [
    {
      year: "Ancient Origins",
      title: "Birth of Mithila Art",
      description:
        "Mithila painting tradition begins in the ancient kingdom of Mithila, spanning present-day Nepal and Bihar, India. Legend traces it to King Janaka's court during the wedding of Sita and Rama, making it over 3,000 years old."
    },
    {
      year: "1934",
      title: "Global Discovery",
      description:
        "Following a major earthquake, British colonial officer William G. Archer discovers Mithila paintings on exposed walls, bringing international attention to this art form and sparking academic interest worldwide."
    },
    {
      year: "2019",
      title: "Mithila Festival USA Launched",
      description:
        "The inaugural Mithila Festival USA is organized, along with the groundbreaking exhibition 'Art for SDGs: The Mithila Heritage' at UN Headquarters in New York, in collaboration with the Permanent Mission of Nepal."
    },
    {
      year: "Present",
      title: "Global Cultural Force",
      description:
        "Today, Mithila Center USA works with UN agencies, diplomatic missions, NYC Mayor's Office, Queens Borough Hall, and educational institutions worldwide, using Mithila art as a tool for sustainable development and cultural diplomacy."
    }
  ];

  const keyFacts = [
    {
      icon: MapPin,
      title: "Location",
      description:
        "Based in New York, USA, with cultural connections spanning Nepal, India, and the global Maithil diaspora across North America and beyond."
    },
    {
      icon: Calendar,
      title: "Established",
      description:
        "Organizing major cultural programs since 2019, including annual festivals, UN exhibitions, and community events as a registered 501(c)(3) non-profit."
    },
    {
      icon: Target,
      title: "Focus Areas",
      description:
        "Art preservation, cultural education, UN SDG alignment, artist empowerment, and cross-cultural dialogue through festivals, exhibitions, and workshops."
    }
  ];

  const partners = [
    "Permanent Mission of Nepal to UN",
    "Consulate General of Nepal, New York",
    "NYC Mayor's Office",
    "Queens Borough Hall",
    "Flushing Town Hall",
    "Apan Foundation",
    "Nepalese American Foundation",
    "Madheshi/Terai Diaspora Associations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={images.hero}
            alt="About Mithila Center USA"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span
  className="bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(135deg, hsl(var(--peacock-blue)) 0%, hsl(var(--orchid-purple)) 100%)",
  }}
>
  Mithila Center USA
</span>

          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A nonprofit cultural organization based in New York, dedicated to preserving, promoting, 
            and globalizing the living heritage of the Mithila region of southern Nepal and northern India.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img src={images.story} className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="font-playfair text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mithila Center USA (also known as Mithila Art & Culture Center) was established by
                a passionate group of Maithil diaspora members who recognized the urgent need to 
                preserve their ancestral art and culture in a rapidly globalizing world.
              </p>
              <p>
                Through festivals, exhibitions, educational programs, and international collaborations,
                the Center uses art and culture as a bridge between communities and as a platform for 
                social impact. Since 2019, we have been organizing the Mithila Festival USA, major art 
                exhibitions, and community events that bring together artists, scholars, diaspora 
                communities, and global audiences.
              </p>
              <p>
                Mithila art, also known as Madhubani painting, is one of the oldest art forms in the world, 
                with a history spanning over three millennia. Traditionally created by women on the mud walls 
                of their homes, these paintings depict mythology, nature, and daily life using natural dyes 
                and distinctive geometric patterns.
              </p>
              <p>
                Our flagship program, <strong>"Art for SDGs: The Mithila Heritage"</strong>, connects traditional 
                Mithila/Madhubani art with the United Nations Sustainable Development Goals (SDGs), positioning 
                culture as a driver for global awareness and change.
              </p>
            </div>

            <Button asChild className="mt-6 gap-2">
              <Link to="/mission">
                Our Mission & Vision
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 container mx-auto px-4">
          {[
            { icon: Sparkles, title: "Festivals", desc: "Annual cultural celebrations" },
            { icon: Globe, title: "UN Engagement", desc: "Global exhibitions & diplomacy" },
            { icon: Heart, title: "Artists", desc: "Empowering creators" },
            { icon: Building, title: "Community", desc: "Workshops & education" }
          ].map((item, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl text-center">
              <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 mithila-pattern">
        <SectionHeading eyebrow="Timeline" title="Journey of Mithila Art" />

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 border-l-2 border-primary/30">
              <div className="absolute left-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
              <div className="glass-card p-6 rounded-xl">
                <span className="text-primary font-semibold">{item.year}</span>
                <h3 className="font-playfair text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          {keyFacts.map((fact, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl text-center">
              <fact.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{fact.title}</h3>
              <p className="text-sm text-muted-foreground">{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-10">Our Partners & Collaborators</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="glass-card p-4 rounded-xl text-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.gallery.map((img, i) => (
            <img key={i} src={img} className="rounded-xl object-cover aspect-square" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Cultural Movement</h2>
        <p className="mb-6">Help preserve Mithila heritage for future generations.</p>

        <div className="flex justify-center gap-4">
          <Button asChild variant="secondary">
            <Link to="/contact">Get Involved</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/mission">Our Mission</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

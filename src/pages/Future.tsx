import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Building2, 
  Cloud, 
  Globe, 
  GraduationCap, 
  Palette, 
  Sparkles, 
  Target, 
  Users 
} from 'lucide-react';

// Components
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';

// Assets
import museumImage from '@/assets/museum-concept.jpg';
import GlobalChange from '../assets/GlobalChange.png';
import GlobalChange4 from '../assets/GlobalChange4.png';
import mithilaArtwork from '../assets/mithila-artwork.jpg';
import mithilaHero from '../assets/mithila-hero.jpg';
import festivalCelebration3 from '../assets/festival-celebration3.jpg';
import sdgMithilaArt from '../assets/sdg-mithila-art.jpg';
import masterArtist3 from '../assets/master-artist3.jpg';

const Future = () => {
  const majorInitiatives = [
    {
      icon: Building2,
      title: "Museum of Mithila Heritage (MoM New York)",
      status: "Landmark Aspiration",
      description: "A dedicated institution envisioned as a permanent home for Mithila artworks, artifacts, and archival material. The museum would host exhibitions, artist residencies, and educational programs for students and researchers.",
      features: [
        "Preserve and display Mithila artworks and artifacts",
        "Host permanent 'Art for SDGs' exhibitions",
        "Provide space for artist residencies",
        "Educational programs for students and researchers",
        "Archive of oral histories and traditional techniques",
        "Performance and event space for cultural programs"
      ]
    },
    {
      icon: Globe,
      title: "Expansion of Global & World Tour Programs",
      status: "In Progress",
      description: "Scale the World Tour 2025 exhibitions to more cities and countries, in collaboration with embassies, cultural centers, and diaspora groups worldwide.",
      features: [
        "Expand to 10+ international cities",
        "Partner with embassies and cultural centers globally",
        "Develop long-term museum partnerships",
        "Integrate Mithila art into university curricula",
        "Create traveling exhibition infrastructure",
        "Build sustainable touring model"
      ]
    },
    {
      icon: Cloud,
      title: "Digital Heritage Archive",
      status: "In Development",
      description: "Build a comprehensive digital archive and virtual gallery of Mithila artworks and SDG-themed exhibitions, making heritage accessible to researchers and learners worldwide.",
      features: [
        "High-resolution artwork digitization",
        "Virtual gallery experiences",
        "Interactive learning modules",
        "Video documentation of techniques",
        "Oral history recordings",
        "Open-access research database"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educational Expansion",
      status: "Strategic Goal",
      description: "Launch online courses and educational packets for schools and community organizations, focusing on art, heritage, and sustainability education.",
      features: [
        "Online certification courses",
        "School curriculum packages",
        "Teacher training programs",
        "Youth education modules",
        "Community workshop kits",
        "SDG-aligned educational content"
      ]
    }
  ];

  const youthInitiatives = [
    {
      icon: Users,
      title: "Youth Leadership Programs",
      description: "Establish structured fellowship programs around cultural organizing and SDG advocacy through art, developing the next generation of heritage leaders."
    },
    {
      icon: Palette,
      title: "Artist Training & Mentorship",
      description: "Offer more structured training and mentorship for young and emerging Mithila artists in the diaspora and in South Asia."
    },
    {
      icon: BookOpen,
      title: "Cultural Ambassador Network",
      description: "Expand the Youth Ambassador Program to train young Maithils as cultural representatives in schools and communities globally."
    }
  ];

  const roadmap = [
    { year: "Ancient Origins", milestone: "Mithila Art Tradition Begins", description: "Centuries-old folk tradition passed through generations" },
    { year: "2025", milestone: "World Tour Launch", description: "Global exhibitions begin across major cities" },
    { year: "2025-2026", milestone: "Digital Archive Phase 1", description: "1,000+ artworks digitized with oral histories" },
    { year: "2026", milestone: "Education Platform", description: "Online learning system launched globally" },
    { year: "2027", milestone: "Museum Planning", description: "Final architectural design of MoM New York" },
    { year: "2028", milestone: "Youth Fellowship Launch", description: "First cultural leadership fellows selected" },
    { year: "2029-2030", milestone: "Museum Opening", description: "Museum of Mithila Heritage opens in New York" }
  ];

  const allImages = [
    GlobalChange,
    GlobalChange4,
    mithilaArtwork,
    mithilaHero,
    festivalCelebration3,
    sdgMithilaArt,
    masterArtist3
  ];

  // Helper to format filenames for display
  const formatFileName = (filePath: string) => {
    const fileName = filePath.split('/').pop()?.split('.').shift() || '';
    return fileName
      .replace(/([A-Z]|\d+)/g, ' $1')
      .trim()
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
<section className="pt-32 pb-20 text-center px-4">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
    <Sparkles className="w-4 h-4 text-secondary" />
    <span className="text-sm font-medium text-secondary">Building Tomorrow</span>
  </div>

  <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
    Future <span className="gradient-text-cultural">Initiatives</span>
  </h1>

  <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed text-left md:text-justify hyphens-auto">
    Our ambitious vision for preserving and promoting Mithila heritage for generations
    to come, including landmark institutions, global expansion, and digital innovation.
  </p>
</section>

{/* IMPACT METRICS */}
<section className="py-12 bg-muted/20 border-y border-muted/30">
  <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {[
      { label: "UN HQ Exhibitions", value: "2" },
      { label: "Government Partners", value: "5+" },
      { label: "Official Proclamations", value: "Multiple" },
      { label: "Global Audience Reached", value: "10,000+" }
    ].map((stat, i) => (
      <div key={i} className="space-y-1">
        {/* Changed text-primary to text-secondary for better theme integration */}
        <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">
          {stat.value}
        </div>
        {/* Uppercase and tracking-wider creates a professional "stat" look */}
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* INITIATIVES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-10">Strategic Goals & Initiatives</h2>
          <div className="space-y-10 max-w-5xl mx-auto">
            {majorInitiatives.map((item, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <span className="text-xs bg-secondary/20 px-2 py-1 rounded">{item.status}</span>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-16">Time & History Roadmap</h2>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 top-0 h-full w-[2px] bg-secondary/30" />
            {roadmap.map((item, index) => (
              <div key={index} className="relative pl-14 pb-12 last:pb-0">
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <div className="w-3 h-3 bg-background rounded-full" />
                </div>
                <div className="glass-card rounded-2xl p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs mb-2">{item.year}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.milestone}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTH + IMAGE GALLERY */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-10">Youth & Community Goals</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {youthInitiatives.map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <item.icon className="w-6 h-6 mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={img}
                  alt={formatFileName(img)}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                  <p className="text-white text-md font-semibold text-center leading-snug">
                    {formatFileName(img)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   {/* DIPLOMATIC ENGAGEMENT CTA */}
<section className="py-20">
  <div className="container mx-auto px-4">
    {/* Using glass-card styling for consistency with the rest of the page */}
    <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto border border-secondary/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
        Start a Diplomatic Collaboration
      </h2>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
        We are actively seeking new partnerships with embassies, cultural institutes, and mission offices to advance the reach of Mithila art on the global stage.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" asChild>
          <Link to="/contact">Discuss Partnership</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/about">Learn Our Mission</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Future;
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Building2, Cloud, Globe, Users,
  Sparkles, Target, ArrowRight,
  GraduationCap, Palette, Video, BookOpen
} from 'lucide-react';

// ✅ Image imports
import museumImage from '@/assets/museum-concept.jpg';

import GlobalChange from "../assets/GlobalChange.png";
import GlobalChange4 from "../assets/GlobalChange4.png";
import mithilaArtwork from "../assets/mithila-artwork.jpg";
import mithilaHero from "../assets/mithila-hero.jpg";
import festivalCelebration3 from "../assets/festival-celebration3.jpg";
import sdgMithilaArt from "../assets/sdg-mithila-art.jpg";
import masterArtist3 from "../assets/master-artist3.jpg";

// ✅ Image array
const visionImages = [
  { img: GlobalChange, title: "Museum Concept" },
  { img: GlobalChange4, title: "World Tour" },
  { img: mithilaArtwork, title: "Youth Program" },
  { img: mithilaHero, title: "Education Platform" },
  { img: festivalCelebration3, title: "Artist Residency" },
  { img: sdgMithilaArt, title: "Research Center" },
  { img: masterArtist3, title: "Global Network" },
];

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
    { year: "2025", milestone: "World Tour Launch", description: "Expand Art for SDGs exhibitions to multiple international cities" },
    { year: "2025-2026", milestone: "Digital Archive Phase 1", description: "Launch digital collection with 1,000+ digitized artworks and oral histories" },
    { year: "2026", milestone: "Education Platform", description: "Online courses and school curriculum packages available" },
    { year: "2027", milestone: "Museum Planning", description: "Finalize MoM New York location and architectural planning" },
    { year: "2028", milestone: "Youth Fellowship Launch", description: "First cohort of cultural leadership fellows" },
    { year: "2029-2030", milestone: "Museum Opening", description: "Grand opening of Museum of Mithila Heritage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Building Tomorrow
              </span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Future <span className="gradient-text-cultural">Initiatives</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-justify">
              Our vision is to preserve, elevate, and globalize Mithila heritage 
              through innovative institutions, digital transformation, and 
              community-driven programs. By connecting tradition with modern 
              platforms, we aim to create lasting cultural impact, empower artists, 
              and ensure that the richness of Mithila art continues to inspire 
              future generations across the world.
            </p>

          </div>
        </div>
      </section>

      {/* ✅ FIXED: Vision Section wrapper added */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {visionImages.map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden relative group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white text-sm font-medium text-center px-2">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Hero Section - Option 2 */}
<section className="pt-32 pb-20 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />

  <div className="container mx-auto px-4 relative">
    <div className="max-w-4xl mx-auto text-center">

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
        <Sparkles className="w-4 h-4 text-secondary" />
        <span className="text-sm font-medium text-secondary">
          Building Tomorrow
        </span>
      </div>

      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
        Envisioning the <span className="gradient-text-cultural">Future of Mithila Heritage</span>
      </h1>

      <p className="text-xl text-muted-foreground leading-relaxed">
        Rooted in tradition and driven by innovation, our future initiatives seek to bring Mithila art to a global stage. Through museums, digital archives, educational programs, and international collaborations, we are building a future where cultural heritage is not only preserved but actively celebrated and shared with the world.
      </p>

    </div>
  </div>
</section>
{/* Hero Section - Option 3 */}
<section className="pt-32 pb-20 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />

  <div className="container mx-auto px-4 relative">
    <div className="max-w-4xl mx-auto text-center">

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
        <Sparkles className="w-4 h-4 text-secondary" />
        <span className="text-sm font-medium text-secondary">
          Building Tomorrow
        </span>
      </div>

      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
        Building the <span className="gradient-text-cultural">Future</span>
      </h1>

      <p className="text-xl text-muted-foreground leading-relaxed">
        We are shaping a future where Mithila art thrives beyond borders — through global exhibitions, digital platforms, and educational initiatives that empower artists, engage communities, and preserve cultural heritage for generations to come.
      </p>

    </div>
  </div>
</section>



      <Footer />
    </div>
  );
};

export default Future;

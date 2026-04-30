import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mandala3D } from "@/components/sections/Mandala3D";

import {
  Target,
  Leaf,
  Users,
  GraduationCap,
  Heart,
  Sun,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";

// SDG EDITION IMAGES
const sdgImages = {
  "2022": "https://i.imgur.com/xKiTFYr.jpeg",
  "2023": "https://i.imgur.com/susAJ7N.jpeg",
  "2024": "https://i.imgur.com/KlKJiOe.jpeg",
  "2025": "https://i.imgur.com/7DUDzIQ.jpeg",
};

// UN SECTION IMAGE
const unImage = "https://i.imgur.com/4bTBcSh.jpeg";

// GALLERY IMAGES
const galleryImages = [
  "https://i.imgur.com/7PZWNl6.jpeg",
  "https://i.imgur.com/tBAH1Q5.jpeg",
  "https://i.imgur.com/dtpBarU.jpeg",
  "https://i.imgur.com/4pkb8XL.jpeg",
  "https://i.imgur.com/MVoHTOQ.jpeg",
  "https://i.imgur.com/lrx3uQx.jpeg",
  "https://i.imgur.com/DPjOc9U.jpeg",
  "https://i.imgur.com/Bix4ku5.jpeg",
];

const ArtForSDGs = () => {
  const sdgEditions = [
    {
      year: "2022",
      sdg: "SDG 4 – Quality Education",
      theme: "Education Through Art",
      description:
        "The 2022 festival edition highlighted education through themed artworks and exhibitions, emphasizing access to learning and empowerment via art.",
      color: "bg-red-600",
    },
    {
      year: "2023",
      sdg: "SDG 5 – Gender Equality",
      theme: "Women's Voices in Art",
      description:
        "The 2023 festival focused on Gender Equality, with most participating artists being women and artworks depicting voices of justice and empowerment.",
      color: "bg-orange-500",
    },
    {
      year: "2024",
      sdg: "SDG 13 – Climate Action",
      theme: "Art for Climate Awareness",
      description:
        "At the UN Headquarters, artworks depicted drought, extreme weather, and community struggles, using folk art as a climate storytelling tool.",
      color: "bg-green-600",
    },
    {
      year: "2025",
      sdg: "SDG 15 – Life on Land",
      theme: "Biodiversity & Environmental Stewardship",
      description:
        "The 2025 Festival explores biodiversity, nature, and environmental stewardship through children's workshops and exhibitions.",
      color: "bg-green-500",
    },
  ];

  const programComponents = [
    {
      icon: Target,
      title: "SDG-Themed Exhibitions",
      description:
        "Curated exhibitions featuring artworks that visually communicate Sustainable Development Goals using Mithila motifs.",
    },
    {
      icon: GraduationCap,
      title: "Educational Workshops",
      description:
        "Hands-on workshops connecting traditional painting techniques with sustainability and SDG learning.",
    },
    {
      icon: Users,
      title: "Community Programming",
      description:
        "Panels, talks, and cultural events uniting artists, scholars, policymakers, and community members.",
    },
    {
      icon: Award,
      title: "Artist Recognition",
      description:
        "Awards highlighting artists whose work addresses SDG themes, especially women and youth.",
    },
    {
      icon: Heart,
      title: "Art Auctions",
      description:
        "Fundraising events supporting artists and expanding SDG-aligned cultural programs.",
    },
    {
      icon: Leaf,
      title: "Environmental Awareness",
      description:
        "Programs that promote climate action, biodiversity, and environmental sustainability through art.",
    },
  ];

  const impactStats = [
    { value: "4+", label: "SDGs Addressed Annually" },
    { value: "100+", label: "Artists Engaged" },
    { value: "1,000+", label: "Workshop Participants" },
    { value: "5+", label: "Countries Reached" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* LEFT SIDE - TEXT */}
            <div className="text-left">
              <h1 className="font-playfair text-5xl font-bold">
                Mithila Art for{" "}
                <span className="gradient-text-primary">Global Change</span>
              </h1>

              <p className="text-xl text-muted-foreground mt-6 leading-relaxed text-justify hyphens-auto">
                Mithila art is a timeless cultural expression that blends
                traditional heritage with modern global values. Rooted in
                Janakpur’s rich artistic legacy, it reflects themes of nature,
                community, and harmony. Through powerful visual storytelling, it
                highlights key global issues such as climate change, gender
                equality, cultural preservation, and social justice. This art
                form transforms complex challenges into meaningful narratives
                that are easy to understand and connect with. By bridging local
                artisans with global platforms, Mithila art empowers communities
                and promotes dialogue, making it a living force for education,
                awareness, and sustainable change.
              </p>
            </div>

            {/* RIGHT SIDE - 3D MANDALA */}
            <div className="flex justify-center items-center w-full h-[400px] lg:h-[500px]">
              <Mandala3D />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src="https://imgur.com/RUMJsmk.jpg"
              alt="Mithila Art for SDGs"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SDG Editions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            SDG-Focused Editions
          </h2>

          <div className="space-y-10 max-w-5xl mx-auto">
            {sdgEditions.map((edition) => (
              <div key={edition.year} className="glass-card p-8 rounded-3xl">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Text */}
                  <div className="lg:col-span-2">
                    <h3 className="font-playfair text-xl font-semibold">
                      {edition.sdg}
                    </h3>
                    <p className="text-primary mt-2 mb-4">{edition.theme}</p>
                    <p className="text-muted-foreground">
                      {edition.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={sdgImages[edition.year]}
                      alt={edition.theme}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-4xl font-bold mb-12">
            Program Components
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programComponents.map((comp, i) => (
              <div key={i} className="glass-card p-6 rounded-xl">
                <div className="w-12 h-12 bg-gradient-sindoor rounded-xl flex items-center justify-center mb-4">
                  <comp.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-playfair text-lg font-bold mb-2">
                  {comp.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6">
                UN Partnership & Global Reach
              </h2>
              <p className="text-muted-foreground mb-4">
                Exhibited at UN Headquarters during the High-Level Political
                Forum and major diplomatic events.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img
                src={unImage}
                alt="UN Partnership"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-sindoor text-white text-center">
        <Sun className="w-12 h-12 mx-auto mb-6 opacity-90" />
        <h2 className="font-playfair text-3xl font-bold mb-4">
          Partner in Our Mission
        </h2>
        <p className="max-w-2xl mx-auto opacity-90 mb-8">
          Bring Art for SDGs to your organization, school, or community.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default ArtForSDGs;

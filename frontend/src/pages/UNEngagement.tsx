import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Building, Award, Users, FileText, Calendar, MapPin, Handshake, Landmark } from 'lucide-react';

const UNEngagement = () => {
  const majorExhibitions = [
    {
      year: "April 2019",
      title: "Inaugural Exhibition: Art for SDGs",
      location: "UN Headquarters, New York",
      description: "The groundbreaking exhibition 'Art for SDGs: The Mithila Heritage' was presented at the UN Headquarters in collaboration with the Permanent Mission of Nepal. This pioneering show positioned Mithila art as a vehicle to communicate the SDGs to global delegates and visitors.",
      highlight: "First-ever Mithila art exhibition at UN Headquarters",
      images: [
        "https://i.imgur.com/tBAH1Q5.jpeg", // new image
        "https://i.imgur.com/s5J4nwG.jpeg" // previous placeholder
      ]
    },
    {
      year: "July 2024",
      title: "High-Level Political Forum Exhibition",
      location: "UN Headquarters (CB-01 Curved Wall)",
      description: "A major exhibition during the High-Level Political Forum focused on SDG 13: Climate Action, featuring artworks that speak to climate change, environmental stress, and community resilience. Jointly organized by the Permanent Mission of Nepal, Consulate General of Nepal in New York, and Mithila Center USA.",
      highlight: "Featured during UN's highest-level sustainability forum",
      images: [
        " https://i.imgur.com/4bTBcSh.jpeg", // image for 2024 exhibition
        "https://i.imgur.com/1JUU91a.jpeg "
      ]
    }
  ];

  const diplomaticPartners = [
    {
      entity: "Permanent Mission of Nepal to UN",
      type: "Primary Diplomatic Partner",
      collaboration: "Joint organization of UN exhibitions, cultural diplomacy initiatives"
    },
    {
      entity: "Consulate General of Nepal, New York",
      type: "Government Partner",
      collaboration: "Festival support, official receptions, community outreach"
    },
    {
      entity: "NYC Mayor's Office",
      type: "City Government",
      collaboration: "Official proclamations, cultural heritage recognition"
    },
    {
      entity: "Queens Borough Hall",
      type: "Local Government",
      collaboration: "Event hosting, community program support"
    },
    {
      entity: "Flushing Town Hall",
      type: "Cultural Institution",
      collaboration: "Arts grants, exhibition space, community programming"
    }
  ];

  const achievements = [
    { icon: Building, value: "2", label: "UN HQ Exhibitions" },
    { icon: FileText, value: "Multiple", label: "Official Proclamations" },
    { icon: Landmark, value: "5+", label: "Government Partners" },
    { icon: Users, value: "10,000+", label: "Global Audience Reached" }
  ];

  const culturalDiplomacyImpact = [
    "Positioned Mithila art as a tool for communicating UN Sustainable Development Goals",
    "Demonstrated how cultural diplomacy and folk art can contribute to international policy conversations",
    "Created platform for dialogue between artists, diplomats, and global policymakers",
    "Elevated recognition of South Asian heritage in international forums",
    "Built bridges between diaspora communities and their ancestral cultural practices"
  ];

  const galleryImages = [
    "https://i.imgur.com/4bTBcSh.jpeg",
    "https://i.imgur.com/s5J4nwG.jpeg",
    "https://i.imgur.com/1JUU91a.jpeg",
    "https://i.imgur.com/lVogGfQ.jpeg",
    "https://i.imgur.com/WrYZKrh.jpeg",
    "https://i.imgur.com/fXsmjdt.jpeg",
    "https://i.imgur.com/Lj8cA3M.jpeg",
    "https://i.imgur.com/aR2ZDoe.jpeg"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Globe className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">International Recognition</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              UN & Diplomatic <span className="gradient-text-cultural">Engagement</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-justify max-w-3xl mx-auto hyphens-auto">
              A defining feature of Mithila Center USA is its deep partnership with United Nations 
              institutions and diplomatic missions, bringing Mithila art to the world's most important 
              platforms for cultural diplomacy and sustainable development dialogue.
            </p>
          </div>
        </div>
      </section>

      {/* Major UN Exhibitions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Major UN Exhibitions
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Our exhibitions at UN Headquarters have positioned Mithila art as a powerful medium 
            for communicating sustainable development messages to global audiences.
          </p>
          
          <div className="space-y-8 max-w-5xl mx-auto">
            {majorExhibitions.map((exhibition, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 md:p-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                        {exhibition.year}
                      </span>
                      <span className="text-primary font-medium text-sm flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exhibition.location}
                      </span>
                    </div>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                      {exhibition.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exhibition.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-lg">
                      <Award className="w-4 h-4 text-accent-foreground" />
                      <span className="text-sm font-medium text-accent-foreground">
                        {exhibition.highlight}
                      </span>
                    </div>
                  </div>
                  
                  {/* Exhibition Images */}
                  <div className="grid grid-cols-1 gap-4">
                    {exhibition.images.map((img, idx) => (
                      <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden">
                        <img
                          src={img}
                          alt={`${exhibition.title} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diplomatic Partners */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Diplomatic & Government Partners
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16 md:text-justify hyphens-auto">
            Our exhibitions and programs have been supported or hosted by major government 
            bodies and cultural institutions, underscoring our role as a cultural partner in 
            city and state-level diplomacy around heritage and sustainability.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {diplomaticPartners.map((partner, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 group hover:shadow-elevated transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Handshake className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">
                  {partner.entity}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {partner.type}
                </p>
                <p className="text-sm text-muted-foreground">
                  {partner.collaboration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Diplomacy Impact */}
{/* Cultural Diplomacy Impact */}
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text & Bullet Points */}
        <div>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Cultural Diplomacy Impact
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through our UN partnerships and diplomatic engagements, Mithila Center USA has 
            demonstrated how cultural diplomacy and folk art can contribute to international 
            policy conversations and global awareness.
          </p>
          <ul className="space-y-4">
            {culturalDiplomacyImpact.map((impact, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                {impact}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative">
          <img
            src="https://i.imgur.com/bwkzFfx.jpeg"
            alt="Cultural Diplomacy Impact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Achievements Stats */}
      <section className="py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            International Achievements
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            {achievements.map((stat, index) => (
              <div key={index}>
                <stat.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="font-playfair text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Moments from UN Engagements
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt={`UN Engagement ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Interested in bringing Mithila art to your institution, embassy, or diplomatic event? 
            Let's discuss collaboration opportunities for cultural diplomacy and heritage promotion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/art-for-sdgs">Explore Art for SDGs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UNEngagement;

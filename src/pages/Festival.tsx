import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Music, Palette, Utensils, Users, Star, Camera, Award, BookOpen, Mic, Heart,  Sun } from 'lucide-react';
import { LotusFrame3D } from '@/components/sections/LotusFrame3D';

const Festival = () => {
  const festivalHighlights = [
    {
      icon: Palette,
      title: "Art Exhibitions & Auctions",
      description: "Curated showings of traditional and contemporary Mithila artworks by artists from Nepal, India, the U.S., and other countries, with fundraising auctions supporting artist communities."
    },
    {
      icon: Award,
      title: "Kids Art Workshops & Awards",
      description: "Hands-on sessions where children learn Mithila painting techniques and environmental or social themes (SDG-aligned), culminating in recognition and awards."
    },
    {
      icon: BookOpen,
      title: "Cultural & Literary Programs",
      description: "Panel discussions on Mithila art, culture, literature, and linguistics; music and dance performances; storytelling; and poetry celebrating Maithil heritage."
    },
    {
      icon: Utensils,
      title: "Taste of Mithila",
      description: "Culinary showcases featuring authentic Mithila cuisine, adding a sensory cultural dimension to the festival with traditional recipes and cooking demonstrations."
    },
    {
      icon: Mic,
      title: "Community Leadership Panels",
      description: "Dialogues with community leaders, scholars, and organizations on preserving Mithila culture in the diaspora, featuring heritage and identity discussions."
    },
    {
      icon: Music,
      title: "Traditional Performances",
      description: "Live Maithili music, folk dances, and theatrical performances celebrating the rich performing arts traditions of the Mithila region."
    }
  ];

  const festivalHistory = [
    {
      year: "2025",
      theme: "Life on Land (SDG 15)",
      highlights: "6th Annual Festival, biodiversity workshops, environmental stewardship focus, Master Artist S.C. Suman featured",
      location: "New York City & Virtual"
    },
    {
      year: "2024",
      theme: "Climate Action (SDG 13)",
      highlights: "UN Headquarters exhibition during HLPF, climate-focused artworks, diplomatic receptions",
      location: "UN New York, Diversity Plaza"
    },
    {
      year: "2023",
      theme: "Gender Equality (SDG 5)",
      highlights: "Women artists showcase, social justice artworks, 4th Annual Festival, Congresswoman participation",
      location: "Jackson Heights, Queens"
    },
    {
      year: "2022",
      theme: "Quality Education (SDG 4)",
      highlights: "Education through art programming, school partnerships, community outreach",
      location: "Various NYC Venues"
    },
    {
      year: "2021",
      theme: "Community Resilience",
      highlights: "Congressional Proclamation by Rep. Grace Meng, hybrid virtual-in-person format, pandemic recovery",
      location: "Virtual & In-Person"
    },
    {
      year: "2019",
      theme: "Inaugural Festival",
      highlights: "First Mithila Festival USA, UN Headquarters exhibition debut, Permanent Mission of Nepal partnership",
      location: "UN HQ & New York"
    }
  ];

  const culturalObservances = [
    {
      name: "Jur Sital (Mithila New Year)",
      description: "The traditional Mithila New Year celebration, marking the beginning of the agricultural calendar and a time for family gatherings and rituals."
    },
    {
      name: "Folk King Salhesh Jayanti",
      description: "Celebration honoring the legendary folk hero Salhesh, an important cultural figure in Maithil folklore and identity."
    },
    {
      name: "Art & Heritage Week",
      description: "Multi-day programming featuring exhibitions, workshops, and cultural events bringing together the global Maithil community."
    }
  ];

  // Festival gallery images using your Imgur links
  const festivalGalleryImages = [
    "https://i.imgur.com/KUjfr4D.jpeg", // Opening Ceremony
    "https://i.imgur.com/TTENiK2.jpeg", // Art Exhibition
    "https://i.imgur.com/cqkzwxb.jpeg", // Kids Workshop
    "https://i.imgur.com/xEMkmUC.png", // Cultural Performance
    "https://i.imgur.com/bobu3b1.jpeg", // Taste of Mithila
    "https://i.imgur.com/bwkzFfx.jpeg", // Award Ceremony
    "https://i.imgur.com/KUjfr4D.jpeg", // Community Gathering (reuse)
    "https://i.imgur.com/TTENiK2.jpeg"  // Artist Demonstration (reuse)
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero */}


      
{/* Laxmi Puja Hero */}
<section className="pt-32 pb-20 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10" />

  <div className="container mx-auto px-4 relative">

    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

      {/* LEFT SIDE - TEXT */}
      <div className="text-center lg:text-left">

        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full mb-6">
          <span className="text-sm font-medium text-yellow-700">
            Sacred Festival of Prosperity
          </span>
        </div>

        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
          Laxmi Puja in <span className="gradient-text-primary">Mithila Tradition</span>
        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed text-justify">
          Laxmi Puja is one of the most sacred festivals in Mithila culture, dedicated to Goddess Lakshmi,
          the symbol of wealth, prosperity, and abundance. Celebrated with deep devotion across Maithil households,
          this festival beautifully blends spirituality with artistic expression. Traditional Mithila paintings,
          decorated homes, and glowing oil lamps create an atmosphere of harmony, welcoming prosperity, positivity,
          and spiritual well-being into daily life.
        </p>

      </div>

      {/* RIGHT SIDE - 3D IMAGE */}
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md hover:scale-105 transition duration-500">
          <LotusFrame3D className="w-full" />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
              <img 
                src="https://i.imgur.com/KUjfr4D.jpeg" 
                alt="Mithila Festival Celebration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider mb-2">6th Annual Festival 2025</p>
                  <p className="text-white font-playfair text-2xl font-semibold">
                    Join us for a celebration of heritage, community, and artistic excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Sama Chakeva Section */}
<section className="py-20">
  <div className="container mx-auto px-4">

    <div className="max-w-6xl mx-auto">

      {/* TEXT FIRST */}
      <div>

        {/* Decorative Title Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-10 bg-gradient-sindoor"></div>
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              Mithila Festival Tradition
            </span>
            <div className="h-[2px] w-10 bg-gradient-sindoor"></div>
          </div>

          <h2 className="font-playfair text-4xl font-bold text-foreground">
            Sama Chakeva – <span className="gradient-text-primary">Celebration of Sibling Bond</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Sama Chakeva is a traditional Mithila festival that beautifully celebrates the bond between brothers and sisters. 
          Rooted in ancient folklore, it symbolizes love, protection, and family unity through storytelling, songs, and rituals.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          During this festival, young girls craft symbolic clay birds representing Sama and Chakeva, 
          sing traditional folk songs, and perform rituals that express warmth, creativity, and emotional connection. 
          It reflects the deep cultural values of Mithila where family and relationships are honored with devotion and joy.
        </p>
      </div>

      {/* IMAGE BELOW TEXT */}
      <div className="mt-10 rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Sama_Chakeva_Sarlahi_2.jpg"
          alt="Sama Chakeva Festival Mithila Art"
          className="w-full h-[400px] object-cover"
        />
      </div>

    </div>
  </div>
</section>
{/* Chhath Puja Section */}
<section className="py-20">
  <div className="container mx-auto px-4">

    <div className="max-w-6xl mx-auto">

      {/* TEXT FIRST */}
      <div>

        {/* Decorative Title Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
           
          </div>

          <h2 className="font-playfair text-4xl font-bold text-foreground">
            Chhath Puja – <span className="gradient-text-primary">Worship of the Sun God</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Chhath Puja is one of the most sacred and spiritually powerful festivals of Mithila, dedicated to Surya Dev (Sun God) and Chhathi Maiya. 
          It is a festival of purity, discipline, and deep devotion, where devotees offer prayers standing in rivers and ponds during sunrise and sunset.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          This ancient ritual symbolizes gratitude toward nature, life energy, and cosmic balance. Families observe strict fasting, prepare traditional offerings,
          and gather at riverbanks with devotion, making Chhath Puja one of the most powerful expressions of faith and environmental harmony in Mithila culture.
        </p>
      </div>

      {/* IMAGE BELOW TEXT */}
      <div className="mt-10 rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="https://media.istockphoto.com/id/1802542097/photo/an-ancient-hindu-festival-dedicated-to-lord-surya-and-chhathi.jpg?s=612x612&w=0&k=20&c=PLOeedEBAxrkW0vjaJV_98D5b9Zfzwjm57N5jD5k5Yg="
          alt="Chhath Puja Mithila Festival Sunrise Ritual"
          className="w-full h-[400px] object-cover"
        />
      </div>

    </div>
  </div>
</section>
{/* Jhijhiya Festival Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      
      {/* TEXT FIRST */}
      <div>
        {/* Decorative Title Header */}
        <div className="mb-6">
          <h2 className="font-playfair text-4xl font-bold text-foreground">
            Jhijhiya – <span className="gradient-text-primary">Dance of Spirits and Mystery</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Jhijhiya is a mesmerizing and mysterious folk dance tradition of the Mithila region, performed primarily by women during the Dashain festival. 
          The dancers carry intricate, perforated clay lanterns (Jhijhiya) on their heads, inside which a flame burns throughout the performance.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          The dance is both a spiritual offering and a demonstration of focus and balance. As the women dance to the rhythm of folk music, the 
          flickering lights create an ethereal atmosphere. Jhijhiya is deeply rooted in the cultural identity of Mithila, symbolizing the 
          victory of light over darkness and the protection of the community from malevolent forces.
        </p>
      </div>

      {/* IMAGE BELOW TEXT */}
      <div className="mt-10 rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Women_performing_Jhijhiya_dance.jpg"
          alt="Jhijhiya Dance Mithila Tradition"
          className="w-full h-[400px] object-cover"
        />
      </div>

    </div>
  </div>
</section>
{/* Jur Sital Section */}
<section className="py-20">
  <div className="container mx-auto px-4">

    <div className="max-w-6xl mx-auto">

      {/* TEXT FIRST */}
      <div>

        {/* Decorative Title Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            
          </div>

          <h2 className="font-playfair text-4xl font-bold text-foreground">
            Jur Sital – <span className="gradient-text-primary">Mithila New Year</span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Jur Sital marks the traditional New Year of Mithila, symbolizing renewal, freshness, and harmony with nature. 
          It is celebrated at the beginning of the agricultural cycle, bringing hope, prosperity, and new beginnings for families and communities.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          On this day, elders bless younger members with cool water and good wishes for health and happiness. 
          Traditional foods, cultural rituals, and family gatherings define this festival, making it a beautiful expression of Mithila’s connection with nature, agriculture, and seasonal balance.
        </p>
      </div>

      {/* IMAGE BELOW TEXT */}
      <div className="mt-10 rounded-2xl overflow-hidden shadow-elevated">
        <img
          src="https://mithilalegacy.com/_next/image?url=https%3A%2F%2Fcdn.mithilalegacy.com%2Ffestivals%2Fjur-sital.webp&w=3840&q=75"
          alt="Jur Sital Mithila New Year Celebration"
          className="w-full h-[400px] object-cover"
        />
      </div>

    </div>
  </div>
</section>




      {/* Festival Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Experience Mithila Culture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every year, the Mithila Festival USA brings together thousands of community members, 
              artists, scholars, and culture enthusiasts for a weekend of art, music, food, and 
              celebration. The festival has grown into a multi-day hybrid program (virtual and in-person) 
              hosted at Diversity Plaza in Jackson Heights, other New York venues, and online platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {festivalHighlights.map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 group hover:shadow-elevated transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-sindoor flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Observances */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Cultural Observances
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {culturalObservances.map((observance, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {observance.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {observance.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival History */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Festival History
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Since 2019, each Mithila Festival USA has focused on specific SDG themes while 
            celebrating traditional Maithil cultural observances.
          </p>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {festivalHistory.map((festival, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-sindoor flex items-center justify-center">
                    <span className="font-playfair text-2xl font-bold text-primary-foreground">
                      {festival.year}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                    {festival.theme}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {festival.highlights}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{festival.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Join the Celebration
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  The festival draws participation from dignitaries, ambassadors, UN officials, 
                  and elected representatives, making it a premier platform for cultural diplomacy 
                  and community engagement.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">When</p>
                      <p className="text-muted-foreground text-sm">April annually (around Jur Sital)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Where</p>
                      <p className="text-muted-foreground text-sm">Diversity Plaza, Jackson Heights, Queens & Virtual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Attendance</p>
                      <p className="text-muted-foreground text-sm">2,000-3,000+ participants annually</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Community Gathering Image */}
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="https://i.imgur.com/bobu3b1.jpeg" 
                  alt="Community Gathering" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12 max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-foreground">
              Festival Moments
            </h2>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/gallery">
                <Camera className="w-4 h-4" />
                View All Photos
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {festivalGalleryImages.map((img, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden relative">
                <img 
                  src={img} 
                  alt={`Festival Image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Don't Miss Out</span>
          </div>
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Join Us at the Next Festival
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Stay updated on festival dates, volunteer opportunities, sponsorship packages, 
            and ways to participate in this celebration of Maithil heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">Get Notified</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Become a Sponsor</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Festival;

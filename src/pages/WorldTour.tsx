import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, MapPin, Calendar, Users, ExternalLink, Star, Plane, Building, Handshake } from 'lucide-react';
import BookGallery from '@/components/sections/BookGallery';

const WorldTour = () => {
  const worldTour2025 = {
    title: "Art for SDGs: The Mithila Heritage – World Tour 2025",
    description: "A traveling exhibition series anchored in SDG themes, starting with programs in New York and expanding to other locations worldwide. The tour features Master Artist S.C. Suman and curated Mithila artworks aligned with SDG 15: Life on Land.",
    goals: [
      "Present Mithila art and SDG-themed exhibitions in different cities and countries",
      "Collaborate with embassies, cultural centers, and diaspora organizations",
      "Offer workshops, talks, and youth activities alongside exhibitions",
      "Deepen understanding of both Mithila culture and global development goals",
      "Build long-term partnerships with museums and universities"
    ]
  };

  const tourConcept = [
    {
      icon: Globe,
      title: "Global Exhibitions",
      description: "Presenting Mithila art in major cities worldwide, bringing traditional artwork to new audiences and cultural contexts."
    },
    {
      icon: Handshake,
      title: "Embassy Partnerships",
      description: "Collaborating with embassies, consulates, and diplomatic missions to leverage cultural diplomacy networks."
    },
    {
      icon: Users,
      title: "Diaspora Engagement",
      description: "Connecting with Maithil and South Asian diaspora communities across different countries for cultural programming."
    },
    {
      icon: Building,
      title: "Institutional Collaborations",
      description: "Partnering with museums, universities, and cultural centers to integrate Mithila art into global dialogues."
    }
  ];

  const featuredEvents = [
    {
      title: "World Tour Exhibition featuring Master Artist S.C. Suman",
      date: "May 15, 2025",
      location: "New York City",
      description: "Curated Mithila artworks aligned with SDG 15: Life on Land, featuring works by renowned Master Artist S.C. Suman.",
      type: "Exhibition"
    },
    {
      title: "6th Annual Mithila Festival USA",
      date: "April 2025",
      location: "Diversity Plaza, Jackson Heights",
      description: "Annual festival celebration with World Tour preview, featuring workshops, performances, and community programming.",
      type: "Festival"
    },
    {
      title: "Art for SDGs Workshop Series",
      date: "2025 (Multiple Dates)",
      location: "Various Locations",
      description: "Educational workshops connecting Mithila painting techniques with SDG themes for diverse audiences.",
      type: "Workshop"
    }
  ];

  const futureDestinations = [
    { city: "Washington D.C.", country: "USA", status: "Planning" },
    { city: "London", country: "UK", status: "In Discussion" },
    { city: "Toronto", country: "Canada", status: "In Discussion" },
    { city: "Kathmandu", country: "Nepal", status: "Partnership Active" },
    { city: "New Delhi", country: "India", status: "In Discussion" },
    { city: "Geneva", country: "Switzerland", status: "Exploring" }
  ];

  const impactGoals = [
    { value: "10+", label: "Cities Targeted" },
    { value: "5+", label: "Countries" },
    { value: "50,000+", label: "Expected Visitors" },
    { value: "100+", label: "Artworks Toured" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-32 md:pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Globe className="w-4 h-4 text-secondary animate-spin" style={{ animationDuration: '10s' }} />
              <span className="text-sm font-medium text-secondary">Global Outreach</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Global & World <span className="gradient-text-cultural">Tour</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To extend our impact beyond New York, Mithila Center USA is leading a global touring 
              initiative that brings Mithila art and SDG-themed exhibitions to audiences worldwide.
            </p>
          </div>
        </div>
      </section>
                <BookGallery />
          

      {/* World Tour 2025 Feature */}
      <section className="py-10 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-medium text-primary">Featured Initiative</span>
                </div>
                <div className="px-4 py-2 bg-accent/20 rounded-full">
                  <span className="text-sm font-medium text-accent-foreground">2025</span>
                </div>
              </div>
              
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">
                {worldTour2025.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {worldTour2025.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Tour Objectives */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Tour Objectives</h3>
                  <ul className="space-y-3">
                    {worldTour2025.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Updated Image */}
                <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden relative">
                  <img
                    src="https://i.imgur.com/5BfMzx7.jpeg"
                    alt="World Tour Promotional"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Concept */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            The Global Tour Concept
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Our touring initiative goes beyond exhibitions to create comprehensive cultural 
            experiences that educate, inspire, and connect communities worldwide.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tourConcept.map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center group hover:shadow-elevated transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-peacock mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
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

      {/* Impact Goals */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {impactGoals.map((stat, index) => (
              <div key={index}>
                <div className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-10 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Featured 2025 Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featuredEvents.map((event, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 group hover:shadow-elevated transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {event.location}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Destinations */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Future Destinations
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            We're actively building partnerships to bring Mithila art to new cities and countries, 
            collaborating with embassies, cultural centers, and diaspora communities.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {futureDestinations.map((destination, index) => (
              <div key={index} className="glass-card rounded-xl p-4 text-center group hover:bg-secondary/5 transition-colors">
                <Globe className="w-8 h-8 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-playfair font-semibold text-foreground text-sm">
                  {destination.city}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {destination.country}
                </p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  destination.status === 'Partnership Active' 
                    ? 'bg-green-100 text-green-700' 
                    : destination.status === 'Planning'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {destination.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Global Footprint - Updated with Mithila Image */}
      <section className="py-10 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Our Global Footprint
          </h2>
          
          <div className="aspect-[2/1] rounded-2xl overflow-hidden relative max-w-5xl mx-auto shadow-elevated group">
            <img
              src="https://images.firstpost.com/wp-content/uploads/large_file_plugin/2020/03/1583161654_Mithila_9.jpg"
              alt="Mithila Painting Krishna Radha - Global Heritage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-white/90 text-sm uppercase tracking-wider mb-2">Mithila Art Goes Global</p>
              <p className="text-white font-playfair text-xl md:text-2xl font-semibold">
                From Janakpur to the World: Taking Heritage Across Continents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Gallery - Updated with Mithila Images */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Tour Highlights
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                img: "https://i.imgur.com/KUjfr4D.jpeg",
                title: "Master Artist S.C. Suman"
              },
              {
                img: "https://i.imgur.com/TTENiK2.jpeg", 
                title: "Exhibition Setup"
              },
              {
                img: "https://i.imgur.com/bobu3b1.jpeg",
                title: "Opening Ceremony"
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fsp4EnZhGPxWsRyVhzHV3cy27vzuIXemHw&s",
                title: "Visitor Engagement"
              },
              {
                img: "https://i.imgur.com/cqkzwxb.jpeg",
                title: "Workshop Session"
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Sama_Chakeva_Sarlahi_2.jpg",
                title: "Cultural Performance"
              }
            ].map((item, index) => (
              <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden relative group">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-background" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Plane className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Host an Exhibition
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Interested in bringing Mithila art to your museum, gallery, embassy, or cultural institution? 
            We'd love to discuss collaboration opportunities for the World Tour.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-background text-secondary hover:bg-background/90">
              <Link to="/contact">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary hover:bg-secondary-foreground/10">
              <Link to="/art-for-sdgs">Learn About Art for SDGs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorldTour;
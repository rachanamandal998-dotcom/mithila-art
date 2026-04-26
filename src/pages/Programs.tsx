import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Palette, GraduationCap, Users, Heart, Building, Video, BookOpen, Handshake, Award, Lightbulb, Globe, MessageCircle } from 'lucide-react';
import kidsImage from '@/assets/kids-workshop-illustration.jpg';

const Programs = () => {
  const mainPrograms = [
    {
      icon: Palette,
      title: "Kids' Art Workshops & Competitions",
      description: "Recurring workshops that encourage children from diverse backgrounds to learn Mithila painting and discuss SDG topics in age-appropriate ways. Programs culminate in recognition and awards celebrating young artists' achievements.",
      audience: "Children (Ages 5-15)",
      format: "In-person & Virtual",
      sdgConnection: "Aligned with annual SDG themes"
    },
    {
      icon: GraduationCap,
      title: "Educational School Programs",
      description: "Curriculum-aligned programs bringing Mithila art into classrooms, connecting art to history, geography, environmental science, and sustainability education through hands-on creative activities.",
      audience: "K-12 Students & Teachers",
      format: "School visits & Online modules",
      sdgConnection: "SDG 4: Quality Education"
    },
    {
      icon: Users,
      title: "Community Art Exhibitions",
      description: "Through support such as Arts Grants for Queens, we organize community shows that celebrate cultural festivals while raising awareness of SDGs among local residents. These exhibitions connect heritage with contemporary issues.",
      audience: "General Public",
      format: "Gallery exhibitions",
      sdgConnection: "Multiple SDGs addressed"
    },
    {
      icon: BookOpen,
      title: "Expert Panels & Lectures",
      description: "Sessions with professors, cultural historians, and master artists exploring Mithila art, literature, and linguistics, and the need for heritage preservation. These programs deepen understanding of cultural significance.",
      audience: "Scholars, Artists, Community",
      format: "Panel discussions & Lectures",
      sdgConnection: "Cultural preservation focus"
    },
    {
      icon: Heart,
      title: "Artist Mentorship Program",
      description: "Connecting master artists from Mithila with emerging artists in the diaspora to preserve traditional knowledge and techniques through structured mentorship relationships.",
      audience: "Aspiring Mithila artists",
      format: "3-6 month hybrid program",
      sdgConnection: "SDG 4 & 8: Education & Decent Work"
    },
    {
      icon: Building,
      title: "Corporate & Institutional Programs",
      description: "Team-building workshops and cultural experiences for organizations seeking unique, meaningful employee engagement activities that connect creativity with cultural awareness.",
      audience: "Businesses & Organizations",
      format: "On-site or virtual",
      sdgConnection: "Cultural diplomacy"
    }
  ];

  const communityInitiatives = [
    {
      icon: Handshake,
      title: "Artist Cooperative",
      description: "Fair trade marketplace connecting rural artists directly with global buyers, ensuring sustainable livelihoods and economic empowerment for traditional Mithila artists."
    },
    {
      icon: Globe,
      title: "Cultural Archive Initiative",
      description: "Digital preservation of traditional designs, techniques, and oral histories from master artists, creating a comprehensive repository for future generations."
    },
    {
      icon: Award,
      title: "Youth Ambassador Program",
      description: "Training young Maithils to become cultural ambassadors in their schools and communities, empowering the next generation of heritage advocates."
    },
    {
      icon: Heart,
      title: "Artist Relief Fund",
      description: "Emergency support for traditional artists facing financial hardship, natural disasters, or other crises affecting their ability to practice their craft."
    },
    {
      icon: Lightbulb,
      title: "Youth Leadership Fellowships",
      description: "Structured programs around cultural organizing and SDG advocacy through art, developing future leaders in heritage preservation."
    },
    {
      icon: MessageCircle,
      title: "Community Dialogue Series",
      description: "Regular forums for diaspora members, scholars, and community leaders to discuss Mithila culture preservation in contemporary contexts."
    }
  ];

  const impactStats = [
    { value: "1,000+", label: "Workshop Participants Annually" },
    { value: "50+", label: "Workshops & Events" },
    { value: "100+", label: "Artists Supported" },
    { value: "20+", label: "Schools Engaged" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Programs & <span className="gradient-text-primary">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground text-left md:text-justify  hyphens-auto leading-relaxed">
              Beyond headline festivals and exhibitions, Mithila Center USA runs comprehensive 
              educational workshops, community initiatives, and programs that make us not just an 
              exhibition organizer, but a community education hub rooted in art and social consciousness.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
              <img 
                src={kidsImage} 
                alt="Kids Workshop" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <p className="text-white font-playfair text-2xl font-semibold">
                  Inspiring the next generation of Mithila artists through hands-on learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
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

      {/* Main Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-left md:text-justify  hyphens-auto">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Youth & Community Programs
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Our programs are designed to make Mithila art accessible to all ages while 
            connecting traditional heritage with contemporary social issues and SDG themes.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainPrograms.map((program, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 group hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-sindoor flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <program.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Audience:</span>
                    <span className="text-foreground font-medium">{program.audience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="text-foreground font-medium">{program.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SDG:</span>
                    <span className="text-primary font-medium">{program.sdgConnection}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-20 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
                Community Initiatives
              </h2>
              <p className="text-lg text-muted-foreground">
                Beyond workshops, we're building sustainable systems to support artists, 
                preserve heritage, and empower the next generation of cultural leaders.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communityInitiatives.map((initiative, index) => (
                <div key={index} className="glass-card rounded-xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <initiative.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Gallery */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Programs in Action
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Kids Workshop",
              "School Program",
              "Artist Mentorship",
              "Expert Panel",
              "Community Exhibition",
              "Youth Ambassador",
              "Corporate Workshop",
              "Cultural Archive"
            ].map((item, index) => (
              <div key={index} className="aspect-square bg-muted rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="text-muted-foreground text-xs font-inter text-center px-2">
                    [{item} Photo]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Placeholder */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            What Participants Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Workshop Participant", role: "Kids Art Program" },
              { name: "School Teacher", role: "Educational Program" },
              { name: "Community Member", role: "Festival Attendee" }
            ].map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4" />
                <p className="text-muted-foreground italic mb-4">
                  "[Testimonial placeholder - Participant quote about their experience with our programs and how it impacted their understanding of Mithila culture]"
                </p>
                <p className="font-semibold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Start Your Journey
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're looking to learn Mithila painting, bring a program to your school, 
            engage your organization, or support artist communities, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-background text-secondary hover:bg-background/90">
              <Link to="/contact">Request a Program</Link>
            </Button>
    <Button
  asChild
  size="lg"
  variant="outline"
  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
>
  <Link to="/contact">Become a Volunteer</Link>
</Button>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
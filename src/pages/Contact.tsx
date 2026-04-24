import { useEffect, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Heart, Users, Building, Send, Palette, GraduationCap, Globe, Calendar } from 'lucide-react';

// 1. Add your QR image import
import WhatsAppQR from '@/assets/qr.jpg'; // <-- put your QR image path here

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const whatsappNumber = '9741667448'; // Your WhatsApp number

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name ||!formData.email ||!formData.subject ||!formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `Hello Mithila Center, my name is ${formData.name}.\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    setFormData({ name: '', email: '', subject: '', message: '' });

    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is being prepared in WhatsApp.",
    });
  };

  // 2. Fixed the syntax error here
  const contactInfo = [
    { icon: Mail, title: "Email", details: "info@mithilacenter.org", link: "mailto:info@mithilacenter.org" },
    { icon: Phone, title: "Phone", details: "+977 9741667448", link: "tel:+9779741667448" },
    {
      icon: MapPin,
      title: "Location",
      details: "New York, NY (Serving the Tri-State Area & Beyond)",
      temporaryAddress: "Kamalamai-5 Madhutar, Sindhuli", 
      link: "#"
    },
    { icon: Clock, title: "Office Hours", details: "Sunday-Friday 11-6", link: "#" }
  ];

  const engagementOptions = [
    { icon: Heart, title: "Donate", description: "Support our mission with a tax-deductible donation. Every contribution helps preserve this ancient heritage and fund programs like the Museum of Mithila Heritage." },
    { icon: Users, title: "Volunteer", description: "Join our team of dedicated volunteers for festivals, workshops, exhibitions, and community outreach programs throughout the year." },
    { icon: Building, title: "Partner", description: "Explore institutional partnerships for exhibitions, educational programs, cultural exchanges, and World Tour collaborations." },
    { icon: Palette, title: "Submit Art", description: "Are you a Mithila artist? Share your work for potential inclusion in our exhibitions, gallery, and programs." },
    { icon: GraduationCap, title: "Request Program", description: "Bring Mithila art workshops, educational programs, or exhibitions to your school, organization, or community." },
    { icon: Globe, title: "Host Exhibition", description: "Interested in hosting Art for SDGs exhibitions at your museum, gallery, or cultural institution? Let's discuss." }
  ];

  const upcomingOpportunities = [
    { title: "6th Annual Mithila Festival USA", date: "April 2025", type: "Festival Volunteer" },
    { title: "World Tour 2025", date: "Throughout 2025", type: "Exhibition Support" },
    { title: "Kids Workshop Series", date: "Monthly", type: "Teaching Assistant" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 rice-paper-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get <span className="gradient-text-primary">Involved</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with Mithila Center USA to learn more about our programs, support our mission,
              explore partnership opportunities, or join our growing community of heritage advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value })}
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value })}
                      placeholder="Rachana@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value })}
                    placeholder="Partnership inquiry, volunteer interest, program request..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value })}
                    placeholder="Tell us how you'd like to get involved or what you'd like to learn more about..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>

              {/* 3. Added QR code section */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-4 text-center">
  Support Our Mission
</h3>

<div className="flex justify-center">
  <img
    src={WhatsAppQR}
    alt="Donation QR Code"
    className="w-40 h-40 rounded-xl border border-border shadow-sm"
  />
</div>

<p className="text-sm text-muted-foreground  mt-4 leading-relaxed text-justify ">
  Your generous contribution helps us preserve and promote the rich heritage of Mithila art and culture. 
  Scan the QR code using your preferred mobile banking or digital wallet app to make a secure donation.
</p>

<p className="text-xs text-muted-foreground text-justify mt-2">
  For alternative donation methods or assistance, please contact us via WhatsApp using the form above.
</p>

              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-muted-foreground">{item.details}</p>
                        {item.temporaryAddress && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Temp: {item.temporaryAddress}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay connected with our latest exhibitions, festivals, and community events.
                </p>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <span className="text-xs font-medium">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Upcoming Volunteer Opportunities */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-4">
                  Volunteer Opportunities
                </h3>
                <div className="space-y-3">
                  {upcomingOpportunities.map((opp, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex-grow">
                        <p className="text-sm font-medium text-foreground">{opp.title}</p>
                        <p className="text-xs text-muted-foreground">{opp.date} • {opp.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Ways to Engage
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            There are many ways to support our mission and become part of the
            Mithila heritage preservation movement.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {engagementOptions.map((option, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center group hover:shadow-elevated transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-sindoor mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <option.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
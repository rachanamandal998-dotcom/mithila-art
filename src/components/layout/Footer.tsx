import { Button } from '@/components/ui/button';
import { Heart, Mail, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import borderPattern from '@/assets/mithila-border-pattern.png';
import { Link } from 'react-router-dom';


const footerLinks = {
  programs: [
    { label: 'Art for SDGs', href: '#sdg' },
    { label: 'World Tour', href: '#world-tour' },
    { label: 'Mithila Festival', href: '#festival' },
    { label: 'Kids Programs', href: '#programs' },
    { label: 'Artist Residency', href: '#' },
  ],
  about: [
    { label: 'Our Mission', href: '#about' },
    { label: 'Leadership', href: '#' },
    { label: 'Master Artists', href: '#' },
    { label: 'Partners', href: '#press' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Press Center', href: '#press' },
    { label: 'Research', href: '#' },
    { label: 'Publications', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Events Calendar', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-ink text-ricepaper overflow-hidden">
      {/* Decorative Border */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden opacity-20">
        <img src={borderPattern} alt="" className="w-full h-full object-cover object-bottom" />
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-sindoor/20 via-haldi/20 to-peacock/20 border border-ricepaper/10 p-8 lg:p-12 mb-16 overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-ricepaper mb-4">
                Support Mithila Heritage
              </h2>
              <p className="text-ricepaper/70 max-w-lg">
                Your contribution helps preserve 3000 years of cultural heritage and 
                empower communities through art education.
              </p>
            </div>
           <Link to="/contact">
  <Button
    variant="donate"
    size="xl"
    className="gap-3 flex-shrink-0"
  >
    <Heart className="w-5 h-5" />
    Donate Now
  </Button>
</Link>

          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-haldi/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-sindoor/10 blur-3xl" />
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-sindoor flex items-center justify-center shadow-glow-primary">
                <span className="text-primary-foreground font-playfair font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-ricepaper">Mithila Center USA</h3>
                <p className="text-xs text-ricepaper/60 tracking-widest uppercase">Est. 2015</p>
              </div>
            </div>
            
            <p className="text-ricepaper/70 leading-relaxed">
              A 501(c)(3) nonprofit organization dedicated to preserving and promoting 
              the rich cultural heritage of Mithila, Nepal.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-ricepaper/70">
                <MapPin className="w-4 h-4 text-haldi flex-shrink-0" />
                New York, NY, United States
              </div>
              <div className="flex items-center gap-3 text-sm text-ricepaper/70">
                <Mail className="w-4 h-4 text-haldi flex-shrink-0" />
                info@mithilacenterusa.org
              </div>
              <div className="flex items-center gap-3 text-sm text-ricepaper/70">
                <Phone className="w-4 h-4 text-haldi flex-shrink-0" />
             +977 9741667448
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-ricepaper/10 flex items-center justify-center hover:bg-haldi hover:text-ink transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-playfair font-semibold text-lg text-ricepaper mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-ricepaper/70 hover:text-haldi transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-lg text-ricepaper mb-6">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-ricepaper/70 hover:text-haldi transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-lg text-ricepaper mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-ricepaper/70 hover:text-haldi transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ricepaper/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ricepaper/50">
            © {new Date().getFullYear()} Mithila Center USA. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-ricepaper/50">
            <a href="#" className="hover:text-ricepaper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ricepaper transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-ricepaper transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

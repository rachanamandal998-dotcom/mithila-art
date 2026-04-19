import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import navbarBg from '@/assets/navbar2.png';

const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'About',
    children: [
      { href: '/about', label: 'Our Story' },
      { href: '/mission', label: 'Mission & Vision' },
      { href: '/recognition', label: 'Recognition & Honors' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'Programs & Engagement',
    children: [
      { href: '/programs', label: 'Programs' },
      { href: '/un-engagement', label: 'UN Engagement' },
      { href: '/festival', label: 'Festival' },
    ],
  },
  {
    label: 'Art & Culture',
    children: [
      { href: '/art-for-sdgs', label: 'Art for SDGs' },
      { href: '/world-tour', label: 'World Tour' },
      { href: '/gallery', label: 'Gallery' },
    ],
  },
  { href: '/future', label: 'Future Initiatives' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white",
        isScrolled ? "shadow-md py-3" : "py-4"
      )}
    >

     {/* 📱 MOBILE FULL COVER BACKGROUND IMAGE (BLUR) */}
<div
  className="absolute inset-0 bg-cover bg-center lg:hidden"
  style={{
    backgroundImage: `url(${navbarBg})`,
    filter: "blur(3px)", // 🔥 blur effect
    transform: "scale(1.1)", // prevents edge cut from blur
  }}
/>


      <div className="relative container mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
            <img
              src="https://i.imgur.com/4W7jbbM.png"
              alt="M"
              className="w-12 h-10 md:w-16 md:h-12"
            />
          </div>

          <div className="hidden sm:block bg-white/90 px-2 py-1 rounded-md">
            <h1 className="font-playfair font-bold text-base leading-tight text-black">
              Mithila Center
            </h1>
            <p className="text-xs text-black/70 font-inter tracking-widest uppercase">
              USA
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 relative">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href || '#'}
                className={cn(
                  "px-3 py-2 text-sm font-inter font-semibold flex items-center gap-1 rounded-md transition-all",
                  location.pathname === link.href
                    ? "bg-white text-black shadow-md"
                    : "bg-white text-black hover:bg-gray-100"
                )}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3 h-3" />}
              </Link>

              {link.children && (
                <div className="absolute top-full left-0 bg-white border rounded-xl shadow-xl py-2 mt-1 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Donate Button (ORANGE FIXED) */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="gap-2 bg-orange-500 text-white hover:bg-orange-600">
            <Link to="/contact">
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 bg-yellow-600 rounded-md"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href || '#'}
                className="block px-4 py-3 text-base font-semibold rounded-lg text-black hover:bg-gray-100"
              >
                {link.label}
              </Link>

              {link.children && (
                <div className="pl-6">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-black"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Donate Button */}
          <div className="pt-4 border-t mt-2">
            <Button asChild className="w-full gap-2 bg-orange-500 text-white hover:bg-orange-600">
              <Link to="/contact">
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

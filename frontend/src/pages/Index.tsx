import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SDGSection } from '@/components/sections/SDGSection';
import { WorldTourSection } from '@/components/sections/WorldTourSection';
import { FestivalSection } from '@/components/sections/FestivalSection';
import { KidsSection } from '@/components/sections/KidsSection';
import { MuseumSection } from '@/components/sections/MuseumSection';
import { PressSection } from '@/components/sections/PressSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <KidsSection />
        <SDGSection />
        <WorldTourSection />
        <FestivalSection />
        <MuseumSection />
        <PressSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

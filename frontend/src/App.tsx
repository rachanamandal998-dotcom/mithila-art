import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Mission from "./pages/Mission";
import UNEngagement from "./pages/UNEngagement";
import ArtForSDGs from "./pages/ArtForSDGs";
import Festival from "./pages/Festival";
import WorldTour from "./pages/WorldTour";
import Programs from "./pages/Programs";

import Recognition from "./pages/Recognition";   // ✅ FIXED

import Future from "./pages/Future";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ui/ScrollToTop";
import EnrollChildPage from "../src/components/sections/EnrollChildPage";
import RegisterFestivalPage from "../src/components/sections/RegisterFestivalPage";   

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/un-engagement" element={<UNEngagement />} />
          <Route path="/art-for-sdgs" element={<ArtForSDGs />} />
          <Route path="/festival" element={<Festival />} />
          <Route path="/world-tour" element={<WorldTour />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/future" element={<Future />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      <Route path="/enroll-child" element={<EnrollChildPage />} />
      <Route path="/register-festival" element={<RegisterFestivalPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

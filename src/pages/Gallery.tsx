import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Video, Filter, X, Play, Image, Calendar, MapPin, Import } from 'lucide-react';
import ImageSlider from "../components/sections/ImageSlider"  

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'traditional', label: 'Traditional Art' },
    { id: 'sdg', label: 'Art for SDGs' },
    { id: 'festival', label: 'Festival' },
    { id: 'un', label: 'UN Exhibitions' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'worldtour', label: 'World Tour' },
    { id: 'yearHighlights', label: 'Year Highlights' }  // New filter for Year-Based Images
  ];

  const galleryItems = [
    // Year Highlights (using the year-based images)
    { id: 1, category: 'yearHighlights', title: '2022 Highlights', description: 'Event moments from 2022', type: 'image', imageUrl: "https://i.imgur.com/xKiTFYr.jpeg" },
    { id: 2, category: 'yearHighlights', title: '2023 Highlights', description: 'Event moments from 2023', type: 'image', imageUrl: "https://i.imgur.com/susAJ7N.jpeg" },
    { id: 3, category: 'yearHighlights', title: '2024 Highlights', description: 'Event moments from 2024', type: 'image', imageUrl: "https://i.imgur.com/KlKJiOe.jpeg" },
    { id: 4, category: 'yearHighlights', title: '2025 Highlights', description: 'Event moments from 2025', type: 'image', imageUrl: "https://i.imgur.com/7DUDzIQ.jpeg" },
    
    // Additional Event Images
    { id: 5, category: 'festival', title: 'Opening Ceremony 2024', description: 'The grand opening of the festival', type: 'image', imageUrl: "https://i.imgur.com/5BfMzx7.jpeg" },
    { id: 6, category: 'festival', title: 'Artist Demonstration', description: 'Live painting demonstration by artists', type: 'image', imageUrl: "https://i.imgur.com/7PZWNl6.jpeg" },
    { id: 7, category: 'festival', title: 'Community Gathering', description: 'Festival gathering with the community', type: 'image', imageUrl: "https://i.imgur.com/tBAH1Q5.jpeg" },
    { id: 8, category: 'festival', title: 'Kids Workshop', description: 'Kids learning Mithila art', type: 'image', imageUrl: "https://i.imgur.com/dtpBarU.jpeg" },
    { id: 9, category: 'festival', title: 'Mithila Cuisine', description: 'Taste of Mithila showcase', type: 'image', imageUrl: "https://i.imgur.com/4pkb8XL.jpeg" },
    { id: 10, category: 'festival', title: 'Cultural Performances', description: 'Cultural performances at the festival', type: 'image', imageUrl: "https://i.imgur.com/MVoHTOQ.jpeg" },
    { id: 11, category: 'festival', title: 'Award Ceremony', description: 'Award ceremony to honor contributors', type: 'image', imageUrl: "https://i.imgur.com/lrx3uQx.jpeg" },
    { id: 12, category: 'festival', title: 'UN Exhibition 2023', description: 'UN HQ exhibition showcasing Mithila Art', type: 'image', imageUrl: "https://i.imgur.com/DPjOc9U.jpeg" },
    { id: 13, category: 'festival', title: 'Celebration at Diversity Plaza', description: 'Community gathering in Queens, NYC', type: 'image', imageUrl: "https://i.imgur.com/Bix4ku5.jpeg" },
    
    // Other existing items...
    { id: 14, category: 'traditional', title: 'Kohbar - Traditional Wedding Art', description: 'Sacred wedding chamber art depicting fertility and prosperity symbols', type: 'image', imageUrl: "https://i.imgur.com/KUjfr4D.jpeg" },
    { id: 15, category: 'sdg', title: 'Climate Action Art', description: 'SDG 13 themed artwork depicting environmental awareness', type: 'image', imageUrl: "https://i.imgur.com/bwkzFfx.jpeg" },
    { id: 16, category: 'workshops', title: 'Master Artist Demonstration', description: 'Traditional technique showcase', type: 'video', imageUrl: "https://i.imgur.com/bwkzFfx.jpeg" },
  ];

  const featuredVideos = [
    { 
      title: "The Art of Mithila Painting", 
      description: "Documentary exploring the history and techniques of traditional Mithila painting",
      duration: "15:30",
      category: "Documentary"
    },
    { 
      title: "Mithila Festival USA Highlights 2024", 
      description: "Compilation of moments from the 5th Annual Festival celebration",
      duration: "8:45",
      category: "Festival"
    },
    { 
      title: "Master Artist Interview: S.C. Suman", 
      description: "Conversation with renowned artist about tradition and innovation",
      duration: "12:20",
      category: "Interview"
    },
    { 
      title: "Art for SDGs at the United Nations", 
      description: "Coverage of the 2024 exhibition at UN Headquarters",
      duration: "10:15",
      category: "Exhibition"
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-yellow-50">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-12 rice-paper-texture">
        <div className="container mx-auto px-4 ">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="gradient-text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our collection of traditional Mithila artwork, SDG-themed pieces, 
              festival moments, UN exhibitions, and program highlights documenting our 
              journey of cultural preservation and global impact.
            </p>
          </div>
        </div>
      </section>
       <ImageSlider />

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
            {activeFilter !== 'all' && (
              <button
                onClick={() => setActiveFilter('all')}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-playfair text-2xl font-bold text-foreground">
              {activeFilter === 'all' ? 'All Media' : filters.find(f => f.id === activeFilter)?.label}
              <span className="text-muted-foreground text-lg ml-2">({filteredItems.length} items)</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="aspect-square bg-muted rounded-xl overflow-hidden relative group cursor-pointer"
              >
                <img src={item.imageUrl} alt={item.title} className="object-cover w-full h-full" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="font-playfair text-sm font-semibold text-background mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-background/70 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="text-xs text-background/60 uppercase tracking-wider">
                    {filters.find(f => f.id === item.category)?.label}
                  </span>
                  {item.type === 'video' && (
                    <div className="mt-2 px-3 py-1 bg-background/20 rounded-full flex items-center gap-1">
                      <Play className="w-3 h-3 text-background" />
                      <span className="text-xs text-background">Video</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">No items found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Featured Videos
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Documentaries, event coverage, and educational content showcasing 
            Mithila art and our programs.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredVideos.map((video, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-foreground/80 rounded text-xs text-background">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {video.category}
                  </span>
                  <h3 className="font-playfair font-semibold text-foreground mt-1 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

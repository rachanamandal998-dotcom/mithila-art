import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import { Filter, Play } from 'lucide-react';
import ImageSlider from "../components/sections/ImageSlider";

// ✅ Extract YouTube thumbnail automatically
const getYouTubeThumbnail = (url) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com.*v=)([^&?/]+)/);
  return match
    ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    : "";
};

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
    { id: 'yearHighlights', label: 'Year Highlights' }
  ];

  const galleryItems = [
    { id: 1, category: 'yearHighlights', title: '2022 Highlights', imageUrl: "https://i.imgur.com/xKiTFYr.jpeg" },
    { id: 2, category: 'yearHighlights', title: '2023 Highlights', imageUrl: "https://i.imgur.com/susAJ7N.jpeg" },
    { id: 3, category: 'yearHighlights', title: '2024 Highlights', imageUrl: "https://i.imgur.com/KlKJiOe.jpeg" },
    { id: 4, category: 'yearHighlights', title: '2025 Highlights', imageUrl: "https://i.imgur.com/7DUDzIQ.jpeg" },
    { id: 5, category: 'festival', title: 'Opening Ceremony 2024', imageUrl: "https://i.imgur.com/5BfMzx7.jpeg" },
    { id: 6, category: 'festival', title: 'Artist Demonstration', imageUrl: "https://i.imgur.com/7PZWNl6.jpeg" },
    { id: 7, category: 'festival', title: 'Community Gathering', imageUrl: "https://i.imgur.com/tBAH1Q5.jpeg" },
    { id: 8, category: 'festival', title: 'Kids Workshop', imageUrl: "https://i.imgur.com/dtpBarU.jpeg" },
    { id: 9, category: 'festival', title: 'Mithila Cuisine', imageUrl: "https://i.imgur.com/4pkb8XL.jpeg" },
    { id: 10, category: 'festival', title: 'Cultural Performances', imageUrl: "https://i.imgur.com/MVoHTOQ.jpeg" }
  ];

 const featuredVideos = [
  {
    title: "The Art of Mithila Painting",
    description: "Traditional Mithila painting documentary",
    duration: "15:30",
    category: "Documentary",
    link: "https://youtu.be/v4i1I97YRkE"
  },
  {
    title: "Mithila Festival USA Highlights 2024",
    description: "Festival highlights compilation",
    duration: "8:45",
    category: "Festival",
    link: "https://youtu.be/FN6cOcNxHOw"
  },
  {
    title: "Master Artist Interview",
    description: "Interview with S.C. Suman",
    duration: "12:20",
    category: "Interview",
    link: "https://youtu.be/hpVxc1yJSt0"
  },
  {
    title: "Art for SDGs at UN",
    description: "UN exhibition coverage",
    duration: "10:15",
    category: "Exhibition",
    link: "https://youtu.be/fsEc7keWv1g"
  },
  {
    title: "Mithila Workshop Nepal",
    description: "Hands-on painting workshop",
    duration: "9:40",
    category: "Workshop",
    link: "https://youtu.be/DSHuvOj0B1w"
  },
  {
    title: "Europe World Tour",
    description: "International exhibition highlights",
    duration: "11:25",
    category: "World Tour",
    link: "https://youtu.be/obNMe-INJ2U"
  },
  {
    title: "Women Artists of Mithila",
    description: "Empowering women painters",
    duration: "13:10",
    category: "Documentary",
    link: "https://youtu.be/tb3ptgQf3mQ"
  },
  {
    title: "Festival Culture Night",
    description: "Dance and cultural performances",
    duration: "7:55",
    category: "Festival",
    link: "https://youtu.be/5Mxdg6aVQfI"
  },
  {
    title: "UN SDG Installation Walkthrough",
    description: "Art installation tour",
    duration: "10:05",
    category: "Exhibition",
    link: "https://youtu.be/HP7eQ-jTmdE"
  }
];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-yellow-50">

      <Header />

      {/* HERO */}
      <section className="pt-28 sm:pt-32 pb-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Gallery
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Explore Mithila art, festivals, SDGs & exhibitions
        </p>
      </section>

      <ImageSlider />

      {/* FILTERS */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Filter className="shrink-0" />

          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 py-2 text-sm sm:text-base rounded-full transition ${
                activeFilter === filter.id
                  ? 'bg-black text-white'
                  : 'bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

          {filteredItems.map(item => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg">

              <img
                src={item.imageUrl}
                className="w-full h-32 sm:h-40 md:h-44 object-cover transition-transform group-hover:scale-105"
                alt={item.title}
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs sm:text-sm text-center px-2 transition">
                {item.title}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-14 bg-gray-100">

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-10 font-bold px-4">
          Featured Videos
        </h2>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {featuredVideos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl overflow-hidden shadow hover:scale-105 transition block group"
            >

              {/* THUMBNAIL */}
              <div className="h-40 relative">

                <img
                  src={getYouTubeThumbnail(video.link)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition">
                  <Play className="text-white w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-1 rounded">
                  {video.duration}
                </span>

              </div>

              {/* TEXT */}
              <div className="p-3 sm:p-4">

                <p className="text-xs text-blue-600">{video.category}</p>

                <h3 className="font-semibold text-sm sm:text-base md:text-lg leading-snug">
                  {video.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  {video.description}
                </p>

              </div>

            </a>
          ))}

        </div>

      </section>

      <Footer />

      {/* SCROLL HIDE CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </div>
  );
};

export default Gallery;

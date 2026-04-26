import { useState, useEffect } from "react";

export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [visible, setVisible] = useState(4); // Default to 4

  const proclamations = [
    // ... (your data remains exactly the same)
    { entity: "NYC Mayor's Office", type: "Mayoral Proclamation", title: "Mithila Culture and Festival Day", description: "Official proclamation declaring 'Mithila Culture and Festival Day' to celebrate South Asian heritage.", year: "Multiple Years", significance: "Citywide recognition", image: "https://i.imgur.com/FVXUrx4.jpeg" },
    { entity: "U.S. Congress", type: "Congressional Proclamation", title: "Honoring Mithila Festival USA", description: "Presented by Congresswoman Grace Meng during the 2021 festival.", year: "2021", significance: "Federal cultural recognition", image: "https://i.imgur.com/C6bBY95.jpeg" },
    { entity: "New York State Senate", type: "State Senate Recognition", title: "Mithila Art & Heritage Preservation", description: "Recognition for preserving Mithila painting traditions.", year: "2022", significance: "State-level cultural honor", image: "https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/2022111015118/636d05d29c7e80680e0a5f2cjpeg.jpg" },
    { entity: "NYC Council", type: "City Council Citation", title: "Multicultural Unity Contribution", description: "Honoring contribution to NYC cultural diversity.", year: "2020", significance: "Local government appreciation", image: "https://img1.wsimg.com/isteam/ip/a29fdc5c-5a9f-4a58-b68c-60db7dbc65b0/4%20Option.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true" },
    { entity: "Queens Borough President", type: "Borough Proclamation", title: "Celebration of Mithila Festival", description: "Recognizing annual Mithila cultural festival.", year: "2019", significance: "Borough cultural recognition", image: "https://www.enepalese.com/wp-content/uploads/2019/04/image7-800x534.jpeg" },
    { entity: "South Asian Cultural Council", type: "Cultural Excellence Award", title: "Global Promotion of Mithila Art", description: "Awarded for promoting Mithila art worldwide.", year: "2023", significance: "International recognition", image: "https://www.undp.org/sites/g/files/zskgke326/files/2025-01/img_7281.jpg" },
    { entity: "Community Leadership Forum", type: "Leadership Honor", title: "Unity Through Cultural Festivals", description: "Recognized for leadership in cultural unity programs.", year: "2024", significance: "Community leadership excellence", image: "https://unityinc.org/wp-content/uploads/2025/08/Screenshot-2025-08-05-at-3.38.31-PM.png" },
    { entity: "Asian Heritage Foundation", type: "Heritage Award", title: "Preserving South Asian Traditions", description: "Honoring efforts in heritage preservation.", year: "2023", significance: "Cultural preservation award", image: "https://npcdn.ratopati.com/media/news/kanchanban-holi-parikarma-scaled-1_4QtFaarpEp.jpg" },
  ];

  // 1. Detect screen size and update visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);      // Mobile
      else if (window.innerWidth < 1024) setVisible(2); // Tablet
      else setVisible(4);                               // Desktop
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Clamp index if it goes out of bounds on resize
  const maxIndex = Math.max(0, proclamations.length - visible);
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [visible, maxIndex, index]);

  const prev = () => setIndex((p) => (p === 0 ? maxIndex : p - 1));
  const next = () => setIndex((p) => (p === maxIndex ? 0 : p + 1));

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f7f2e4] relative px-4 overflow-hidden">
      
      {/* LEFT BUTTON - Hide on very small mobile for cleaner UI if needed */}
      <button onClick={prev} className="absolute left-2 md:left-4 text-3xl md:text-5xl z-10 bg-white/50 p-2 rounded-full shadow">
        ❮
      </button>

      {/* CAROUSEL */}
      <div className="w-full max-w-7xl overflow-hidden px-2">
        <div
          className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {proclamations.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`
                flex-shrink-0
                ${visible === 1 ? "w-full" : visible === 2 ? "w-1/2" : "w-1/4"}
                bg-white rounded-3xl shadow-xl p-4 md:p-5 transition-all duration-300
                ${hoverIndex === i ? "scale-[1.02] md:scale-110 shadow-2xl z-30" : "scale-100"}
              `}
            >
              <img
                src={card.image}
                className="w-full h-48 md:h-[260px] object-cover rounded-2xl"
                alt={card.title}
              />
              <div className="mt-4 space-y-2">
                <span className="text-[10px] md:text-xs bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  {card.type}
                </span>
                <h3 className="text-base md:text-lg font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 line-clamp-3">
                  {card.description}
                </p>
                <p className="text-[10px] md:text-xs text-gray-500 pt-2">
                  <b>{card.entity}</b> • {card.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button onClick={next} className="absolute right-2 md:right-4 text-3xl md:text-5xl z-10 bg-white/50 p-2 rounded-full shadow">
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-blue-600 scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
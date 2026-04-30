import { useState, useEffect } from "react";

export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(4);

  const proclamations = [
    { entity: "NYC Mayor's Office", type: "Mayoral Proclamation", title: "Mithila Culture and Festival Day", description: "Official proclamation celebrating South Asian heritage.", year: "Multiple Years", image: "https://i.imgur.com/FVXUrx4.jpeg" },
    { entity: "U.S. Congress", type: "Congressional Proclamation", title: "Honoring Mithila Festival USA", description: "Presented during 2021 festival.", year: "2021", image: "https://i.imgur.com/C6bBY95.jpeg" },
    { entity: "New York State Senate", type: "State Recognition", title: "Mithila Art Preservation", description: "Recognition for preserving tradition.", year: "2022", image: "https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/2022111015118/636d05d29c7e80680e0a5f2cjpeg.jpg" },
    { entity: "NYC Council", type: "City Citation", title: "Multicultural Unity", description: "Honoring cultural diversity.", year: "2020", image: "https://img1.wsimg.com/isteam/ip/a29fdc5c-5a9f-4a58-b68c-60db7dbc65b0/4%20Option.jpg" },
    { entity: "Queens Borough President", type: "Proclamation", title: "Festival Celebration", description: "Annual Mithila festival recognition.", year: "2019", image: "https://www.enepalese.com/wp-content/uploads/2019/04/image7-800x534.jpeg" },
    { entity: "South Asian Cultural Council", type: "Award", title: "Global Promotion of Art", description: "International recognition.", year: "2023", image: "https://www.undp.org/sites/g/files/zskgke326/files/2025-01/img_7281.jpg" },
    { entity: "Community Forum", type: "Leadership Honor", title: "Unity Contribution", description: "Community leadership award.", year: "2024", image: "https://unityinc.org/wp-content/uploads/2025/08/Screenshot-2025-08-05-at-3.38.31-PM.png" },
    { entity: "Heritage Foundation", type: "Heritage Award", title: "Cultural Preservation", description: "Preserving traditions.", year: "2023", image: "https://npcdn.ratopati.com/media/news/kanchanban-holi-parikarma-scaled-1_4QtFaarpEp.jpg" },
  ];

  // responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, proclamations.length - visible);

  const prev = () => setIndex((p) => (p === 0 ? maxIndex : p - 1));
  const next = () => setIndex((p) => (p === maxIndex ? 0 : p + 1));

  return (
    <div className="w-full flex items-center justify-center bg-[#f7f2e4] py-10 px-4 relative overflow-hidden">

      {/* LEFT */}
      <button onClick={prev} className="absolute left-2 md:left-4 text-4xl bg-white/60 p-2 rounded-full shadow">
        ❮
      </button>

      {/* CAROUSEL */}
      <div className="w-full max-w-6xl overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (100 / visible)}%)`,
          }}
        >
          {proclamations.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={`flex-shrink-0 ${
                visible === 1 ? "w-full" : visible === 2 ? "w-1/2" : "w-1/4"
              } bg-white rounded-2xl shadow-lg p-4 transition-transform duration-300 ${
                hoverIndex === i ? "scale-105" : "scale-100"
              }`}
            >
              {/* IMAGE (FIXED HEIGHT REDUCED) */}
              <img
                src={card.image}
                className="w-full h-40 md:h-52 object-cover rounded-xl"
              />

              <div className="mt-3 space-y-1">
                <span className="text-[10px] bg-blue-100 px-2 py-1 rounded-full">
                  {card.type}
                </span>

                <h3 className="text-sm md:text-base font-semibold">
                  {card.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-2">
                  {card.description}
                </p>

                <p className="text-[10px] text-gray-500">
                  <b>{card.entity}</b> • {card.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <button onClick={next} className="absolute right-2 md:right-4 text-4xl bg-white/60 p-2 rounded-full shadow">
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              i === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

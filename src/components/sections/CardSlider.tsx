import { useState } from "react";

export default function CardSlider() {
  const [index, setIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const proclamations = [
    {
      entity: "NYC Mayor's Office",
      type: "Mayoral Proclamation",
      title: "Mithila Culture and Festival Day",
      description:
        "Official proclamation declaring 'Mithila Culture and Festival Day' to celebrate South Asian heritage.",
      year: "Multiple Years",
      significance: "Citywide recognition of Maithil cultural contributions",
      image: "https://i.imgur.com/FVXUrx4.jpeg",
    },
    {
      entity: "U.S. Congress",
      type: "Congressional Proclamation",
      title: "Honoring Mithila Festival USA",
      description:
        "Presented by Congresswoman Grace Meng during the 2021 festival.",
      year: "2021",
      significance: "Federal cultural recognition",
      image: "https://i.imgur.com/C6bBY95.jpeg",
    },
    {
      entity: "New York State Senate",
      type: "State Senate Recognition",
      title: "Mithila Art & Heritage Preservation",
      description:
        "Recognition for preserving Mithila painting traditions.",
      year: "2022",
      significance: "State-level cultural honor",
      image: "https://i.imgur.com/8Km9tLL.jpeg",
    },
    {
      entity: "NYC Council",
      type: "City Council Citation",
      title: "Multicultural Unity Contribution",
      description:
        "Honoring contribution to NYC cultural diversity.",
      year: "2020",
      significance: "Local government appreciation",
      image: "https://i.imgur.com/YuKQ8Qm.jpeg",
    },
    {
      entity: "Queens Borough President",
      type: "Borough Proclamation",
      title: "Celebration of Mithila Festival",
      description:
        "Recognizing annual Mithila cultural festival.",
      year: "2019",
      significance: "Borough cultural recognition",
      image: "https://i.imgur.com/XR7mX7p.jpeg",
    },
    {
      entity: "South Asian Cultural Council",
      type: "Cultural Excellence Award",
      title: "Global Promotion of Mithila Art",
      description:
        "Awarded for promoting Mithila art worldwide.",
      year: "2023",
      significance: "International recognition",
      image: "https://i.imgur.com/6vW0Q0g.jpeg",
    },
    {
      entity: "Community Leadership Forum",
      type: "Leadership Honor",
      title: "Unity Through Cultural Festivals",
      description:
        "Recognized for leadership in cultural unity programs.",
      year: "2024",
      significance: "Community leadership excellence",
      image: "https://i.imgur.com/2DhmtJ4.jpeg",
    },
    {
      entity: "Asian Heritage Foundation",
      type: "Heritage Award",
      title: "Preserving South Asian Traditions",
      description:
        "Honoring efforts in heritage preservation.",
      year: "2023",
      significance: "Cultural preservation award",
      image: "https://i.imgur.com/FVXUrx4.jpeg",
    },
  ];

  const visible = 4;
  const maxIndex = Math.max(0, proclamations.length - visible);

  const prev = () =>
    setIndex((p) => (p === 0 ? maxIndex : p - 1));

  const next = () =>
    setIndex((p) => (p === maxIndex ? 0 : p + 1));

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#dfe3f0] relative px-4">

      {/* LEFT BUTTON */}
      <button onClick={prev} className="absolute left-4 text-5xl z-10">
        ❮
      </button>

      {/* CAROUSEL */}
      <div className="w-full max-w-7xl overflow-hidden">

        <div
          className="flex gap-6 transition-transform duration-500"
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
                min-w-[25%]
                bg-white rounded-3xl shadow-xl
                p-5 transition-all duration-300
                cursor-pointer
                ${hoverIndex === i ? "scale-110 shadow-2xl z-30" : "scale-100"}
              `}
            >
              <img
                src={card.image}
                className="w-full h-[260px] object-cover rounded-2xl"
              />

              <div className="mt-4 space-y-2">
                <span className="text-xs bg-blue-100 px-3 py-1 rounded-full">
                  {card.type}
                </span>

                <h3 className="text-lg font-semibold">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {card.description}
                </p>

                <p className="text-xs text-gray-500">
                  <b>{card.entity}</b> • {card.year}
                </p>

                <p className="text-xs text-gray-400">
                  {card.significance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button onClick={next} className="absolute right-4 text-5xl z-10">
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 flex gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition
              ${i === index ? "bg-blue-600 scale-125" : "bg-gray-400"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
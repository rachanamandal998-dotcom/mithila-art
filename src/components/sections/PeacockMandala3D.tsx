import { motion } from "framer-motion";

export function PeacockMandala3D({ className = "" }: { className?: string }) {
  const leaves = Array.from({ length: 20 });

  return (
    <div
      className={`w-full flex items-center justify-center ${className}`}
      style={{ perspective: "800px" }} // ✅ safe perspective
    >
      <motion.div
        className="relative w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] aspect-square"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: [-6, 6, -6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* 🌿 Background */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full"
          style={{ transform: "translateZ(0px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <circle
            cx="150"
            cy="150"
            r="140"
            fill="#f5f1e6"
            stroke="#333"
            strokeWidth="2"
          />

          {leaves.map((_, i) => {
            const a = (i / leaves.length) * 360;
            return (
              <g key={i} transform={`rotate(${a} 150 150)`}>
                <path
                  d="M150 20 Q156 50 150 80 Q144 50 150 20 Z"
                  fill="#7fbf7f"
                  stroke="#333"
                  strokeWidth="1"
                />
              </g>
            );
          })}
        </motion.svg>

        {/* 🦚 Peacocks (FIXED) */}
        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full"
          style={{ transform: "translateZ(20px)" }} // ✅ safe depth
        >
          {[1, -1].map((side) => (
            <motion.g
              key={side}
              transform={`translate(150 150) scale(${side} 1)`}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* CENTER FIX */}
              <g transform="translate(-35 0)">
                {/* Body */}
                <ellipse
                  cx="0"
                  cy="0"
                  rx="20"
                  ry="12"
                  fill="#2a6f97"
                  stroke="#222"
                  strokeWidth="1.5"
                />

                {/* Neck */}
                <path
                  d="M0 -10 Q15 -30 5 -50"
                  fill="none"
                  stroke="#222"
                  strokeWidth="1.5"
                />

                {/* Head */}
                <circle cx="5" cy="-52" r="5" fill="#2a6f97" stroke="#222" />
                <circle cx="7" cy="-53" r="1.5" fill="#000" />

                {/* Beak */}
                <path d="M10 -52 L18 -50 L10 -48 Z" fill="#f4a261" />

                {/* Tail */}
                {Array.from({ length: 6 }).map((_, k) => {
                  const ang = -25 + k * 10;
                  return (
                    <g key={k} transform={`rotate(${ang})`}>
                      <ellipse
                        cx="-10"
                        cy="35"
                        rx="5"
                        ry="35"
                        fill="#52b788"
                        stroke="#222"
                        strokeWidth="1"
                      />
                      <circle cx="-10" cy="65" r="5" fill="#ffd166" />
                      <circle cx="-10" cy="65" r="2" fill="#2a6f97" />
                    </g>
                  );
                })}
              </g>
            </motion.g>
          ))}
        </svg>

        {/* 🌸 Center Flower */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full"
          style={{ transform: "translateZ(40px)" }} // ✅ safe depth
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="150" cy="150" r="25" fill="#e76f51" stroke="#222" />

          {Array.from({ length: 8 }).map((_, k) => (
            <ellipse
              key={k}
              cx="150"
              cy="130"
              rx="4"
              ry="10"
              fill="#ffd166"
              transform={`rotate(${k * 45} 150 150)`}
            />
          ))}

          <circle cx="150" cy="150" r="5" fill="#333" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";

/**
 * Symmetrical Lakshmi-on-lotus bloom with rhythmic opening petals,
 * fish, peacocks and sun motifs around the edge.
 */
export function LakshmiBloom3D({ className = "" }: { className?: string }) {
  const petalCount = 12;

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateY: [-6, 6, -6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Double border */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" style={{ transform: "translateZ(0)" }}>
          <circle cx="150" cy="150" r="142" fill="oklch(0.95 0.05 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="2.5" />
          <circle cx="150" cy="150" r="132" fill="none" stroke="oklch(0.62 0.22 35)" strokeWidth="1.2" strokeDasharray="3 2" />
        </svg>

        {/* Outer motif ring (fish, peacocks, sun) */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(20px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i / 12) * Math.PI * 2;
            const x = 150 + Math.cos(a) * 118;
            const y = 150 + Math.sin(a) * 118;
            const kind = i % 3;
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                {kind === 0 && (
                  <g stroke="oklch(0.18 0.04 30)" strokeWidth="1">
                    <circle r="8" fill="oklch(0.82 0.17 85)" />
                    {Array.from({ length: 8 }).map((_, k) => (
                      <line key={k} x1="0" y1="-8" x2="0" y2="-13" transform={`rotate(${k * 45})`} />
                    ))}
                  </g>
                )}
                {kind === 1 && (
                  <g stroke="oklch(0.18 0.04 30)" strokeWidth="1" fill="oklch(0.72 0.18 200)">
                    <path d="M-8 0 Q0 -5 8 0 Q0 5 -8 0 Z" />
                    <path d="M8 0 L13 -3 L13 3 Z" />
                  </g>
                )}
                {kind === 2 && (
                  <g stroke="oklch(0.18 0.04 30)" strokeWidth="1">
                    <ellipse cx="0" cy="0" rx="6" ry="4" fill="oklch(0.5 0.18 220)" />
                    <circle cx="-3" cy="-6" r="3" fill="oklch(0.5 0.18 220)" />
                    <ellipse cx="6" cy="2" rx="5" ry="2" fill="oklch(0.82 0.17 85)" />
                  </g>
                )}
              </g>
            );
          })}
        </motion.svg>

        {/* Pulsing lotus petals */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" style={{ transform: "translateZ(50px)" }}>
          {Array.from({ length: petalCount }).map((_, i) => {
            const a = (i / petalCount) * 360;
            return (
              <motion.g
                key={i}
                transform={`rotate(${a} 150 150)`}
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: (i % 4) * 0.2 }}
                style={{ transformOrigin: "150px 150px" }}
              >
                <path
                  d="M150 90 Q160 70 150 50 Q140 70 150 90 Z"
                  fill={i % 2 === 0 ? "oklch(0.68 0.24 340)" : "oklch(0.72 0.22 50)"}
                  stroke="oklch(0.18 0.04 30)"
                  strokeWidth="1.2"
                />
                <circle cx="150" cy="70" r="2" fill="oklch(0.95 0.05 85)" />
              </motion.g>
            );
          })}
        </svg>

        {/* Lakshmi seated */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" style={{ transform: "translateZ(90px)" }}>
          <circle cx="150" cy="150" r="34" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="2" />
          {/* halo */}
          <circle cx="150" cy="138" r="12" fill="none" stroke="oklch(0.62 0.22 35)" strokeWidth="1" />
          {/* head */}
          <circle cx="150" cy="140" r="9" fill="oklch(0.85 0.1 60)" stroke="oklch(0.18 0.04 30)" strokeWidth="1.2" />
          <circle cx="147" cy="139" r="0.9" fill="oklch(0.18 0.04 30)" />
          <circle cx="153" cy="139" r="0.9" fill="oklch(0.18 0.04 30)" />
          <circle cx="150" cy="134" r="1.2" fill="oklch(0.62 0.22 35)" />
          {/* sari body */}
          <path d="M138 150 Q150 162 162 150 L168 172 L132 172 Z" fill="oklch(0.62 0.22 35)" stroke="oklch(0.18 0.04 30)" strokeWidth="1.2" />
          {/* arms holding lotuses */}
          <circle cx="130" cy="158" r="3" fill="oklch(0.68 0.24 340)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" />
          <circle cx="170" cy="158" r="3" fill="oklch(0.68 0.24 340)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" />
        </svg>
      </motion.div>
    </div>
  );
}

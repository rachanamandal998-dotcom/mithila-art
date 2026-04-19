import { motion } from "framer-motion";

/**
 * Mithila Sun Deity — radiating patterned rays with sacred symbols, flowers & birds.
 * Bold black outlines, vibrant fills, looping outward expansion.
 */
export function SunDeity3D({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 16 });
  const orbit = Array.from({ length: 8 });

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {/* Expanding ray layer */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(20px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          {rays.map((_, i) => {
            const a = (i / rays.length) * 360;
            return (
              <motion.g
                key={i}
                transform={`rotate(${a} 150 150)`}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                style={{ transformOrigin: "150px 150px" }}
              >
                <path
                  d="M150 150 L145 60 L150 30 L155 60 Z"
                  fill={i % 2 === 0 ? "oklch(0.72 0.22 50)" : "oklch(0.62 0.22 35)"}
                  stroke="oklch(0.18 0.04 30)"
                  strokeWidth="1.5"
                />
                <circle cx="150" cy="45" r="4" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
              </motion.g>
            );
          })}
        </motion.svg>

        {/* Counter-rotating bird/flower orbit */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(50px)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {orbit.map((_, i) => {
            const a = (i / orbit.length) * Math.PI * 2;
            const x = 150 + Math.cos(a) * 110;
            const y = 150 + Math.sin(a) * 110;
            const isBird = i % 2 === 0;
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                {isBird ? (
                  <g stroke="oklch(0.18 0.04 30)" strokeWidth="1.2" fill="oklch(0.68 0.24 340)">
                    <path d="M-8 0 Q0 -10 8 0 Q4 6 0 4 Q-4 6 -8 0 Z" />
                    <circle cx="6" cy="-2" r="1.5" fill="oklch(0.18 0.04 30)" />
                  </g>
                ) : (
                  <g stroke="oklch(0.18 0.04 30)" strokeWidth="1.2">
                    {[0, 60, 120, 180, 240, 300].map((d) => (
                      <ellipse key={d} cx="0" cy="-5" rx="3" ry="6" fill="oklch(0.82 0.17 85)" transform={`rotate(${d})`} />
                    ))}
                    <circle r="2.5" fill="oklch(0.62 0.22 35)" />
                  </g>
                )}
              </g>
            );
          })}
        </motion.svg>

        {/* Sun face center */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(80px)" }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="150" cy="150" r="48" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="2.5" />
          <circle cx="150" cy="150" r="36" fill="none" stroke="oklch(0.18 0.04 30)" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="138" cy="142" r="3" fill="oklch(0.18 0.04 30)" />
          <circle cx="162" cy="142" r="3" fill="oklch(0.18 0.04 30)" />
          <path d="M138 160 Q150 170 162 160" stroke="oklch(0.18 0.04 30)" strokeWidth="2" fill="none" />
          <path d="M150 130 L148 120 L150 116 L152 120 Z" fill="oklch(0.62 0.22 35)" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

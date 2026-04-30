import { motion } from "framer-motion";

/**
 * Floral garland (mala) — two intertwining loops with festive rhythmic motion.
 */
export function GarlandMala3D({ className = "" }: { className?: string }) {
  const flowers = Array.from({ length: 24 });

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateX: [4, -4, 4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Border frame */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" style={{ transform: "translateZ(0px)" }}>
          <rect x="10" y="10" width="280" height="280" fill="none" stroke="oklch(0.18 0.04 30)" strokeWidth="2" />
          <rect x="20" y="20" width="260" height="260" fill="none" stroke="oklch(0.62 0.22 35)" strokeWidth="1" strokeDasharray="4 3" />
          {[0, 90, 180, 270].map((r) => (
            <g key={r} transform={`rotate(${r} 150 150)`}>
              <circle cx="20" cy="20" r="6" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="2" fill="oklch(0.62 0.22 35)" />
            </g>
          ))}
        </svg>

        {/* Garland loop 1 */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(40px) rotate(15deg)" }}
          animate={{ rotate: [15, 18, 15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="150" cy="150" rx="110" ry="60" fill="none" stroke="oklch(0.32 0.08 140)" strokeWidth="2" />
          {flowers.map((_, i) => {
            const t = (i / flowers.length) * Math.PI * 2;
            const x = 150 + Math.cos(t) * 110;
            const y = 150 + Math.sin(t) * 60;
            return (
              <motion.g
                key={i}
                transform={`translate(${x} ${y})`}
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
              >
                {[0, 72, 144, 216, 288].map((d) => (
                  <ellipse key={d} cx="0" cy="-4" rx="2.5" ry="5" fill="oklch(0.68 0.24 340)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" transform={`rotate(${d})`} />
                ))}
                <circle r="2" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.6" />
              </motion.g>
            );
          })}
        </motion.svg>

        {/* Garland loop 2 (mirrored) */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(60px) rotate(-15deg)" }}
          animate={{ rotate: [-15, -18, -15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="150" cy="150" rx="110" ry="60" fill="none" stroke="oklch(0.32 0.08 140)" strokeWidth="2" />
          {flowers.map((_, i) => {
            const t = (i / flowers.length) * Math.PI * 2;
            const x = 150 + Math.cos(t) * 110;
            const y = 150 + Math.sin(t) * 60;
            return (
              <motion.g
                key={i}
                transform={`translate(${x} ${y})`}
                animate={{ scale: [1.1, 0.9, 1.1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
              >
                {[0, 60, 120, 180, 240, 300].map((d) => (
                  <ellipse key={d} cx="0" cy="-4" rx="2.5" ry="5" fill="oklch(0.72 0.22 50)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" transform={`rotate(${d})`} />
                ))}
                <circle r="2" fill="oklch(0.62 0.22 35)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.6" />
              </motion.g>
            );
          })}
        </motion.svg>

        {/* Center auspicious knot */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" style={{ transform: "translateZ(90px)" }}>
          <circle cx="150" cy="150" r="22" fill="oklch(0.62 0.22 35)" stroke="oklch(0.18 0.04 30)" strokeWidth="2" />
          <circle cx="150" cy="150" r="10" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="1.2" />
        </svg>
      </motion.div>
    </div>
  );
}

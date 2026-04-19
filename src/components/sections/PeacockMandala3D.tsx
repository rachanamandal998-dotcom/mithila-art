import { motion } from "framer-motion";

/**
 * Mithila mandala with two mirrored peacocks framing a dense floral core.
 */
export function PeacockMandala3D({ className = "" }: { className?: string }) {
  const leaves = Array.from({ length: 20 });

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateY: [-8, 8, -8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Background dense pattern */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(0)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="150" cy="150" r="140" fill="oklch(0.94 0.05 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="2" />
          {leaves.map((_, i) => {
            const a = (i / leaves.length) * 360;
            return (
              <g key={i} transform={`rotate(${a} 150 150)`}>
                <path
                  d="M150 20 Q156 50 150 80 Q144 50 150 20 Z"
                  fill="oklch(0.62 0.18 145)"
                  stroke="oklch(0.18 0.04 30)"
                  strokeWidth="1"
                />
                <circle cx="150" cy="50" r="2" fill="oklch(0.82 0.17 85)" />
              </g>
            );
          })}
        </motion.svg>

        {/* Mirrored peacocks */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" style={{ transform: "translateZ(50px)" }}>
          {[1, -1].map((side) => (
            <motion.g
              key={side}
              transform={`translate(150 150) scale(${side} 1)`}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Body */}
              <ellipse cx="40" cy="0" rx="22" ry="14" fill="oklch(0.5 0.18 220)" stroke="oklch(0.18 0.04 30)" strokeWidth="1.5" />
              {/* Neck & head */}
              <path d="M55 -8 Q70 -30 60 -50 Q55 -55 50 -50" fill="oklch(0.5 0.18 220)" stroke="oklch(0.18 0.04 30)" strokeWidth="1.5" />
              <circle cx="58" cy="-52" r="6" fill="oklch(0.5 0.18 220)" stroke="oklch(0.18 0.04 30)" strokeWidth="1.5" />
              <circle cx="60" cy="-53" r="1.5" fill="oklch(0.18 0.04 30)" />
              <path d="M62 -50 L70 -48 L62 -46 Z" fill="oklch(0.72 0.22 50)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" />
              {/* Crown */}
              <path d="M58 -58 L57 -64 M60 -58 L62 -64 M56 -58 L54 -63" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
              {/* Tail feathers */}
              {Array.from({ length: 7 }).map((_, k) => {
                const ang = -10 + k * 14;
                return (
                  <g key={k} transform={`translate(25 5) rotate(${ang})`}>
                    <ellipse cx="0" cy="40" rx="6" ry="40" fill="oklch(0.72 0.18 200)" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
                    <circle cx="0" cy="72" r="6" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
                    <circle cx="0" cy="72" r="2.5" fill="oklch(0.5 0.18 220)" />
                  </g>
                );
              })}
              {/* Legs */}
              <line x1="35" y1="14" x2="33" y2="24" stroke="oklch(0.18 0.04 30)" strokeWidth="1.5" />
              <line x1="45" y1="14" x2="47" y2="24" stroke="oklch(0.18 0.04 30)" strokeWidth="1.5" />
            </motion.g>
          ))}
        </svg>

        {/* Center floral medallion */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(80px)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="150" cy="150" r="28" fill="oklch(0.68 0.24 340)" stroke="oklch(0.18 0.04 30)" strokeWidth="2" />
          {Array.from({ length: 8 }).map((_, k) => (
            <ellipse key={k} cx="150" cy="130" rx="4" ry="10" fill="oklch(0.82 0.17 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="1" transform={`rotate(${k * 45} 150 150)`} />
          ))}
          <circle cx="150" cy="150" r="6" fill="oklch(0.62 0.22 35)" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

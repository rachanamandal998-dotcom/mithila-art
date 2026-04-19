import { motion } from "framer-motion";

/**
 * Rotating CD with Rama-Sita wedding center, garland exchange & decorative rings.
 */
export function RamaSitaCD3D({ className = "" }: { className?: string }) {
  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateX: [50, 45, 50] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Spinning disc (rings only) */}
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(0)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <radialGradient id="cdGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="oklch(0.95 0.04 85)" />
              <stop offset="100%" stopColor="oklch(0.62 0.22 35)" />
            </radialGradient>
          </defs>
          <circle cx="150" cy="150" r="140" fill="url(#cdGrad)" stroke="oklch(0.18 0.04 30)" strokeWidth="2.5" />
          {/* Lotus ring */}
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i / 14) * Math.PI * 2;
            const x = 150 + Math.cos(a) * 122;
            const y = 150 + Math.sin(a) * 122;
            return (
              <g key={i} transform={`translate(${x} ${y}) rotate(${(a * 180) / Math.PI + 90})`}>
                {[0, 72, 144, 216, 288].map((d) => (
                  <ellipse key={d} cx="0" cy="-5" rx="3" ry="7" fill="oklch(0.68 0.24 340)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" transform={`rotate(${d})`} />
                ))}
                <circle r="2" fill="oklch(0.82 0.17 85)" />
              </g>
            );
          })}
          {/* Peacock ring */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2;
            const x = 150 + Math.cos(a) * 90;
            const y = 150 + Math.sin(a) * 90;
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                <circle r="6" fill="oklch(0.5 0.18 220)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" />
                <circle r="2" fill="oklch(0.82 0.17 85)" />
              </g>
            );
          })}
        </motion.svg>

        {/* Static center scene (Rama & Sita) */}
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full" style={{ transform: "translateZ(70px)" }}>
          <circle cx="150" cy="150" r="58" fill="oklch(0.94 0.05 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="2" />

          {/* Rama (left) */}
          <g stroke="oklch(0.18 0.04 30)" strokeWidth="1.2">
            <circle cx="128" cy="142" r="10" fill="oklch(0.72 0.18 200)" />
            <path d="M120 152 Q128 168 136 152 L138 178 L118 178 Z" fill="oklch(0.72 0.22 50)" />
            <circle cx="125" cy="141" r="1" fill="oklch(0.18 0.04 30)" />
            <circle cx="131" cy="141" r="1" fill="oklch(0.18 0.04 30)" />
            <path d="M120 134 Q128 128 136 134" fill="oklch(0.18 0.04 30)" />
          </g>

          {/* Sita (right) */}
          <g stroke="oklch(0.18 0.04 30)" strokeWidth="1.2">
            <circle cx="172" cy="142" r="10" fill="oklch(0.85 0.1 60)" />
            <path d="M164 152 Q172 168 180 152 L182 178 L162 178 Z" fill="oklch(0.62 0.22 35)" />
            <circle cx="169" cy="141" r="1" fill="oklch(0.18 0.04 30)" />
            <circle cx="175" cy="141" r="1" fill="oklch(0.18 0.04 30)" />
            <path d="M165 132 L172 128 L179 132 L177 136 L167 136 Z" fill="oklch(0.62 0.22 35)" />
          </g>

          {/* Exchanged garland */}
          <motion.path
            d="M132 156 Q150 168 168 156"
            fill="none"
            stroke="oklch(0.32 0.08 140)"
            strokeWidth="1.5"
            animate={{ d: ["M132 156 Q150 168 168 156", "M132 156 Q150 172 168 156", "M132 156 Q150 168 168 156"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {Array.from({ length: 7 }).map((_, k) => (
            <circle key={k} cx={134 + k * 5.5} cy={163 + Math.sin(k) * 1.5} r="2" fill="oklch(0.68 0.24 340)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.5" />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

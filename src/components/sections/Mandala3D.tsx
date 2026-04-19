import { motion } from "framer-motion";

/** Pure-SVG/CSS 3D mandala — no WebGL needed, fast and responsive. */
export function Mandala3D({ className = "" }: { className?: string }) {
  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2].map((i) => (
          <motion.svg
            key={i}
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-34"
            style={{ transform: `rotateX(${i * 30}deg) translateZ(${i * 8}px)` }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <radialGradient id={`grad-${i}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.82 0.17 85)" stopOpacity="0.9" />
                <stop offset="60%" stopColor="oklch(0.62 0.22 35)" stopOpacity="0.55" />
                <stop offset="100%" stopColor="oklch(0.32 0.12 270)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill={`url(#grad-${i})`} />
            {Array.from({ length: 16 }).map((_, k) => {
              const a = (k / 16) * Math.PI * 2;
              const x = 100 + Math.cos(a) * 70;
              const y = 100 + Math.sin(a) * 70;
              return (
                <g key={k} stroke="oklch(0.22 0.05 30)" strokeWidth="1" fill="none" opacity={0.7}>
                  <circle cx={x} cy={y} r="10" />
                  <line x1="100" y1="100" x2={x} y2={y} />
                  <circle cx={x} cy={y} r="3" fill="oklch(0.62 0.22 35)" />
                </g>
              );
            })}
            <circle cx="100" cy="100" r="22" fill="oklch(0.62 0.22 35)" />
            <circle cx="100" cy="100" r="10" fill="oklch(0.82 0.17 85)" />
          </motion.svg>
        ))}
      </motion.div>
    </div>
  );
}

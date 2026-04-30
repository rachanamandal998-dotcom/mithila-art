import { motion } from "framer-motion";

export function Rangoli({ className = "" }: { className?: string }) {
  const ring = (count: number, radius: number) =>
    Array.from({ length: count }).map((_, i) => {
      const a = (i / count) * Math.PI * 2;
      return { x: 150 + Math.cos(a) * radius, y: 150 + Math.sin(a) * radius, a: (a * 180) / Math.PI };
    });

  return (
    // This wrapper ensures the Rangoli stays contained and responsive
    <div className={`w-full max-w-[320px] md:max-w-[400px] mx-auto perspective-1000 ${className}`}>
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateX: [55, 50, 55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.svg
          viewBox="0 0 300 300"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(0)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* ... (Keep all your existing SVG circles/paths here) ... */}
          <defs>
            <radialGradient id="discGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="oklch(0.95 0.04 85)" />
              <stop offset="100%" stopColor="oklch(0.78 0.12 60)" />
            </radialGradient>
          </defs>
          <circle cx="150" cy="150" r="140" fill="url(#discGrad)" stroke="oklch(0.18 0.04 30)" strokeWidth="2.5" />
          <circle cx="150" cy="150" r="125" fill="none" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
          <circle cx="150" cy="150" r="100" fill="none" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
          <circle cx="150" cy="150" r="70" fill="none" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
          <circle cx="150" cy="150" r="40" fill="none" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
          {ring(20, 130).map((p, i) => (
            <g key={`f${i}`} transform={`translate(${p.x} ${p.y}) rotate(${p.a + 90})`}>
              <path d="M-5 0 Q0 -4 5 0 Q0 4 -5 0 Z M5 0 L8 -2 L8 2 Z" fill="oklch(0.72 0.18 200)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.8" />
            </g>
          ))}
          {ring(12, 88).map((p, i) => (
            <g key={`fl${i}`} transform={`translate(${p.x} ${p.y})`}>
              {[0, 60, 120, 180, 240, 300].map((d) => (
                <ellipse key={d} cx="0" cy="-4" rx="2" ry="5" fill="oklch(0.68 0.24 340)" stroke="oklch(0.18 0.04 30)" strokeWidth="0.6" transform={`rotate(${d})`} />
              ))}
              <circle r="2" fill="oklch(0.82 0.17 85)" />
            </g>
          ))}
          {ring(16, 55).map((p, i) => (
            <polygon
              key={`t${i}`}
              points={`${p.x},${p.y - 6} ${p.x - 5},${p.y + 4} ${p.x + 5},${p.y + 4}`}
              fill={i % 2 === 0 ? "oklch(0.62 0.22 35)" : "oklch(0.32 0.08 140)"}
              stroke="oklch(0.18 0.04 30)"
              strokeWidth="0.8"
            />
          ))}
          <circle cx="150" cy="150" r="22" fill="oklch(0.18 0.04 30)" />
          <circle cx="150" cy="150" r="8" fill="oklch(0.95 0.04 85)" stroke="oklch(0.18 0.04 30)" strokeWidth="1" />
        </motion.svg>
      </motion.div>
    </div>
  );
}
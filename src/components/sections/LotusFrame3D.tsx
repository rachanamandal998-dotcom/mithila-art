import { motion } from "framer-motion";
import { useState } from "react";
import heroArt from "@/assets/mithila-hero.jpg";

/**
 * Modern 3D lotus-petal frame surrounding an authentic Mithila artwork.
 * Mouse-tilt parallax, layered glass petals, teal/magenta/gold palette.
 */
export function LotusFrame3D({ className = "" }: { className?: string }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 18, y: px * 18 });
  };

  const petals = Array.from({ length: 12 });

  return (
    <div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.div
        className="preserve-3d relative aspect-square w-full"
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 80, damping: 14 }}
      >
        {/* Glow halo */}
        <motion.div
          className="absolute inset-[-10%] rounded-full blur-3xl"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.72 0.18 200), oklch(0.68 0.24 340), oklch(0.82 0.17 85), oklch(0.72 0.18 200))",
            opacity: 0.45,
            transform: "translateZ(-80px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />

        {/* Rotating lotus petals */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(40px)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.72 0.18 200)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="oklch(0.68 0.24 340)" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="petalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.82 0.17 85)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.62 0.22 35)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {petals.map((_, i) => {
            const a = (i / petals.length) * 360;
            return (
              <ellipse
                key={i}
                cx="100"
                cy="22"
                rx="10"
                ry="28"
                fill={i % 2 === 0 ? "url(#petalGrad)" : "url(#petalGrad2)"}
                stroke="oklch(0.22 0.05 30 / 0.3)"
                strokeWidth="0.5"
                transform={`rotate(${a} 100 100)`}
              />
            );
          })}
        </motion.svg>

        {/* Counter-rotating inner ring */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          style={{ transform: "translateZ(60px)" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 24 }).map((_, k) => {
            const a = (k / 24) * Math.PI * 2;
            const x = 100 + Math.cos(a) * 88;
            const y = 100 + Math.sin(a) * 88;
            return (
              <circle
                key={k}
                cx={x}
                cy={y}
                r="2.2"
                fill={k % 3 === 0 ? "oklch(0.82 0.17 85)" : "oklch(0.68 0.24 340)"}
              />
            );
          })}
        </motion.svg>

        {/* Center artwork disk */}
        <div
          className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-background shadow-elegant"
          style={{ transform: "translate(-50%, -50%) translateZ(90px)" }}
        >
          <img
            src={heroArt}
            alt="Traditional Mithila painting from Janakpur depicting Goddess Sita with peacocks and lotus"
            className="h-full w-full object-cover"
            width={1024}
            height={1024}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, oklch(1 0 0 / 0.25), transparent 50%)",
            }}
          />
        </div>

        {/* Floating accent dots */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute h-3 w-3 rounded-full"
            style={{
              background:
                i % 2 === 0
                  ? "oklch(0.68 0.24 340)"
                  : "oklch(0.72 0.18 200)",
              top: `${20 + i * 18}%`,
              left: i % 2 === 0 ? "8%" : "88%",
              transform: `translateZ(${100 + i * 20}px)`,
              boxShadow: "0 0 20px currentColor",
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </div>
  );
}

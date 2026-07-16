"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticlesBackgroundProps {
    count?: number;
    color?: string;
}

function randomFromSeed(seed: number) {
    const value = Math.sin(seed) * 10000;
    return value - Math.floor(value);
}

/**
 * Lightweight floating "3D-ish" particle background — small dots that
 * drift up and sideways with slightly randomized timing, sitting behind
 * the main content (z-index handled by parent).
 */
export default function ParticlesBackground({ count = 26, color = "#70712C" }: ParticlesBackgroundProps) {
    const particles = useMemo(
        () =>
            Array.from({ length: count }).map((_, i) => {
                const seed = i + 1;

                return {
                    id: i,
                    left: randomFromSeed(seed * 11) * 100,
                    top: randomFromSeed(seed * 17) * 100,
                    size: 2 + randomFromSeed(seed * 23) * 4,
                    duration: 6 + randomFromSeed(seed * 31) * 8,
                    delay: randomFromSeed(seed * 41) * 6,
                    drift: (randomFromSeed(seed * 47) - 0.5) * 40,
                    opacity: 0.15 + randomFromSeed(seed * 53) * 0.35,
                };
            }),
        [count]
    );

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.span
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: p.size,
                        height: p.size,
                        backgroundColor: color,
                        opacity: p.opacity,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, p.drift, 0],
                        opacity: [p.opacity, p.opacity * 1.6, p.opacity],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

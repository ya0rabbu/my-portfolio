"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface ParticlesBackgroundProps {
    count?: number;
    color?: string;
}

/**
 * Lightweight floating "3D-ish" particle background — small dots that
 * drift up and sideways with slightly randomized timing, sitting behind
 * the main content (z-index handled by parent).
 */
export default function ParticlesBackground({ count = 26, color = "#70712C" }: ParticlesBackgroundProps) {
    const particles = useMemo(
        () =>
            Array.from({ length: count }).map((_, i) => ({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 2 + Math.random() * 4,
                duration: 6 + Math.random() * 8,
                delay: Math.random() * 6,
                drift: (Math.random() - 0.5) * 40,
                opacity: 0.15 + Math.random() * 0.35,
            })),
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
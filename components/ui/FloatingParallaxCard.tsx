"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface FloatingParallaxCardProps {
    children: ReactNode;
    /** mouse position normalized -0.5..0.5 relative to the tracking container */
    mouse: { x: number; y: number };
    /** how far this card travels relative to mouse movement — higher = faster/closer */
    depth?: number;
    className?: string;
    style?: CSSProperties;
}

export default function FloatingParallaxCard({
    children,
    mouse,
    depth = 30,
    className = "",
    style,
}: FloatingParallaxCardProps) {
    return (
        <motion.div
            animate={{
                x: mouse.x * depth,
                y: mouse.y * depth,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 16, mass: 0.6 }}
            className={`pointer-events-none absolute ${className}`}
            style={style}
        >
            {children}
        </motion.div>
    );
}
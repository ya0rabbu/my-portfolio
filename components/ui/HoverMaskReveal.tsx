"use client";

import { useEffect, useRef } from "react";

interface HoverMaskRevealProps {
    baseSrc: string;
    revealSrc: string;
    baseType?: "image" | "video";
    revealType?: "image" | "video";
    maskSize?: number;
    rotate?: boolean;
    className?: string;
    mouse: { x: number; y: number }; // 0-100 percentage, controlled from parent
    active: boolean; // whether the parent is currently hovered
}

export default function HoverMaskReveal({
    baseSrc,
    revealSrc,
    baseType = "image",
    revealType = "image",
    maskSize = 220,
    rotate = false,
    className = "",
    mouse,
    active,
}: HoverMaskRevealProps) {
    const baseLayerRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: 50, y: 50 });
    const sizeRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const baseLayer = baseLayerRef.current;
        if (!baseLayer) return;

        const applyMask = (xPct: number, yPct: number, size: number) => {
            const val = `radial-gradient(circle ${size}px at ${xPct}% ${yPct}%, transparent 0, transparent ${size}px, black ${size + 1}px)`;
            baseLayer.style.setProperty("-webkit-mask-image", val);
            baseLayer.style.setProperty("mask-image", val);
        };

        const loop = () => {
            const currentSize = active ? maskSize : 0;
            posRef.current.x += (mouse.x - posRef.current.x) * 0.2;
            posRef.current.y += (mouse.y - posRef.current.y) * 0.2;
            sizeRef.current += (currentSize - sizeRef.current) * 0.15;

            applyMask(posRef.current.x, posRef.current.y, sizeRef.current);
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [mouse, active, maskSize]);

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            <div className={`absolute inset-0 ${rotate ? "animate-[spin_12s_linear_infinite]" : ""}`}>
                {revealType === "video" ? (
                    <video src={revealSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={revealSrc} alt="" className="w-full h-full object-cover" />
                )}
            </div>
            <div ref={baseLayerRef} className="absolute inset-0">
                {baseType === "video" ? (
                    <video src={baseSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={baseSrc} alt="" className="w-full h-full object-cover" />
                )}
            </div>
        </div>
    );
}
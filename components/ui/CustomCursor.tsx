"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [hoverLabel, setHoverLabel] = useState("");
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        setIsVisible(true);

        let mouseX = 0;
        let mouseY = 0;
        let posX = 0;
        let posY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            posX += (mouseX - posX) * 0.18;
            posY += (mouseY - posY) * 0.18;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${posX}px, ${posY}px)`;
            }
            requestAnimationFrame(animate);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverEl = target.closest("[data-cursor-hover]");
            if (hoverEl) {
                setIsHovering(true);
                setHoverLabel(hoverEl.getAttribute("data-cursor-label") || "");
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("[data-cursor-hover]")) {
                setIsHovering(false);
                setHoverLabel("");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);
        const frame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(frame);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            ref={cursorRef}
            animate={{
                width: isHovering ? 90 : 16,
                height: isHovering ? 90 : 16,
            }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 rounded-full bg-white pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference flex items-center justify-center"
            style={{ willChange: "transform, width, height" }}
        >
            <AnimatePresence>
                {isHovering && hoverLabel && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-[10px] font-semibold font-urbanist uppercase tracking-wide text-black"
                    >
                        {hoverLabel}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
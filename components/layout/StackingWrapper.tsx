"use client";
import { ReactNode, useEffect, useRef } from "react";

interface StackingWrapperProps {
    children: ReactNode;
}

export function StickyStack({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const parent = el.parentElement;
        if (!parent) return;
        const totalHeight = parent.scrollHeight;
        const viewportHeight = window.innerHeight;
        const extraScroll = totalHeight - viewportHeight;
        if (extraScroll <= 0) return;
        const handleScroll = () => {
            const rect = el.getBoundingClientRect();
            let progress = rect.top / viewportHeight;
            progress = Math.max(0, Math.min(1, progress));
            el.style.transform = `translateY(${-progress * extraScroll}px)`;
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={ref} className="sticky top-0 w-full">
            {children}
        </div>
    );
}

export default function StackingWrapper({ children }: StackingWrapperProps) {
    return (
        <div className="relative w-full">
            {children}
        </div>
    );
}
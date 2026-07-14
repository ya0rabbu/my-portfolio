"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

// Wrap your app's root layout with this once. It replaces native scroll with
// Lenis's inertia/momentum scroll and keeps GSAP ScrollTrigger's internal
// scroll position in sync — required for any later pinned sections or
// horizontal-scroll galleries to track the right offset.
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Respect reduced-motion: skip inertia entirely, let native scroll behave normally.
        if (prefersReduced) return;

        const lenis = new Lenis({
            // lower = more glide/lag, higher = snappier. 1.1–1.2 reads as
            // "premium agency site" without feeling sluggish to navigate.
            duration: 1.15,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5, // slightly higher — touch scroll needs more travel to feel equivalent
        });

        lenisRef.current = lenis;

        // Drive GSAP's ticker instead of requestAnimationFrame directly —
        // this is what keeps ScrollTrigger-based animations (pinned hero,
        // horizontal galleries) perfectly synced to Lenis's virtual scroll.
        function raf(time: number) {
            lenis.raf(time * 1000);
        }
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        // Tell ScrollTrigger to read scroll position from Lenis, not window.scrollY
        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return <>{children}</>;
}

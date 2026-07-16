"use client";

import { useEffect, useRef, useState } from "react";
import * as React from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
    children: React.ReactNode;
}

const TAGLINE = "Product Designer";
const SUBTITLE = "Creating user-friendly products amid complexity.";

export default function SplashScreen({ children }: SplashScreenProps) {
    const overlayRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const barFillRef = useRef<HTMLDivElement>(null);
    const percentRef = useRef<HTMLSpanElement>(null);
    const lineTopRef = useRef<HTMLDivElement>(null);
    const lineBottomRef = useRef<HTMLDivElement>(null);
    const contentBlurRef = useRef<HTMLDivElement>(null);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) { setIsDone(true); return; }

        const tl = gsap.timeline({ onComplete: () => setIsDone(true) });
        const percentProxy = { val: 0 };

        // Initial state
        gsap.set([logoRef.current, taglineRef.current, subtitleRef.current, lineTopRef.current, lineBottomRef.current], {
            opacity: 0,
        });
        gsap.set(logoRef.current, { y: 20 });
        gsap.set(taglineRef.current, { y: 10 });
        gsap.set(subtitleRef.current, { y: 8 });
        gsap.set(lineTopRef.current, { scaleX: 0, transformOrigin: "left" });
        gsap.set(lineBottomRef.current, { scaleX: 0, transformOrigin: "right" });

        // 1 — Lines draw in
        tl.to([lineTopRef.current, lineBottomRef.current], {
            scaleX: 1, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1,
        });

        // 2 — Name appears
        tl.to(logoRef.current, {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        }, "-=0.4");

        // 3 — Tagline
        tl.to(taglineRef.current, {
            y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
        }, "-=0.2");

        // 4 — Subtitle
        tl.to(subtitleRef.current, {
            y: 0, opacity: 1, duration: 0.5, ease: "power2.out",
        }, "-=0.3");

        // hold
        tl.to({}, { duration: 0.3 });

        // 5 — Progress bar
        tl.to(percentProxy, {
            val: 100,
            duration: 1.8,
            ease: "power1.inOut",
            onUpdate: () => {
                const v = Math.round(percentProxy.val);
                if (percentRef.current) percentRef.current.textContent = `${v}`;
                if (barFillRef.current) barFillRef.current.style.width = `${v}%`;
            },
        }, "+=0.1");

        // hold at 100
        tl.to({}, { duration: 0.3 });

        // 6 — Everything fades + slides up, overlay collapses
        tl.to(contentBlurRef.current, {
            opacity: 0, duration: 0.5, ease: "power2.out",
        });

        tl.to(overlayRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power3.inOut",
        }, "-=0.2");

        return () => { tl.kill(); };
    }, []);

    return (
        <div className="relative w-full">
            {/* Blur behind content while loading */}
            <div
                ref={contentBlurRef}
                className="fixed inset-0 z-[900] pointer-events-none"
                style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(246,244,242,0.6)" }}
            />

            {children}

            {!isDone && (
                <div ref={overlayRef} className="fixed inset-0 z-[999] flex items-center justify-center" style={{ backgroundColor: "#F3EDE3" }}>

                    {/* Thin decorative lines */}
                    <div ref={lineTopRef} className="absolute top-[72px] left-[60px] right-[60px] h-[1px] bg-[#D6CFC6]" />
                    <div ref={lineBottomRef} className="absolute bottom-[72px] left-[60px] right-[60px] h-[1px] bg-[#D6CFC6]" />

                    {/* Corner labels */}
                    <span className="absolute top-[48px] left-[60px] font-urbanist text-[11px] tracking-[0.2em] text-[#A09890] uppercase">Portfolio</span>
                    <span className="absolute top-[48px] right-[60px] font-urbanist text-[11px] tracking-[0.2em] text-[#A09890] uppercase">2026</span>

                    {/* Center content */}
                    <div className="flex flex-col items-center gap-6 select-none pointer-events-none">

                        {/* Name */}
                        <div ref={logoRef} className="items-center">
                            <span
                                className="font-cabinet font-bold tracking-[-0.02em] leading-[1.24] letter-spacing-[12px]"
                                style={{ fontSize: "56px", color: "#161616" }}
                            >
                                Yasir
                            </span>
                            <span
                                className="font-cabinet font-bold tracking-[-0.02em] leading-[1.24]"
                                style={{ fontSize: "56px", color: "#CD3234" }}
                            >
                                Abed
                            </span>
                            <span
                                className="font-cabinet font-bold tracking-[-0.02em] leading-[1.24]"
                                style={{ fontSize: "56px", color: "#16161665/40" }}
                            >
                                Rabbu
                            </span>


                        </div>

                        {/* Tagline */}
                        <p ref={taglineRef} className="font-urbanist font-medium text-[#161616] tracking-[0.25em] capitalize text-xs sm:text-sm">
                            {TAGLINE}
                        </p>

                        {/* Subtitle */}
                        <p ref={subtitleRef} className="font-urbanist font-normal text-[#8C847C] text-center text-sm max-w-[320px]">
                            {SUBTITLE}
                        </p>

                        {/* Progress */}
                        <div className="flex flex-col items-center gap-3 w-[220px] sm:w-[300px]">
                            <div className="w-full h-[1px] bg-[#E0D9D0] overflow-hidden">
                                <div ref={barFillRef} className="h-full bg-[#161616]" style={{ width: "0%" }} />
                            </div>
                            <div className="w-full flex justify-between">
                                <span className="font-urbanist text-[10px] tracking-[0.2em] text-[#A09890] capitalize">Loading</span>
                                <span ref={percentRef} className="font-cabinet font-bold text-[11px] text-[#161616]">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
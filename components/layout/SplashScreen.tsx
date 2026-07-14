"use client";

import { useEffect, useRef, useState } from "react";
import * as React from "react";
import { gsap } from "gsap";

interface SplashScreenProps {
    children: React.ReactNode;
}

const STRIP_COUNT = 4;
const NAME = "YASIR ABED RABBU";
const TAGLINE = "Product Designer — Creating User-Friendly Products Amid Complexity.";

// ASCII loader — a grid of characters that "fills in" left to right based on progress
const ASCII_COLS = 28;
const ASCII_ROWS = 6;
const ASCII_CHARS = ["·", ":", "+", "*", "#", "@"];

function AsciiLoader({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
    const cellRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const total = ASCII_COLS * ASCII_ROWS;
        const loop = () => {
            const p = progressRef.current; // 0..1
            for (let i = 0; i < total; i++) {
                const col = i % ASCII_COLS;
                const colProgress = col / ASCII_COLS;
                const el = cellRefs.current[i];
                if (!el) continue;

                let charIndex = 0;
                if (colProgress < p) {
                    const local = Math.min(1, (p - colProgress) * 6);
                    charIndex = Math.floor(local * (ASCII_CHARS.length - 1));
                }
                el.textContent = ASCII_CHARS[charIndex];
                el.style.opacity = charIndex === 0 ? "0.15" : "1";
            }
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className="grid font-cabinet font-bold select-none"
            style={{
                gridTemplateColumns: `repeat(${ASCII_COLS}, 1fr)`,
                gap: "2px",
                color: "var(--splash-fg, #161616)",
            }}
            aria-hidden="true"
        >
            {Array.from({ length: ASCII_COLS * ASCII_ROWS }).map((_, i) => (
                <span
                    key={i}
                    ref={(el) => { cellRefs.current[i] = el; }}
                    className="text-[10px] md:text-[13px] leading-none text-center"
                >
                    ·
                </span>
            ))}
        </div>
    );
}

export default function SplashScreen({ children }: SplashScreenProps) {
    const nameRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const asciiWrapRef = useRef<HTMLDivElement>(null);
    const percentRef = useRef<HTMLSpanElement>(null);
    const introStageRef = useRef<HTMLDivElement>(null);
    const contentBlurRef = useRef<HTMLDivElement>(null);
    const stripsRef = useRef<(HTMLDivElement | null)[]>([]);
    const progress = useRef(0);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setIsDone(true);
            return;
        }

        const percentProxy = { val: 0 };
        const tl = gsap.timeline({
            onComplete: () => setIsDone(true),
        });

        // 1 — Name fades/scales in
        tl.fromTo(
            nameRef.current,
            { opacity: 0, y: 16, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power2.out" }
        );

        // hold on name
        tl.to({}, { duration: 0.6 });

        // 2 — Tagline fades in below
        tl.fromTo(
            taglineRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );

        // hold on intro
        tl.to({}, { duration: 0.9 });

        // 3 — Intro block exits, ASCII loader enters
        tl.to(introStageRef.current, {
            opacity: 0,
            y: -14,
            duration: 0.6,
            ease: "power2.inOut",
        });

        tl.fromTo(
            asciiWrapRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
            "-=0.2"
        );

        // 4 — Progress counts 0 → 100, drives ASCII fill
        tl.to(
            percentProxy,
            {
                val: 100,
                duration: 2.6,
                ease: "power1.inOut",
                onUpdate: () => {
                    progress.current = percentProxy.val / 100;
                    if (percentRef.current) {
                        percentRef.current.textContent = String(Math.round(percentProxy.val));
                    }
                },
            },
            "+=0.1"
        );

        // hold at 100
        tl.to({}, { duration: 0.5 });

        // 5 — ASCII loader exits
        tl.to(asciiWrapRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.6,
            ease: "power2.inOut",
        });

        // fade dim/blur off the live hero underneath
        tl.to(
            contentBlurRef.current,
            { opacity: 0, duration: 1.0, ease: "power2.out" },
            "-=0.2"
        );

        // 6 — strips peel away, revealing the page
        tl.to(
            stripsRef.current,
            {
                yPercent: (i) => (i % 2 === 0 ? -100 : 100),
                duration: 1.4,
                ease: "power2.inOut",
                stagger: 0.15,
            },
            "-=0.3"
        );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="relative w-full">
            {/* hero content — live in the DOM from the start */}
            <div
                ref={contentBlurRef}
                className="fixed inset-0 z-[900] pointer-events-none"
                style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(243,237,227,0.4)" }}
            />
            {children}

            {/* splash overlay */}
            {!isDone && (
                <div className="fixed inset-0 z-[999] flex">
                    {Array.from({ length: STRIP_COUNT }).map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => { stripsRef.current[i] = el; }}
                            className="h-full"
                            style={{
                                width: `${100 / STRIP_COUNT}%`,
                                backgroundColor: "var(--splash-bg, #F3EDE3)",
                            }}
                        />
                    ))}

                    <div
                        role="status"
                        aria-live="polite"
                        aria-label="Loading page"
                        className="absolute inset-0 z-[1000] flex flex-col items-center justify-center gap-6 px-6 pointer-events-none"
                    >
                        {/* Stage 1+2: name + tagline */}
                        <div ref={introStageRef} className="flex flex-col items-center gap-4 text-center">
                            <div
                                ref={nameRef}
                                className="font-cabinet font-bold leading-none tracking-tight text-[9vw] xs:text-[7vw] sm:text-[5vw] md:text-[3.2vw]"
                                style={{ color: "var(--splash-fg, #161616)", opacity: 0 }}
                            >
                                {NAME}
                            </div>
                            <p
                                ref={taglineRef}
                                className="font-urbanist text-sm md:text-base max-w-[420px]"
                                style={{ color: "var(--splash-fg-muted, #6b6459)", opacity: 0 }}
                            >
                                {TAGLINE}
                            </p>
                        </div>

                        {/* Stage 3: ASCII loader */}
                        <div
                            ref={asciiWrapRef}
                            className="flex flex-col items-center gap-3"
                            style={{ opacity: 0 }}
                        >
                            <div className="w-[240px] xs:w-[300px] sm:w-[360px]">
                                <AsciiLoader progressRef={progress} />
                            </div>
                            <span
                                className="font-cabinet font-medium text-xs tracking-[0.15em]"
                                style={{ color: "var(--splash-fg-muted, #6b6459)" }}
                            >
                                <span ref={percentRef}>0</span>%
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
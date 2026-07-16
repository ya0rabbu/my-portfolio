"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouch] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
    );

    useEffect(() => {
        if (isTouch) return;

        const onMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const onOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverEl = target.closest('a, button, [role="button"], [data-cursor="hover"]');
            setIsHovering(!!hoverEl);
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseover", onOver);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onOver);
        };
    }, [isTouch, isVisible]);

    if (isTouch) return null;

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed top-0 left-0 z-[9999] transition-opacity duration-200"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            {/* Arrow (normal state) */}
            {!isHovering && (
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -left-[1px] -top-[1px]"
                >
                    <g filter="url(#filter0_d_cursor)">
                        <path
                            d="M6.59841 18.2589L2.03983 2.26739C1.80445 1.44167 2.66207 0.728641 3.4419 1.10171L18.5446 8.32677C19.3476 8.71093 19.2873 9.86351 18.4486 10.1607L12.2372 12.3615C12.0116 12.4414 11.8224 12.5987 11.7038 12.8049L8.43783 18.4837C7.99683 19.2505 6.84079 19.1092 6.59841 18.2589Z"
                            fill="#CD3234"
                        />
                    </g>
                    <defs>
                        <filter id="filter0_d_cursor" x="0" y="0" width="21.1133" height="21.9854" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_cursor" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_cursor" result="shape" />
                        </filter>
                    </defs>
                </svg>
            )}

            {/* Hand (hover state) */}
            {isHovering && (
                <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -left-[1px] -top-[1px]"
                >
                    <path
                        d="M9.39551 0.5C10.2238 0.500131 10.8955 1.17164 10.8955 2V2.99707C10.897 2.16987 11.5681 1.5 12.3955 1.5C13.2237 1.50013 13.8955 2.17161 13.8955 3V6C13.8955 5.17156 14.5671 4.5 15.3955 4.5C16.2237 4.50013 16.8955 5.17161 16.8955 6V14C16.8955 17.0375 14.4329 19.4999 11.3955 19.5H10.3955C8.70319 19.5 7.18972 18.7343 6.18164 17.5332L6.08789 17.4521L1.08301 12.7461C0.373323 12.0788 0.301782 10.9593 0.921875 10.208C1.52576 9.47683 2.58157 9.34457 3.34473 9.9082L4.89551 11.0537V4C4.89551 3.17156 5.56707 2.5 6.39551 2.5C7.22371 2.50013 7.89551 3.17161 7.89551 4V2C7.89551 1.17156 8.56707 0.5 9.39551 0.5Z"
                        fill="white"
                        stroke="#CD3234"
                        strokeLinejoin="round"
                    />
                </svg>
            )}

            {/* Name/message pill */}
            <div className="absolute left-[17px] top-[18px] pl-1 pr-2.5 py-1 bg-[#CD3234] rounded-full shadow-[4px_4px_10px_rgba(205,50,52,0.16)] flex items-center gap-1.5 whitespace-nowrap w-fit">
                <div className="w-5 h-5 rounded-full overflow-hidden border border-white/50 shrink-0 relative">
                    <Image
                        src="/assets/images/avatar-cursor.png"
                        alt=""
                        fill
                        sizes="20px"
                        className="object-cover"
                    />
                </div>
                <div className="relative w-[40px] h-[12px] shrink-0">
                    <Image
                        src="/assets/icons/hello-text.png"
                        alt="hello"
                        fill
                        sizes="40px"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

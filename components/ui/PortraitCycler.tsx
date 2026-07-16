"use client";

import { useState } from "react";
import Image from "next/image";

type PortraitState = "normal" | "pixelated" | "sketch" | "ascii";

interface PortraitCyclerProps {
    src: string;
    alt?: string;
    className?: string;
}

const STATE_ORDER: PortraitState[] = ["normal", "pixelated", "sketch", "ascii"];

export default function PortraitCycler({ src, alt = "", className = "" }: PortraitCyclerProps) {
    const [stateIndex, setStateIndex] = useState(0);
    const currentState = STATE_ORDER[stateIndex];

    const handleClick = () => {
        setStateIndex((prev) => (prev + 1) % STATE_ORDER.length);
    };

    const getFilterClass = (state: PortraitState): string => {
        switch (state) {
            case "normal":
                return "";
            case "pixelated":
                return "portrait-pixelated";
            case "sketch":
                return "portrait-sketch";
            case "ascii":
                return "portrait-ascii";
        }
    };

    return (
        <div
            className={`relative w-full h-full cursor-pointer select-none ${className}`}
            onClick={handleClick}
            role="img"
            aria-label={alt}
        >
            <div className="absolute inset-0 rounded-xl overflow-hidden bg-black">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={`object-cover w-full h-full transition-all duration-500 ${getFilterClass(currentState)}`}
                    priority
                />
            </div>
        </div>
    );
}
import React, { ReactNode } from 'react';

interface LiquidGlassProps {
    children?: ReactNode;
    className?: string;
    blurAmount?: number; // Frosted glass blur radius
    scale?: number;      // Intensity of edge refraction
}

// Apple-style liquid glass panel using SVG displacement filter for organic refraction
export const LiquidGlass: React.FC<LiquidGlassProps> = ({
    children,
    className = '',
    blurAmount = 24,
    scale = 15,
}) => {
    const filterId = "apple-liquid-glass-filter";

    return (
        <div className="relative inline-block w-full">
            {/* Hidden SVG Filter defining the refraction mechanics */}
            <svg className="absolute pointer-events-none opacity-0 h-0 w-0" aria-hidden="true">
                <defs>
                    <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.015"
                            numOctaves={3}
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale={scale}
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displaced"
                        />
                        <feBlend in="SourceGraphic" in2="displaced" mode="normal" />
                    </filter>
                </defs>
            </svg>

            {/* The Liquid Glass Container */}
            <div
                className={`relative overflow-hidden rounded-xl border border-white/30 bg-white/10 shadow-2xl transition-all duration-300 ease-out hover:bg-white/15 ${className}`}
                style={{
                    backdropFilter: `blur(${blurAmount}px) url(#${filterId})`,
                    WebkitBackdropFilter: `blur(${blurAmount}px) url(#${filterId})`,
                }}
            >
                {/* Ambient Specular Highlight Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />

                {/* Component Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LiquidGlass;
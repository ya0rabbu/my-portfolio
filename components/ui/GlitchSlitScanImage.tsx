"use client";

import { useEffect, useRef } from "react";

interface GlitchSlitScanImageProps {
    src: string;
    alt?: string;
    className?: string;
    /** height of each horizontal strip in px, default 6 (smaller = finer) */
    stripHeight?: number;
    /** max horizontal shift per strip in px, default 24 */
    maxShift?: number;
    /** RGB channel split offset in px, default 4 */
    rgbSplit?: number;
}

/**
 * Renders an image on a <canvas>. On hover, slices the image into thin
 * horizontal strips, jitters each strip's horizontal position, and adds a
 * subtle RGB channel split — a "slit-scan glitch" look. At rest (no hover)
 * the image renders perfectly normal, no distortion.
 */
export default function GlitchSlitScanImage({
    src,
    alt = "",
    className = "",
    stripHeight = 6,
    maxShift = 24,
    rgbSplit = 4,
}: GlitchSlitScanImageProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const progressRef = useRef(0); // 0 = normal, 1 = fully glitched
    const targetRef = useRef(0);
    const seedRef = useRef<number[]>([]);
    const drawInfoRef = useRef({ drawW: 0, drawH: 0, offX: 0, offY: 0, scale: 1 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrapper = wrapperRef.current;
        if (!canvas || !wrapper) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        imgRef.current = img;

        const setup = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = wrapper.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const iw = img.naturalWidth;
            const ih = img.naturalHeight;
            if (!iw || !ih) return;

            const scale = Math.max(rect.width / iw, rect.height / ih);
            const drawW = iw * scale;
            const drawH = ih * scale;
            const offX = (rect.width - drawW) / 2;
            const offY = (rect.height - drawH) / 2;
            drawInfoRef.current = { drawW, drawH, offX, offY, scale };

            const stripCount = Math.ceil(rect.height / stripHeight) + 1;
            const seeds: number[] = [];
            for (let i = 0; i < stripCount; i++) {
                seeds.push(Math.random() * 2 - 1); // -1..1
            }
            seedRef.current = seeds;
        };

        const render = () => {
            const rect = wrapper.getBoundingClientRect();
            const p = progressRef.current;
            ctx.clearRect(0, 0, rect.width, rect.height);

            const { drawW, drawH, offX, offY } = drawInfoRef.current;
            if (!drawW || !drawH) return;

            if (p < 0.01) {
                // fully at rest — draw the plain image, no glitch overhead
                ctx.drawImage(img, offX, offY, drawW, drawH);
                return;
            }

            const seeds = seedRef.current;
            const strips = seeds.length;

            for (let i = 0; i < strips; i++) {
                const y = i * stripHeight;
                if (y > rect.height) break;
                const h = Math.min(stripHeight, rect.height - y);
                const seed = seeds[i];

                // occasional strips glitch harder ("glitch bursts")
                const burst = Math.abs(Math.sin(i * 12.9898)) > 0.85 ? 1.8 : 1;
                const shift = seed * maxShift * p * burst;
                const split = rgbSplit * p * burst;

                // base strip (draws full color, slightly shifted)
                ctx.globalAlpha = 1;
                ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, offX + shift, y, drawW, h + 1);

                // red channel ghost, shifted opposite direction
                ctx.globalCompositeOperation = "screen";
                ctx.globalAlpha = 0.35;
                ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, offX + shift + split, y, drawW, h + 1);
                ctx.globalCompositeOperation = "source-over";
                ctx.globalAlpha = 1;
            }
        };

        const loop = () => {
            const diff = targetRef.current - progressRef.current;
            progressRef.current += diff * 0.15;
            if (Math.abs(diff) < 0.001) progressRef.current = targetRef.current;
            render();
            rafRef.current = requestAnimationFrame(loop);
        };

        const onLoad = () => {
            setup();
            render();
        };

        if (img.complete && img.naturalWidth) {
            onLoad();
        } else {
            img.onload = onLoad;
        }

        const resizeObserver = new ResizeObserver(() => {
            setup();
            render();
        });
        resizeObserver.observe(wrapper);

        rafRef.current = requestAnimationFrame(loop);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            resizeObserver.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src, stripHeight, maxShift, rgbSplit]);

    return (
        <div
            ref={wrapperRef}
            className={`relative w-full h-full overflow-hidden ${className}`}
            onMouseEnter={() => (targetRef.current = 1)}
            onMouseLeave={() => (targetRef.current = 0)}
            role="img"
            aria-label={alt}
        >
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
}
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type PortraitState = "normal" | "pixelated" | "stretch" | "crash";

interface PortraitCyclerProps {
    src: string;
    alt?: string;
    className?: string;
}

const STATE_ORDER: PortraitState[] = ["normal", "pixelated", "stretch", "crash"];

export default function PortraitCycler({ src, alt = "", className = "" }: PortraitCyclerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stateIndex, setStateIndex] = useState(0);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const uniformsRef = useRef<Record<string, { value: unknown }> | null>(null);
    const rafRef = useRef<number>(0);
    const timerRef = useRef<THREE.Timer | null>(null);

    const currentState = STATE_ORDER[stateIndex];

    const handleClick = () => {
        setStateIndex((prev) => (prev + 1) % STATE_ORDER.length);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
        container.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const loader = new THREE.TextureLoader();
        const texture = loader.load(src);
        texture.colorSpace = THREE.NoColorSpace;

        const uniforms = {
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMode: { value: 0 }, // 0=normal,1=pixel,2=stretch,3=crash
            uPixelSize: { value: 1.0 },
            uStretch: { value: 0.0 },
            uGlitch: { value: 0.0 },
        };
        uniformsRef.current = uniforms as Record<string, { value: unknown }>;

        const material = new THREE.ShaderMaterial({
            uniforms,
            transparent: true,
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D uTexture;
                uniform float uTime;
                uniform float uMode;
                uniform float uPixelSize;
                uniform float uStretch;
                uniform float uGlitch;
                varying vec2 vUv;

                float rand(vec2 co) {
                    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
                }

                void main() {
                    vec2 uv = vUv;

                    // ── MODE 1: Pixelated ──
                    if (uMode > 0.5 && uMode < 1.5) {
                        float ps = uPixelSize;
                        uv = floor(uv * ps) / ps;
                        gl_FragColor = texture2D(uTexture, uv);
                        return;
                    }

                    // ── MODE 2: Stretch ──
                    if (uMode > 1.5 && uMode < 2.5) {
                        float wave = sin(uv.x * 8.0 + uTime * 2.0) * uStretch * 0.08;
                        float wave2 = cos(uv.y * 6.0 + uTime * 1.5) * uStretch * 0.05;
                        uv.y += wave;
                        uv.x += wave2;
                        // vertical stretch pull
                        uv.y = uv.y * (1.0 + uStretch * 0.3) - uStretch * 0.15;
                        uv = clamp(uv, 0.0, 1.0);
                        gl_FragColor = texture2D(uTexture, uv);
                        return;
                    }

                    // ── MODE 3: Code Crash / Glitch ──
                    if (uMode > 2.5) {
                        // Horizontal slice glitch
                        float sliceY = floor(uv.y * 24.0) / 24.0;
                        float sliceRand = rand(vec2(sliceY, floor(uTime * 10.0)));
                        float offset = (sliceRand - 0.5) * uGlitch * 0.35;
                        uv.x += offset;

                        // RGB channel split
                        float r = texture2D(uTexture, uv + vec2(uGlitch * 0.02, 0.0)).r;
                        float g = texture2D(uTexture, uv).g;
                        float b = texture2D(uTexture, uv - vec2(uGlitch * 0.02, 0.0)).b;

                        // Scanlines
                        float scan = mod(gl_FragCoord.y, 3.0) < 1.0 ? 0.75 : 1.0;

                        // Random noise blocks
                        float noise = rand(vec2(floor(uv.x * 30.0), floor(uv.y * 30.0) + floor(uTime * 15.0)));
                        float noiseMask = step(0.92, noise) * uGlitch;

                        vec3 col = mix(vec3(r, g, b), vec3(noise), noiseMask) * scan;

                        // Green tint flicker
                        col = mix(col, col * vec3(0.2, 1.0, 0.3), uGlitch * 0.3 * sin(uTime * 20.0) * 0.5 + 0.5);

                        gl_FragColor = vec4(col, 1.0);
                        return;
                    }

                    // ── MODE 0: Normal ──
                    gl_FragColor = texture2D(uTexture, uv);
                }
            `,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        scene.add(new THREE.Mesh(geometry, material));

        const resize = () => {
            const rect = container.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                renderer.setSize(rect.width, rect.height);
            }
        };
        resize();

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);

        const timer = new THREE.Timer();
        timerRef.current = timer;

        const animate = () => {
            timer.update();
            uniforms.uTime.value = timer.getElapsed();
            renderer.render(scene, camera);
            rafRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(rafRef.current);
            resizeObserver.disconnect();
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            texture.dispose();
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [src]);

    // Sync state → shader uniforms with smooth transition
    useEffect(() => {
        const uniforms = uniformsRef.current;
        if (!uniforms) return;

        const modeMap: Record<PortraitState, number> = {
            normal: 0,
            pixelated: 1,
            stretch: 2,
            crash: 3,
        };

        uniforms.uMode.value = modeMap[currentState];

        // Animate uniform values
        let start: number | null = null;
        let animRaf: number;

        const targets: Record<PortraitState, { uPixelSize: number; uStretch: number; uGlitch: number }> = {
            normal: { uPixelSize: 1, uStretch: 0, uGlitch: 0 },
            pixelated: { uPixelSize: 18, uStretch: 0, uGlitch: 0 },
            stretch: { uPixelSize: 1, uStretch: 1, uGlitch: 0 },
            crash: { uPixelSize: 1, uStretch: 0, uGlitch: 1 },
        };

        const target = targets[currentState];
        const duration = 600;

        const fromPixel = uniforms.uPixelSize.value as number;
        const fromStretch = uniforms.uStretch.value as number;
        const fromGlitch = uniforms.uGlitch.value as number;

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const tick = (ts: number) => {
            if (!start) start = ts;
            const t = ease(Math.min((ts - start) / duration, 1));
            uniforms.uPixelSize.value = lerp(fromPixel, target.uPixelSize, t);
            uniforms.uStretch.value = lerp(fromStretch, target.uStretch, t);
            uniforms.uGlitch.value = lerp(fromGlitch, target.uGlitch, t);
            if (t < 1) animRaf = requestAnimationFrame(tick);
        };
        animRaf = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(animRaf);
    }, [currentState]);

    const labels: Record<PortraitState, string> = {
        normal: "Click to distort",
        pixelated: "Pixelated",
        stretch: "Stretched",
        crash: "System Crash",
    };

    const labelColors: Record<PortraitState, string> = {
        normal: "bg-white/10 text-white/60",
        pixelated: "bg-[#70712C]/20 text-[#70712C]",
        stretch: "bg-blue-500/20 text-blue-300",
        crash: "bg-[#CD3234]/20 text-[#CD3234]",
    };

    return (
        <div
            className={`relative w-full h-full cursor-pointer select-none ${className}`}
            onClick={handleClick}
        >
            {/* Three.js canvas */}
            <div ref={containerRef} className="absolute inset-0 rounded-xl overflow-hidden" />

            {/* State label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <span className={`px-3 py-1 rounded-full text-xs font-urbanist font-medium backdrop-blur-sm transition-all duration-300 ${labelColors[currentState]}`}>
                    {labels[currentState]}
                </span>
            </div>

            {/* Click hint dots */}
            <div className="absolute top-4 right-4 z-10 flex gap-1 pointer-events-none">
                {STATE_ORDER.map((s, i) => (
                    <span
                        key={s}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === stateIndex ? "bg-white scale-125" : "bg-white/30"}`}
                    />
                ))}
            </div>
        </div>
    );
}
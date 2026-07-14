"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type PortraitState = "normal" | "pixelated" | "sketch" | "ascii";

interface PortraitCyclerProps {
    src: string;
    alt?: string;
    className?: string;
}

const STATE_ORDER: PortraitState[] = ["normal", "pixelated", "sketch", "ascii"];

export default function PortraitCycler({ src, alt = "", className = "" }: PortraitCyclerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stateIndex, setStateIndex] = useState(0);
    const uniformsRef = useRef<Record<string, { value: unknown }> | null>(null);
    const rafRef = useRef<number>(0);

    const currentState = STATE_ORDER[stateIndex];

    const handleClick = () => {
        setStateIndex((prev) => (prev + 1) % STATE_ORDER.length);
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
        container.appendChild(renderer.domElement);

        const loader = new THREE.TextureLoader();
        const texture = loader.load(
            src,
            (tex) => {
                if (tex.image && tex.image.height > 0) {
                    uniforms.uImageAspect.value = tex.image.width / tex.image.height;
                }
                console.log("Texture loaded successfully");
            },
            undefined,
            (err) => console.error("Texture load error:", err)
        );
        texture.colorSpace = THREE.NoColorSpace;

        const uniforms = {
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMode: { value: 0 },
            uResolution: { value: new THREE.Vector2(1, 1) },
            uImageAspect: { value: 1 },
            uPlaneAspect: { value: 1 },
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
                uniform vec2 uResolution;
                varying vec2 vUv;

                float getLuminance(vec3 c) {
                    return dot(c, vec3(0.299, 0.587, 0.114));
                }

                void main() {
                    vec2 uv = vUv;

                    // MODE 1: Pixelated (cross-stitch style)
                    if (uMode > 0.5 && uMode < 1.5) {
                        float cells = 55.0;
                        vec2 aspect = vec2(1.0, uResolution.y / uResolution.x);
                        vec2 grid = cells * aspect;

                        vec2 cellId = floor(uv * grid);
                        vec2 cellUv = fract(uv * grid);
                        vec2 sampleUv = (cellId + 0.5) / grid;

                        vec4 texColor = texture2D(uTexture, sampleUv);

                        float edge = 0.08;
                        float inner = min(
                            min(smoothstep(0.0, edge, cellUv.x), smoothstep(1.0, 1.0 - edge, cellUv.x)),
                            min(smoothstep(0.0, edge, cellUv.y), smoothstep(1.0, 1.0 - edge, cellUv.y))
                        );

                        vec3 finalColor = mix(texColor.rgb * 0.55, texColor.rgb, inner);
                        gl_FragColor = vec4(finalColor, texColor.a);
                        return;
                    }

                    // MODE 2: Pencil Sketch
                    if (uMode > 1.5 && uMode < 2.5) {
                        vec2 texel = 1.0 / uResolution;

                        float tl = getLuminance(texture2D(uTexture, uv + texel * vec2(-1.0, -1.0)).rgb);
                        float t  = getLuminance(texture2D(uTexture, uv + texel * vec2( 0.0, -1.0)).rgb);
                        float tr = getLuminance(texture2D(uTexture, uv + texel * vec2( 1.0, -1.0)).rgb);
                        float l  = getLuminance(texture2D(uTexture, uv + texel * vec2(-1.0,  0.0)).rgb);
                        float r  = getLuminance(texture2D(uTexture, uv + texel * vec2( 1.0,  0.0)).rgb);
                        float bl = getLuminance(texture2D(uTexture, uv + texel * vec2(-1.0,  1.0)).rgb);
                        float b  = getLuminance(texture2D(uTexture, uv + texel * vec2( 0.0,  1.0)).rgb);
                        float br = getLuminance(texture2D(uTexture, uv + texel * vec2( 1.0,  1.0)).rgb);

                        float gx = -tl - 2.0 * l - bl + tr + 2.0 * r + br;
                        float gy = -tl - 2.0 * t - tr + bl + 2.0 * b + br;
                        float edgeStrength = clamp(sqrt(gx * gx + gy * gy) * 1.6, 0.0, 1.0);

                        float base = getLuminance(texture2D(uTexture, uv).rgb);
                        float paper = 0.94;
                        float shade = mix(paper, base * 0.85, 0.5);
                        float sketch = clamp(shade - edgeStrength, 0.0, 1.0);

                        float grain = fract(sin(dot(floor(uv * uResolution * 0.6), vec2(12.9898, 78.233))) * 43758.5453);
                        sketch -= grain * 0.03;

                        gl_FragColor = vec4(vec3(sketch), 1.0);
                        return;
                    }

                    // MODE 3: ASCII Art
                    if (uMode > 2.5) {
                        float cellSize = 9.0;
                        vec2 grid = uResolution / cellSize;

                        vec2 cellId = floor(uv * grid);
                        vec2 sampleUv = (cellId + 0.5) / grid;
                        vec3 srcColor = texture2D(uTexture, sampleUv).rgb;
                        float lum = getLuminance(srcColor);

                        vec2 cellUv = fract(uv * grid) - 0.5;
                        float dist = length(cellUv);

                        float density = 1.0 - lum;
                        float dotSize = mix(0.05, 0.42, density);
                        float shape = 1.0 - smoothstep(dotSize, dotSize + 0.06, dist);

                        vec3 bg = vec3(0.04, 0.04, 0.04);
                        vec3 fg = srcColor * 1.3;
                        vec3 finalColor = mix(bg, fg, shape);

                        gl_FragColor = vec4(finalColor, 1.0);
                        return;
                    }

                    // MODE 0: Normal
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
                uniforms.uResolution.value.set(rect.width, rect.height);
            }
        };
        resize();

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);

        const timer = new THREE.Timer();

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

    useEffect(() => {
        const uniforms = uniformsRef.current;
        if (!uniforms) return;

        const modeMap: Record<PortraitState, number> = {
            normal: 0,
            pixelated: 1,
            sketch: 2,
            ascii: 3,
        };

        uniforms.uMode.value = modeMap[currentState];
    }, [currentState]);

    return (
        <div
            className={`relative w-full h-full cursor-pointer select-none ${className}`}
            onClick={handleClick}
            role="img"
            aria-label={alt}
        >
            <div ref={containerRef} className="absolute inset-0 rounded-xl overflow-hidden" />
        </div>
    );
}
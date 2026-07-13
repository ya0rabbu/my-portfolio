"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface LiquidDistortImageProps {
    src: string;
    alt?: string;
    className?: string;
    /** wave strength, default 0.04 */
    strength?: number;
}

export default function LiquidDistortImage({
    src,
    alt = "",
    className = "",
    strength = 0.04,
}: LiquidDistortImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const hoverRef = useRef(0);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            premultipliedAlpha: false,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
        container.appendChild(renderer.domElement);

        const loader = new THREE.TextureLoader();
        const texture = loader.load(src, (tex) => {
            if (tex.image && tex.image.height > 0) {
                uniforms.uImageAspect.value = tex.image.width / tex.image.height;
                resize();
            }
        });
        texture.colorSpace = THREE.NoColorSpace;

        const uniforms = {
            uTexture: { value: texture },
            uHover: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uTime: { value: 0 },
            uStrength: { value: strength },
            uImageAspect: { value: 1 },
            uPlaneAspect: { value: 1 },
        };

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
                uniform float uHover;
                uniform vec2 uMouse;
                uniform float uTime;
                uniform float uStrength;
                uniform float uImageAspect;
                uniform float uPlaneAspect;
                varying vec2 vUv;

                void main() {
                    vec2 uv = vUv;

                    vec2 ratio = vec2(
                        min(uPlaneAspect / uImageAspect, 1.0),
                        min(uImageAspect / uPlaneAspect, 1.0)
                    );
                    vec2 fitUv = vec2(
                        (uv.x - 0.5) * ratio.x + 0.5,
                        (uv.y - 0.5) * ratio.y + 0.5
                    );

                    float dist = distance(fitUv, uMouse);
                    float wave = sin(dist * 28.0 - uTime * 4.0) * uStrength * uHover;
                    float falloff = smoothstep(0.5, 0.0, dist);

                    vec2 distortedUv = fitUv + normalize(fitUv - uMouse + 0.0001) * wave * falloff;

                    gl_FragColor = texture2D(uTexture, distortedUv);
                }
            `,
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const resize = () => {
            const rect = container.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                renderer.setSize(rect.width, rect.height);
                uniforms.uPlaneAspect.value = rect.width / rect.height;
            }
        };

        if (texture.image && texture.image.height > 0) {
            uniforms.uImageAspect.value = texture.image.width / texture.image.height;
        }

        resize();

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);

        let raf: number;
        const timer = new THREE.Timer();

        const animate = () => {
            timer.update(); // ← fixed: THREE.Timer needs update() each frame
            uniforms.uTime.value = timer.getElapsed();

            const diff = hoverRef.current - uniforms.uHover.value;
            uniforms.uHover.value += diff * 0.08;

            uniforms.uMouse.value.x += (mouseRef.current.x - uniforms.uMouse.value.x) * 0.15;
            uniforms.uMouse.value.y += (mouseRef.current.y - uniforms.uMouse.value.y) * 0.15;

            renderer.render(scene, camera);
            raf = requestAnimationFrame(animate);
        };
        animate();

        const onMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current = {
                x: (e.clientX - rect.left) / rect.width,
                y: 1 - (e.clientY - rect.top) / rect.height,
            };
        };
        const onEnter = () => (hoverRef.current = 1);
        const onLeave = () => (hoverRef.current = 0);

        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseenter", onEnter);
        container.addEventListener("mouseleave", onLeave);

        return () => {
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            container.removeEventListener("mousemove", onMove);
            container.removeEventListener("mouseenter", onEnter);
            container.removeEventListener("mouseleave", onLeave);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            texture.dispose();
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, [src, strength]);

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full overflow-hidden ${className}`}
            role="img"
            aria-label={alt}
        />
    );
}
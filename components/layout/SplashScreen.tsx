"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
    children: React.ReactNode;
}

// Splash loader: counts 00 → 100 then reveals the page with a wipe transition
export default function SplashScreen({ children }: SplashScreenProps) {
    const [count, setCount] = useState(0);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        // Counts up over ~1.8s — adjust duration by changing the interval/step
        const totalDuration = 1800;
        const steps = 100;
        const stepTime = totalDuration / steps;

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, stepTime);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count === 100) {
            const timeout = setTimeout(() => setIsDone(true), 400);
            return () => clearTimeout(timeout);
        }
    }, [count]);

    return (
        <>
            <AnimatePresence mode="wait">
                {!isDone && (
                    <motion.div
                        key="splash"
                        initial={{ opacity: 1 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[999] flex items-center justify-center bg-[#F3EDE3]"
                    >
                        <span className="font-cabinet font-bold text-[#161616] text-[18vw] md:text-[10vw] leading-none tabular-nums">
                            {String(count).padStart(2, "0")}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {children}
        </>
    );
}
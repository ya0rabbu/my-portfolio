"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sectionNavItems } from "@/data/content";

// Fixed side navigation — glowing dot indicates the currently visible section
export default function SectionNav() {
    const [activeId, setActiveId] = useState(sectionNavItems[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        sectionNavItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-start gap-8">
            {sectionNavItems.map((item) => {
                const isActive = item.id === activeId;

                return (
                    <a key={item.id} href={`#${item.id}`} className="group relative flex items-center gap-3">
                        <span className="relative flex items-center justify-center w-3 h-3">
                            {isActive && (
                                <motion.span
                                    layoutId="active-glow"
                                    className="absolute w-3 h-3 rounded-full bg-[#CD3234]"
                                    style={{ boxShadow: "0 0 12px 4px rgba(205,50,52,0.6)" }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span
                                className={`w-1.5 h-1.5 rounded-full border transition-colors duration-300 ${isActive ? "opacity-0" : "border-[#5E5E5E]/40 group-hover:border-[#5E5E5E]"
                                    }`}
                            />
                        </span>

                        <AnimatePresence>
                            {isActive && (
                                <motion.span
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-xs font-semibold font-urbanist tracking-widest uppercase text-[#161616] whitespace-nowrap"
                                >
                                    {item.label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </a>
                );
            })}
        </nav>
    );
}
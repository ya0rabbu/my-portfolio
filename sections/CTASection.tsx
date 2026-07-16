"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ctaContent } from "@/data/content";
import Image from "next/image";

export default function CTASection() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            const xPct = (e.clientX / window.innerWidth - 0.5) * 10;
            const yPct = (e.clientY / window.innerHeight - 0.5) * 6;
            gsap.to(bgRef.current, { x: xPct, y: yPct, duration: 1.4, ease: "power2.out" });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div className="w-full px-3 sm:px-5 pt-6 sm:pt-8 pb-6 sm:pb-8">
            <section
                id="contact"
                className="relative w-full border border-[#E7E1DD]
                    px-5 sm:px-8 md:px-10 lg:px-[60px] xl:px-[80px] 2xl:px-[180px]
                    pt-[80px] sm:pt-[96px] pb-[100px] sm:pb-[140px] md:pb-[140px]
                    rounded-[16px] sm:rounded-[20px]
                    max-w-[1880px] mx-auto overflow-hidden"
            >
                <div ref={bgRef} className="absolute inset-[-20px] z-0">
                    <Image src="/assets/images/cta-bg.png" alt="" fill className="object-cover object-center" priority />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 w-full flex flex-col items-center gap-10 sm:gap-12 md:gap-[48px]"
                >
                    {/* Header */}
                    <div className="w-full flex flex-col items-center gap-4 text-center">
                        <Badge icon={ctaContent.badge.icon} label={ctaContent.badge.label} variant="solid" />

                        {/* Figma: "Got an idea? Let's turn it into reality together!" */}
                        <div className="relative flex flex-col items-center gap-4">
                            <h2 className="w-full max-w-[335px] sm:max-w-[520px] md:max-w-[640px] lg:max-w-[720px] xl:max-w-[784px]
                                font-cabinet font-bold text-center leading-[1.14]
                                text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] xl:text-[64px] xl:leading-[72.96px]">
                                {/* "Got an idea? Let's " #161616 */}
                                <span className="text-[#161616]">{ctaContent.heading.part1}</span>
                                {/* "turn it " rgba(22,22,22,0.40) */}
                                <span className="text-[rgba(22,22,22,0.40)]">{ctaContent.heading.highlight1}</span>
                                {/* "into reality " #161616 */}
                                <span className="text-[#161616]">{ctaContent.heading.part2}</span>
                                {/* "together!" #70712C */}
                                <span className="text-[#70712C]">{ctaContent.heading.highlight2}</span>
                            </h2>

                            <p className="max-w-[335px] sm:max-w-[500px] md:max-w-[660px] xl:max-w-[812px]
                                text-[#5E5E5E] text-sm sm:text-base md:text-lg xl:text-[20px] xl:leading-[32px]
                                font-urbanist text-center leading-6 sm:leading-7 md:leading-8">
                                {ctaContent.subtext}
                            </p>

                            {/* Union highlight */}
                            <div
                                className="absolute pointer-events-none -z-10 hidden lg:block"
                                style={{ width: "275px", height: "62px", right: "calc(50% - 500px)", top: "78px", background: "rgba(112, 113, 44, 0.12)" }}
                            />
                        </div>
                    </div>

                    {/* Buttons — Figma: "Start A Conversation" + "Contract Now" */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-[14.4px] w-full sm:w-auto">
                        <Button label={ctaContent.ctaPrimary} variant="primary2" href="https://calendly.com/yasirabedrabbu/30min" />
                        <Button label={ctaContent.ctaSecondary} variant="glass" textColor="#F6F4F2" href="mailto:yasirabedrabbu@gmail.com" />
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
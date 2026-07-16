"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import Badge from "@/components/ui/Badge";
import { testimonialsContent } from "@/data/content";
import TestimonialAvatar from "@/components/ui/TestimonialAvatar";

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);
    const dotRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const items = testimonialsContent.testimonials;
    const current = items[active];

    const handleDotClick = (i: number) => {
        setActive(i);
        const dot = dotRefs.current[i];
        if (dot) gsap.fromTo(dot, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "elastic.out(1.2, 0.5)" });
    };

    return (
        <section
            id="testimonials"
            className="relative w-full overflow-hidden px-3 sm:px-5"
            style={{ borderTopLeftRadius: "99px", borderTopRightRadius: "99px" }}
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#F6F4F2]" />
                <Image src="/assets/images/Story-bg.png" alt="" fill priority sizes="100vw" className="object-cover" style={{ objectPosition: "top" }} />
            </div>

            <div className="relative w-full max-w-[1600px] mx-auto
                py-16 sm:py-24 md:py-[96px]
                px-4 sm:px-6 md:px-16 lg:px-[140px]
                flex flex-col items-center gap-10 sm:gap-12 md:gap-[48px]">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full flex flex-col items-center gap-3 relative"
                >
                    <Badge icon={testimonialsContent.badge.icon} label={testimonialsContent.badge.label} variant="solid" />

                    {/* Figma: "What It's Like Working With Me" */}
                    <div className="relative flex flex-col items-center gap-3 sm:gap-4">
                        <h2 className="w-full max-w-[524px] text-center font-cabinet font-bold
                            text-[28px] sm:text-[38px] md:text-[44px] lg:text-[56px] lg:leading-[69.44px]
                            leading-[1.24]">
                            <span className="text-[#161616]">{testimonialsContent.heading.part1}</span>
                            <span className="text-[rgba(22,22,22,0.40)]">{testimonialsContent.heading.highlight1}</span>
                            <span className="text-[#161616]">{testimonialsContent.heading.part2}</span>
                            <span className="relative inline-block bg-[#70712C]/[0.12] text-[#70712C] px-2 mx-1">
                                <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                    <span className="absolute -top-[6px] -left-[5px] w-2.5 h-2.5 rounded-full bg-[#70712C]" />
                                </span>
                                {testimonialsContent.heading.highlight2}
                                <span className="absolute -right-[2px] top-0 bottom-0 w-[2px] bg-[#70712C]">
                                    <span className="absolute -bottom-[6px] -right-[5px] w-2.5 h-2.5 rounded-full bg-[#70712C]" />
                                </span>
                            </span>
                            <span className="text-[#161616]">{testimonialsContent.heading.part3}</span>
                        </h2>

                        <p className="max-w-[660px] sm:max-w-[768px] text-center text-[#5E5E5E] text-sm sm:text-base md:text-[20px] md:leading-[32px] font-urbanist leading-6 sm:leading-7">
                            {testimonialsContent.subtext}
                        </p>

                        {/* Union highlight */}
                        <div
                            className="absolute pointer-events-none -z-10 hidden lg:block"
                            style={{ width: "221px", height: "62px", right: "calc(50% - 430px)", top: "72px", background: "rgba(112, 113, 44, 0.12)" }}
                        />
                    </div>
                </motion.div>

                {/* Testimonial card */}
                <div className="relative w-full max-w-[1320px] flex flex-col gap-4 sm:gap-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative w-full rounded-[14.4px] overflow-hidden border border-[#E7E1DD]"
                        >
                            <div className="absolute inset-0" style={{ background: "rgba(255,255,255,0.07)", mixBlendMode: "screen", boxShadow: "0px 8px 40px rgba(0,0,0,0.2)" }} />

                            {/* Figma: justify-between, gap-38.4px */}
                            <div className="relative z-10 p-5 sm:p-8 md:p-[38.4px] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">

                                {/* Quote section — Figma: 840px wide */}
                                <div className="w-full md:max-w-[840px] flex flex-col gap-6 sm:gap-[38.4px]">
                                    <div className="flex flex-col">
                                        {/* Figma: " #CD3234, 120px */}
                                        <span className="text-[#CD3234] font-cabinet font-medium leading-none block"
                                            style={{ fontSize: "clamp(60px, 8vw, 120px)", lineHeight: "1" }}>
                                            &ldquo;
                                        </span>
                                        <p>
                                            <span className="text-[#161616] font-cabinet font-medium"
                                                style={{ fontSize: "clamp(20px, 3vw, 44px)", lineHeight: "1.6" }}>
                                                {" "}{current.quote.text}
                                            </span>
                                            <span className="text-[#70712C] font-cabinet font-medium"
                                                style={{ fontSize: "clamp(20px, 3vw, 44px)", lineHeight: "1.6" }}>
                                                {current.quote.highlight}
                                            </span>
                                            <span className="text-[#161616] font-cabinet font-medium"
                                                style={{ fontSize: "clamp(20px, 3vw, 44px)", lineHeight: "1.6" }}>
                                                {current.quote.rest}
                                            </span>
                                        </p>
                                    </div>

                                    {/* Author — Figma: #70712C, 32px, tracking 1.28px */}
                                    <p className="font-cabinet font-medium text-[#70712C]"
                                        style={{ fontSize: "clamp(18px, 2vw, 32px)", lineHeight: "1", letterSpacing: "1.28px" }}>
                                        {current.author}
                                    </p>
                                </div>

                                {/* Avatars */}
                                <div className="flex flex-row md:flex-col items-end gap-2 sm:gap-3 flex-shrink-0">
                                    {current.avatars.map((avatar, i) => (
                                        <TestimonialAvatar key={i} {...avatar} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                ref={(el) => { dotRefs.current[i] = el; }}
                                onClick={() => handleDotClick(i)}
                                className={`transition-all duration-300 rounded-full ${i === active ? "w-6 h-2.5 bg-[#70712C]" : "w-2.5 h-2.5 bg-[#70712C]/30 hover:bg-[#70712C]/60"}`}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-gradient-to-b from-transparent via-[#F6F4F2]/20 to-[#F6F4F2] z-10 pointer-events-none" />
        </section>
    );
}